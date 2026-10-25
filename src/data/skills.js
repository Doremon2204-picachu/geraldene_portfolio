export const skillCategories = [
  {
    id: 'design',
    title: 'UI/UX & Product Design',
    subtitle: 'Human-centered interfaces, user empathy, and scalable design systems.',
    icon: 'Palette',
    accent: 'indigo',
    skills: [
      { name: 'Figma & FigJam', level: 96, description: 'Auto-layout, interactive components, tokens, variables' },
      { name: 'Design Systems', level: 94, description: 'Scalable pattern libraries, token architecture, WCAG guidelines' },
      { name: 'User Research & Testing', level: 88, description: 'Usability audits, user interviews, journey mapping, empathy maps' },
      { name: 'Wireframing & Prototyping', level: 92, description: 'Low-to-high fidelity workflows, micro-interactions, clickable flows' },
      { name: 'Information Architecture', level: 86, description: 'Sitemaps, card sorting, navigation models, cognitive load reduction' },
      { name: 'Accessibility (WCAG 2.1)', level: 90, description: 'Color contrast, screen-reader semantics, focus management' }
    ]
  },
  {
    id: 'development',
    title: 'Frontend & Web Development',
    subtitle: 'Clean, performant, and semantic code that brings designs to life.',
    icon: 'Code2',
    accent: 'cyan',
    skills: [
      { name: 'JavaScript (ES6+)', level: 90, description: 'Modern syntax, async/await, DOM APIs, functional patterns' },
      { name: 'React.js', level: 92, description: 'Hooks, custom hooks, context, state management, component architecture' },
      { name: 'TypeScript', level: 85, description: 'Type-safe interfaces, generics, modern tooling' },
      { name: 'Node.js', level: 82, description: 'Backend runtime, APIs, server-side development' },
      { name: 'GSAP & Framer Motion', level: 88, description: 'Timeline animations, scroll-triggered effects, micro-interactions' },
      { name: 'Tailwind CSS', level: 95, description: 'Responsive design, custom theme config, dark mode styling' }
    ]
  },
  {
    id: 'tools',
    title: 'Tools & Engineering Practices',
    subtitle: 'Modern workflows ensuring velocity, quality, and smooth collaboration.',
    icon: 'Wrench',
    accent: 'emerald',
    skills: [
      { name: 'Git & GitHub', level: 90, description: 'Branch management, pull requests, version control, CI/CD basics' },
      { name: 'Vite & Modern Bundlers', level: 88, description: 'Fast HMR, production build optimization, asset pipelines' },
      { name: 'REST APIs & Fetch', level: 86, description: 'API integration, error handling, asynchronous data fetching' },
      { name: 'Cross-Browser Testing', level: 90, description: 'Chrome, Safari, Firefox, Mobile web consistency' },
      { name: 'Agile & Collaborative Workflow', level: 92, description: 'Sprint planning, design-to-dev handoff, asynchronous documentation' },
      { name: 'Performance Optimization', level: 86, description: 'Core Web Vitals, code-splitting, lazy loading, lightweight bundles' }
    ]
  }
];

export const designPrinciples = [
  {
    step: '01',
    title: 'Empathy First',
    description: 'Great interfaces solve real human problems. I begin by listening, observing user friction, and uncovering authentic needs before touching pixels.'
  },
  {
    step: '02',
    title: 'Systematic Consistency',
    description: 'Design systems bridge imagination with engineering. Cohesive tokens, typography scales, and modular components ensure scalable beauty.'
  },
  {
    step: '03',
    title: 'Craft in the Code',
    description: 'Design and code are two sides of the same coin. Understanding CSS and React allows me to design what is actually feasible and push technical boundaries.'
  },
  {
    step: '04',
    title: 'Intentional Polish',
    description: 'Subtle transitions, responsive spring physics, and accessible keyboard navigation elevate a product from merely functional to unforgettable.'
  }
];
