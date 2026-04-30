// ── Data ───────────────────────────────────────────────────────────────────

const DATA = {
  roles: {
    en: ['Data & AI Strategist', 'BI Engineer', 'Data Analyst', 'Web Developer'],
    es: ['Estratega de Datos e IA', 'Ingeniera BI', 'Analista de Datos', 'Desarrolladora Web'],
  },

  projects: [
    {
      slug: 'audit-tracker',
      tag: 'bi',
      img: 'src/img/trackerdashboard-img.png',
      title: 'Audit Tracker Dashboard',
      year: '2024',
      kind: { en: 'Dashboard', es: 'Dashboard' },
      summary: {
        en: 'End-to-end Power BI solution tracking regulatory audit findings across 12 business units.',
        es: 'Solución Power BI de extremo a extremo para seguimiento de hallazgos de auditoría regulatoria.',
      },
      detail: {
        en: 'Built a full Power BI reporting suite to track and escalate audit findings in real time. Automated data refresh pipelines from SQL Server, reducing reporting lag from 3 days to 4 hours. The solution covered 12 business units across 3 regions.',
        es: 'Construí un conjunto completo de reportes Power BI para rastrear y escalar hallazgos de auditoría en tiempo real. Pipelines de datos automatizados desde SQL Server, reduciendo el rezago de reportes de 3 días a 4 horas.',
      },
      stack: ['Power BI', 'SQL', 'Python'],
    },
    {
      slug: 'market-food',
      tag: 'bi',
      img: 'src/img/Market-food-beverage.png',
      title: 'Food & Beverage Market Analysis',
      year: '2024',
      kind: { en: 'Analysis', es: 'Análisis' },
      summary: {
        en: 'Competitive landscape analysis for a regional food & beverage distributor using web-scraped data.',
        es: 'Análisis de panorama competitivo para distribuidora regional usando datos web scrapeados.',
      },
      detail: {
        en: 'Scraped product and pricing data from 8 competitor websites using Python. Built a Power BI dashboard to track market positioning and identify pricing gaps. Delivered actionable recommendations that led to a 12% revenue increase.',
        es: 'Recopilé datos de productos y precios de 8 sitios competidores con Python. Construí un dashboard en Power BI para rastrear posicionamiento de mercado e identificar brechas de precio.',
      },
      stack: ['Python', 'Power BI', 'Excel'],
    },
    {
      slug: 'glow-radiance',
      tag: 'web',
      img: 'src/img/glowradiance-img.png',
      title: 'Glow Radiance',
      year: '2023',
      kind: { en: 'E-commerce', es: 'E-commerce' },
      summary: {
        en: 'Full-stack e-commerce for a cosmetics brand, with custom inventory management system.',
        es: 'E-commerce full-stack para marca de cosméticos con sistema de inventario personalizado.',
      },
      detail: {
        en: 'Designed and built a full e-commerce experience for a local cosmetics brand. Custom PHP backend with MySQL, Stripe integration, and a lightweight inventory management system with low-stock alerts.',
        es: 'Diseñé y construí una experiencia de e-commerce completa para una marca local de cosméticos. Backend PHP con MySQL, integración Stripe y sistema de inventario con alertas de stock bajo.',
      },
      stack: ['PHP', 'MySQL', 'Bootstrap'],
    },
    {
      slug: 'home-hunter',
      tag: 'web',
      img: 'src/img/homehunter2.png',
      title: 'HomeHunter',
      year: '2023',
      kind: { en: 'Real Estate App', es: 'App Inmobiliaria' },
      summary: {
        en: 'Property search platform with advanced filtering, map integration, and agent contact flow.',
        es: 'Plataforma de búsqueda de propiedades con filtros avanzados, integración de mapa y contacto.',
      },
      detail: {
        en: 'Full-stack React application for property search with Mapbox integration, advanced filtering (price, area, amenities), and a streamlined agent contact flow. Backend built with Node.js and PostgreSQL.',
        es: 'Aplicación React full-stack para búsqueda de propiedades con integración Mapbox, filtros avanzados y flujo de contacto con agentes. Backend con Node.js y PostgreSQL.',
      },
      stack: ['React', 'Node.js', 'PostgreSQL'],
    },
    {
      slug: 'task-nexus',
      tag: 'web',
      img: 'src/img/tasknexus-img.png',
      title: 'TaskNexus',
      year: '2022',
      kind: { en: 'Project Management', es: 'Gestión de Proyectos' },
      summary: {
        en: 'Collaborative project management tool with real-time updates and role-based access control.',
        es: 'Herramienta de gestión de proyectos colaborativa con actualizaciones en tiempo real y control de acceso.',
      },
      detail: {
        en: 'Built a Trello-style project management app with Vue.js and Firebase. Features include real-time updates via Firestore, drag-and-drop boards, role-based access (admin/member/viewer), and email notifications.',
        es: 'Construí una app de gestión de proyectos estilo Trello con Vue.js y Firebase. Actualizaciones en tiempo real, tableros drag-and-drop, acceso por roles y notificaciones por correo.',
      },
      stack: ['Vue.js', 'Firebase', 'Tailwind'],
    },
    {
      slug: 'biz-expo',
      tag: 'web',
      img: 'src/img/bizexpo-img.png',
      title: 'BizExpo',
      year: '2022',
      kind: { en: 'Business Directory', es: 'Directorio Empresarial' },
      summary: {
        en: 'Regional business directory with geolocation, category filtering, and promoted listings.',
        es: 'Directorio empresarial regional con geolocalización, filtro por categoría y listados promocionados.',
      },
      detail: {
        en: 'WordPress-based business directory with custom post types, Google Maps integration for geolocation browsing, advanced category filtering, and a promoted listing system with PayPal checkout.',
        es: 'Directorio empresarial en WordPress con tipos de contenido personalizados, integración Google Maps, filtrado por categorías y sistema de listados promocionados con pago PayPal.',
      },
      stack: ['WordPress', 'PHP', 'MySQL'],
    },
  ],

  experience: [
    {
      date: { en: 'Jan 2026 — Present', es: 'Ene 2026 — Presente' },
      current: true,
      company: 'DiDi Global',
      role: { en: 'Senior Data Analyst', es: 'Analista de Datos Senior' },
      desc: {
        en: 'Building an AI-powered QA agent to automate quality assurance workflows across operations teams. Designing real-time dashboards and data pipelines to surface operational insights.',
        es: 'Construyendo un agente IA para automatizar flujos de control de calidad en equipos de operaciones. Diseñando dashboards en tiempo real y pipelines de datos para visibilidad operativa.',
      },
      stack: ['Python', 'SQL', 'Power BI', 'Azure'],
    },
    {
      date: { en: 'Mar 2024 — Dec 2025', es: 'Mar 2024 — Dic 2025' },
      current: false,
      company: 'OPPO Colombia',
      role: { en: 'Data Analyst', es: 'Analista de Datos' },
      desc: {
        en: 'Reduced outstanding debt portfolio from $379M to $12M through predictive analytics. Automated $1B+ COP in monthly commissions via VBA-integrated Excel systems.',
        es: 'Reduje cartera de deuda de $379M a $12M mediante analítica predictiva. Automaticé más de $1B COP en comisiones mensuales mediante sistemas Excel con VBA.',
      },
      stack: ['Python', 'Excel / VBA', 'SQL', 'Power BI'],
    },
    {
      date: { en: 'Jun 2023 — Feb 2024', es: 'Jun 2023 — Feb 2024' },
      current: false,
      company: 'Freelance',
      role: { en: 'Full Stack Developer', es: 'Desarrolladora Full Stack' },
      desc: {
        en: 'Delivered custom web applications for SMEs across retail, real estate, and services sectors. Focused on clean UX, solid backend architecture, and maintainable codebases.',
        es: 'Desarrollé aplicaciones web para PYMEs en retail, inmobiliaria y servicios. Enfoque en UX limpia, arquitectura backend sólida y código mantenible.',
      },
      stack: ['React', 'PHP', 'MySQL', 'WordPress'],
    },
    {
      date: { en: 'Jan 2022 — May 2023', es: 'Ene 2022 — May 2023' },
      current: false,
      company: 'EAN University',
      role: { en: 'Research Assistant — Data Lab', es: 'Asistente de Investigación — Data Lab' },
      desc: {
        en: 'Supported faculty research on business intelligence applications in SME contexts. Built datasets, ran statistical analyses, and contributed to two published working papers.',
        es: 'Apoyé investigación docente sobre aplicaciones de inteligencia de negocios en PYMEs. Construí datasets, ejecuté análisis estadísticos y contribuí a dos working papers publicados.',
      },
      stack: ['Python', 'R', 'SPSS', 'Power BI'],
    },
    {
      date: { en: 'Jun 2021 — Dec 2021', es: 'Jun 2021 — Dic 2021' },
      current: false,
      company: 'Colfondos',
      role: { en: 'Data & Reporting Intern', es: 'Practicante de Datos y Reportes' },
      desc: {
        en: 'Automated weekly regulatory reports, cutting production time by 70%. Built Excel dashboards for pension fund performance tracking.',
        es: 'Automaticé reportes regulatorios semanales reduciendo el tiempo de producción en 70%. Construí dashboards Excel para seguimiento de fondos de pensión.',
      },
      stack: ['Excel', 'SQL', 'VBA'],
    },
  ],

  capabilities: [
    {
      area: { en: 'Business Intelligence', es: 'Inteligencia de Negocios' },
      items: ['Power BI', 'Tableau', 'Excel / VBA', 'DAX', 'ETL Design', 'KPI Frameworks'],
    },
    {
      area: { en: 'Data Engineering', es: 'Ingeniería de Datos' },
      items: ['Python', 'SQL', 'PostgreSQL', 'MySQL', 'Azure', 'Data Modeling'],
    },
    {
      area: { en: 'AI & Automation', es: 'IA y Automatización' },
      items: ['LLM Integration', 'Prompt Engineering', 'Workflow Automation', 'Python Scripting', 'API Design'],
    },
    {
      area: { en: 'Web Development', es: 'Desarrollo Web' },
      items: ['React', 'HTML / CSS / SASS', 'JavaScript', 'PHP', 'MySQL', 'WordPress'],
    },
  ],

  certs: [
    {
      img: 'src/img/certificate-DataAnalytics.png',
      title: 'Google Data Analytics Professional Certificate',
      org: 'Google / Coursera',
      date: '2023',
    },
    {
      img: 'src/img/certificate-WebDevelopment.png',
      title: 'Full Stack Web Development Bootcamp',
      org: 'Platzi',
      date: '2022',
    },
    {
      img: 'src/img/certificate-AutomatedTesting.png',
      title: 'Automated Testing with Python',
      org: 'Udemy',
      date: '2024',
    },
    {
      img: 'src/img/SG.png',
      title: 'Power BI Data Analyst Associate',
      org: 'Microsoft',
      date: '2023',
    },
    {
      img: 'src/img/SG.png',
      title: 'SQL for Data Science',
      org: 'UC Davis / Coursera',
      date: '2022',
    },
  ],
};


