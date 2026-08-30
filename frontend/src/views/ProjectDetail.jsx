import { useEffect, useRef, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { DATA } from '../data/portfolioData';
import { COPY } from '../data/copy';
import Particles from '../components/ui/Particles';
import Footer from '../components/Footer';

function StepRail({ steps }) {
  const [active, setActive] = useState(0);
  useEffect(() => {
    const f = () => {
      let a = 0;
      steps.forEach((_, i) => {
        const el = document.getElementById('step-' + i);
        if (el && el.getBoundingClientRect().top < window.innerHeight * 0.45) a = i;
      });
      setActive(a);
    };
    window.addEventListener('scroll', f);
    f();
    return () => window.removeEventListener('scroll', f);
  }, [steps.length]);

  return (
    <div className="hide-sm" style={{ position: 'fixed', left: 28, top: '50%', transform: 'translateY(-50%)', zIndex: 80, display: 'flex', flexDirection: 'column', gap: 22 }}>
      {steps.map((s, i) => (
        <a key={i} href={'#step-' + i} data-cursor="→" onClick={(e) => {
          e.preventDefault();
          const el = document.getElementById('step-' + i);
          if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 90, behavior: 'smooth' });
        }}
          className="mono" style={{ fontSize: 9.5, letterSpacing: '.12em', textDecoration: 'none', lineHeight: 1.7, color: active === i ? 'var(--ink)' : 'var(--ink-mute)', opacity: active === i ? 1 : .55, transition: 'all .3s' }}>
          0{i + 1}<br /><span style={{ textTransform: 'none', letterSpacing: '.02em' }}>{s}</span>
        </a>
      ))}
    </div>
  );
}

function S({ i, label, children, style }) {
  return (
    <section id={'step-' + i} className="sec" style={{ padding: '80px 0', borderTop: '1px solid var(--border)', ...style }}>
      <div className="wrap inner" style={{ maxWidth: 1180 }}>
        <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.14em', color: 'var(--hi)', marginBottom: 34 }}>{label}</div>
        {children}
      </div>
    </section>
  );
}

