import { useEffect, useRef, useState } from 'react';

export default function Cursor({ accent = 'var(--violet)' }) {
  const dotRef = useRef(null);
  const ringRef = useRef(null);
  const [label, setLabel] = useState(null);
  const [hovering, setHovering] = useState(false);
  const [isTouch, setIsTouch] = useState(true);

  useEffect(() => {
    const mq = window.matchMedia('(hover: none), (pointer: coarse)');
    const f = () => setIsTouch(mq.matches);
    f();
    mq.addEventListener('change', f);
    return () => mq.removeEventListener('change', f);
  }, []);

  useEffect(() => {
    if (isTouch) return;
    const dot = dotRef.current;
    const ring = ringRef.current;
    if (!dot || !ring) return;
    let mx = window.innerWidth / 2, my = window.innerHeight / 2;
    let rx = mx, ry = my;
    const onMove = (e) => {
      mx = e.clientX; my = e.clientY;
      dot.style.transform = `translate3d(${mx}px, ${my}px, 0) translate(-50%, -50%)`;
    };
    const tick = () => {
      rx += (mx - rx) * 0.18;
      ry += (my - ry) * 0.18;
      ring.style.transform = `translate3d(${rx}px, ${ry}px, 0) translate(-50%, -50%)`;
      requestAnimationFrame(tick);
    };
    const onOver = (e) => {
      const t = e.target.closest('[data-cursor]');
      if (t) { setHovering(true); setLabel(t.getAttribute('data-cursor') || null); }
      else { setHovering(false); setLabel(null); }
    };
    window.addEventListener('mousemove', onMove);
    window.addEventListener('mouseover', onOver);
    const raf = requestAnimationFrame(tick);
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
    };
  }, [isTouch]);

  if (isTouch) return null;

  return (
    <>
      <div ref={dotRef} style={{
        position: 'fixed', top: 0, left: 0, width: 6, height: 6,
        background: accent, borderRadius: '50%',
        pointerEvents: 'none', zIndex: 9999, mixBlendMode: 'difference',
      }} />
      <div ref={ringRef} style={{
        position: 'fixed', top: 0, left: 0,
        width: hovering ? 64 : 32, height: hovering ? 64 : 32,
        border: `1.5px solid ${accent}`, borderRadius: '50%',
        pointerEvents: 'none', zIndex: 9998,
        transition: 'width .25s, height .25s, background .25s',
        background: hovering ? accent + '22' : 'transparent',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontFamily: 'JetBrains Mono, monospace', fontSize: 9, letterSpacing: '.08em',
        color: accent, textTransform: 'uppercase',
      }}>
        {label && hovering && <span>{label}</span>}
      </div>
    </>
  );
}
