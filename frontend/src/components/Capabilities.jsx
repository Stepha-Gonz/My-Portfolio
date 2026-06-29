import { useApp } from '../context/AppContext';
import { DATA } from '../data/portfolioData';

export default function Capabilities() {
  const { lang } = useApp();

  return (
    <section id="capabilities">
      <div className="container">
        <h2 className="section-title">
          {lang === 'en' ? 'Capabilities' : 'Capacidades'}
        </h2>
        <div className="caps-grid">
          {DATA.capabilities.map((cap, i) => (
            <div key={i} className="cap-card reveal" style={{ animationDelay: `${i * 60}ms` }}>
              <p className="cap-counter">0{i + 1}</p>
              <h3 className="cap-area">{cap.area[lang]}</h3>
              <div className="cap-items">
                {cap.items.map(item => <span key={item} className="cap-item">{item}</span>)}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