// ── State ──────────────────────────────────────────────────────────────────

let lang = 'en';
let theme = 'dark';
let filter = 'all';
let roleIndex = 0;
let roleTimer = null;


// ── Init ───────────────────────────────────────────────────────────────────

document.addEventListener('DOMContentLoaded', () => {
  loadPrefs();
  renderProjects();
  renderCareer();
  renderCaps();
  renderCerts();
  initCursor();
  initParticles();
  initScrollReveal();
  initNav();
  initRoleRotator();
  initToggleButtons();
  initFilters();
  initModals();
  initHeroReveal();
});


// ── Preferences ────────────────────────────────────────────────────────────

function loadPrefs() {
  const savedTheme = localStorage.getItem('theme');
  const savedLang  = localStorage.getItem('lang');
  if (savedTheme) setTheme(savedTheme, false);
  if (savedLang)  setLang(savedLang, false);
}

function setTheme(t, save = true) {
  theme = t;
  document.documentElement.dataset.theme = t;
  if (save) localStorage.setItem('theme', t);
}

function setLang(l, save = true) {
  lang = l;
  document.documentElement.dataset.lang = l;
  document.documentElement.lang = l;
  if (save) localStorage.setItem('lang', l);
  // Re-render dynamic sections
  renderProjects();
  renderCareer();
  renderCaps();
  renderCerts();
  restartRoleRotator();
}


