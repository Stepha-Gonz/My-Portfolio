import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DATA } from '../data/portfolioData';
import { COPY } from '../data/copy';
import SectionHead from './ui/SectionHead';
import { Reveal, RevealWords } from './ui/Reveal';
import CertModal from './ui/CertModal';

export default function Credentials() {
  const { lang } = useApp();
  const c = COPY.creds[lang];
  const certs = DATA.certs;
  const [openCert, setOpenCert] = useState(null);
  const rot = [-3.2, 1.8, -1.4, 2.2, -2.4];
  const tone = ['var(--violet)', 'var(--lime)', 'var(--coral)', 'var(--violet)', 'var(--coral)'];

  return (
    <section id="credentials" className="sec">
      <div className="aura" style={{ left: '20%', top: '0%', width: '46vw', height: '46vw', background: 'radial-gradient(circle,var(--aura-a),transparent 70%)', opacity: .5 }} />
      <div className="wrap inner">
        <SectionHead eyebrow={c.eyebrow} blurb={c.blurb}>
          <RevealWords text={c.h1} /><br />{c.h2} <span className="it-c" style={{ fontFamily: 'var(--font-display)' }}>{c.hi}</span>
        </SectionHead>
        <div className="g3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 28, alignItems: 'start' }}>
          {certs.map((ct, i) => (
            <Reveal key={i} delay={i * 90}>
              <div onClick={() => setOpenCert(ct)} data-cursor="open ↗" className="card"
                style={{ position: 'relative', padding: 16, transform: `rotate(${rot[i]}deg)`, marginTop: i === 1 ? -24 : 0, boxShadow: 'var(--shadow)' }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = 'rotate(0deg) translateY(-8px)'; e.currentTarget.style.borderColor = tone[i]; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = `rotate(${rot[i]}deg)`; e.currentTarget.style.borderColor = 'var(--border)'; }}>
                <div className="mono" style={{ position: 'absolute', left: 22, top: 22, zIndex: 3, fontSize: 9, letterSpacing: '.14em', padding: '5px 10px', borderRadius: 999, background: 'var(--card)', border: '1px solid ' + tone[i], color: tone[i] }}>
                  {ct.degree ? (lang === 'en' ? 'DEGREE' : 'TÍTULO') : (lang === 'en' ? 'CERTIFICATE' : 'CERTIFICADO')}
                </div>
                <div style={{ position: 'relative', aspectRatio: '4/3', overflow: 'hidden', borderRadius: 10, background: 'var(--bg-2)', border: '1px solid var(--border)' }}>
                  <img src={ct.img} alt={ct.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div className="mono" style={{ position: 'absolute', right: 12, top: 12, width: 38, height: 38, borderRadius: '50%', border: '1.5px solid ' + tone[i], color: tone[i], background: 'var(--card)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 11 }}>0{i + 1}</div>
                </div>
                <div style={{ padding: '20px 6px 8px' }}>
                  <div style={{ fontSize: 18, fontWeight: 500, letterSpacing: '-.015em', lineHeight: 1.25, marginBottom: 10 }}>{ct.title}</div>
                  <div className="mono" style={{ fontSize: 10, letterSpacing: '.12em', color: 'var(--ink-mute)', lineHeight: 1.8 }}>{ct.org}<br />{ct.date}</div>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', gap: 20, marginTop: 44, paddingTop: 22, borderTop: '1px solid var(--border)' }}>
          <span className="mono" style={{ fontSize: 10, letterSpacing: '.14em', color: 'var(--ink-mute)' }}>{c.hint}</span>
          <span className="mono" style={{ fontSize: 10, letterSpacing: '.14em', color: 'var(--violet)' }}>{c.count}</span>
        </div>
      </div>
      <CertModal cert={openCert} onClose={() => setOpenCert(null)} />
    </section>
  );
}
