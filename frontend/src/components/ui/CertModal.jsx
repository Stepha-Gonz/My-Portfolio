import { useEffect } from 'react';

export default function CertModal({ cert, onClose }) {
  useEffect(() => {
    if (!cert) return;
    document.body.style.overflow = 'hidden';
    const k = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', k);
    return () => { document.body.style.overflow = ''; window.removeEventListener('keydown', k); };
  }, [cert, onClose]);

  if (!cert) return null;

  return (
    <div onClick={onClose} style={{ position: 'fixed', inset: 0, zIndex: 300, background: 'oklch(8% 0.02 292 / .78)', backdropFilter: 'blur(6px)', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: 24, animation: 'fadeIn .25s' }}>
      <div onClick={(e) => e.stopPropagation()} className="card" style={{ maxWidth: 820, width: '100%', maxHeight: '88vh', overflow: 'auto', animation: 'modalIn .35s cubic-bezier(.2,.7,.2,1)' }}>
        <div style={{ padding: '26px 30px', borderBottom: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', gap: 20, alignItems: 'flex-start' }}>
          <div>
            <div className="mono" style={{ fontSize: 10, letterSpacing: '.14em', color: 'var(--violet)', marginBottom: 8 }}>{cert.org} · {cert.date}</div>
            <div className="disp" style={{ fontSize: 28 }}>{cert.title}</div>
          </div>
          <button onClick={onClose} data-cursor="close" className="plus">×</button>
        </div>
        <div style={{ padding: 26, background: 'var(--bg-2)' }}>
          <img src={cert.img} alt={cert.title} style={{ width: '100%', display: 'block', borderRadius: 10 }} />
        </div>
      </div>
    </div>
  );
}