// ── Toggle buttons ─────────────────────────────────────────────────────────

function initToggleButtons() {
  document.getElementById('themeToggle').addEventListener('click', () => {
    setTheme(theme === 'dark' ? 'light' : 'dark');
  });

  document.getElementById('langToggle').addEventListener('click', () => {
    setLang(lang === 'en' ? 'es' : 'en');
  });
}


// ── Nav ────────────────────────────────────────────────────────────────────

function initNav() {
  const nav  = document.getElementById('nav');
  const btn  = document.getElementById('menuToggle');
  const mob  = document.getElementById('navMobile');

  // Frosted glass on scroll
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  // Mobile menu
  btn.addEventListener('click', () => {
    const open = mob.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });

  // Close mobile nav on link click
  mob.querySelectorAll('a').forEach(a => {
    a.addEventListener('click', () => {
      mob.classList.remove('open');
      btn.setAttribute('aria-expanded', 'false');
    });
  });
}


// ── Role rotator ───────────────────────────────────────────────────────────

function initRoleRotator() {
  restartRoleRotator();
}

function restartRoleRotator() {
  if (roleTimer) clearInterval(roleTimer);
  const el = document.getElementById('roleRotator');
  if (!el) return;

  const roles = DATA.roles[lang];
  roleIndex = 0;

  el.innerHTML = `<span class="role-item active">${roles[roleIndex]}</span>`;

  roleTimer = setInterval(() => {
    const items = el.querySelectorAll('.role-item');
    items.forEach(i => i.classList.remove('active'));

    roleIndex = (roleIndex + 1) % roles.length;
    const next = document.createElement('span');
    next.className = 'role-item';
    next.textContent = roles[roleIndex];
    el.appendChild(next);

    // trigger reflow then animate in
    requestAnimationFrame(() => next.classList.add('active'));

    // remove old items
    if (el.children.length > 2) el.removeChild(el.children[0]);
  }, 2800);
}


