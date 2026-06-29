import { useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';

export default function Nav() {
  const { lang, toggleLang, toggleTheme } = useApp();
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { href: '#about',        en: 'about',        es: 'sobre mí'   },
    { href: '#work',         en: 'work',          es: 'proyectos'  },
    { href: '#career',       en: 'career',        es: 'carrera'    },
    { href: '#capabilities', en: 'capabilities',  es: 'capacidades'},
    { href: '#contact',      en: 'contact',       es: 'contacto'   },
  ];

  return (
    <header>
      <nav className={`nav${scrolled ? ' scrolled' : ''}`} id="nav">
        <div className="nav-inner">
          <a href="#" className="nav-logo">Stepha<span className="nav-logo-dot">•</span>Gonz</a>

          <ul className="nav-links">
            {links.map(l => (
              <li key={l.href}><a href={l.href}>{lang === 'en' ? l.en : l.es}</a></li>
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
            <a key={l.href} href={l.href} onClick={() => setMenuOpen(false)}>
              {lang === 'en' ? l.en : l.es}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}
