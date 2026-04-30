// ── Data (from Claude Design handoff) ──────────────────────────────────────

const DATA = {
  roles: {
    en: ['Data & AI Strategist', 'BI Engineer', 'Systems Engineer', 'Process Automation Lead', 'Power BI Architect'],
    es: ['Estratega Data & AI', 'Ingeniera BI', 'Ingeniera de Sistemas', 'Líder de Automatización', 'Arquitecta Power BI'],
  },

  projects: [
    {
      slug: 'marketfood',
      tag: 'bi',
      img: 'src/img/Market-food-beverage.png',
      title: 'Market Analysis — Food & Beverage',
      year: '2024',
      kind: { en: 'Power BI · Sector Analytics', es: 'Power BI · Analítica Sectorial' },
      summary: {
        en: 'Sector-wide market analysis with sales, inventory and projection breakdowns by region, channel and price tier.',
        es: 'Análisis de mercado sectorial con ventas, inventario y proyecciones por región, canal y rango de precio.',
      },
      detail: {
        en: 'Sector-wide market analysis with sales, inventory and projection breakdowns by region, channel and price tier. DAX measures and Power Query transformations for automated data refresh.',
        es: 'Análisis de mercado sectorial con ventas, inventario y proyecciones por región, canal y rango de precio. Medidas DAX y transformaciones Power Query para actualización automatizada.',
      },
      stack: ['Power BI', 'DAX', 'Power Query'],
    },
    {
      slug: 'bizexpo',
      tag: 'web',
      img: 'src/img/bizexpo-img.png',
      title: 'BizExpo — Tech Event Platform',
      year: '2024',
      kind: { en: 'Full-Stack Web · PHP + MySQL', es: 'Full-Stack Web · PHP + MySQL' },
      summary: {
        en: 'Web platform with auth, admin analytics, and dynamic Leaflet mapping. Built end-to-end with RESTful principles.',
        es: 'Plataforma web con auth, analytics admin y mapeo dinámico con Leaflet. Construida end-to-end con principios RESTful.',
      },
      detail: {
        en: 'Web platform for a tech event with authentication, admin analytics dashboard, and dynamic Leaflet.js mapping for venue navigation. Built end-to-end applying RESTful architecture principles.',
        es: 'Plataforma web para evento tech con autenticación, dashboard analytics admin y mapeo dinámico Leaflet.js. Construida end-to-end aplicando principios de arquitectura RESTful.',
      },
      stack: ['PHP', 'MySQL', 'JS', 'SASS'],
    },
    {
      slug: 'glowradiance',
      tag: 'web',
      img: 'src/img/glowradiance-img.png',
      title: 'GlowRadiance',
      year: '2024',
      kind: { en: 'E-commerce UI', es: 'UI de E-commerce' },
      summary: {
        en: 'Skincare e-commerce concept with product catalog and cart flow.',
        es: 'Concepto e-commerce de skincare con catálogo y flujo de carrito.',
      },
      detail: {
        en: 'Skincare e-commerce concept featuring a full product catalog, category browsing, add-to-cart flow, and checkout mockup. Built with clean HTML/CSS/JS — no frameworks.',
        es: 'Concepto e-commerce de skincare con catálogo de productos completo, navegación por categorías, flujo add-to-cart y mockup de checkout. Construido con HTML/CSS/JS limpio sin frameworks.',
      },
      stack: ['HTML', 'CSS', 'JS'],
    },
    {
      slug: 'tasknexus',
      tag: 'web',
      img: 'src/img/tasknexus-img.png',
      title: 'TaskNexus',
      year: '2024',
      kind: { en: 'Task Management Web App', es: 'App de Gestión de Tareas' },
      summary: {
        en: 'Task and project management app with kanban boards, priority labels and progress tracking.',
        es: 'App de gestión de tareas con tableros kanban, etiquetas de prioridad y seguimiento de progreso.',
      },
      detail: {
        en: 'Full-featured task management application with kanban-style boards, task prioritization, deadline tracking, and local persistence. Built with vanilla JS/CSS — no frameworks.',
        es: 'Aplicación de gestión de tareas con tableros estilo kanban, priorización, seguimiento de fechas límite y persistencia local. Construida con JS/CSS puro sin frameworks.',
      },
      stack: ['JS', 'CSS', 'HTML'],
    },
    {
      slug: 'audittracker',
      tag: 'bi',
      img: 'src/img/audittracker-img.png',
      title: 'Audit Tracker Dashboard',
      year: '2024',
      kind: { en: 'Power BI · Process Automation', es: 'Power BI · Automatización' },
      summary: {
        en: 'Centralized audit tracking system consolidating data from multiple sources, generating visual reports for management decision-making.',
        es: 'Sistema centralizado de seguimiento de auditorías que consolida datos de múltiples fuentes y genera reportes visuales para gerencia.',
      },
      detail: {
        en: 'Centralized audit tracking system consolidating data from multiple sources, generating visual reports for management decision-making. Built with Excel, VBA macros for data automation, and Power BI for executive reporting.',
        es: 'Sistema centralizado de seguimiento de auditorías consolidando datos de múltiples fuentes. Construido con Excel, macros VBA para automatización y Power BI para reportes ejecutivos.',
      },
      stack: ['Excel', 'VBA', 'Power BI'],
    },
    {
      slug: 'trackerdashboard',
      tag: 'bi',
      img: 'src/img/trackerdashboard-img.png',
      title: 'Performance Tracker',
      year: '2024',
      kind: { en: 'Power BI · KPI Dashboard', es: 'Power BI · Dashboard KPI' },
      summary: {
        en: 'KPI dashboard for evaluator teams — coaching insights, trend tracking, and weekly performance review.',
        es: 'Dashboard de KPIs para equipos de evaluación — insights de coaching, tendencias y revisión semanal.',
      },
      detail: {
        en: 'KPI dashboard for evaluator teams enabling coaching insights, trend tracking, and weekly performance review. Integrated with operational data sources for real-time visibility.',
        es: 'Dashboard de KPIs para equipos de evaluación con insights de coaching, seguimiento de tendencias y revisión semanal. Integrado con fuentes operativas para visibilidad en tiempo real.',
      },
      stack: ['Power BI', 'Excel'],
    },
    {
      slug: 'dentalclinic',
      tag: 'web',
      img: 'src/img/hector-gonzalez.png',
      title: 'Dental Clinic — Dr. Héctor González',
      year: '2024',
      kind: { en: 'Web Design & Development', es: 'Diseño y Desarrollo Web' },
      summary: {
        en: 'Responsive site for a dental practice. Mockups in Figma, full-cycle delivery from requirements to deployment.',
        es: 'Sitio responsive para clínica dental. Mockups en Figma, entrega de ciclo completo desde requerimientos a deploy.',
      },
      detail: {
        en: 'Responsive website for a dental practice including service pages, appointment request form, and Google Maps integration. Full cycle: requirements gathering → Figma mockups → development → deployment.',
        es: 'Sitio web responsive para clínica dental con páginas de servicios, formulario de cita y integración Google Maps. Ciclo completo: requerimientos → mockups Figma → desarrollo → deployment.',
      },
      stack: ['HTML', 'CSS', 'JS', 'Figma'],
    },
    {
      slug: 'homehunter',
      tag: 'web',
      img: 'src/img/homehunter2.png',
      title: 'HomeHunter',
      year: '2024',
      kind: { en: 'Real Estate Web App', es: 'Web App Inmobiliaria' },
      summary: {
        en: 'Property listing app with search, filters and saved favorites.',
        es: 'App de listado de propiedades con búsqueda, filtros y favoritos.',
      },
      detail: {
        en: 'Property listing application with advanced search, category filters (price, location, type), and a saved favorites system. Integrates with a real estate API for live listings.',
        es: 'Aplicación de listado de propiedades con búsqueda avanzada, filtros por categoría y sistema de favoritos guardados. Integra una API inmobiliaria para listados en vivo.',
      },
      stack: ['JS', 'CSS', 'API'],
    },
  ],

  experience: [
    {
      date: { en: 'Apr 2026 — Present', es: 'Abr 2026 — Presente' },
      current: true,
      company: 'DiDi Global',
      role: { en: 'CX & Relationship Sr Analyst', es: 'Analista Sr CX & Relationship' },
      desc: {
        en: "Promoted into the CX Intelligence team to lead the QA-AI initiative. Designed and shipped 'QA Hero' — a custom AI agent that turns CX QA dashboard data into root-cause analyses, priority playbooks and action plans across 6 LATAM countries (BR, MX, AR, CO, CL, PE).",
        es: "Promovida al equipo de CX Intelligence para liderar la iniciativa QA-AI. Diseñé y lancé 'QA Hero' — agente IA propio que convierte la data del dashboard QA en análisis de causa raíz, playbooks de prioridad y planes de acción en 6 países LATAM (BR, MX, AR, CO, CL, PE).",
      },
      stack: ['AI Agents', 'Power BI', 'Python', 'SQL'],
    },
    {
      date: { en: 'Aug 2025 — Apr 2026', es: 'Ago 2025 — Abr 2026' },
      current: false,
      company: 'DiDi Global',
      role: { en: 'CX Quality Senior Analyst', es: 'Analista Senior CX Quality' },
      desc: {
        en: 'Designed a centralized Power BI ecosystem unifying 5+ data sources, eliminating silos and enabling WoW tracking. Built Python automation for Deep-Dive analyses on operational data.',
        es: 'Diseñé un ecosistema centralizado en Power BI unificando 5+ fuentes, eliminando silos y permitiendo seguimiento WoW. Construí automatización Python para análisis Deep-Dive de datos operativos.',
      },
      stack: ['Power BI', 'Python', 'ETL', 'SQL'],
    },
    {
      date: { en: 'Jan 2025 — Aug 2025', es: 'Ene 2025 — Ago 2025' },
      current: false,
      company: 'Sky Friend (OPPO Colombia)',
      role: { en: 'BI Data Analyst', es: 'Analista de Datos BI' },
      desc: {
        en: 'Built dashboards tracking commercial spend vs. budget across Alkosto, Éxito, Falabella. Automated commissions handling COP $1B+ and reduced outstanding debt from $379M to $12M.',
        es: 'Construí dashboards de gasto comercial vs. presupuesto para Alkosto, Éxito, Falabella. Automaticé comisiones por COP $1B+ y reduje deuda pendiente de $379M a $12M.',
      },
      stack: ['Power BI', 'Power Query', 'DAX', 'Excel'],
    },
    {
      date: { en: 'Aug 2023 — Jan 2024', es: 'Ago 2023 — Ene 2024' },
      current: false,
      company: 'Concentrix',
      role: { en: 'Bilingual Training & Quality Supervisor', es: 'Supervisora de Capacitación y Calidad' },
      desc: {
        en: 'Led 8 evaluators with data-driven coaching. Automated workflows via Excel VBA macros, lifting team efficiency and reporting speed.',
        es: 'Lideré 8 evaluadores con coaching basado en datos. Automaticé flujos con macros Excel VBA, mejorando eficiencia y velocidad de reporting.',
      },
      stack: ['VBA', 'Excel', 'KPI Design'],
    },
    {
      date: { en: '2022 — 2023', es: '2022 — 2023' },
      current: false,
      company: 'Concentrix',
      role: { en: 'Senior Quality Analyst', es: 'Analista Senior de Calidad' },
      desc: {
        en: 'Audit analysis, trend identification, and service script optimization. Foundation for the data work that came after.',
        es: 'Análisis de auditorías, identificación de tendencias y optimización de scripts. Base para el trabajo de datos que vino después.',
      },
      stack: ['Excel', 'QA', 'Reporting'],
    },
    {
      date: { en: '2021 — 2022', es: '2021 — 2022' },
      current: false,
      company: 'Concentrix',
      role: { en: 'Customer Service Associate', es: 'Asesora de Servicio al Cliente' },
      desc: {
        en: 'Front-line bilingual customer support. Where I learned how operations actually feel from the inside — context that still shapes every dashboard I build.',
        es: 'Atención al cliente bilingüe en primera línea. Donde aprendí cómo se siente realmente la operación desde adentro — contexto que sigue guiando cada dashboard que construyo.',
      },
      stack: ['Customer Support', 'Bilingual EN/ES', 'CRM'],
    },
  ],

  capabilities: [
    {
      area: { en: 'Business Intelligence', es: 'Business Intelligence' },
      items: ['Power BI', 'DAX', 'Power Query', 'Data Modeling'],
    },
    {
      area: { en: 'Data Engineering', es: 'Ingeniería de Datos' },
      items: ['Python', 'SQL', 'ETL Processes', 'Macros / VBA'],
    },
    {
      area: { en: 'AI & Automation', es: 'IA & Automatización' },
      items: ['Custom AI Agents', 'Process Automation', 'Workflow Design'],
    },
    {
      area: { en: 'Web Development', es: 'Desarrollo Web' },
      items: ['HTML / CSS / JS', 'PHP / MySQL', 'Figma', 'Responsive Design'],
    },
  ],

  certs: [
    {
      img: 'src/img/certificate-DataAnalytics.png',
      title: 'Data Analytics Specialization',
      org: 'San Ignacio University (Miami) · Netzun',
      date: 'Jul — Aug 2024',
    },
    {
      img: 'src/img/certificate-WebDevelopment.png',
      title: 'Full-Stack Web Development',
      org: 'Udemy',
      date: 'Feb — Jul 2024',
    },
    {
      img: 'src/img/certificate-AutomatedTesting.png',
      title: 'Introduction to Automated Testing',
      org: 'EPAM Campus',
      date: 'May — Jun 2024',
    },
    {
      img: 'src/img/systemsengineer-degree.png',
      title: 'Systems Engineering',
      org: 'EAN University',
      date: '2019 — 2023',
    },
    {
      img: 'src/img/chemicalsengineer-degree.png',
      title: 'Chemical Engineering',
      org: 'EAN University',
      date: '2017 — 2021',
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
  const nav = document.getElementById('nav');
  const btn = document.getElementById('menuToggle');
  const mob = document.getElementById('navMobile');

  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 40);
  }, { passive: true });

  btn.addEventListener('click', () => {
    const open = mob.classList.toggle('open');
    btn.setAttribute('aria-expanded', open);
  });

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
    requestAnimationFrame(() => next.classList.add('active'));
    if (el.children.length > 2) el.removeChild(el.children[0]);
  }, 2400);
}


