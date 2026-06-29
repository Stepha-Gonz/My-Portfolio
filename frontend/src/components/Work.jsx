import { useState } from 'react';
import { useApp } from '../context/AppContext';
import { DATA } from '../data/portfolioData';
import Modal from './Modal';

function ProjectModalContent({ project, lang }) {
  return (
    <>
      <img className="modal-img" src={project.img} alt={project.title} loading="lazy" />
      <p className="modal-kind">{project.kind[lang]}</p>
      <h2 className="modal-title">{project.title}</h2>
      <p className="modal-desc">{project.detail[lang]}</p>
      <div className="modal-stack">
        {project.stack.map(s => <span key={s} className="tag-pill">{s}</span>)}
      </div>
    </>
  );
}

export default function Work() {
  const { lang } = useApp();
  const [filter, setFilter] = useState('all');
  const [modalProject, setModalProject] = useState(null);

  const filters = [
    { key: 'all', label: 'ALL' },
    { key: 'bi',  label: 'BI'  },
    { key: 'web', label: 'WEB' },
  ];

  const filtered = filter === 'all'
    ? DATA.projects
    : DATA.projects.filter(p => p.tag === filter);

  return (
    <section id="work">
      <div className="container">
        <div className="work-header">
          <h2 className="section-title" style={{ marginBottom: 0 }}>
            {lang === 'en' ? 'Selected work' : 'Proyectos'}
          </h2>
          <div className="filter-btns" role="group" aria-label="Filter by category">
            {filters.map(f => (
              <button
                key={f.key}
                className={`filter-btn${filter === f.key ? ' active' : ''}`}
                onClick={() => setFilter(f.key)}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        <div className="projects-grid" aria-live="polite">
          {filtered.map((p, i) => (
            <article
              key={p.slug}
              className="project-card reveal"
              style={{ animationDelay: `${i * 60}ms` }}
              role="button"
              tabIndex={0}
              aria-label={`View ${p.title}`}
              onClick={() => setModalProject(p)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') setModalProject(p); }}
            >
              <div className="project-img-wrap">
                <img src={p.img} alt={p.title} loading="lazy" />
                <div className="project-badge">
                  <span className="project-tag">{p.tag.toUpperCase()}</span>
                </div>
              </div>
              <div className="project-info">
                <p className="project-kind">{p.kind[lang]}</p>
                <h3 className="project-title">{p.title}</h3>
                <p className="project-summary">{p.summary[lang]}</p>
                <div className="project-stack">
                  {p.stack.map(s => <span key={s} className="tag-pill">{s}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <Modal
        content={modalProject ? <ProjectModalContent project={modalProject} lang={lang} /> : null}
        onClose={() => setModalProject(null)}
      />
    </section>
  );
}
