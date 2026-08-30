import { useEffect, useState } from 'react';
import { useApp } from '../context/AppContext';
import { DATA } from '../data/portfolioData';
import { COPY } from '../data/copy';
import { RevealWords } from './ui/Reveal';

function Chip({ active, children, onClick }) {
  return (
    <button onClick={onClick} data-cursor="pick" style={{
      padding: '10px 16px', borderRadius: 999, fontSize: 14,
      border: '1px solid ' + (active ? 'var(--violet)' : 'var(--border)'),
      background: active ? 'color-mix(in oklch,var(--violet) 14%,transparent)' : 'transparent',
      color: active ? 'var(--violet)' : 'var(--ink-soft)', transition: 'all .25s',
    }}>{children}</button>
  );
}

export default function Contact() {
  const { lang } = useApp();
  const c = COPY.contact[lang];
  const [a1, setA1] = useState(0), [a2, setA2] = useState(0);
  const [name, setName] = useState(''), [email, setEmail] = useState('');
  const [msg, setMsg] = useState(''), [touched, setTouched] = useState(false);
  const [state, setState] = useState('idle'), [err, setErr] = useState('');

  const auto = lang === 'en'
    ? `Hi Stephanie — I'm looking for ${c.a1[a1].toLowerCase()} and right now ${c.a2[a2].toLowerCase()}. I'd love to talk.`
    : `Hola Stephanie, estoy buscando ${c.a1[a1].toLowerCase()} y por ahora ${c.a2[a2].toLowerCase()}. Me encantaría conversar contigo.`;

  useEffect(() => { if (!touched) setMsg(auto); }, [auto, touched]);

  const body = msg || auto;
  const mailSubject = lang === 'en' ? 'A tiny brief' : 'Un mini brief';
  const mailto = `mailto:${DATA.email}?subject=${encodeURIComponent(mailSubject)}&body=${encodeURIComponent(body)}`;
  const valid = name.trim() && /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email) && body.trim().length > 4;
  const emailInvalid = email.trim().length > 0 && !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email);

  async function send(e) {
    e.preventDefault();
    if (!valid || state === 'sending') return;
    if (!DATA.formKey) { window.location.href = mailto; return; }
    setState('sending'); setErr('');
    try {
      const r = await fetch('https://api.web3forms.com/submit', {
        method: 'POST', headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          access_key: DATA.formKey,
          subject: `Mensaje de Portafolio — ${name}`,
          from_name: name,
          name,
          email,
          [c.q1]: c.a1[a1],
          [c.q2]: c.a2[a2],
          Mensaje: body,
        }),
      });
      const j = await r.json();
      if (j.success) setState('ok'); else { setState('error'); setErr(j.message || ''); }
    } catch (x) { setState('error'); setErr(String(x.message || x)); }
  }

  const fieldSt = {
    width: '100%', padding: '13px 15px', borderRadius: 12, border: '1px solid var(--border)', background: 'var(--bg-2)',
    color: 'var(--ink)', fontSize: 15, fontFamily: 'var(--font-body)', outline: 'none', boxSizing: 'border-box',
  };

  return (
    <section id="contact" className="sec" style={{ padding: '110px 0' }}>
      <div className="aura" style={{ left: '8%', top: '-10%', width: '54vw', height: '54vw', background: 'radial-gradient(circle,var(--aura-a),transparent 66%)' }} />
      <div className="wrap inner">
        <div className="g2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 60, alignItems: 'center' }}>
          <div>
            <div className="eyebrow" style={{ color: 'var(--hi)', marginBottom: 22 }}>{c.eyebrow}</div>
            <h2 className="disp" style={{ fontSize: 'clamp(40px,5vw,72px)', margin: '0 0 24px' }}>
              <RevealWords text={c.h1} /> <span className="it" style={{ fontFamily: 'var(--font-display)' }}>{c.hi}</span>
            </h2>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, color: 'var(--ink-soft)', margin: '0 0 46px', maxWidth: 420 }}>{c.blurb}</p>
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.14em', color: 'var(--ink-mute)', lineHeight: 2, whiteSpace: 'pre-line' }}>{c.foot}</div>
          </div>
          <div className="card" style={{ padding: '36px 38px 32px', background: 'var(--card)' }}>
            <div className="disp" style={{ fontSize: 34, marginBottom: 8 }}>{c.card_t}</div>
            <p style={{ fontSize: 15, lineHeight: 1.55, color: 'var(--ink-soft)', margin: '0 0 26px' }}>{c.card_s}</p>
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.14em', color: 'var(--ink-mute)', marginBottom: 12 }}>{c.q1}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 24 }}>
              {c.a1.map((o, i) => <Chip key={i} active={a1 === i} onClick={() => setA1(i)}>{o}</Chip>)}
            </div>
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.14em', color: 'var(--ink-mute)', marginBottom: 12 }}>{c.q2}</div>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 26 }}>
              {c.a2.map((o, i) => <Chip key={i} active={a2 === i} onClick={() => setA2(i)}>{o}</Chip>)}
            </div>
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.14em', color: 'var(--ink-mute)', marginBottom: 12 }}>{c.q3}</div>
            <form onSubmit={send} style={{ display: 'grid', gap: 12, marginBottom: 18 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }} className="g2">
                <input value={name} onChange={(e) => setName(e.target.value)} placeholder={c.f_name} style={fieldSt} data-cursor="type" />
                <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder={c.f_email} type="email" style={fieldSt} data-cursor="type" />
              </div>
              <div style={{ position: 'relative' }}>
                <textarea value={msg} onChange={(e) => { setTouched(true); setMsg(e.target.value); }} rows={6}
                  style={{ ...fieldSt, resize: 'vertical', minHeight: 140, lineHeight: 1.55 }} data-cursor="type" />
                <div className="mono" style={{ fontSize: 9.5, letterSpacing: '.14em', color: 'var(--ink-mute)', marginTop: 8, display: 'flex', justifyContent: 'space-between', gap: 12 }}>
                  <span>{c.starter}</span>
                  {touched && <button type="button" onClick={() => { setTouched(false); setMsg(auto); }} data-cursor="reset"
                    style={{ background: 'none', border: 'none', color: 'var(--violet)', letterSpacing: '.14em', fontSize: 9.5, fontFamily: 'inherit', padding: 0 }}>{c.reset}</button>}
                </div>
              </div>
              <button type="submit" disabled={!valid || state === 'sending'} data-cursor="send ↗" className="btn"
                style={{ width: '100%', justifyContent: 'space-between', opacity: valid && state !== 'sending' ? 1 : .45, cursor: valid ? 'none' : 'not-allowed' }}>
                {state === 'sending' ? c.sending : state === 'ok' ? c.sent : c.send} <span style={{ fontSize: 16 }}>↗</span>
              </button>
              {!valid && state === 'idle' && (
                <div style={{ fontSize: 12.5, color: emailInvalid ? 'var(--coral)' : 'var(--ink-mute)', textAlign: 'center' }}>
                  {emailInvalid
                    ? (lang === 'en' ? 'That email looks incomplete.' : 'Ese correo se ve incompleto.')
                    : (lang === 'en' ? 'Add your name and a valid email to send.' : 'Agrega tu nombre y un correo válido para enviar.')}
                </div>
              )}
            </form>
            {state === 'ok' && <div style={{ fontSize: 14, color: 'var(--lime)', marginBottom: 12, lineHeight: 1.5 }}>{c.ok}</div>}
            {state === 'error' && <div style={{ fontSize: 13.5, color: 'var(--coral)', marginBottom: 12, lineHeight: 1.5 }}>{c.error} <a href={mailto} style={{ color: 'var(--coral)' }}>{c.error_l}</a>{err ? ' · ' + err : ''}</div>}
            <div style={{ textAlign: 'center', marginTop: 4, fontSize: 13.5, color: 'var(--ink-soft)' }}>
              {c.alt} <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="linkedin" style={{ color: 'var(--violet)' }}>{c.altl}</a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
