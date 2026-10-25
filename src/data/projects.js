export const projects = [
  {
    id: 'bitemap-official',
    title: 'BITEMAP — GIS Animal Bite Tracking & Monitoring System',
    category: 'GIS & Health Informatics',
    type: 'web-dev',
    tagline: 'A GIS-based animal bite tracking and anti-rabies vaccination monitoring platform.',
    description: 'A web-based healthcare GIS information system designed to help animal bite treatment centers organize patient records, track bite incidents, monitor post-exposure prophylaxis (PEP) schedules, and review barangay-level outbreak patterns through interactive GIS map visualization.',
    role: 'Frontend & Full-Stack Contributor',
    duration: 'Academic Capstone',
    year: '2024',
    image: '/bitemap.jpg',
    gradient: 'from-emerald-600/20 via-teal-500/20 to-cyan-600/20',
    accentColor: '#10b981',
    tags: ['React 18', 'TypeScript', 'Leaflet GIS', 'Laravel', 'PHP', 'Tailwind CSS'],
    metrics: [
      { label: 'Platform', value: 'Web GIS' },
      { label: 'Backend', value: 'Laravel & MariaDB' },
      { label: 'Container', value: 'Docker' },
    ],
    overview: {
      challenge: 'Healthcare facilities faced significant friction manually recording animal bite cases, causing delayed rabies interventions and difficulty tracking geographical bite patterns across barangays.',
      solution: 'Developed an integrated web application with interactive GIS mapping using Leaflet, automated SMS reminders via Twilio, and structured patient prophylaxis timeline records.',
      impact: 'Streamlined patient PEP tracking, provided real-time incident heatmap overlays, and modernized clinic reporting.'
    },
    deliverables: [
      'Interactive GIS map with barangay incident markers and filterable heatmaps',
      'Patient record management with automated vaccination schedule calculators',
      'Secure backend API with Laravel and Docker containerization'
    ],
    githubUrl: 'https://github.com/4shLee/BITEMAPOFFICIAL',
    featured: true
  },
  {
    id: 'inventory-system',
    title: 'Inventory Management System',
    category: 'Full-Stack Enterprise App',
    type: 'web-dev',
    tagline: 'Streamlined stock tracking, auditing, and warehouse management system.',
    description: 'A complete full-stack inventory management web application for tracking stock levels, product movement, warehouse audits, and order histories. Built with a robust Laravel RESTful backend API and a modern, responsive frontend.',
    role: 'Full-Stack Developer',
    duration: '2024',
    year: '2024',
    image: '/inventory.jpg',
    gradient: 'from-blue-600/20 via-indigo-500/20 to-cyan-600/20',
    accentColor: '#3b82f6',
    tags: ['Laravel', 'PHP', 'React', 'MySQL', 'REST API', 'Tailwind CSS'],
    metrics: [
      { label: 'Architecture', value: 'REST API' },
      { label: 'Database', value: 'MySQL/MariaDB' },
      { label: 'Stack', value: 'Laravel + React' },
    ],
    overview: {
      challenge: 'Manual inventory logbooks cause discrepancies, stockouts, and slow inventory auditing in fast-paced operational environments.',
      solution: 'Engineered a full-stack inventory system with centralized product tracking, categorical filtering, real-time stock alerts, and automated transactional logs.',
      impact: 'Provided accurate inventory visibility, prevented item shortages, and accelerated auditing workflows.'
    },
    deliverables: [
      'Organized REST API with CRUD controllers, validation, and database migrations',
      'Clean user interface with dynamic stock indicators and search filtering',
      'Transactional audit logs recording item transfers and quantity adjustments'
    ],
    githubUrl: 'https://github.com/Doremon2204-picachu/inventory-system',
    featured: true
  },
  {
    id: 'guestbook-app',
    title: 'Guestbook Web Application',
    category: 'Full-Stack Web App',
    type: 'web-dev',
    tagline: 'Interactive visitor guestbook with decoupled client & RESTful API architecture.',
    description: 'A full-stack guestbook application allowing visitors to post messages and explore real-time community signatures. Built with a decoupled RESTful API backend (guestbook-api) and an interactive client frontend (guestbook-client).',
    role: 'Full-Stack Developer',
    duration: '2024',
    year: '2024',
    image: '/guestbook.jpg',
    gradient: 'from-violet-600/20 via-indigo-500/20 to-purple-600/20',
    accentColor: '#8b5cf6',
    tags: ['Full-Stack', 'Node.js', 'REST API', 'JavaScript', 'Client + API'],
    metrics: [
      { label: 'Architecture', value: 'Decoupled' },
      { label: 'API Backend', value: 'RESTful' },
      { label: 'Client', value: 'Interactive' },
    ],
    overview: {
      challenge: 'Creating a seamless visitor engagement system with persistent data storage and real-time message posting.',
      solution: 'Architected a two-tier decoupled system with a dedicated Node.js/Express API backend handling CRUD operations and an intuitive frontend client for visitor submissions.',
      impact: 'Demonstrated clean API design, asynchronous data fetching, and responsive client-side state handling.'
    },
    deliverables: [
      'Modular RESTful API backend with organized route handlers',
      'Clean interactive client interface for message posting and history browsing',
      'Complete Git version-controlled repository on GitHub'
    ],
    githubUrl: 'https://github.com/Doremon2204-picachu/guestbook-activity',
    featured: true
  }
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'web-dev', label: 'Web Applications' },
];
