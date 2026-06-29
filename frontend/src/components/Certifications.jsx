import { useRef, useState, useEffect } from 'react';
import { useApp } from '../context/AppContext';
import { DATA } from '../data/portfolioData';
import Modal from './Modal';

function CertModalContent({ cert }) {
  return (
    <>
      <img className="modal-cert-img" src={cert.img} alt={cert.title} />
      <p className="modal-kind">{cert.org}</p>
      <h2 className="modal-title">{cert.title}</h2>
      <p className="modal-desc">{cert.date}</p>
    </>
  );
}

const SPEED = 0.5; // px per frame
const CARD_WIDTH = 296; // px per card step for buttons

export default function Certifications() {
  const { lang } = useApp();
  const [modalCert, setModalCert] = useState(null);
  const trackRef = useRef(null);
  const stateRef = useRef({ x: 0, paused: false, dragging: false, startX: 0, startOffset: 0 });
  const rafRef = useRef(null);

  // Pure JS auto-scroll loop — no CSS animation
  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    function loop() {
      const s = stateRef.current;
      if (!s.paused && !s.dragging) {
        s.x -= SPEED;
        // Reset when we've scrolled half (the duplicate starts)
        const half = track.scrollWidth / 2;
        if (Math.abs(s.x) >= half) s.x = 0;
        track.style.transform = `translateX(${s.x}px)`;
      }
      rafRef.current = requestAnimationFrame(loop);
    }

    rafRef.current = requestAnimationFrame(loop);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  function pause(ms) {
    stateRef.current.paused = true;
    clearTimeout(stateRef.current.resumeTimer);
    if (ms) stateRef.current.resumeTimer = setTimeout(() => { stateRef.current.paused = false; }, ms);
  }

  function scrollBy(delta) {
    stateRef.current.x += delta;
    if (trackRef.current) trackRef.current.style.transform = `translateX(${stateRef.current.x}px)`;
    pause(2000);
  }

  // Drag handlers
  function onMouseDown(e) {
    stateRef.current.dragging = true;
    stateRef.current.startX = e.clientX;
    stateRef.current.startOffset = stateRef.current.x;
    e.currentTarget.style.cursor = 'grabbing';
    e.preventDefault();
  }
  function onMouseMove(e) {
    if (!stateRef.current.dragging) return;
    stateRef.current.x = stateRef.current.startOffset + (e.clientX - stateRef.current.startX);
    if (trackRef.current) trackRef.current.style.transform = `translateX(${stateRef.current.x}px)`;
  }
  function onMouseUp(e) {
    if (!stateRef.current.dragging) return;
    stateRef.current.dragging = false;
    e.currentTarget.style.cursor = '';
    pause(800);
  }
  function onTouchStart(e) {
    stateRef.current.dragging = true;
    stateRef.current.startX = e.touches[0].clientX;
    stateRef.current.startOffset = stateRef.current.x;
  }
  function onTouchMove(e) {
    if (!stateRef.current.dragging) return;
    stateRef.current.x = stateRef.current.startOffset + (e.touches[0].clientX - stateRef.current.startX);
    if (trackRef.current) trackRef.current.style.transform = `translateX(${stateRef.current.x}px)`;
  }
  function onTouchEnd() {
    stateRef.current.dragging = false;
    pause(800);
  }

  const cards = DATA.certs.map((cert, i) => (
    <div
      key={i}
      className="cert-card"
      role="button"
      tabIndex={0}
      aria-label={`View ${cert.title}`}
      onClick={() => setModalCert(cert)}
      onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setModalCert(cert); }}
    >
      <div className="cert-img-wrap">
        <img src={cert.img} alt={cert.title} loading="lazy" />
      </div>
      <div className="cert-info">
        <h3 className="cert-title">{cert.title}</h3>
        <p className="cert-org">{cert.org}</p>
        <p className="cert-date">{cert.date} · <span className="cert-view">{lang === 'en' ? 'view ↗' : 'ver ↗'}</span></p>
      </div>
    </div>
  ));

  return (
    <section id="certs">
      <div className="container certs-header">
        <h2 className="section-title">
          {lang === 'en' ? 'Certifications' : 'Certificaciones'}
        </h2>
        <div className="certs-nav">
          <button className="certs-nav-btn" onClick={() => scrollBy(CARD_WIDTH)} aria-label="Previous">←</button>
          <button className="certs-nav-btn" onClick={() => scrollBy(-CARD_WIDTH)} aria-label="Next">→</button>
        </div>
      </div>

      <div
        className="certs-carousel"
        onMouseDown={onMouseDown}
        onMouseMove={onMouseMove}
        onMouseUp={onMouseUp}
        onMouseLeave={onMouseUp}
        onTouchStart={onTouchStart}
        onTouchMove={onTouchMove}
        onTouchEnd={onTouchEnd}
      >
        <div className="certs-track" ref={trackRef}>
          {cards}
          {cards}
        </div>
      </div>

      <Modal
        content={modalCert ? <CertModalContent cert={modalCert} /> : null}
        onClose={() => setModalCert(null)}
      />
    </section>
  );
}
