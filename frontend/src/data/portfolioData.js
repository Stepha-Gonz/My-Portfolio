export const DATA = {
  name: 'Stephanie Gonzalez',
  location: 'Bogotá, Colombia',
  email: 'gstephaniegonz@gmail.com',
  github: 'https://github.com/Stepha-Gonz',
  linkedin: 'https://www.linkedin.com/in/stephanie-gonzalez-m/',
  // web3forms.com access key — sends the contact form directly, no backend.
  formKey: 'a7b994d3-c037-4432-b284-874a5aaad57f',

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
      role: { en: 'Data Analyst', es: 'Analista de Datos' },
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
      headlines: {
        problem: { l1: { en: "Numbers weren't the problem.", es: 'Los números no eran el problema.' }, l2: { en: 'Interpretation was.', es: 'La interpretación sí.' } },
        approach: { l1: { en: 'From scattered spreadsheets to', es: 'De hojas de cálculo dispersas a' }, l2: { en: 'one clear model.', es: 'un solo modelo claro.' } },
        interface: { l1: { en: 'Explore by', es: 'Explora por' }, l2: { en: 'region.', es: 'región.' }, l3: { en: 'Decide by', es: 'Decide por' }, l4: { en: 'price tier.', es: 'rango de precio.' } },
        outcome: { l1: { en: 'Clearer numbers.', es: 'Números más claros.' }, l2: { en: 'Faster', es: 'Decisiones' }, l3: { en: 'decisions.', es: 'más rápidas.' } },
      },
      problemNote: {
        en: 'The real work was building a model flexible enough to answer a different question every week — without rebuilding it each time.',
        es: 'El verdadero trabajo fue construir un modelo lo bastante flexible para responder una pregunta distinta cada semana — sin reconstruirlo cada vez.',
      },
      approach: [
        { t: { en: 'Structure', es: 'Estructura' }, d: { en: 'Organized sales, inventory and projections into one model across region, channel and price tier.', es: 'Organicé ventas, inventario y proyecciones en un solo modelo por región, canal y rango de precio.' } },
        { t: { en: 'Data model', es: 'Modelo de datos' }, d: { en: 'Built DAX measures and Power Query transformations for automated, repeatable refresh.', es: 'Construí medidas DAX y transformaciones Power Query para una actualización automatizada y repetible.' } },
        { t: { en: 'Interface', es: 'Interfaz' }, d: { en: 'Designed report pages that let stakeholders drill from a sector overview down to a single price tier.', es: 'Diseñé páginas de reporte que permiten pasar de una vista sectorial a un solo rango de precio.' } },
        { t: { en: 'Delivery', es: 'Entrega' }, d: { en: 'Validated the dataset and handed off a report the team could refresh on its own.', es: 'Validé el dataset y entregué un reporte que el equipo puede actualizar por su cuenta.' } },
      ],
      outcome: [
        { t: { en: 'Sector-wide', es: 'De todo el sector' }, d: { en: 'visibility instead of scattered spreadsheets', es: 'visibilidad en vez de hojas de cálculo dispersas' }, color: 'lime' },
        { t: { en: 'Faster reporting', es: 'Reportes más rápidos' }, d: { en: 'with automated Power Query refresh', es: 'con actualización automatizada en Power Query' }, color: 'violet' },
        { t: { en: 'Clear drill-down', es: 'Detalle claro' }, d: { en: 'from region to price tier in a few clicks', es: 'de región a rango de precio en pocos clics' }, color: 'coral' },
      ],
    },
    {
      slug: 'bizexpo',
      title: 'BizExpo',
      year: '2024',
      tag: 'web',
      tint: ['oklch(32% 0.14 300)', 'oklch(66% 0.16 330)'],
      role: { en: 'Designer & Developer', es: 'Diseño y Desarrollo' },
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
      headlines: {
        problem: { l1: { en: "Ticketing wasn't the hard part.", es: 'La boletería no era lo difícil.' }, l2: { en: 'Coordination was.', es: 'La coordinación sí.' } },
        approach: { l1: { en: 'From scattered tools to', es: 'De herramientas dispersas a' }, l2: { en: 'one platform.', es: 'una sola plataforma.' } },
        interface: { l1: { en: 'Simple to', es: 'Simple de' }, l2: { en: 'navigate.', es: 'navegar.' }, l3: { en: 'Easy to', es: 'Fácil de' }, l4: { en: 'manage.', es: 'gestionar.' } },
        outcome: { l1: { en: 'Smoother events.', es: 'Eventos más fluidos.' }, l2: { en: 'Happier', es: 'Organizadores' }, l3: { en: 'organizers.', es: 'más contentos.' } },
      },
      problemNote: {
        en: 'The real work was making authentication, analytics and mapping feel like one product instead of three bolted-on features.',
        es: 'El verdadero trabajo fue hacer que autenticación, analytics y mapeo se sintieran como un solo producto y no como tres funciones pegadas entre sí.',
      },
      approach: [
        { t: { en: 'Structure', es: 'Estructura' }, d: { en: 'Mapped the event flow — registration, schedule, admin — into clear authenticated routes.', es: 'Mapeé el flujo del evento — registro, agenda, admin — en rutas autenticadas claras.' } },
        { t: { en: 'Backend', es: 'Backend' }, d: { en: 'Built a PHP + MySQL backend with RESTful endpoints for every screen.', es: 'Construí un backend PHP + MySQL con endpoints RESTful para cada pantalla.' } },
        { t: { en: 'Interface', es: 'Interfaz' }, d: { en: 'Added dynamic Leaflet maps so attendees could find the venue and sessions.', es: 'Agregué mapas dinámicos con Leaflet para que los asistentes encontraran el lugar y las sesiones.' } },
        { t: { en: 'Delivery', es: 'Entrega' }, d: { en: 'Shipped an admin analytics dashboard for organizers to track the event live.', es: 'Entregué un dashboard de analytics para que los organizadores siguieran el evento en vivo.' } },
      ],
      outcome: [
        { t: { en: 'End-to-end', es: 'De punta a punta' }, d: { en: 'auth, admin and public views in one platform', es: 'auth, admin y vistas públicas en una sola plataforma' }, color: 'lime' },
        { t: { en: 'Live event data', es: 'Datos del evento en vivo' }, d: { en: 'for organizers through the admin dashboard', es: 'para organizadores a través del dashboard admin' }, color: 'violet' },
        { t: { en: 'Easier navigation', es: 'Navegación más fácil' }, d: { en: 'with interactive venue maps', es: 'con mapas interactivos del lugar' }, color: 'coral' },
      ],
    },
    {
      slug: 'glowradiance',
      title: 'GlowRadiance',
      year: '2024',
      tag: 'web',
      tint: ['oklch(40% 0.12 30)', 'oklch(72% 0.14 60)'],
      role: { en: 'Designer & Developer', es: 'Diseño y Desarrollo' },
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
      headlines: {
        problem: { l1: { en: "Skincare shouldn't feel loud.", es: 'El skincare no debería sentirse ruidoso.' }, l2: { en: "Shopping shouldn't either.", es: 'Comprar tampoco.' } },
        approach: { l1: { en: 'From a product list to', es: 'De una lista de productos a' }, l2: { en: 'a calm experience.', es: 'una experiencia calmada.' } },
        interface: { l1: { en: 'Simple to', es: 'Simple de' }, l2: { en: 'browse.', es: 'explorar.' }, l3: { en: 'Easy to', es: 'Fácil de' }, l4: { en: 'buy.', es: 'comprar.' } },
        outcome: { l1: { en: 'A calmer catalog.', es: 'Un catálogo más calmado.' }, l2: { en: 'A smoother', es: 'Un carrito' }, l3: { en: 'cart.', es: 'más fluido.' } },
      },
      problemNote: {
        en: 'The real work was making a full shopping flow feel effortless — with no framework doing the heavy lifting.',
        es: 'El verdadero trabajo fue lograr que todo el flujo de compra se sintiera sin esfuerzo — sin ningún framework haciendo el trabajo pesado.',
      },
      approach: [
        { t: { en: 'Structure', es: 'Estructura' }, d: { en: 'Organized the catalog by skincare category so browsing feels intuitive.', es: 'Organicé el catálogo por categoría de skincare para que navegar se sienta intuitivo.' } },
        { t: { en: 'Visual system', es: 'Sistema visual' }, d: { en: 'Built a calm, tactile visual language suited to a skincare brand.', es: 'Construí un lenguaje visual calmado y táctil, propio de una marca de skincare.' } },
        { t: { en: 'Interface', es: 'Interfaz' }, d: { en: 'Designed the product, cart and checkout flow with plain HTML/CSS/JS.', es: 'Diseñé el flujo de producto, carrito y checkout con HTML/CSS/JS puro.' } },
        { t: { en: 'Experience', es: 'Experiencia' }, d: { en: 'Kept every interaction lightweight — no framework overhead to slow it down.', es: 'Mantuve cada interacción ligera — sin el peso de un framework de por medio.' } },
      ],
      outcome: [
        { t: { en: 'Framework-free', es: 'Sin frameworks' }, d: { en: 'just clean HTML, CSS and JS', es: 'solo HTML, CSS y JS limpio' }, color: 'lime' },
        { t: { en: 'Calm browsing', es: 'Navegación calmada' }, d: { en: 'from catalog to cart without friction', es: 'del catálogo al carrito sin fricción' }, color: 'violet' },
        { t: { en: 'Checkout mockup', es: 'Mockup de checkout' }, d: { en: 'ready to connect to a real store', es: 'listo para conectarse a una tienda real' }, color: 'coral' },
      ],
    },
    {
      slug: 'tasknexus',
      title: 'TaskNexus',
      year: '2024',
      tag: 'web',
      tint: ['oklch(30% 0.13 275)', 'oklch(64% 0.15 300)'],
      role: { en: 'Designer & Developer', es: 'Diseño y Desarrollo' },
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
      headlines: {
        problem: { l1: { en: "Tasks weren't the problem.", es: 'Las tareas no eran el problema.' }, l2: { en: 'Visibility was.', es: 'La visibilidad sí.' } },
        approach: { l1: { en: 'From scattered to-dos to', es: 'De pendientes dispersos a' }, l2: { en: 'one clear board.', es: 'un tablero claro.' } },
        interface: { l1: { en: 'Simple to', es: 'Simple de' }, l2: { en: 'organize.', es: 'organizar.' }, l3: { en: 'Easy to', es: 'Fácil de' }, l4: { en: 'track.', es: 'seguir.' } },
        outcome: { l1: { en: 'Clearer boards.', es: 'Tableros más claros.' }, l2: { en: 'Lighter', es: 'Menos carga' }, l3: { en: 'workload.', es: 'de trabajo.' } },
      },
      problemNote: {
        en: 'The real work was making a board someone actually wants to open every morning — not just another tracker.',
        es: 'El verdadero trabajo fue lograr un tablero que alguien realmente quiera abrir cada mañana — no solo otro tracker más.',
      },
      approach: [
        { t: { en: 'Structure', es: 'Estructura' }, d: { en: 'Organized work into boards, so due dates and owners are always visible.', es: 'Organicé el trabajo en tableros, para que fechas y responsables siempre sean visibles.' } },
        { t: { en: 'Visual system', es: 'Sistema visual' }, d: { en: 'Used priority labels and color to make status readable at a glance.', es: 'Usé etiquetas de prioridad y color para que el estado se lea de un vistazo.' } },
        { t: { en: 'Interface', es: 'Interfaz' }, d: { en: 'Built kanban-style boards with drag-and-drop task management.', es: 'Construí tableros estilo kanban con gestión de tareas por arrastrar y soltar.' } },
        { t: { en: 'Experience', es: 'Experiencia' }, d: { en: 'Added local persistence so progress is never lost between sessions.', es: 'Agregué persistencia local para que el progreso nunca se pierda entre sesiones.' } },
      ],
      outcome: [
        { t: { en: 'Kanban clarity', es: 'Claridad kanban' }, d: { en: "without a full project-suite's noise", es: 'sin el ruido de una suite completa de proyectos' }, color: 'lime' },
        { t: { en: 'Progress tracking', es: 'Seguimiento de progreso' }, d: { en: 'that persists between sessions', es: 'que persiste entre sesiones' }, color: 'violet' },
        { t: { en: 'Framework-free build', es: 'Construido sin frameworks' }, d: { en: 'with vanilla JS and CSS', es: 'con JS y CSS puro' }, color: 'coral' },
      ],
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
        en: 'Started in front-line bilingual customer support — where I learned how operations actually feel from the inside, context that still shapes every dashboard I build. Moved into audit analysis, trend identification and service script optimization, then into leading 8 evaluators with data-driven coaching and automating workflows via Excel VBA macros, lifting team efficiency and reporting speed.',
        es: 'Empecé en atención al cliente bilingüe en primera línea — donde aprendí cómo se siente realmente la operación desde adentro, contexto que sigue guiando cada dashboard que construyo. Pasé a análisis de auditorías, identificación de tendencias y optimización de scripts, y luego a liderar 8 evaluadores con coaching basado en datos y automatizar flujos con macros Excel VBA, mejorando eficiencia y velocidad de reporting.',
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
