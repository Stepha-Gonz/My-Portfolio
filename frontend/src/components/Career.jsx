import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DATA } from '../data/portfolioData';
import { COPY } from '../data/copy';
import SectionHead from './ui/SectionHead';
import { RevealWords } from './ui/Reveal';

export default function Career() {
  const { lang } = useApp();
  const c = COPY.career[lang];
  const [open, setOpen] = useState(0);

  return (
    <section id="career" className="sec">
      <div className="aura" style={{ left: '-16%', top: '6%', width: '40vw', height: '40vw', background: 'radial-gradient(circle,var(--aura-b),transparent 68%)', opacity: .7 }} />
      <div className="wrap inner">
        <SectionHead eyebrow={c.eyebrow} blurb={c.blurb}>
          <RevealWords text={c.h1} /> <span className="it-c" style={{ fontFamily: 'var(--font-display)' }}>{c.hi}</span>
        </SectionHead>
        <div className="g2" style={{ display: 'grid', gridTemplateColumns: '270px 1fr', gap: 0, borderTop: '1px solid var(--border)' }}>
          <div style={{ padding: '34px 34px 34px 0' }}>
            <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.14em', color: 'var(--ink-mute)', marginBottom: 14 }}>{c.side_t}</div>
            <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-soft)', margin: '0 0 30px' }}>{c.side}</p>
            <div className="mono" style={{ width: 66, height: 66, borderRadius: '50%', background: 'var(--lime)', color: 'oklch(20% 0.04 292)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: 14, boxShadow: '0 0 44px -8px var(--lime)' }}>0{DATA.experience.length}</div>
          </div>
          <div style={{ borderLeft: '1px solid var(--border)' }}>
            {DATA.experience.map((x, i) => {
              const isOpen = open === i;
              return (
                <div key={i} className={isOpen ? 'row-open' : ''} style={{ padding: '30px 4px 30px 34px', borderBottom: '1px solid var(--border)', position: 'relative', cursor: 'none' }}>
                  <div style={{ position: 'absolute', left: -7, top: 38, width: 13, height: 13, borderRadius: '50%', background: 'var(--bg)', border: '3px solid ' + (x.current ? 'var(--coral)' : 'var(--violet)'), boxShadow: x.current ? '0 0 16px var(--coral)' : 'none' }} />
                  <div className="g3" style={{ display: 'grid', gridTemplateColumns: '150px 1fr 44px', gap: 24, alignItems: 'start' }}>
                    <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.1em', color: 'var(--ink-mute)', lineHeight: 1.9, paddingTop: 4 }}>{x.date[lang]}</div>
                    <div>
                      <div className="mono" style={{ fontSize: 11.5, letterSpacing: '.08em', color: 'var(--violet)', marginBottom: 8, textTransform: 'none' }}>{x.company}</div>
                      <div style={{ fontSize: 23, fontWeight: 500, letterSpacing: '-.02em', lineHeight: 1.15, marginBottom: 12 }}>{x.role[lang]}</div>
                      <p style={{
                        fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-soft)', margin: 0, maxWidth: 640,
                        maxHeight: isOpen ? 600 : 0, overflow: 'hidden', opacity: isOpen ? 1 : 0, transition: 'max-height .5s,opacity .4s,margin .4s', marginBottom: isOpen ? 16 : 0,
                      }}>{x.desc[lang]}</p>
                      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 7, maxHeight: isOpen ? 200 : 0, overflow: 'hidden', opacity: isOpen ? 1 : 0, transition: 'max-height .5s,opacity .4s' }}>
                        {x.stack.map((s) => (<span key={s} className="mono" style={{ fontSize: 9.5, letterSpacing: '.1em', padding: '5px 11px', borderRadius: 999, border: '1px solid var(--border)', color: 'var(--ink-soft)' }}>{s}</span>))}
                      </div>
                    </div>
                    <button className="plus" data-cursor={isOpen ? 'close' : 'open'} onClick={() => setOpen(isOpen ? -1 : i)}>+</button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