export default function ProjectDetail() {
  const { slug } = useParams();
  const { lang } = useApp();
  const navigate = useNavigate();
  const c = COPY.detail[lang];

  const projects = DATA.projects;
  const idx = projects.findIndex((p) => p.slug === slug);
  const p = projects[idx] || projects[0];
  const next = projects[(idx + 1) % projects.length];
  const tint = p.tint || ['oklch(35% 0.14 295)', 'oklch(65% 0.16 320)'];

  useEffect(() => { window.scrollTo(0, 0); }, [slug]);

  if (idx === -1) {
    return (
      <div className="wrap" style={{ paddingTop: 160 }}>
        <p>Project not found.</p>
        <button onClick={() => navigate('/')} className="btn">← Back</button>
      </div>
    );
  }

  const meta = [
    ['ROLE', p.role[lang]],
    ['TYPE', p.kind[lang]],
    ['YEAR', p.year],
    ['STACK', p.stack.join(' · ')],
    ['STATUS', lang === 'en' ? 'Completed' : 'Completado'],
  ];

  return (
    <div style={{ minHeight: '100vh' }}>
      <StepRail steps={c.steps} />

      <section id="step-0" style={{ position: 'relative', padding: '150px 0 60px', overflow: 'hidden' }}>
        <div className="aura" style={{ right: '-14%', top: '-14%', width: '56vw', height: '56vw', background: 'radial-gradient(circle,var(--aura-a),transparent 68%)' }} />
        <Particles color="oklch(62% 0.22 295 / 0.4)" count={40} />
        <div className="wrap inner" style={{ maxWidth: 1180 }}>
          <a href="/#work" onClick={(e) => { e.preventDefault(); navigate('/'); sessionStorage.setItem('scrollTo', 'work'); }} data-cursor="back" className="mono" style={{ fontSize: 10.5, letterSpacing: '.14em', color: 'var(--ink-mute)', textDecoration: 'none' }}>{c.back}</a>
          <div className="g2" style={{ display: 'grid', gridTemplateColumns: '.85fr 1.15fr', gap: 56, alignItems: 'center', marginTop: 30 }}>
            <div>
              <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.14em', color: 'var(--hi)', marginBottom: 18 }}>SELECTED WORK / 0{idx + 1}</div>
              <h1 className="disp" style={{ fontSize: 'clamp(40px,5.2vw,72px)', margin: '0 0 22px' }}>
                {p.title}<br />
                <span className="it" style={{ fontFamily: 'var(--font-display)', fontSize: '.72em' }}>{p.kind[lang]}</span>
              </h1>
              <p style={{ fontSize: 16.5, lineHeight: 1.65, color: 'var(--ink-soft)', margin: '0 0 26px', maxWidth: 460 }}>{p.summary[lang]}</p>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8 }}>
                {p.stack.map((s) => (<span key={s} className="mono" style={{ fontSize: 9.5, letterSpacing: '.1em', padding: '6px 12px', borderRadius: 999, border: '1px solid var(--border)', color: 'var(--ink-soft)' }}>{s}</span>))}
              </div>
            </div>
            {p.img
              ? <div className="card" style={{ overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
                <div style={{ display: 'flex', gap: 6, padding: '12px 16px', borderBottom: '1px solid var(--border)', alignItems: 'center' }}>
                  <span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--border)' }} /><span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--border)' }} /><span style={{ width: 9, height: 9, borderRadius: '50%', background: 'var(--border)' }} />
                  <span className="mono" style={{ fontSize: 9.5, letterSpacing: '.1em', color: 'var(--ink-mute)', margin: '0 auto' }}>{p.slug}.stephagonz.co</span>
                </div>
                <img src={p.img} alt={p.title} style={{ width: '100%', display: 'block' }} />
              </div>
              : <div style={{ position: 'relative', overflow: 'hidden', borderRadius: 24, minHeight: 360, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(155deg, ${tint[0]}, ${tint[1]})`, boxShadow: 'var(--shadow)' }}>
                <span className="disp" style={{ fontSize: 'clamp(64px,9vw,132px)', fontStyle: 'italic', color: 'rgba(255,255,255,.28)' }}>{p.mark || p.title}</span>
              </div>}
          </div>
          <div className="card g4" style={{ marginTop: 44, display: 'grid', gridTemplateColumns: 'repeat(5,1fr)', gap: 0, padding: 0, overflow: 'hidden' }}>
            {meta.map(([k, v], i) => (
              <div key={k} style={{ padding: '20px 24px', borderLeft: i ? '1px solid var(--border)' : 'none' }}>
                <div className="mono" style={{ fontSize: 9.5, letterSpacing: '.14em', color: 'var(--ink-mute)', marginBottom: 8 }}>{k}</div>
                <div style={{ fontSize: 14, color: 'var(--ink)' }}>{v}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <S i={1} label={c.s2}>
        <div className="g2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 56, alignItems: 'center' }}>
          <h2 className="disp" style={{ fontSize: 'clamp(32px,4vw,54px)', margin: 0 }}>
            {p.headlines.problem.l1[lang]}<br />
            <span className="it-c" style={{ fontFamily: 'var(--font-display)' }}>{p.headlines.problem.l2[lang]}</span>
          </h2>
          <div>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)', margin: '0 0 16px' }}>{p.detail ? p.detail[lang] : p.summary[lang]}</p>
            <p style={{ fontSize: 16, lineHeight: 1.65, color: 'var(--ink-soft)', margin: 0 }}>{p.problemNote[lang]}</p>
          </div>
        </div>
      </S>

      <S i={2} label={c.s3}>
        <h2 className="disp" style={{ fontSize: 'clamp(30px,3.6vw,46px)', margin: '0 0 44px', maxWidth: '14ch' }}>
          {p.headlines.approach.l1[lang]} <span className="it" style={{ fontFamily: 'var(--font-display)' }}>{p.headlines.approach.l2[lang]}</span>
        </h2>
        <div className="g4" style={{ display: 'grid', gridTemplateColumns: 'repeat(4,1fr)', gap: 24 }}>
          {p.approach.map((a, i) => (
            <div key={i}>
              <div style={{ width: 44, height: 44, borderRadius: 12, border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 18 }}>
                <span style={{ width: 14, height: 14, borderRadius: i % 2 ? '50%' : 3, background: i % 2 ? 'var(--coral)' : 'var(--lime)' }} />
              </div>
              <div className="mono" style={{ fontSize: 10, letterSpacing: '.14em', color: 'var(--ink-mute)', marginBottom: 8 }}>0{i + 1}</div>
              <div style={{ fontSize: 18, fontWeight: 500, marginBottom: 9 }}>{a.t[lang]}</div>
              <p style={{ fontSize: 14, lineHeight: 1.6, color: 'var(--ink-soft)', margin: 0 }}>{a.d[lang]}</p>
            </div>
          ))}
        </div>
      </S>

      <S i={3} label={c.s4}>
        <div className="g2" style={{ display: 'grid', gridTemplateColumns: '.7fr 1.3fr', gap: 48, alignItems: 'center' }}>
          <h2 className="disp" style={{ fontSize: 'clamp(30px,3.6vw,46px)', margin: 0 }}>
            {p.headlines.interface.l1[lang]} <span className="it" style={{ fontFamily: 'var(--font-display)' }}>{p.headlines.interface.l2[lang]}</span><br />
            {p.headlines.interface.l3[lang]} <span className="it" style={{ fontFamily: 'var(--font-display)' }}>{p.headlines.interface.l4[lang]}</span>
          </h2>
          <div className="card" style={{ overflow: 'hidden', boxShadow: 'var(--shadow)' }}>
            {p.media === 'powerbi' && p.embed
              ? <iframe title={p.title} src={p.embed} style={{ width: '100%', aspectRatio: '16/10', border: 0, display: 'block' }} allowFullScreen></iframe>
              : p.media === 'video' && p.video
              ? <video src={p.video} controls playsInline preload="none" poster={p.img || undefined} style={{ width: '100%', display: 'block' }}></video>
              : p.img
              ? <img src={p.img} alt={p.title} style={{ width: '100%', display: 'block' }} />
              : <div style={{ position: 'relative', minHeight: 340, display: 'flex', alignItems: 'center', justifyContent: 'center', background: `linear-gradient(155deg, ${tint[0]}, ${tint[1]})` }}>
                <span className="disp" style={{ fontSize: 'clamp(56px,7vw,104px)', fontStyle: 'italic', color: 'rgba(255,255,255,.26)' }}>{p.mark || p.title}</span>
              </div>}
          </div>
        </div>
      </S>

      <S i={4} label={c.s5}>
        <div className="g2" style={{ display: 'grid', gridTemplateColumns: '.8fr 1.2fr', gap: 48, alignItems: 'center' }}>
          <h2 className="disp" style={{ fontSize: 'clamp(30px,3.6vw,46px)', margin: 0 }}>
            {p.headlines.outcome.l1[lang]}<br />{p.headlines.outcome.l2[lang]} <span className="it" style={{ fontFamily: 'var(--font-display)' }}>{p.headlines.outcome.l3[lang]}</span>
          </h2>
          <div className="g3" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gap: 18 }}>
            {p.outcome.map((o, i) => {
              const col = o.color === 'lime' ? 'var(--lime)' : o.color === 'coral' ? 'var(--coral)' : 'var(--violet)';
              return (
                <div key={i} className="card" style={{ padding: '24px 22px' }}>
                  <div style={{ width: 12, height: 12, borderRadius: '50%', background: col, marginBottom: 18, boxShadow: '0 0 18px ' + col }} />
                  <div style={{ fontSize: 19, fontWeight: 500, letterSpacing: '-.015em', marginBottom: 8 }}>{o.t[lang]}</div>
                  <div style={{ fontSize: 13.5, lineHeight: 1.55, color: 'var(--ink-soft)' }}>{o.d[lang]}</div>
                </div>
              );
            })}
          </div>
        </div>
      </S>

      <section className="sec" style={{ padding: '80px 0', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
        <div className="wrap inner" style={{ maxWidth: 1180 }}>
          <a href={`/project/${next.slug}`} onClick={(e) => { e.preventDefault(); navigate(`/project/${next.slug}`); }} data-cursor="next ↗"
            className="card" style={{ display: 'block', textDecoration: 'none', color: 'var(--ink)', padding: '30px 32px', overflow: 'hidden', position: 'relative' }}
            onMouseEnter={(e) => { e.currentTarget.style.borderColor = 'var(--violet)'; }} onMouseLeave={(e) => { e.currentTarget.style.borderColor = 'var(--border)'; }}>
            <div className="aura" style={{ right: '-20%', bottom: '-40%', width: '70%', height: '160%', background: 'radial-gradient(circle,var(--aura-a),transparent 68%)' }} />
            <div className="inner">
              <div className="mono" style={{ fontSize: 10, letterSpacing: '.14em', color: 'var(--ink-mute)', marginBottom: 16 }}>{c.next} / 0{((idx + 1) % projects.length) + 1}</div>
              <div className="disp" style={{ fontSize: 34, marginBottom: 10 }}>{next.title}</div>
              <p style={{ fontSize: 14.5, lineHeight: 1.55, color: 'var(--ink-soft)', margin: '0 0 22px', maxWidth: 360 }}>{next.summary[lang]}</p>
              <span className="btn" style={{ padding: '11px 20px', fontSize: 14 }}>{c.view} <span style={{ fontSize: 15 }}>↗</span></span>
            </div>
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
}
