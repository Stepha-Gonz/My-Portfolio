import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { DATA } from '../data/portfolioData';
import { COPY } from '../data/copy';
import SectionHead from './ui/SectionHead';
import { RevealWords } from './ui/Reveal';

function WorkCard({ p, i, lang, label, onOpen }) {
  const big = i === 0, wide = i === 3, total = DATA.projects.length;
  const [g1, g2] = p.tint || ['oklch(35% 0.14 295)', 'oklch(65% 0.16 320)'];
  return (
    <a href={`/project/${p.slug}`} onClick={(e) => { e.preventDefault(); onOpen(p.slug); }} data-cursor={label}
      style={{
        gridColumn: big ? 'span 2' : wide ? (total === 4 ? 'span 3' : 'span 2') : 'span 1', gridRow: big ? 'span 2' : 'span 1',
        position: 'relative', overflow: 'hidden', borderRadius: 24, textDecoration: 'none', color: '#fff',
        display: 'flex', flexDirection: 'column', justifyContent: 'flex-end',
        minHeight: big ? 640 : wide ? 300 : 308, padding: big ? 34 : 26, background: `linear-gradient(155deg, ${g1}, ${g2})`,
        boxShadow: 'var(--shadow)', transition: 'transform .4s cubic-bezier(.2,.7,.2,1),box-shadow .4s',
      }}
      onMouseEnter={(e) => { e.currentTarget.style.transform = 'translateY(-6px)'; }}
      onMouseLeave={(e) => { e.currentTarget.style.transform = 'none'; }}>
      <span style={{
        position: 'absolute', left: big ? 34 : 26, top: big ? 34 : 26, zIndex: 3,
        background: 'oklch(99% 0.005 292 / .92)', color: 'oklch(20% 0.03 292)',
        borderRadius: 999, padding: '9px 17px', fontFamily: 'var(--font-mono)', fontSize: 10.5, letterSpacing: '.12em', textTransform: 'uppercase',
      }}>{p.kind[lang]}</span>
      {p.img
        ? <div style={{ position: 'absolute', left: '8%', right: '-6%', top: big ? '16%' : '17%', bottom: big ? '30%' : '40%', borderRadius: 14, overflow: 'hidden', transform: 'rotate(-2deg)', boxShadow: '0 40px 80px -30px rgba(0,0,0,.55)', border: '1px solid rgba(255,255,255,.18)' }}>
            <img src={p.img} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: p.imgPosition || 'top left' }} />
          </div>
        : <div className="disp" style={{ position: 'absolute', right: big ? -10 : -14, top: big ? '22%' : '20%', fontSize: big ? 'clamp(84px,11vw,170px)' : 'clamp(64px,8vw,104px)', lineHeight: 1, color: 'rgba(255,255,255,.20)', fontStyle: 'italic', pointerEvents: 'none' }}>{p.mark || p.title.slice(0, 2)}</div>}
      <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, rgba(8,4,20,.72) 0%, rgba(8,4,20,.15) 42%, transparent 65%)' }} />
      <div style={{ position: 'relative', zIndex: 2 }}>
        <div style={{ fontSize: big ? 40 : 27, fontWeight: 600, letterSpacing: '-.025em', lineHeight: 1.05, marginBottom: 8 }}>{p.title}</div>
        <div style={{ fontSize: big ? 16 : 14.5, lineHeight: 1.45, color: 'rgba(255,255,255,.82)', maxWidth: 460 }}>{p.summary[lang]}</div>
        <div className="mono" style={{ marginTop: 16, fontSize: 10, letterSpacing: '.14em', color: 'rgba(255,255,255,.6)' }}>{p.year} · {p.stack.slice(0, 2).join(' · ')} <span style={{ marginLeft: 8 }}>↗</span></div>
      </div>
    </a>
  );
}

export default function Work() {
  const { lang } = useApp();
  const c = COPY.work[lang];
  const navigate = useNavigate();
  const onOpen = (slug) => navigate(`/project/${slug}`);

  return (
    <section id="work" className="sec" style={{ background: 'var(--bg-2)', borderTop: '1px solid var(--border)', borderBottom: '1px solid var(--border)' }}>
      <div className="aura" style={{ left: '-14%', bottom: '-18%', width: '44vw', height: '44vw', background: 'radial-gradient(circle,var(--aura-c),transparent 66%)' }} />
      <div className="wrap inner">
        <SectionHead eyebrow={c.eyebrow} blurb={c.blurb}>
          <RevealWords text={c.h1} /> <span className="it" style={{ fontFamily: 'var(--font-display)' }}>{c.hi}</span>
        </SectionHead>
        <div className="bento" style={{ display: 'grid', gridTemplateColumns: 'repeat(3,1fr)', gridAutoRows: '308px', gap: 20 }}>
          {DATA.projects.map((p, i) => (
            <WorkCard key={p.slug} p={p} i={i} lang={lang} label={c.open} onOpen={onOpen} />
          ))}
        </div>
      </div>
    </section>
  );
}