// ── Hero reveal ────────────────────────────────────────────────────────────

function initHeroReveal() {
  // Split headline words for staggered animation
  const headline = document.getElementById('heroHeadline');
  if (!headline) return;

  // Add animation class to headline
  headline.style.animation = 'slideUp 0.8s ease both';
  headline.style.animationDelay = '0.1s';

  // Animate blurb + role row
  const blurb = headline.closest('.hero-text')?.querySelector('.hero-blurb');
  const roleRow = headline.closest('.hero-text')?.querySelector('.hero-role-row');

  if (blurb) { blurb.style.animation = 'slideUp 0.7s ease 0.35s both'; }
  if (roleRow) { roleRow.style.animation = 'slideUp 0.6s ease 0.55s both'; }
}


// ── Particles ──────────────────────────────────────────────────────────────

function initParticles() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  const particles = [];
  const COUNT = 55;

  function resize() {
    canvas.width  = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;
  }

  window.addEventListener('resize', resize, { passive: true });
  resize();

  for (let i = 0; i < COUNT; i++) {
    particles.push({
      x:  Math.random() * canvas.width,
      y:  Math.random() * canvas.height,
      r:  Math.random() * 1.6 + 0.3,
      vx: (Math.random() - 0.5) * 0.25,
      vy: (Math.random() - 0.5) * 0.25,
      o:  Math.random() * 0.35 + 0.05,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    const isDark = document.documentElement.dataset.theme === 'dark';
    const rgb = isDark ? '200,200,220' : '80,70,100';

    particles.forEach(p => {
      p.x += p.vx;
      p.y += p.vy;
      if (p.x < 0) p.x = canvas.width;
      if (p.x > canvas.width) p.x = 0;
      if (p.y < 0) p.y = canvas.height;
      if (p.y > canvas.height) p.y = 0;

      ctx.beginPath();
      ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
      ctx.fillStyle = `rgba(${rgb},${p.o})`;
      ctx.fill();
    });

    requestAnimationFrame(draw);
  }

  draw();
}


// ── Scroll reveal ──────────────────────────────────────────────────────────

function initScrollReveal() {
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.12 });

  document.querySelectorAll('.reveal').forEach(el => io.observe(el));
}


