import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { DATA } from '../data/portfolioData';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { lang } = useApp();
  const navigate = useNavigate();

  const projects = DATA.projects;
  const idx = projects.findIndex(p => p.slug === slug);
  const project = projects[idx];
  const prev = idx > 0 ? projects[idx - 1] : null;
  const next = idx < projects.length - 1 ? projects[idx + 1] : null;

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!project) {
    return (
      <div className="project-detail-notfound container">
        <p>Project not found.</p>
        <button onClick={() => navigate('/')} className="back-btn">← Back</button>
      </div>
    );
  }

  return (
    <div className="project-detail">
      <div className="project-detail-hero">
        <div className="container">
          <button className="back-btn" onClick={() => navigate('/#work')}>
            ← {lang === 'en' ? 'Back to work' : 'Volver'}
          </button>
          <p className="project-detail-kind">{project.kind[lang]}</p>
          <h1 className="project-detail-title">{project.title}</h1>
          <div className="project-detail-stack">
            {project.stack.map(s => <span key={s} className="tag-pill">{s}</span>)}
          </div>
        </div>
      </div>

      <div className="project-detail-body">

        {/* Video preview — with controls + sound (no autoplay) */}
        {project.video && (
          <div className="project-detail-media container">
            <video
              src={project.video}
              controls
              playsInline
              preload="none"
              poster={project.img}
              className="project-detail-video"
            />
          </div>
        )}

        {/* Static image if no video and no embed */}
        {!project.video && !project.embed && (
          <div className="project-detail-media container">
            <img src={project.img} alt={project.title} className="project-detail-img" />
          </div>
        )}

        {/* Power BI embed — full-width breakout */}
        {project.embed && (
          <div className="project-detail-embed-wide">
            <iframe
              title={project.title}
              src={project.embed}
              frameBorder="0"
              allowFullScreen
              className="project-detail-iframe"
            />
          </div>
        )}

        {/* Description */}
        <div className="container project-detail-content">
          <div className="project-detail-cols">
            <div className="project-detail-desc-col">
              <h2 className="project-detail-section-title">
                {lang === 'en' ? 'About the project' : 'Sobre el proyecto'}
              </h2>
              <p className="project-detail-desc">{project.detail[lang]}</p>
              {project.longDetail && (
                <p className="project-detail-desc">{project.longDetail[lang]}</p>
              )}
            </div>
            <div className="project-detail-stack-col">
              <h2 className="project-detail-section-title">
                {lang === 'en' ? 'Built with' : 'Construido con'}
              </h2>
              <ul className="project-detail-tools">
                {project.stack.map(s => (
                  <li key={s} className="project-detail-tool">{s}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Prev / Next navigation */}
        <div className="project-nav-bar container">
          <div className="project-nav-side">
            {prev && (
              <button className="project-nav-btn" onClick={() => navigate(`/project/${prev.slug}`)}>
                <span className="project-nav-label">
                  ← {lang === 'en' ? 'Previous' : 'Anterior'}
                </span>
                <span className="project-nav-name">{prev.title}</span>
              </button>
            )}
          </div>
          <div className="project-nav-center">
            <button className="project-nav-all" onClick={() => navigate('/#work')}>
              {lang === 'en' ? 'All projects' : 'Todos los proyectos'}
            </button>
          </div>
          <div className="project-nav-side project-nav-right">
            {next && (
              <button className="project-nav-btn" onClick={() => navigate(`/project/${next.slug}`)}>
                <span className="project-nav-label">
                  {lang === 'en' ? 'Next' : 'Siguiente'} →
                </span>
                <span className="project-nav-name">{next.title}</span>
              </button>
            )}
          </div>
        </div>

      </div>
    </div>
  );
}
