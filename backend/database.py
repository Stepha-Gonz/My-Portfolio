import os
import psycopg2
from dotenv import load_dotenv

load_dotenv(os.path.join(os.path.dirname(__file__), ".env"))

DB_CONFIG = {
    "host":     os.getenv("DB_HOST", "localhost"),
    "port":     os.getenv("DB_PORT", "5432"),
    "dbname":   os.getenv("DB_NAME", "portfolio_db"),
    "user":     os.getenv("DB_USER", "postgres"),
    "password": os.getenv("DB_PASSWORD", ""),
}

def get_connection():
    conn = psycopg2.connect(**DB_CONFIG)
    conn.autocommit = False
    return conn

def init_db():
    conn = get_connection()
    try:
        with conn.cursor() as cur:
            cur.execute("""
                CREATE TABLE IF NOT EXISTS users (
                    id               SERIAL PRIMARY KEY,
                    user_name        VARCHAR(255) UNIQUE NOT NULL,
                    password_hash    TEXT NOT NULL,
                    is_active        BOOLEAN NOT NULL DEFAULT TRUE,
                    failed_attempts  INTEGER NOT NULL DEFAULT 0,
                    locked_until     TIMESTAMPTZ,
                    must_change_password BOOLEAN NOT NULL DEFAULT FALSE,
                    created_at       TIMESTAMPTZ NOT NULL DEFAULT NOW()
                );
            """)
        conn.commit()
        print("DB initialized.")
    finally:
        conn.close()

if __name__ == "__main__":
    init_db()
