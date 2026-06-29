import { useEffect, useRef, useState } from 'react';
import { useApp } from '../context/AppContext';
import { DATA } from '../data/portfolioData';

export default function Hero() {
  const { lang, theme } = useApp();
  const canvasRef = useRef(null);
  const [roleIndex, setRoleIndex] = useState(0);
  const [prevRole, setPrevRole] = useState(null);

  // Particles
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let w, h;
    const COUNT = 90;
    const LINK_DIST = 150;
    const dots = [];
    let mouse = { x: -1000, y: -1000 };
    let rafId;

    function resize() {
      w = canvas.width  = canvas.offsetWidth;
      h = canvas.height = canvas.offsetHeight;
    }

    const onResize = () => resize();
    const onMouse  = (e) => {
      const r = canvas.getBoundingClientRect();
      mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
    };

    window.addEventListener('resize', onResize, { passive: true });
    canvas.addEventListener('mousemove', onMouse);
    resize();

    for (let i = 0; i < COUNT; i++) {
      dots.push({
        x:  Math.random() * w,
        y:  Math.random() * h,
        vx: (Math.random() - 0.5) * 0.3,
        vy: (Math.random() - 0.5) * 0.3,
        r:  Math.random() * 1.8 + 0.6,
      });
    }

    function draw() {
      ctx.clearRect(0, 0, w, h);
      const isDark = document.documentElement.dataset.theme === 'dark';
      const dotColor = isDark ? 'oklch(72% 0.20 295 / 0.85)' : 'oklch(48% 0.22 295 / 0.70)';
      const lineBase = isDark ? 'oklch(72% 0.20 295 / ' : 'oklch(48% 0.22 295 / ';

      dots.forEach(d => {
        d.x += d.vx; d.y += d.vy;
        if (d.x < 0 || d.x > w) d.vx *= -1;
        if (d.y < 0 || d.y > h) d.vy *= -1;
        const dx = mouse.x - d.x, dy = mouse.y - d.y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < 120) { d.x -= dx / dist * 0.5; d.y -= dy / dist * 0.5; }
        ctx.beginPath();
        ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
        ctx.fillStyle = dotColor;
        ctx.fill();
      });

      for (let i = 0; i < dots.length; i++) {
        for (let j = i + 1; j < dots.length; j++) {
          const dx = dots[i].x - dots[j].x;
          const dy = dots[i].y - dots[j].y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < LINK_DIST) {
            const alpha = ((1 - dist / LINK_DIST) * (isDark ? 0.55 : 0.45)).toFixed(3);
            ctx.strokeStyle = lineBase + alpha + ')';
            ctx.lineWidth = 0.6;
            ctx.beginPath();
            ctx.moveTo(dots[i].x, dots[i].y);
            ctx.lineTo(dots[j].x, dots[j].y);
            ctx.stroke();
          }
        }
      }
      rafId = requestAnimationFrame(draw);
    }
    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('resize', onResize);
      canvas.removeEventListener('mousemove', onMouse);
    };
  }, []);

  // Role rotator
  useEffect(() => {
    const roles = DATA.roles[lang];
    setRoleIndex(0);
    setPrevRole(null);
    const timer = setInterval(() => {
      setRoleIndex(i => {
        setPrevRole(i);
        return (i + 1) % roles.length;
      });
    }, 2400);
    return () => clearInterval(timer);
  }, [lang]);

  const roles = DATA.roles[lang];

  return (
    <section className="hero" id="hero">
      <canvas className="hero-canvas" ref={canvasRef} aria-hidden="true" />

      <div className="hero-inner container">
        <div className="hero-text">
          <p className="hero-eyebrow">
            <span className="hero-eyebrow-dot" aria-hidden="true" />
            Bogotá, Colombia
          </p>

          <h1 className="hero-headline" style={{ animation: 'slideUp 0.8s ease 0.1s both' }}>
            {lang === 'en'
              ? <span>Turning fragmented data<br /><em>into strategic decisions.</em></span>
              : <span>Convierto datos fragmentados<br /><em>en decisiones estratégicas.</em></span>}
          </h1>

          <p className="hero-blurb" style={{ animation: 'slideUp 0.7s ease 0.35s both' }}>
            {lang === 'en'
              ? 'Senior analyst building Single-Source-of-Truth ecosystems with Power BI, Python and AI. Currently at DiDi Global — previously OPPO, Concentrix.'
              : 'Analista senior construyendo ecosistemas Single-Source-of-Truth con Power BI, Python e IA. Actualmente en DiDi Global — antes OPPO, Concentrix.'}
          </p>

          <div className="hero-role-row" style={{ animation: 'slideUp 0.6s ease 0.55s both' }}>
            <span className="hero-role-label">{lang === 'en' ? "I'm a" : 'Soy'}</span>
            <div className="hero-role-rotator" aria-live="polite">
              {prevRole !== null && (
                <span key={`prev-${prevRole}`} className="role-item">{roles[prevRole]}</span>
              )}
              <span key={`curr-${roleIndex}`} className="role-item active">{roles[roleIndex]}</span>
            </div>
          </div>
        </div>

        <div className="hero-meta">
          <div className="hero-meta-block">
            <span className="hero-meta-label">name</span>
            <span className="hero-meta-value">Stephanie Gonzalez</span>
          </div>
          <div className="hero-meta-block">
            <span className="hero-meta-label hero-currently">
              {lang === 'en' ? 'Currently →' : 'Actualmente →'}
            </span>
            <span className="hero-meta-value hero-meta-current">DiDi Global</span>
          </div>
        </div>
      </div>

      <div className="hero-bottom container">
        <a href="#impact" className="hero-scroll-link">
          <span className="hero-scroll-icon">↓</span>
          {lang === 'en' ? 'Scroll to explore' : 'Desliza para explorar'}
        </a>
        <div className="hero-bottom-links">
          <a href="https://github.com/Stepha-Gonz" target="_blank" rel="noopener noreferrer">github</a>
          <a href="https://www.linkedin.com/in/stephanie-gonzalez-m/" target="_blank" rel="noopener noreferrer">linkedin</a>
          <a href="mailto:gstephaniegonz@gmail.com">email</a>
        </div>
      </div>
    </section>
  );
}
