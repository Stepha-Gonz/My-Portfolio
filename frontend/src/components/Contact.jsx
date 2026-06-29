import { useApp } from '../context/AppContext';

export default function Contact() {
  const { lang } = useApp();

  return (
    <section className="contact" id="contact">
      <div className="container contact-inner">
        <h2 className="contact-headline">
          {lang === 'en'
            ? <><span>Let us turn data</span><em>/ into decisions.</em></>
            : <><span>Convirtamos los datos</span><em>/ en decisiones.</em></>}
        </h2>
        <a href="mailto:gstephaniegonz@gmail.com" className="contact-email">
          gstephaniegonz@gmail.com
        </a>
        <div className="contact-links">
          <a href="https://www.linkedin.com/in/stephanie-gonzalez-m/" target="_blank" rel="noopener noreferrer" className="pill-btn">LinkedIn ↗</a>
          <a href="https://github.com/Stepha-Gonz" target="_blank" rel="noopener noreferrer" className="pill-btn">GitHub ↗</a>
        </div>
      </div>
      <div className="container">
        <footer className="footer">© Stephanie Gonzalez | Portfolio</footer>
      </div>
    </section>
  );
}