// ── Cursor ─────────────────────────────────────────────────────────────────

function initCursor() {
  const dot  = document.getElementById('cursorDot');
  const ring = document.getElementById('cursorRing');
  if (!dot || !ring) return;

  let rx = 0, ry = 0;
  let mx = 0, my = 0;

  document.addEventListener('mousemove', e => {
    mx = e.clientX;
    my = e.clientY;
    dot.style.transform = `translate(${mx}px, ${my}px) translate(-50%, -50%)`;
  });

  (function animRing() {
    rx += (mx - rx) * 0.14;
    ry += (my - ry) * 0.14;
    ring.style.transform = `translate(${rx}px, ${ry}px) translate(-50%, -50%)`;
    requestAnimationFrame(animRing);
  })();

  const hoverEls = 'a, button, .project-card, .cert-card, .filter-btn';
  document.addEventListener('mouseover', e => {
    if (e.target.closest(hoverEls)) document.body.classList.add('cursor-hover');
  });
  document.addEventListener('mouseout', e => {
    if (e.target.closest(hoverEls)) document.body.classList.remove('cursor-hover');
  });
}


// ── Render: Projects ───────────────────────────────────────────────────────

function renderProjects() {
  const grid = document.getElementById('projectsGrid');
  if (!grid) return;

  const filtered = filter === 'all'
    ? DATA.projects
    : DATA.projects.filter(p => p.tag === filter);

  grid.innerHTML = filtered.map((p, i) => `
    <article
      class="project-card reveal"
      data-slug="${p.slug}"
      data-tag="${p.tag}"
      style="animation-delay:${i * 60}ms"
      role="button"
      tabindex="0"
      aria-label="View ${p.title}"
    >
      <div class="project-img-wrap">
        <img src="${p.img}" alt="${p.title}" loading="lazy">
        <div class="project-badge">
          <span class="project-tag">${p.tag.toUpperCase()}</span>
          <span class="project-year">${p.year}</span>
        </div>
      </div>
      <div class="project-info">
        <p class="project-kind">${p.kind[lang]}</p>
        <h3 class="project-title">${p.title}</h3>
        <p class="project-summary">${p.summary[lang]}</p>
        <div class="project-stack">
          ${p.stack.map(s => `<span class="tag-pill">${s}</span>`).join('')}
        </div>
      </div>
    </article>
  `).join('');

  // Re-observe new cards
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  grid.querySelectorAll('.reveal').forEach(el => io.observe(el));

  // Attach modal triggers
  grid.querySelectorAll('.project-card').forEach(card => {
    const open = () => openProjectModal(card.dataset.slug);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });
  });
}


// ── Render: Career ─────────────────────────────────────────────────────────

function renderCareer() {
  const el = document.getElementById('timeline');
  if (!el) return;

  el.innerHTML = DATA.experience.map((job, i) => `
    <div class="timeline-item reveal" style="animation-delay:${i * 80}ms">
      <div class="timeline-date">${job.date[lang]}</div>
      <div class="timeline-body">
        <div class="timeline-company">
          ${job.current ? '<span class="timeline-current-dot"></span>' : ''}
          ${job.company}
        </div>
        <h3 class="timeline-role">${job.role[lang]}</h3>
        <p class="timeline-desc">${job.desc[lang]}</p>
        <div class="timeline-stack">
          ${job.stack.map(s => `<span class="tag-pill">${s}</span>`).join('')}
        </div>
      </div>
    </div>
  `).join('');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  el.querySelectorAll('.reveal').forEach(r => io.observe(r));
}


