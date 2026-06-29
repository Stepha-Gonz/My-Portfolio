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
