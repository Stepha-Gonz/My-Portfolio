import { useApp } from '../context/AppContext';
import { DATA } from '../data/portfolioData';

export default function Career() {
  const { lang } = useApp();

  return (
    <section id="career">
      <div className="container">
        <h2 className="section-title">
          {lang === 'en' ? 'Career' : 'Carrera'}
        </h2>
        <div className="timeline">
          {DATA.experience.map((job, i) => (
            <div key={i} className="timeline-item reveal" style={{ animationDelay: `${i * 80}ms` }}>
              <div className="timeline-date">{job.date[lang]}</div>
              <div className="timeline-body">
                <div className="timeline-company">
                  {job.current && <span className="timeline-current-dot" />}
                  {job.company}
                </div>
                <h3 className="timeline-role">{job.role[lang]}</h3>
                <p className="timeline-desc">{job.desc[lang]}</p>
                <div className="timeline-stack">
                  {job.stack.map(s => <span key={s} className="tag-pill">{s}</span>)}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
