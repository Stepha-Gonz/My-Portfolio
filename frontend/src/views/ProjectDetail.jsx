import { useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useApp } from '../context/AppContext';
import { DATA } from '../data/portfolioData';

export default function ProjectDetail() {
  const { slug } = useParams();
  const { lang } = useApp();
  const navigate = useNavigate();
  const project = DATA.projects.find(p => p.slug === slug);

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

      <div className="container project-detail-body">

        {/* Video preview for web projects */}
        {project.video && (
          <div className="project-detail-media">
            <video
              src={project.video}
              autoPlay
              loop
              muted
              playsInline
              className="project-detail-video"
            />
          </div>
        )}

        {/* Static image if no video */}
        {!project.video && !project.embed && (
          <div className="project-detail-media">
            <img src={project.img} alt={project.title} className="project-detail-img" />
          </div>
        )}

        {/* Power BI embed */}
        {project.embed && (
          <div className="project-detail-embed">
            <iframe
              title={project.title}
              src={project.embed}
              frameBorder="0"
              allowFullScreen
              className="project-detail-iframe"
            />
          </div>
        )}

        <div className="project-detail-content">
          <h2 className="project-detail-section-title">
            {lang === 'en' ? 'About the project' : 'Sobre el proyecto'}
          </h2>
          <p className="project-detail-desc">{project.detail[lang]}</p>
        </div>

      </div>
    </div>
  );
}
