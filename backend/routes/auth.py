import os
import uuid
import datetime as dt
import bcrypt
import jwt
import redis
from fastapi import APIRouter, Request, Response, HTTPException, Depends
from pydantic import BaseModel
from database import get_connection
from limiter import limiter

router = APIRouter()

JWT_SECRET        = os.getenv("JWT_SECRET")
JWT_ALG           = "HS256"
TOKEN_TTL_MIN     = 30
LOCKOUT_THRESHOLD = 3
LOCKOUT_MINUTES   = 30
COOKIE_NAME       = "access_token"

redis_client = redis.Redis(
    host=os.getenv("REDIS_HOST", "localhost"),
    port=int(os.getenv("REDIS_PORT", "6379")),
    db=0,
    decode_responses=True,
)

_DUMMY_HASH = bcrypt.hashpw(b"timing-oracle-protection", bcrypt.gensalt())


class LoginBody(BaseModel):
    user_name: str
    password: str


class ChangePasswordBody(BaseModel):
    current_password: str | None = None
    new_password: str


def validate_password_policy(password: str) -> None:
    if len(password) < 8:
        raise HTTPException(status_code=400, detail="password_too_short")
    if not any(c.isupper() for c in password):
        raise HTTPException(status_code=400, detail="password_missing_uppercase")
    if not any(c.islower() for c in password):
        raise HTTPException(status_code=400, detail="password_missing_lowercase")
    if not any(c in "!@#$%^&*()-_=+[]{}|;:,./<>?" for c in password):
        raise HTTPException(status_code=400, detail="password_missing_special")


def create_token(user_id: int, user_name: str):
    jti = str(uuid.uuid4())
    now = dt.datetime.now(dt.timezone.utc)
    exp = now + dt.timedelta(minutes=TOKEN_TTL_MIN)
    payload = {"sub": str(user_id), "user_name": user_name, "jti": jti, "iat": now, "exp": exp}
    return jwt.encode(payload, JWT_SECRET, algorithm=JWT_ALG), jti, exp


def get_current_user(request: Request) -> dict:
    token = request.cookies.get(COOKIE_NAME)
    if not token:
        raise HTTPException(status_code=401, detail="not_authenticated")
    try:
        payload = jwt.decode(token, JWT_SECRET, algorithms=[JWT_ALG])
        if redis_client.get(f"denylist:{payload.get('jti')}"):
            raise HTTPException(status_code=401, detail="token_revoked")
        return payload
    except jwt.ExpiredSignatureError:
        raise HTTPException(status_code=401, detail="token_expired")
    except jwt.InvalidTokenError:
        raise HTTPException(status_code=401, detail="invalid_token")


def _revoke(jti, exp_ts) -> None:
    if not jti:
        return
    now_ts = dt.datetime.now(dt.timezone.utc).timestamp()
    ttl = int(exp_ts - now_ts) if exp_ts else TOKEN_TTL_MIN * 60
    if ttl > 0:
        redis_client.setex(f"denylist:{jti}", ttl, "1")


@router.post("/login")
@limiter.limit("20/minute")
def login(request: Request, response: Response, body: LoginBody):
    conn = get_connection()
    must_change = False
    user_id = None
    try:
        cur = conn.cursor()
        cur.execute(
            "SELECT id, password_hash, is_active, failed_attempts, locked_until, must_change_password "
            "FROM users WHERE user_name = %s FOR UPDATE",
            (body.user_name,),
        )
        row = cur.fetchone()
        now = dt.datetime.now(dt.timezone.utc)
        if row is None:
            bcrypt.checkpw(body.password.encode("utf-8"), _DUMMY_HASH)
            conn.commit()
            raise HTTPException(status_code=401, detail="invalid_credentials")
        user_id, pw_hash, is_active, failed, locked_until, must_change = row
        if locked_until is not None and locked_until <= now:
            locked_until = None
            failed = 0
        if (locked_until is not None and locked_until > now) or not is_active:
            bcrypt.checkpw(body.password.encode("utf-8"), _DUMMY_HASH)
            conn.commit()
            raise HTTPException(status_code=401, detail="invalid_credentials")
        if not bcrypt.checkpw(body.password.encode("utf-8"), pw_hash.encode("utf-8")):
            failed += 1
            new_lock = now + dt.timedelta(minutes=LOCKOUT_MINUTES) if failed >= LOCKOUT_THRESHOLD else None
            cur.execute("UPDATE users SET failed_attempts = %s, locked_until = %s WHERE id = %s", (failed, new_lock, user_id))
            conn.commit()
            raise HTTPException(status_code=401, detail="invalid_credentials")
        cur.execute("UPDATE users SET failed_attempts = 0, locked_until = NULL WHERE id = %s", (user_id,))
        conn.commit()
    except HTTPException:
        raise
    except Exception:
        conn.rollback()
        raise HTTPException(status_code=500, detail="internal_server_error")
    finally:
        conn.close()
    token, _jti, exp = create_token(user_id, body.user_name)
    response.set_cookie(key=COOKIE_NAME, value=token, httponly=True, samesite="lax", secure=False, max_age=TOKEN_TTL_MIN * 60, path="/")
    return {"must_change_password": must_change}


@router.post("/logout")
def logout(response: Response, user=Depends(get_current_user)):
    _revoke(user.get("jti"), user.get("exp"))
    response.delete_cookie(COOKIE_NAME, path="/")
    return {"ok": True}


@router.post("/change-password")
def change_password(response: Response, body: ChangePasswordBody, user=Depends(get_current_user)):
    validate_password_policy(body.new_password)
    user_id = int(user["sub"])
    conn = get_connection()
    try:
        cur = conn.cursor()
        cur.execute("SELECT password_hash, must_change_password FROM users WHERE id = %s FOR UPDATE", (user_id,))
        row = cur.fetchone()
        if row is None:
            conn.rollback()
            raise HTTPException(status_code=401, detail="invalid_credentials")
        must_change = row[1]
        if not must_change:
            if not body.current_password or not bcrypt.checkpw(body.current_password.encode("utf-8"), row[0].encode("utf-8")):
                conn.rollback()
                raise HTTPException(status_code=401, detail="invalid_current_password")
        new_hash = bcrypt.hashpw(body.new_password.encode("utf-8"), bcrypt.gensalt()).decode("utf-8")
        cur.execute("UPDATE users SET password_hash = %s, must_change_password = FALSE WHERE id = %s", (new_hash, user_id))
        conn.commit()
    except HTTPException:
        raise
    except Exception:
        conn.rollback()
        raise HTTPException(status_code=500, detail="internal_server_error")
    finally:
        conn.close()
    _revoke(user.get("jti"), user.get("exp"))
    response.delete_cookie(COOKIE_NAME, path="/")
    return {"ok": True}
