import { useEffect } from 'react';
import { useScrollReveal } from '../hooks/useScrollReveal';
import Hero from '../components/Hero';
import Stats from '../components/Stats';
import About from '../components/About';
import Work from '../components/Work';
import Career from '../components/Career';
import Capabilities from '../components/Capabilities';
import Certifications from '../components/Certifications';
import Contact from '../components/Contact';

export default function Home() {
  useScrollReveal();

  // Handle scroll-to-section after navigating back from a project page
  useEffect(() => {
    const target = sessionStorage.getItem('scrollTo');
    if (!target) return;
    sessionStorage.removeItem('scrollTo');
    if (target === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    // Wait for DOM to paint
    const attempt = (tries = 0) => {
      const el = document.getElementById(target);
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); }
      else if (tries < 10) { setTimeout(() => attempt(tries + 1), 100); }
    };
    attempt();
  }, []);

  return (
    <main>
      <Hero />
      <Stats />
      <About />
      <Work />
      <Career />
      <Capabilities />
      <Certifications />
      <Contact />
    </main>
  );
}
