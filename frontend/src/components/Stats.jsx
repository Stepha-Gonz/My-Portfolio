import { useApp } from '../context/AppContext';

export default function Stats() {
  const { lang } = useApp();

  return (
    <section className="stats" id="impact">
      <div className="container">
        <div className="stats-grid">
          <div className="stat-card reveal">
            <div className="stat-value">QA Hero</div>
            <div className="stat-label">
              {lang === 'en'
                ? 'Custom AI agent currently powering CX QA Deep-Dive analyses across 6 LATAM countries'
                : 'Agente IA propio que potencia análisis Deep-Dive de QA CX en 6 países de LATAM'}
            </div>
            <div className="stat-note">
              {lang === 'en' ? 'DiDi Global · 2026 — In progress' : 'DiDi Global · 2026 — En curso'}
            </div>
          </div>

          <div className="stat-card reveal">
            <div className="stat-value">$379M→$12M</div>
            <div className="stat-label">
              {lang === 'en'
                ? 'Outstanding debt reduced through automation & process redesign'
                : 'Deuda pendiente reducida con automatización y rediseño de procesos'}
            </div>
            <div className="stat-note">OPPO Colombia · 2025</div>
          </div>

          <div className="stat-card reveal">
            <div className="stat-value">$1B+</div>
            <div className="stat-label">
              {lang === 'en'
                ? 'COP in commissions automated monthly across 3 retail chains'
                : 'COP en comisiones automatizadas al mes en 3 cadenas retail'}
            </div>
            <div className="stat-note">OPPO Colombia · 2025</div>
          </div>
        </div>
      </div>
    </section>
  );
}
