import { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { COPY } from '../data/copy';

export default function Nav() {
  const { lang, theme, toggleLang, toggleTheme } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';
  const links = COPY.nav[lang];

  useEffect(() => {
    const f = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', f);
    return () => window.removeEventListener('scroll', f);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia('(max-width: 640px)');
    const f = () => { setIsMobile(mq.matches); if (!mq.matches) setMenuOpen(false); };
    f();
    mq.addEventListener('change', f);
    return () => mq.removeEventListener('change', f);
  }, []);

  function goToSection(e, id) {
    e.preventDefault();
    setMenuOpen(false);
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
    setMenuOpen(false);
    if (isHome) { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    navigate('/');
    sessionStorage.setItem('scrollTo', 'top');
  }

  const langBtn = (
    <button onClick={toggleLang} data-cursor="switch" className="mono"
      style={{ background: 'transparent', border: '1px solid var(--border)', borderRadius: 999, padding: '6px 11px', fontSize: 10.5, color: 'var(--ink-soft)', whiteSpace: 'nowrap' }}>
      {lang.toUpperCase()}<span style={{ opacity: .4 }}> / </span>{lang === 'en' ? 'ES' : 'EN'}
    </button>
  );
  const themeBtn = (
    <button onClick={toggleTheme} data-cursor="theme"
      style={{ background: 'transparent', border: '1px solid var(--border)', borderRadius: 999, width: 32, height: 32, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink-soft)', fontSize: 13, flex: 'none' }}>
      {theme === 'light' ? '☾' : '☀'}
    </button>
  );
  const contactBtn = (
    <a href="#contact" onClick={(e) => goToSection(e, 'contact')} data-cursor="say hi" className="btn" style={{ padding: '11px 22px', fontSize: 14 }}>
      {lang === 'en' ? 'Contact' : 'Contacto'}
    </a>
  );

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 200, padding: scrolled ? '12px 20px' : '20px 20px', transition: 'padding .35s' }}>
      <nav className="wrap" style={{
        maxWidth: 1300, display: 'flex', flexDirection: 'column', gap: 0,
        borderRadius: menuOpen ? 24 : 999, border: '1px solid ' + (scrolled || menuOpen ? 'var(--border)' : 'transparent'),
        background: scrolled || menuOpen ? 'var(--nav-bg)' : 'transparent', backdropFilter: scrolled || menuOpen ? 'blur(16px) saturate(150%)' : 'none',
        transition: 'background .35s, border-color .35s, border-radius .35s', overflow: 'hidden',
      }}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: 20, padding: '11px 12px 11px 22px' }}>
          <a href="/" onClick={goHome} data-cursor="top" style={{ display: 'flex', alignItems: 'center', gap: 11, textDecoration: 'none', color: 'var(--ink)', minWidth: 0 }}>
            <img src="/img/Logo/SG.jpeg" alt="Stepha Gonz" style={{ width: 32, height: 32, borderRadius: '50%', objectFit: 'cover', border: '1px solid var(--border)', flex: 'none' }} />
            <span style={{ fontSize: 16, fontWeight: 500, letterSpacing: '-.01em', whiteSpace: 'nowrap' }}>stepha<span style={{ color: 'var(--violet)' }}>.</span>gonz</span>
          </a>

          {isMobile ? (
            <button onClick={() => setMenuOpen((o) => !o)} data-cursor={menuOpen ? 'close' : 'menu'} aria-label="Menu"
              style={{ background: 'transparent', border: '1px solid var(--border)', borderRadius: 999, width: 38, height: 38, display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--ink)', fontSize: 16, flex: 'none' }}>
              {menuOpen ? '✕' : '☰'}
            </button>
          ) : (
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <div className="hide-sm" style={{ display: 'flex', gap: 26, marginRight: 8 }}>
                {links.map(([id, label]) => (
                  <a key={id} href={'#' + id} onClick={(e) => goToSection(e, id)} data-cursor="→"
                    style={{ color: 'var(--ink-soft)', textDecoration: 'none', fontSize: 14, transition: 'color .2s' }}
                    onMouseEnter={(e) => { e.currentTarget.style.color = 'var(--ink)'; }}
                    onMouseLeave={(e) => { e.currentTarget.style.color = 'var(--ink-soft)'; }}>{label}</a>
                ))}
              </div>
              {langBtn}
              {themeBtn}
              {contactBtn}
            </div>
          )}
        </div>

        {isMobile && menuOpen && (
          <div style={{ padding: '4px 22px 24px', display: 'flex', flexDirection: 'column', gap: 4 }}>
            {links.map(([id, label]) => (
              <a key={id} href={'#' + id} onClick={(e) => goToSection(e, id)} data-cursor="→"
                style={{ color: 'var(--ink)', textDecoration: 'none', fontSize: 17, padding: '12px 4px', borderBottom: '1px solid var(--border)' }}>{label}</a>
            ))}
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginTop: 16 }}>
              {langBtn}
              {themeBtn}
            </div>
            <div style={{ marginTop: 12 }}>{contactBtn}</div>
          </div>
        )}
      </nav>
    </div>
  );
}