// ── Render: Capabilities ───────────────────────────────────────────────────

function renderCaps() {
  const el = document.getElementById('capsGrid');
  if (!el) return;

  el.innerHTML = DATA.capabilities.map((cap, i) => `
    <div class="cap-card reveal" style="animation-delay:${i * 60}ms">
      <p class="cap-counter">0${i + 1}</p>
      <h3 class="cap-area">${cap.area[lang]}</h3>
      <div class="cap-items">
        ${cap.items.map(item => `<span class="cap-item">${item}</span>`).join('')}
      </div>
    </div>
  `).join('');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  el.querySelectorAll('.reveal').forEach(r => io.observe(r));
}


// ── Render: Certs ──────────────────────────────────────────────────────────

function renderCerts() {
  const el = document.getElementById('certsGrid');
  if (!el) return;

  el.innerHTML = DATA.certs.map((cert, i) => `
    <div
      class="cert-card reveal"
      style="animation-delay:${i * 60}ms"
      data-cert="${i}"
      role="button"
      tabindex="0"
      aria-label="View ${cert.title}"
    >
      <div class="cert-img-wrap">
        <img src="${cert.img}" alt="${cert.title}" loading="lazy">
      </div>
      <div class="cert-info">
        <h3 class="cert-title">${cert.title}</h3>
        <p class="cert-org">${cert.org}</p>
        <p class="cert-date">${cert.date} · <span class="cert-view">${lang === 'en' ? 'view ↗' : 'ver ↗'}</span></p>
      </div>
    </div>
  `).join('');

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  el.querySelectorAll('.reveal').forEach(r => io.observe(r));

  el.querySelectorAll('.cert-card').forEach(card => {
    const open = () => openCertModal(parseInt(card.dataset.cert));
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });
  });
}


// ── Project filter ─────────────────────────────────────────────────────────

function initFilters() {
  document.querySelectorAll('.filter-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('.filter-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      filter = btn.dataset.filter;
      renderProjects();
    });
  });
}


// ── Modals ─────────────────────────────────────────────────────────────────

function initModals() {
  const backdrop = document.getElementById('modalBackdrop');
  const closeBtn = document.getElementById('modalClose');

  backdrop.addEventListener('click', e => {
    if (e.target === backdrop) closeModal();
  });
  closeBtn.addEventListener('click', closeModal);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closeModal();
  });
}

function openProjectModal(slug) {
  const p = DATA.projects.find(x => x.slug === slug);
  if (!p) return;

  document.getElementById('modalBody').innerHTML = `
    <img class="modal-img" src="${p.img}" alt="${p.title}" loading="lazy">
    <p class="modal-kind">${p.kind[lang]}</p>
    <h2 class="modal-title">${p.title}</h2>
    <p class="modal-desc">${p.detail[lang]}</p>
    <div class="modal-stack">
      ${p.stack.map(s => `<span class="tag-pill">${s}</span>`).join('')}
    </div>
  `;
  openModal();
}

function openCertModal(index) {
  const cert = DATA.certs[index];
  if (!cert) return;

  document.getElementById('modalBody').innerHTML = `
    <img class="modal-cert-img" src="${cert.img}" alt="${cert.title}">
    <p class="modal-kind">${cert.org}</p>
    <h2 class="modal-title">${cert.title}</h2>
    <p class="modal-desc">${cert.date}</p>
  `;
  openModal();
}

function openModal() {
  const backdrop = document.getElementById('modalBackdrop');
  backdrop.classList.add('open');
  backdrop.setAttribute('aria-hidden', 'false');
  document.body.style.overflow = 'hidden';
  document.getElementById('modalClose').focus();
}

function closeModal() {
  const backdrop = document.getElementById('modalBackdrop');
  backdrop.classList.remove('open');
  backdrop.setAttribute('aria-hidden', 'true');
  document.body.style.overflow = '';
}
