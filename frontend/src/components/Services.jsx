import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { COPY } from '../data/copy';
import SectionHead from './ui/SectionHead';
import { RevealWords } from './ui/Reveal';

function go(e) {
  e.preventDefault();
  const el = document.getElementById('contact');
  if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
}

export default function Services() {
  const { lang } = useApp();
  const c = COPY.services[lang];
  const list = COPY.serviceList;
  const [open, setOpen] = useState(0);

  return (
    <section id="services" className="sec">
      <div className="aura" style={{ right: '-10%', bottom: '-20%', width: '50vw', height: '50vw', background: 'radial-gradient(circle,var(--aura-a),transparent 68%)' }} />
      <div className="wrap inner">
        <SectionHead eyebrow={c.eyebrow} blurb={c.blurb}>
          <RevealWords text={c.h1} /><br />{c.h2} <span className="it" style={{ fontFamily: 'var(--font-display)' }}>{c.hi}</span>
        </SectionHead>
        <div style={{ borderTop: '1px solid var(--border)' }}>
          {list.map((s, i) => {
            const isOpen = open === i;
            return (
              <div key={i} className={isOpen ? 'row-open' : ''} onClick={() => setOpen(isOpen ? -1 : i)} data-cursor={isOpen ? 'close' : 'more'}
                style={{ padding: '30px 6px', borderBottom: '1px solid var(--border)', background: isOpen ? 'var(--card)' : 'transparent', transition: 'background .35s' }}>
                <div className="g4" style={{ display: 'grid', gridTemplateColumns: '80px 1.25fr 1fr 44px', gap: 26, alignItems: 'start' }}>
                  <div className="mono" style={{ fontSize: 11, letterSpacing: '.1em', color: 'var(--hi)', paddingTop: 12 }}>0{i + 1} / 0{list.length}</div>
                  <div>
                    <div className="disp" style={{ fontSize: 'clamp(28px,3.4vw,42px)' }}>
                      {s.t[lang]} <span className="it" style={{ fontFamily: 'var(--font-display)' }}>{s.ti[lang]}</span>
                    </div>
                    <div style={{ maxHeight: isOpen ? 300 : 0, overflow: 'hidden', opacity: isOpen ? 1 : 0, transition: 'max-height .5s,opacity .4s' }}>
                      <p style={{ fontSize: 15.5, lineHeight: 1.6, color: 'var(--ink-soft)', margin: '14px 0 12px', maxWidth: 640 }}>{s.more[lang]}</p>
                      <div className="mono" style={{ fontSize: 10, letterSpacing: '.14em', color: 'var(--hi)', lineHeight: 1.8 }}>{s.note[lang]}</div>
                    </div>
                  </div>
                  <p style={{ fontSize: 14.5, lineHeight: 1.6, color: 'var(--ink-soft)', margin: 0, paddingTop: 8 }}>{s.s[lang]}</p>
                  <button className="plus" style={{ marginTop: 6 }}>+</button>
                </div>
              </div>
            );
          })}
        </div>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 24, flexWrap: 'wrap', marginTop: 34 }}>
          <p style={{ margin: 0, fontSize: 15.5, color: 'var(--ink-soft)' }}>{c.foot}</p>
          <a href="#contact" onClick={go} data-cursor="hi" className="btn">{c.cta}</a>
        </div>
      </div>
    </section>
  );
}
