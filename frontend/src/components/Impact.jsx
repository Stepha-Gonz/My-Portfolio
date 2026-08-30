import { useApp } from '../context/AppContext';
import { DATA } from '../data/portfolioData';
import { COPY } from '../data/copy';
import SectionHead from './ui/SectionHead';
import { Reveal, RevealWords } from './ui/Reveal';

export default function Impact() {
  const { lang } = useApp();
  const c = COPY.impact[lang];

  return (
    <section id="impact" className="sec dark-block">
      <div className="aura" style={{ right: '-12%', top: '-16%', width: '52vw', height: '52vw', background: 'radial-gradient(circle,var(--aura-a),transparent 68%)' }} />
      <div className="wrap inner">
        <SectionHead eyebrow={c.eyebrow} blurb={c.blurb}>
          <RevealWords text={c.h1} /> <span className="it-c" style={{ fontFamily: 'var(--font-display)' }}>{c.hi}</span>
        </SectionHead>
        <div className="g2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20 }}>
          {DATA.impact.map((f, i) => {
            const tone = f.tone === 'lime' ? 'var(--lime)' : f.tone === 'coral' ? 'var(--coral)' : 'var(--violet)';
            return (
              <Reveal key={f.n} delay={i * 80}>
                <div className="card" style={{ padding: '26px 28px 24px', height: '100%', display: 'flex', flexDirection: 'column', minHeight: 250 }}
                  onMouseEnter={(e) => { e.currentTarget.style.borderColor = tone; }}
                  onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 26 }}>
                    <span className="mono" style={{ fontSize: 10, letterSpacing: '.14em', color: 'var(--ink-mute)' }}>FILE / {f.n} · {f.org.toUpperCase()}</span>
                    <span className="mono" style={{ fontSize: 10, width: 30, height: 30, borderRadius: '50%', border: '1px solid ' + tone, color: tone, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{f.n.slice(1)}</span>
                  </div>
                  <div className="disp" style={{ fontSize: 32, marginBottom: 12 }}>{f.title[lang]}</div>
                  <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--ink-soft)', margin: '0 0 22px' }}>{f.desc[lang]}</p>
                  <div style={{ marginTop: 'auto', paddingTop: 18, borderTop: '1px solid var(--border)', display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 16 }}>
                    <div className="mono" style={{ fontSize: 10, letterSpacing: '.12em', color: 'var(--ink-mute)', lineHeight: 2 }}>{f.k1[lang]}<br />{f.k2[lang]}</div>
                    <div className="disp" style={{ fontSize: f.mark.length > 4 ? 26 : 38, color: tone, lineHeight: 1, textAlign: 'right' }}>{f.mark}</div>
                  </div>
                </div>
              </Reveal>
            );
          })}
        </div>
        <div className="mono" style={{ marginTop: 26, fontSize: 10.5, letterSpacing: '.14em', color: 'var(--ink-mute)', textAlign: 'right' }}>{c.foot}</div>
      </div>
    </section>
  );
}
