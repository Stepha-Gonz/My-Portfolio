export const DATA = {
  name: 'Stephanie Gonzalez',
  location: 'Bogotá, Colombia',
  email: 'gstephaniegonz@gmail.com',
  github: 'https://github.com/Stepha-Gonz',
  linkedin: 'https://www.linkedin.com/in/stephanie-gonzalez-m/',
  // Paste a web3forms.com access key here to send the contact form directly
  // (free, no backend). Leave empty to fall back to a mailto: link.
  formKey: '',

  roles: {
    en: ['Data & AI Strategist', 'BI Engineer', 'Systems Engineer', 'Process Automation Lead', 'Power BI Architect'],
    es: ['Estratega Data & AI', 'Ingeniera BI', 'Ingeniera de Sistemas', 'Líder de Automatización', 'Arquitecta Power BI'],
  },

  projects: [
    {
      slug: 'marketfood',
      title: 'MarketFood',
      year: '2024',
      tag: 'bi',
      tint: ['oklch(28% 0.10 200)', 'oklch(58% 0.14 165)'],
      kind: { en: 'Power BI · Sector Analytics', es: 'Power BI · Analítica Sectorial' },
      summary: {
        en: 'Sector-wide market analysis with sales, inventory and projection breakdowns by region, channel and price tier.',
        es: 'Análisis de mercado sectorial con ventas, inventario y proyecciones por región, canal y rango de precio.',
      },
      detail: {
        en: 'Sector-wide market analysis with sales, inventory and projection breakdowns by region, channel and price tier. DAX measures and Power Query transformations for automated data refresh.',
        es: 'Análisis de mercado sectorial con ventas, inventario y proyecciones por región, canal y rango de precio. Medidas DAX y transformaciones Power Query para actualización automatizada.',
      },
      img: '/img/projects/Market-food-beverage.webp',
      stack: ['Power BI', 'DAX', 'Power Query'],
      media: 'powerbi',
      embed: 'https://app.powerbi.com/view?r=eyJrIjoiNGY3OGQwZjgtODVjOC00OWVlLTlmODgtOTZmOTk2Y2JkNDNmIiwidCI6ImMwNmZiNTU5LTFiNjgtNGI4NC1hMTRmLTQ3ZDBkODM3YTVhYiIsImMiOjR9',
    },
    {
      slug: 'bizexpo',
      title: 'BizExpo',
      year: '2024',
      tag: 'web',
      tint: ['oklch(32% 0.14 300)', 'oklch(66% 0.16 330)'],
      kind: { en: 'Full-Stack Web · PHP + MySQL', es: 'Full-Stack Web · PHP + MySQL' },
      summary: {
        en: 'Web platform with auth, admin analytics, and dynamic Leaflet mapping. Built end-to-end with RESTful principles.',
        es: 'Plataforma web con auth, analytics admin y mapeo dinámico con Leaflet. Construida end-to-end con principios RESTful.',
      },
      detail: {
        en: 'Web platform for a tech event with authentication, admin analytics dashboard, and dynamic Leaflet.js mapping for venue navigation. Built end-to-end applying RESTful architecture principles.',
        es: 'Plataforma web para evento tech con autenticación, dashboard analytics admin y mapeo dinámico Leaflet.js. Construida end-to-end aplicando principios de arquitectura RESTful.',
      },
      img: '/img/projects/bizexpo-img.webp',
      stack: ['PHP', 'MySQL', 'JS', 'SASS'],
      media: 'video',
      video: '/video/bizexpo-pre.mp4',
    },
    {
      slug: 'glowradiance',
      title: 'GlowRadiance',
      year: '2024',
      tag: 'web',
      tint: ['oklch(40% 0.12 30)', 'oklch(72% 0.14 60)'],
      kind: { en: 'E-commerce UI · Frontend', es: 'UI E-commerce · Frontend' },
      summary: {
        en: 'Skincare e-commerce concept with product catalog and cart flow.',
        es: 'Concepto e-commerce de skincare con catálogo y flujo de carrito.',
      },
      detail: {
        en: 'Skincare e-commerce concept featuring a full product catalog, category browsing, add-to-cart flow, and checkout mockup. Built with clean HTML/CSS/JS — no frameworks.',
        es: 'Concepto e-commerce de skincare con catálogo de productos completo, navegación por categorías, flujo add-to-cart y mockup de checkout. Construido con HTML/CSS/JS limpio sin frameworks.',
      },
      img: '/img/projects/glowradiance-img.webp',
      stack: ['HTML', 'CSS', 'JS'],
      media: 'video',
      video: '/video/glowradiance-pre.mp4',
    },
    {
      slug: 'tasknexus',
      title: 'TaskNexus',
      year: '2024',
      tag: 'web',
      tint: ['oklch(30% 0.13 275)', 'oklch(64% 0.15 300)'],
      kind: { en: 'Product UI · Task Management', es: 'UI de Producto · Gestión de Tareas' },
      summary: {
        en: 'Task and project management app with kanban boards, priority labels and progress tracking.',
        es: 'App de gestión de tareas con tableros kanban, etiquetas de prioridad y seguimiento de progreso.',
      },
      detail: {
        en: 'Full-featured task management application with kanban-style boards, task prioritization, deadline tracking, and local persistence. Built with vanilla JS/CSS — no frameworks.',
        es: 'Aplicación de gestión de tareas con tableros estilo kanban, priorización, seguimiento de fechas límite y persistencia local. Construida con JS/CSS puro sin frameworks.',
      },
      img: '/img/projects/tasknexus-img.webp',
      imgPosition: 'center',
      mark: 'TN',
      stack: ['JS', 'CSS', 'UI Design'],
      media: 'video',
      video: '/video/tasknexus-pre.mp4',
    },
  ],

  experience: [
    {
      date: { en: 'Apr 2026 — Present', es: 'Abr 2026 — Presente' },
      current: true,
      company: 'DiDi Global',
      role: { en: 'CX & AI Enablement Sr Analyst', es: 'Analista Sr CX & AI Enablement' },
      desc: {
        en: "I build AI-powered systems that turn interaction data into business intelligence across LATAM. We're designing and launching QA Hero Academy — a full-stack training platform with live dashboards, adaptive modules, simulations and gamification — and I teach in the Claude University program, a hands-on program where non-technical teams learn to apply AI to their daily work.",
        es: 'Construyo sistemas con IA que convierten la data de interacciones en inteligencia de negocio para Latam. Diseñamos y estamos lanzando QA Hero Academy — plataforma full-stack de formación con dashboards en vivo, módulos adaptativos, simulaciones y gamificación — y enseño en el programa Claude University, un programa práctico donde equipos no técnicos aprenden a aplicar IA a su operación diaria.',
      },
      stack: ['AI Agents', 'Power BI', 'Python', 'SQL'],
    },
    {
      date: { en: 'Aug 2025 — Apr 2026', es: 'Ago 2025 — Abr 2026' },
      current: false,
      company: 'DiDi Global',
      role: { en: 'CX Quality Senior Analyst — QA Operations', es: 'Analista Senior CX Quality — QA Operations' },
      desc: {
        en: 'We designed a centralized Power BI ecosystem unifying 5+ sources into a single view, eliminating silos and enabling precise WoW tracking. I automated extraction and consolidation of massive datasets with Python and built custom AI agents for deep-dive analysis that accelerated root-cause identification. I also led process mapping, journey analysis and vendor audit compliance to lift CSAT and QA scores.',
        es: 'Diseñamos un ecosistema centralizado en Power BI que unificó 5+ fuentes en una sola vista, eliminando silos y permitiendo seguimiento WoW preciso. Automaticé extracción y consolidación de datasets masivos con Python y construí agentes de IA propios para análisis deep-dive que aceleraron la identificación de causa raíz. Además lideré mapeo de procesos, análisis de journey y cumplimiento de auditorías de vendors para subir CSAT y QA.',
      },
      stack: ['Power BI', 'Python', 'ETL', 'SQL'],
    },
    {
      date: { en: 'Jan 2025 — Aug 2025', es: 'Ene 2025 — Ago 2025' },
      current: false,
      company: 'Sky Friend (OPPO Colombia)',
      role: { en: 'BI Data Analyst', es: 'Analista de Datos BI' },
      desc: {
        en: 'I built dashboards tracking commercial spend vs. budget across Alkosto, Éxito and Falabella. I automated monthly commissions handling COP $1B+ and redesigned the collections process, reducing outstanding debt from $379M to $12M.',
        es: 'Construí dashboards de gasto comercial vs. presupuesto para Alkosto, Éxito y Falabella. Automaticé comisiones mensuales por COP $1B+ y rediseñé el proceso de cartera, reduciendo la deuda pendiente de $379M a $12M.',
      },
      stack: ['Power BI', 'Power Query', 'DAX', 'Excel'],
    },
    {
      date: { en: '2021 — 2024', es: '2021 — 2024' },
      current: false,
      company: 'Concentrix',
      role: { en: 'Quality, Training & Customer Service', es: 'Calidad, Capacitación y Servicio al Cliente' },
      desc: {
        en: 'Four years from the front line to leading quality and training. Started in front-line bilingual customer support — where I learned how operations actually feel from the inside, context that still shapes every dashboard I build. Moved into audit analysis, trend identification and service script optimization, then into leading 8 evaluators with data-driven coaching and automating workflows via Excel VBA macros, lifting team efficiency and reporting speed.',
        es: 'Cuatro años desde la primera línea hasta liderar calidad y capacitación. Empecé en atención al cliente bilingüe en primera línea — donde aprendí cómo se siente realmente la operación desde adentro, contexto que sigue guiando cada dashboard que construyo. Pasé a análisis de auditorías, identificación de tendencias y optimización de scripts, y luego a liderar 8 evaluadores con coaching basado en datos y automatizar flujos con macros Excel VBA, mejorando eficiencia y velocidad de reporting.',
      },
      stack: ['Customer Support', 'VBA', 'Excel', 'KPI Design', 'QA'],
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

  // "Impact" cards — same facts/wording as the old Stats section, reshaped into the new file-card layout.
  impact: [
    {
      n: '001',
      org: 'DiDi Global',
      tone: 'lime',
      mark: 'academy',
      title: { en: 'CX Hero Academy', es: 'CX Hero Academy' },
      desc: {
        en: 'Gamified full-stack training platform for BPO agents — personalized routes from QA audit gaps, live AI simulations & XP system.',
        es: 'Plataforma full-stack gamificada de entrenamiento para agentes BPO — rutas personalizadas desde brechas QA, simulaciones IA en vivo y sistema XP.',
      },
      k1: { en: 'DIDI GLOBAL', es: 'DIDI GLOBAL' },
      k2: { en: '2026 — IN DEVELOPMENT', es: '2026 — EN CONSTRUCCIÓN' },
    },
    {
      n: '002',
      org: 'DiDi Global',
      tone: 'violet',
      mark: 'AI',
      title: { en: 'CX Hero', es: 'CX Hero' },
      desc: {
        en: 'Custom AI agent powering CX QA Deep-Dive analyses across 6 LATAM countries.',
        es: 'Agente IA propio que potencia análisis Deep-Dive de QA CX en 6 países de LATAM.',
      },
      k1: { en: 'DIDI GLOBAL', es: 'DIDI GLOBAL' },
      k2: { en: '2026 — IN PRODUCTION', es: '2026 — EN PRODUCCIÓN' },
    },
    {
      n: '003',
      org: 'OPPO Colombia',
      tone: 'coral',
      mark: '$379M→$12M',
      title: { en: 'Outstanding debt reduced', es: 'Deuda pendiente reducida' },
      desc: {
        en: 'Outstanding debt reduced through automation & process redesign.',
        es: 'Deuda pendiente reducida con automatización y rediseño de procesos.',
      },
      k1: { en: 'OPPO COLOMBIA', es: 'OPPO COLOMBIA' },
      k2: { en: 'YEAR / 2025', es: 'AÑO / 2025' },
    },
    {
      n: '004',
      org: 'OPPO Colombia',
      tone: 'violet',
      mark: '$1B+',
      title: { en: 'Commissions automated', es: 'Comisiones automatizadas' },
      desc: {
        en: 'COP in commissions automated monthly across 3 retail chains.',
        es: 'COP en comisiones automatizadas al mes en 3 cadenas retail.',
      },
      k1: { en: 'OPPO COLOMBIA', es: 'OPPO COLOMBIA' },
      k2: { en: 'YEAR / 2025', es: 'AÑO / 2025' },
    },
  ],

  certs: [
    {
      img: '/img/certificates/certificate-DataAnalytics.webp',
      title: 'Data Analytics Specialization',
      org: 'San Ignacio University (Miami) · Netzun',
      date: 'Jul — Aug 2024',
    },
    {
      img: '/img/certificates/certificate-WebDevelopment.webp',
      title: 'Full-Stack Web Development',
      org: 'Udemy',
      date: 'Feb — Jul 2024',
    },
    {
      img: '/img/certificates/certificate-AutomatedTesting.webp',
      title: 'Introduction to Automated Testing',
      org: 'EPAM Campus',
      date: 'May — Jun 2024',
    },
    {
      img: '/img/certificates/systemsengineer-degree.webp',
      title: 'Systems Engineering',
      org: 'EAN University',
      date: '2019 — 2023',
      degree: true,
    },
    {
      img: '/img/certificates/chemicalsengineer-degree.webp',
      title: 'Chemical Engineering',
      org: 'EAN University',
      date: '2017 — 2021',
      degree: true,
    },
  ],
};
