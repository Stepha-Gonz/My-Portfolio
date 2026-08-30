import { DATA } from '../data/portfolioData';

export default function Footer() {
  return (
    <footer style={{ padding: '40px 0', borderTop: '1px solid var(--border)' }}>
      <div className="wrap" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, flexWrap: 'wrap' }}>
        <div className="mono" style={{ fontSize: 10.5, letterSpacing: '.14em', color: 'var(--ink-mute)' }}>© {new Date().getFullYear()} {DATA.name} · {DATA.location}</div>
        <div style={{ display: 'flex', gap: 20 }}>
          <a href={DATA.github} target="_blank" rel="noopener noreferrer" data-cursor="github" className="mono" style={{ fontSize: 10.5, letterSpacing: '.14em', color: 'var(--ink-mute)', textDecoration: 'none' }}>GITHUB</a>
          <a href={DATA.linkedin} target="_blank" rel="noopener noreferrer" data-cursor="linkedin" className="mono" style={{ fontSize: 10.5, letterSpacing: '.14em', color: 'var(--ink-mute)', textDecoration: 'none' }}>LINKEDIN</a>
          <a href={'mailto:' + DATA.email} data-cursor="email" className="mono" style={{ fontSize: 10.5, letterSpacing: '.14em', color: 'var(--ink-mute)', textDecoration: 'none' }}>EMAIL</a>
        </div>
      </div>
    </footer>
  );
}
