export const DATA = {
  roles: {
    en: ['Data & AI Strategist', 'BI Engineer', 'Systems Engineer', 'Process Automation Lead', 'Power BI Architect'],
    es: ['Estratega Data & AI', 'Ingeniera BI', 'Ingeniera de Sistemas', 'Líder de Automatización', 'Arquitecta Power BI'],
  },

  projects: [
    {
      slug: 'marketfood',
      tag: 'bi',
      img: '/img/Market-food-beverage.png',
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
      embed: 'https://app.powerbi.com/view?r=eyJrIjoiNGY3OGQwZjgtODVjOC00OWVlLTlmODgtOTZmOTk2Y2JkNDNmIiwidCI6ImMwNmZiNTU5LTFiNjgtNGI4NC1hMTRmLTQ3ZDBkODM3YTVhYiIsImMiOjR9',
    },
    {
      slug: 'bizexpo',
      tag: 'web',
      img: '/img/bizexpo-img.png',
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
      video: '/video/bizexpo-pre.mp4',
    },
    {
      slug: 'glowradiance',
      tag: 'web',
      img: '/img/glowradiance-img.png',
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
      video: '/video/glowradiance-pre.mp4',
    },
    {
      slug: 'tasknexus',
      tag: 'web',
      img: '/img/tasknexus-img.png',
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
      video: '/video/tasknexus-pre.mp4',
    },
    {
      slug: 'dentalclinic',
      tag: 'web',
      img: '/img/hector-gonzalez.png',
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
      video: '/video/clinicadental-pre.mp4',
    },
    {
      slug: 'homehunter',
      tag: 'web',
      img: '/img/homehunter2.png',
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
      video: '/video/homehunter-pre.mp4',
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
      img: '/img/certificate-DataAnalytics.png',
      title: 'Data Analytics Specialization',
      org: 'San Ignacio University (Miami) · Netzun',
      date: 'Jul — Aug 2024',
    },
    {
      img: '/img/certificate-WebDevelopment.png',
      title: 'Full-Stack Web Development',
      org: 'Udemy',
      date: 'Feb — Jul 2024',
    },
    {
      img: '/img/certificate-AutomatedTesting.png',
      title: 'Introduction to Automated Testing',
      org: 'EPAM Campus',
      date: 'May — Jun 2024',
    },
    {
      img: '/img/systemsengineer-degree.png',
      title: 'Systems Engineering',
      org: 'EAN University',
      date: '2019 — 2023',
    },
    {
      img: '/img/chemicalsengineer-degree.png',
      title: 'Chemical Engineering',
      org: 'EAN University',
      date: '2017 — 2021',
    },
  ],
};