// ── Hero reveal ────────────────────────────────────────────────────────────

function initHeroReveal() {
  const headline = document.getElementById('heroHeadline');
  if (!headline) return;
  headline.style.animation = 'slideUp 0.8s ease both';
  headline.style.animationDelay = '0.1s';

  const blurb = headline.closest('.hero-text')?.querySelector('.hero-blurb');
  const roleRow = headline.closest('.hero-text')?.querySelector('.hero-role-row');
  if (blurb) blurb.style.animation = 'slideUp 0.7s ease 0.35s both';
  if (roleRow) roleRow.style.animation = 'slideUp 0.6s ease 0.55s both';
}


// ── Particles (with mouse repulsion + line linking) ────────────────────────

function initParticles() {
  const canvas = document.getElementById('heroCanvas');
  if (!canvas) return;
  const ctx = canvas.getContext('2d');

  let w, h;
  const COUNT = 90;
  const LINK_DIST = 150;
  const dots = [];
  let mouse = { x: -1000, y: -1000 };

  function resize() {
    w = canvas.width  = canvas.offsetWidth;
    h = canvas.height = canvas.offsetHeight;
  }

  window.addEventListener('resize', resize, { passive: true });
  canvas.addEventListener('mousemove', e => {
    const r = canvas.getBoundingClientRect();
    mouse = { x: e.clientX - r.left, y: e.clientY - r.top };
  });
  resize();

  for (let i = 0; i < COUNT; i++) {
    dots.push({
      x:  Math.random() * w,
      y:  Math.random() * h,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      r:  Math.random() * 1.8 + 0.6,
    });
  }

  function draw() {
    ctx.clearRect(0, 0, w, h);

    const isDark = document.documentElement.dataset.theme === 'dark';
    const dotColor = isDark ? 'oklch(72% 0.20 295 / 0.85)' : 'oklch(48% 0.22 295 / 0.70)';
    const lineBase = isDark ? 'oklch(72% 0.20 295 / ' : 'oklch(48% 0.22 295 / ';

    dots.forEach(d => {
      d.x += d.vx;
      d.y += d.vy;
      // bounce off walls
      if (d.x < 0 || d.x > w) d.vx *= -1;
      if (d.y < 0 || d.y > h) d.vy *= -1;
      // mouse repulsion
      const dx = mouse.x - d.x, dy = mouse.y - d.y;
      const dist = Math.sqrt(dx * dx + dy * dy);
      if (dist < 120) {
        d.x -= dx / dist * 0.5;
        d.y -= dy / dist * 0.5;
      }

      ctx.beginPath();
      ctx.arc(d.x, d.y, d.r, 0, Math.PI * 2);
      ctx.fillStyle = dotColor;
      ctx.fill();
    });

    // Draw links between nearby dots
    for (let i = 0; i < dots.length; i++) {
      for (let j = i + 1; j < dots.length; j++) {
        const dx = dots[i].x - dots[j].x;
        const dy = dots[i].y - dots[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < LINK_DIST) {
          const alpha = ((1 - dist / LINK_DIST) * (isDark ? 0.55 : 0.45)).toFixed(3);
          ctx.strokeStyle = lineBase + alpha + ')';
          ctx.lineWidth = 0.6;
          ctx.beginPath();
          ctx.moveTo(dots[i].x, dots[i].y);
          ctx.lineTo(dots[j].x, dots[j].y);
          ctx.stroke();
        }
      }
    }

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

  let rx = 0, ry = 0, mx = 0, my = 0;

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

  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
    });
  }, { threshold: 0.1 });
  grid.querySelectorAll('.reveal').forEach(el => io.observe(el));

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

  const cardHTML = DATA.certs.map((cert, i) => `
    <div
      class="cert-card"
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

  el.innerHTML = `<div class="certs-track" id="certsTrack">${cardHTML}${cardHTML}</div>`;

  el.querySelectorAll('.cert-card').forEach(card => {
    const open = () => openCertModal(parseInt(card.dataset.cert) % DATA.certs.length);
    card.addEventListener('click', open);
    card.addEventListener('keydown', e => { if (e.key === 'Enter' || e.key === ' ') open(); });
  });

  // Drag-to-scroll
  const track = document.getElementById('certsTrack');
  if (!track) return;

  let isDragging = false;
  let startX = 0;
  let dragOffset = 0;
  let resumeTimer = null;

  const pauseAnim = () => { track.classList.add('paused'); };
  const resumeAnim = () => {
    track.style.transform = '';
    track.classList.remove('paused');
  };

  el.addEventListener('mousedown', e => {
    isDragging = true;
    startX = e.clientX;
    dragOffset = 0;
    clearTimeout(resumeTimer);
    pauseAnim();
    el.style.cursor = 'grabbing';
    e.preventDefault();
  });

  window.addEventListener('mousemove', e => {
    if (!isDragging) return;
    dragOffset = e.clientX - startX;
    track.style.transform = `translateX(${dragOffset}px)`;
  });

  window.addEventListener('mouseup', e => {
    if (!isDragging) return;
    isDragging = false;
    el.style.cursor = '';
    resumeTimer = setTimeout(resumeAnim, 800);
  });

  el.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
    dragOffset = 0;
    clearTimeout(resumeTimer);
    pauseAnim();
  }, { passive: true });

  el.addEventListener('touchmove', e => {
    dragOffset = e.touches[0].clientX - startX;
    track.style.transform = `translateX(${dragOffset}px)`;
  }, { passive: true });

  el.addEventListener('touchend', () => {
    resumeTimer = setTimeout(resumeAnim, 800);
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

  backdrop.addEventListener('click', e => { if (e.target === backdrop) closeModal(); });
  closeBtn.addEventListener('click', closeModal);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });
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
