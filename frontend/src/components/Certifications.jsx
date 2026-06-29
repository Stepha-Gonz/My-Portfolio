import { useRef, useState } from 'react';
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

export default function Certifications() {
  const { lang } = useApp();
  const [modalCert, setModalCert] = useState(null);
  const carouselRef = useRef(null);
  const trackRef = useRef(null);
  const dragRef = useRef({ isDragging: false, startX: 0, baseOffset: 0, timer: null });

  function pauseAnim() {
    const track = trackRef.current;
    if (!track) return;
    const matrix = new DOMMatrix(getComputedStyle(track).transform);
    dragRef.current.baseOffset = matrix.m41;
    track.style.transform = `translateX(${dragRef.current.baseOffset}px)`;
    track.classList.add('paused');
  }

  function resumeAnim() {
    const track = trackRef.current;
    if (!track) return;
    track.style.transform = '';
    track.classList.remove('paused');
  }

  function onMouseDown(e) {
    dragRef.current.isDragging = true;
    dragRef.current.startX = e.clientX;
    clearTimeout(dragRef.current.timer);
    pauseAnim();
    if (carouselRef.current) carouselRef.current.style.cursor = 'grabbing';
    e.preventDefault();
  }

  function onMouseMove(e) {
    if (!dragRef.current.isDragging) return;
    const track = trackRef.current;
    if (track) track.style.transform = `translateX(${dragRef.current.baseOffset + (e.clientX - dragRef.current.startX)}px)`;
  }

  function onMouseUp() {
    if (!dragRef.current.isDragging) return;
    dragRef.current.isDragging = false;
    if (carouselRef.current) carouselRef.current.style.cursor = '';
    dragRef.current.timer = setTimeout(resumeAnim, 800);
  }

  function onTouchStart(e) {
    dragRef.current.startX = e.touches[0].clientX;
    clearTimeout(dragRef.current.timer);
    pauseAnim();
  }

  function onTouchMove(e) {
    const track = trackRef.current;
    if (track) track.style.transform = `translateX(${dragRef.current.baseOffset + (e.touches[0].clientX - dragRef.current.startX)}px)`;
  }

  function onTouchEnd() {
    dragRef.current.timer = setTimeout(resumeAnim, 800);
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
      <div className="container">
        <h2 className="section-title">
          {lang === 'en' ? 'Certifications' : 'Certificaciones'}
        </h2>
      </div>

      <div
        className="certs-carousel"
        ref={carouselRef}
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
