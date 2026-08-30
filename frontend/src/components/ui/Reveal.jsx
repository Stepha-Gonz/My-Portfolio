import { useEffect, useRef, useState } from 'react';

function useInView(delay) {
  const ref = useRef(null);
  const [shown, setShown] = useState(false);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setTimeout(() => setShown(true), delay); obs.disconnect(); }
    }, { threshold: 0 });
    obs.observe(el);
    const r = el.getBoundingClientRect();
    if (r.top < window.innerHeight && r.bottom > 0) { setTimeout(() => setShown(true), delay); obs.disconnect(); }
    return () => obs.disconnect();
  }, [delay]);
  return [ref, shown];
}

// Scroll-triggered fade/slide reveal for any block.
export function Reveal({ children, as: Tag = 'div', delay = 0, style = {}, className = '' }) {
  const [ref, shown] = useInView(delay);
  return (
    <Tag ref={ref} className={className} style={{
      ...style,
      opacity: shown ? 1 : 0,
      transform: shown ? 'translateY(0)' : 'translateY(18px)',
      transition: 'opacity .9s cubic-bezier(.2,.7,.2,1), transform .9s cubic-bezier(.2,.7,.2,1)',
    }}>
      {children}
    </Tag>
  );
}

// Word-by-word reveal for headlines.
export function RevealWords({ text, style = {}, className = '', delay = 0, stagger = 60 }) {
  const [ref, shown] = useInView(delay);
  const words = String(text).split(' ');
  return (
    <span ref={ref} className={className} style={style}>
      {words.map((w, i) => (
        <span key={i} style={{ display: 'inline-block', overflow: 'hidden', verticalAlign: 'top', marginRight: '0.18em', paddingRight: '0.12em', paddingBottom: '0.18em', marginBottom: '-0.18em' }}>
          <span style={{
            display: 'inline-block',
            transform: shown ? 'translateY(0)' : 'translateY(110%)',
            opacity: shown ? 1 : 0,
            transition: `transform .8s cubic-bezier(.2,.7,.2,1) ${i * stagger}ms, opacity .8s ease ${i * stagger}ms`,
          }}>{w}</span>
        </span>
      ))}
    </span>
  );
}
