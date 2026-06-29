import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { DATA } from '../data/portfolioData';

export default function Work() {
  const { lang } = useApp();
  const navigate = useNavigate();
  const [filter, setFilter] = useState('all');
  const gridRef = useRef(null);

  const filters = [
    { key: 'all', label: 'ALL' },
    { key: 'bi',  label: 'BI'  },
    { key: 'web', label: 'WEB' },
  ];

  const filtered = filter === 'all'
    ? DATA.projects
    : DATA.projects.filter(p => p.tag === filter);

  // Re-observe cards every time the filtered list changes
  useEffect(() => {
    const grid = gridRef.current;
    if (!grid) return;

    const io = new IntersectionObserver((entries) => {
      entries.forEach(e => {
        if (e.isIntersecting) {
          e.target.classList.add('visible');
          io.unobserve(e.target);
        }
      });
    }, { threshold: 0.08 });

    grid.querySelectorAll('.reveal').forEach(el => {
      el.classList.remove('visible');
      io.observe(el);
    });

    return () => io.disconnect();
  }, [filtered]);

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

        <div className="projects-grid" ref={gridRef} aria-live="polite">
          {filtered.map((p, i) => (
            <article
              key={p.slug}
              className="project-card reveal"
              style={{ animationDelay: `${i * 60}ms` }}
              role="button"
              tabIndex={0}
              aria-label={`View ${p.title}`}
              onClick={() => navigate(`/project/${p.slug}`)}
              onKeyDown={(e) => { if (e.key === 'Enter' || e.key === ' ') navigate(`/project/${p.slug}`); }}
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
    </section>
  );
}
