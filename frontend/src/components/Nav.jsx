import { useState, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';

export default function Nav() {
  const { lang, toggleLang, toggleTheme } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { id: 'about',        en: 'about',        es: 'sobre mí'    },
    { id: 'work',         en: 'work',         es: 'proyectos'   },
    { id: 'career',       en: 'career',       es: 'carrera'     },
    { id: 'capabilities', en: 'capabilities', es: 'capacidades' },
    { id: 'contact',      en: 'contact',      es: 'contacto'    },
  ];

  function goToSection(id) {
    setMenuOpen(false);
    if (isHome) {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: 'smooth' });
    } else {
      // Navigate to home, then scroll after render
      navigate('/');
      sessionStorage.setItem('scrollTo', id);
    }
  }

  function goHome() {
    setMenuOpen(false);
    navigate('/');
    sessionStorage.setItem('scrollTo', 'top');
  }

  return (
    <header>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
        <div className="nav-inner">
          <button className="nav-logo" onClick={goHome} aria-label="Go to home">
            Stepha<span className="nav-logo-dot">•</span>Gonz
          </button>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.id}>
                <button onClick={() => goToSection(l.id)}>
                  {lang === 'en' ? l.en : l.es}
                </button>
              </li>
            ))}
          </ul>

          <div className="nav-controls">
            <button className="lang-btn" onClick={toggleLang} aria-label="Toggle language">
              {lang === 'en' ? 'ES' : 'EN'}
            </button>
            <button className="theme-btn" onClick={toggleTheme} aria-label="Toggle theme" />
            <button
              className="nav-menu-btn"
              onClick={() => setMenuOpen(o => !o)}
              aria-label="Toggle menu"
              aria-expanded={menuOpen}
            >
              <span /><span /><span />
            </button>
          </div>
        </div>

        <div className={`nav-mobile${menuOpen ? ' open' : ''}`}>
          {links.map(l => (
            <button key={l.id} onClick={() => goToSection(l.id)}>
              {lang === 'en' ? l.en : l.es}
            </button>
          ))}
        </div>
      </nav>
    </header>
  );
}
