import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { COPY } from '../data/copy';

export default function Nav() {
  const { lang, theme, toggleLang, toggleTheme } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const links = COPY.nav[lang];

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', f);
    return () => window.removeEventListener('scroll', f);
  }, []);

  function goToSection(e, id) {
    e.preventDefault();
    if (isHome) {
      const el = document.getElementById(id);
      if (el) window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY - 70, behavior: 'smooth' });
    } else {
      navigate('/');
      sessionStorage.setItem('scrollTo', id);
    }
  }

  function goHome(e) {
    e.preventDefault();
    if (isHome) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    navigate('/');
    sessionStorage.setItem('scrollTo', 'top');
  }

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, padding: scrolled ? '12px 20px' : '20px 20px', transition: 'padding .35s' }}>
      <nav className="wrap" style={{
        maxWidth: 1300, display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20,
        padding: '11px 12px 11px 22px', borderRadius: 999, border: '1px solid ' + (scrolled ? 'var(--border)' : 'transparent'),
        background: scrolled ? 'var(--nav-bg)' : 'transparent', backdropFilter: scrolled ? 'blur(16px) saturate(150%)' : 'none', transition: 'all .35s',
      }}>
        <a href="/" onClick={goHome} data-cursor="top" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none', color: 'var(--ink)' }}>
          <img src="/img/Logo/SG.jpeg" alt="Stepha Gonz" style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border)' }} />
          <span style={{ fontSize: 16, fontWeight: 500, letterSpacing: '-.01em' }}>stepha<span style={{ color: 'var(--violet)' }}>.</span>gonz</span>
        </a>
        <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
          <div className="hide-sm" style={{ display: 'flex', gap: 26, marginRight: 8 }}>
            {links.map(([id, label]) => (
              <a key={id} href={'#' + id} onClick={(e) => goToSection(e, id)} data-cursor="→"
                style={{ color: 'var(--ink-soft)', textDecoration: 'none', fontSize: 14, transition: 'color .2s' }}
                onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
                onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-soft)'; }}>{label}</a>
            ))}
          </div>
          <button onClick={toggleLang} data-cursor="switch" className="mono"
            style={{ background: 'transparent', border: '1px solid var(--border)', borderRadius: 999, padding: '6px 11px', fontSize: 10.5, color: 'var(--ink-soft)', whiteSpace: 'nowrap' }}>
            {lang.toUpperCase()}<span style={{ opacity: .4 }}> / </span>{lang === 'en' ? 'ES' : 'EN'}
          </button>
          <button onClick={toggleTheme} data-cursor="theme"
            style={{ background: 'transparent', border: '1px solid var(--border)', borderRadius: 999, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-soft)', fontSize: 13 }}>
            {theme === 'light' ? '☾' : '☀'}
          </button>
          <a href="#contact" onClick={(e) => goToSection(e, 'contact')} data-cursor="say hi" className="btn" style={{ padding: '11px 22px', fontSize: 14 }}>
            {lang === 'en' ? 'Contact' : 'Contacto'}
          </a>
        </div>
      </nav>
    </div>
  );
}
