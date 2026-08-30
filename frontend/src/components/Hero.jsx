import { useApp } from '../context/AppContext';
import { DATA } from '../data/portfolioData';
import { COPY } from '../data/copy';
import Particles from './ui/Particles';
import OrbitVisual from './ui/OrbitVisual';
import RoleRotator from './ui/RoleRotator';
import { RevealWords } from './ui/Reveal';

function go(e, id) {
  e.preventDefault();
  const el = document.getElementById(id);
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
}

export default function Hero() {
  const { lang } = useApp();
  const h = COPY.hero[lang];
  const roles = DATA.roles[lang];

  return (
    <section id="top" style={{ position: 'relative', minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '150px 0 60px', overflow: 'hidden' }}>
      <div className="aura" style={{ left: '-18%', bottom: '-24%', width: '62vw', height: '62vw', background: 'radial-gradient(circle,var(--aura-c),transparent 66%)' }} />
      <Particles color="oklch(62% 0.22 295 / 0.45)" count={55} />
      <OrbitVisual />
      <div className="wrap inner" style={{ maxWidth: 1300 }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 26 }}>
          <span style={{ width: 8, height: 8, borderRadius: '50%', background: 'var(--hi)', boxShadow: '0 0 14px var(--hi)' }} />
          <span className="mono" style={{ fontSize: 11.5, letterSpacing: '.18em', color: 'var(--hi)' }}>{h.eyebrow}</span>
        </div>
        <h1 className="disp" style={{ fontSize: 'clamp(52px,7.6vw,116px)', margin: 0, maxWidth: '12ch' }}>
          <RevealWords text={h.l1} /><br />
          <span>{h.l2} </span><span className="it" style={{ fontFamily: 'var(--font-display)' }}>{h.l2i}</span><br />
          <RevealWords text={h.l3} delay={220} />
        </h1>
        <p style={{ marginTop: 30, maxWidth: 560, fontSize: 17.5, lineHeight: 1.6, color: 'var(--ink-soft)' }}>{h.blurb}</p>
        <div className="mono" style={{ marginTop: 22, fontSize: 12, letterSpacing: '.12em', color: 'var(--ink-mute)' }}>
          {h.im} <RoleRotator roles={roles} accent="var(--coral)" font="var(--font-mono)" />
        </div>
        <div style={{ marginTop: 38, display: 'flex', gap: 14, flexWrap: 'wrap' }}>
          <a href="#work" onClick={(e) => go(e, 'work')} data-cursor="work" className="btn">{h.cta1} <span style={{ fontSize: 16 }}>↗</span></a>
          <a href="#contact" onClick={(e) => go(e, 'contact')} data-cursor="hi" className="btn btn-ghost">{h.cta2}</a>
        </div>
        <div style={{ marginTop: 70, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
          <a href="#about" onClick={(e) => go(e, 'about')} data-cursor="scroll ↓" className="mono"
            style={{ fontSize: 11, color: 'var(--ink-mute)', textDecoration: 'none', display: 'inline-flex', alignItems: 'center', gap: 10, letterSpacing: '.14em' }}>
            <span className="scroll-arrow">↓</span> {h.scroll}
          </a>
          <div className="mono" style={{ fontSize: 11, color: 'var(--ink-mute)', letterSpacing: '.14em' }}>{h.based}</div>
        </div>
      </div>
    </section>
  );
}
