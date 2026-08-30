import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import Hero from '../components/Hero';
import Work from '../components/Work';
import Impact from '../components/Impact';
import About from '../components/About';
import Career from '../components/Career';
import Services from '../components/Services';
import Credentials from '../components/Credentials';
import Contact from '../components/Contact';
import Footer from '../components/Footer';

const SECTION_ROUTES = {
  '/about': 'about',
  '/projects': 'work',
  '/impact': 'impact',
  '/career': 'career',
  '/services': 'services',
  '/credentials': 'credentials',
  '/contact': 'contact',
};

export default function Home() {
  const location = useLocation();

  // Handle scroll-to-section after navigating back from a project page,
  // or when landing directly on a section route like /contact.
  useEffect(() => {
    const target = sessionStorage.getItem('scrollTo') || SECTION_ROUTES[location.pathname] || null;
    if (!target) return;
    sessionStorage.removeItem('scrollTo');
    if (target === 'top') { window.scrollTo({ top: 0, behavior: 'smooth' }); return; }
    const attempt = (tries = 0) => {
      const el = document.getElementById(target);
      if (el) { el.scrollIntoView({ behavior: 'smooth' }); }
      else if (tries < 10) { setTimeout(() => attempt(tries + 1), 100); }
    };
    attempt();
  }, [location.pathname]);

  return (
    <main>
      <Hero />
      <Work />
      <Impact />
      <About />
      <Career />
      <Services />
      <Credentials />
      <Contact />
      <Footer />
    </main>
  );
}
