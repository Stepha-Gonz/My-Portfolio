import { useApp } from '../context/AppContext';

export default function About() {
  const { lang } = useApp();

  return (
    <section id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text reveal">
            <h2 className="about-headline">
              {lang === 'en'
                ? 'Two engineering degrees. One obsession: making data tell the truth.'
                : 'Dos títulos de ingeniería. Una obsesión: hacer que los datos digan la verdad.'}
            </h2>

            <div className="about-degrees">
              {lang === 'en' ? (
                <>
                  <span>Systems Eng. · EAN 2023</span>
                  <span className="about-degrees-sep">|</span>
                  <span>Chemical Eng. · EAN 2021</span>
                </>
              ) : (
                <>
                  <span>Ing. de Sistemas · EAN 2023</span>
                  <span className="about-degrees-sep">|</span>
                  <span>Ing. Química · EAN 2021</span>
                </>
              )}
            </div>

            <p className="about-p">
              {lang === 'en'
                ? 'I started in chemical engineering learning to model physical systems — mass balances, kinetics, thermodynamics. Then I pivoted to systems engineering and discovered you can apply the same rigour to data: model the flow, identify the constraints, optimise the output.'
                : 'Empecé en ingeniería química aprendiendo a modelar sistemas físicos — balances de masa, cinética, termodinámica. Luego cambié a ingeniería de sistemas y descubrí que puedes aplicar el mismo rigor a los datos: modela el flujo, identifica las restricciones, optimiza la salida.'}
            </p>

            <p className="about-p">
              {lang === 'en'
                ? 'Now I architect end-to-end data solutions across industries. The chemical-engineer brain keeps me honest about uncertainty. The software-engineer brain keeps me honest about scale.'
                : 'Ahora diseño soluciones de datos de extremo a extremo en distintas industrias. La mente de ingeniera química me mantiene honesta con la incertidumbre. La mente de ingeniera de sistemas me mantiene honesta con la escala.'}
            </p>

            <a href="/CV-Stephanie_Gonzalez.pdf" download className="cv-btn">
              {lang === 'en' ? 'Download CV' : 'Descargar CV'}
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/>
                <polyline points="7 10 12 15 17 10"/>
                <line x1="12" y1="15" x2="12" y2="3"/>
              </svg>
            </a>
          </div>

          <div className="about-visual reveal">
            <div className="about-img-wrap">
              <img src="/img/about-img.png" alt="Stephanie Gonzalez" loading="lazy" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
