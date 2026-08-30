import { useApp } from '../context/AppContext';
import { COPY } from '../data/copy';
import { Reveal, RevealWords } from './ui/Reveal';

export default function About() {
  const { lang } = useApp();
  const c = COPY.about[lang];

  return (
    <section id="about" className="sec">
      <div className="aura" style={{ right: '-10%', top: '-10%', width: '46vw', height: '46vw', background: 'radial-gradient(circle,var(--aura-a),transparent 68%)', opacity: .55 }} />
      <div className="wrap inner">
        <div className="g2" style={{ display: 'grid', gridTemplateColumns: '1.1fr .9fr', gap: 80, alignItems: 'center' }}>
          <div>
            <div className="eyebrow" style={{ marginBottom: 22 }}>{c.eyebrow}</div>
            <h2 className="disp" style={{ fontSize: 'clamp(38px,4.6vw,62px)', margin: 0 }}>
              <RevealWords text={c.h1} /> <span className="it" style={{ fontFamily: 'var(--font-display)' }}>{c.hi}</span><br />
              <RevealWords text={c.h2} delay={150} />
            </h2>
            <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '.12em', margin: '32px 0', padding: '18px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)', lineHeight: 1.9 }}>{c.degrees}</div>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, color: 'var(--ink-soft)', margin: '0 0 18px' }}>{c.p1}</p>
            <p style={{ fontSize: 16.5, lineHeight: 1.65, color: 'var(--ink-soft)', margin: '0 0 36px' }}>{c.p2}</p>
            <a href={lang === 'en' ? '/CV-Stephanie_Gonzalez.pdf' : '/HV-Stephanie_Gonzalez.pdf'} download data-cursor="cv ↓" className="btn">
              {c.cta} <span style={{ fontSize: 15 }}>↓</span>
            </a>
          </div>
          <Reveal>
            <div style={{ position: 'relative', aspectRatio: '3/4', maxWidth: 440, marginLeft: 'auto' }}>
              <div style={{ position: 'absolute', left: 26, top: 26, right: -18, bottom: -18, borderRadius: 6, background: 'linear-gradient(150deg,var(--violet),var(--coral))', opacity: .85 }} />
              <div style={{ position: 'absolute', inset: 0, borderRadius: 6, overflow: 'hidden', background: 'var(--bg-2)', border: '1px solid var(--border)' }}>
                <img src="/img/about/about-img.webp" alt="Stephanie Gonzalez" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
              </div>
              <div style={{ position: 'absolute', right: -30, top: -30, width: 132, height: 132, borderRadius: '50%', background: 'var(--lime)', color: 'oklch(20% 0.04 292)', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', gap: 2, boxShadow: '0 0 50px -10px var(--lime)' }}>
                <span className="mono" style={{ fontSize: 8.5, letterSpacing: '.16em' }}>{c.badge[0]}</span>
                <span className="mono" style={{ fontSize: 14, fontWeight: 500, letterSpacing: '.06em' }}>{c.badge[1]}</span>
                <span className="mono" style={{ fontSize: 8.5, letterSpacing: '.16em' }}>{c.badge[2]}</span>
              </div>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
