import { useEffect } from 'react';

export function useScrollReveal() {
  useEffect(() => {
    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.12 });

    const observe = () => {
      document.querySelectorAll('.reveal').forEach(el => io.observe(el));
    };

    observe();
    // Re-observe after a tick so dynamically rendered elements are caught
    const t = setTimeout(observe, 100);
    return () => { clearTimeout(t); io.disconnect(); };
  }, []);
}
