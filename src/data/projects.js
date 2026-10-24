export const projects = [
  {
    id: 'novu-flow',
    title: 'Novu Flow — SaaS Analytics & Workflow Platform',
    category: 'Full-Stack UI/UX',
    type: 'ui-ux',
    tagline: 'Streamlining complex data pipelines into intuitive visual workflows.',
    description: 'A comprehensive end-to-end redesign and frontend implementation of an enterprise data observability dashboard. Replaced multi-step configuration menus with an interactive node-based canvas.',
    role: 'Lead Product Designer & Frontend Developer',
    duration: '4 months',
    year: '2024',
    gradient: 'from-blue-600/20 via-indigo-500/20 to-purple-600/20',
    accentColor: '#6366f1',
    tags: ['Figma', 'React.js', 'Tailwind CSS', 'Framer Motion', 'Design Systems', 'Data Viz'],
    metrics: [
      { label: 'Task Completion', value: '+42%' },
      { label: 'Time-to-Value', value: '-35%' },
      { label: 'Active Users', value: '85k+' },
    ],
    overview: {
      challenge: 'Enterprise users faced steep learning curves configuring telemetry alerts and pipeline flows. The existing interface was cluttered with nested modals, causing a 28% drop-off rate during onboarding.',
      solution: 'Conducted 18 user interviews and designed a drag-and-drop visual workflow builder backed by a modular React component library. Integrated real-time validation and contextual drawer panels.',
      impact: 'Reduced onboarding time by 35% and increased daily recurring workflow runs by 42% within two months of launch.'
    },
    deliverables: [
      'End-to-end Figma UI Kit with 120+ tokens and variants',
      'Production-ready React dashboard with Tailwind CSS',
      'Custom interactive canvas with Framer Motion animations',
      'WCAG 2.1 AA compliant color contrast & keyboard navigation'
    ],
    liveUrl: 'https://example.com/novu-flow',
    githubUrl: 'https://github.com/geraldene/novu-flow',
    figmaUrl: 'https://figma.com/@geraldene/novu-flow',
    featured: true
  },
  {
    id: 'lumina-health',
    title: 'Lumina — Patient Portal & Telehealth Experience',
    category: 'UI/UX Design',
    type: 'ui-ux',
    tagline: 'Human-centered telehealth platform prioritizing accessibility and calm aesthetics.',
    description: 'Designed a compassionate, high-accessibility patient experience for remote healthcare consultations, appointment bookings, and medication tracking.',
    role: 'UI/UX Researcher & Product Designer',
    duration: '3 months',
    year: '2024',
    gradient: 'from-emerald-600/20 via-teal-500/20 to-cyan-600/20',
    accentColor: '#10b981',
    tags: ['Figma', 'User Research', 'Design System', 'Accessibility (a11y)', 'Prototyping'],
    metrics: [
      { label: 'Patient Retention', value: '94%' },
      { label: 'Booking Time', value: '< 90s' },
      { label: 'Accessibility', value: 'WCAG AAA' },
    ],
    overview: {
      challenge: 'Patients of varying technical literacy and vision capabilities experienced anxiety navigating cluttered medical portals, often missing follow-up appointments.',
      solution: 'Pioneered an empathetic design system featuring high-legibility typography, clear hierarchy, voice-guided appointment booking, and a calming color palette.',
      impact: 'Achieved a 94% patient retention score and cut median booking time from 4.5 minutes down to under 90 seconds.'
    },
    deliverables: [
      'Comprehensive user persona and empathy mapping documentation',
      'Interactive micro-prototypes tested with 30 diverse participants',
      'Figma component system with rigorous WCAG AAA contrast checks',
      'Developer handoff specs with responsive layout guidelines'
    ],
    liveUrl: 'https://example.com/lumina',
    githubUrl: 'https://github.com/geraldene/lumina-health',
    figmaUrl: 'https://figma.com/@geraldene/lumina',
    featured: true
  },
  {
    id: 'aura-studio',
    title: 'Aura Studio — Minimalist E-Commerce Platform',
    category: 'Web Development',
    type: 'web-dev',
    tagline: 'An editorial shopping destination with fluid page choreography.',
    description: 'Built a high-performance, minimalist digital flagship store with custom cart drawer transitions, product filtering, and an editorial lookbook feel.',
    role: 'Frontend Engineer & Visual Designer',
    duration: '2 months',
    year: '2023',
    gradient: 'from-amber-600/20 via-orange-500/20 to-rose-600/20',
    accentColor: '#f59e0b',
    tags: ['React.js', 'Vite', 'Tailwind CSS', 'Framer Motion', 'Stripe API'],
    metrics: [
      { label: 'Lighthouse Score', value: '99/100' },
      { label: 'Checkout Conv.', value: '+26%' },
      { label: 'Bundle Size', value: '< 65kb' },
    ],
    overview: {
      challenge: 'Traditional e-commerce templates felt rigid and generic, lacking the tactile editorial atmosphere of high-end design magazines.',
      solution: 'Crafted bespoke layout grids, fluid image zoom interactions, subtle cursor effects, and an instantaneous client-side filter engine with zero layout shift.',
      impact: 'Increased checkout conversion by 26% and earned an Awwwards Site of the Day nominee badge.'
    },
    deliverables: [
      'Interactive lookbook with smooth Framer Motion page choreography',
      'Optimized image pipeline with responsive AVIF/WebP srcset',
      'Accessible keyboard-navigable slide-out cart and modal dialogs',
      'Clean modular state architecture with persistent shopping bag'
    ],
    liveUrl: 'https://example.com/aura-studio',
    githubUrl: 'https://github.com/geraldene/aura-studio',
    figmaUrl: 'https://figma.com/@geraldene/aura',
    featured: true
  },
  {
    id: 'finpulse-app',
    title: 'FinPulse — Modern Wealth & Portfolio Tracker',
    category: 'Full-Stack UI/UX',
    type: 'web-dev',
    tagline: 'Clean financial clarity with real-time portfolio tracking.',
    description: 'Designed and developed an intuitive personal finance web app combining investment tracking, subscription audits, and savings milestone projections.',
    role: 'Product Designer & Frontend Developer',
    duration: '3 months',
    year: '2023',
    gradient: 'from-violet-600/20 via-fuchsia-500/20 to-pink-600/20',
    accentColor: '#8b5cf6',
    tags: ['React.js', 'Tailwind CSS', 'Chart.js', 'Figma', 'Responsive Design'],
    metrics: [
      { label: 'Monthly Active', value: '45k+' },
      { label: 'User Rating', value: '4.9/5' },
      { label: 'Load Speed', value: '0.4s' },
    ],
    overview: {
      challenge: 'Users felt overwhelmed by dense financial spreadsheets and confusing stock tickers with obscure jargon.',
      solution: 'Transformed complex metrics into bite-sized visual progress bars, interactive breakdown rings, and automated smart insights cards.',
      impact: 'Featured on Product Hunt with over 800 upvotes and reached 45,000 monthly active users.'
    },
    deliverables: [
      'Figma wireframes to high-fidelity clickable prototype',
      'Custom themeable charts with dark and light color modes',
      'Responsive mobile-first web app with offline caching',
      'Comprehensive design specification document for engineering'
    ],
    liveUrl: 'https://example.com/finpulse',
    githubUrl: 'https://github.com/geraldene/finpulse',
    figmaUrl: 'https://figma.com/@geraldene/finpulse',
    featured: false
  },
  {
    id: 'craft-ui',
    title: 'CraftUI — Modern Accessible Component Library',
    category: 'Design Systems',
    type: 'design-systems',
    tagline: 'A craft-driven design system bridging the gap between Figma & React.',
    description: 'An open-source design system and React component kit focused on keyboard navigation, micro-interactions, and design token synchronization.',
    role: 'Creator & Maintainer',
    duration: 'Ongoing',
    year: '2024',
    gradient: 'from-sky-600/20 via-blue-500/20 to-indigo-600/20',
    accentColor: '#0ea5e9',
    tags: ['React.js', 'Tailwind CSS', 'Figma Tokens', 'Radix UI', 'Storybook'],
    metrics: [
      { label: 'Components', value: '45+' },
      { label: 'GitHub Stars', value: '1.2k' },
      { label: 'A11y Tests', value: '100%' },
    ],
    overview: {
      challenge: 'Design systems often diverge between Figma components and React code, creating friction and visual inconsistency across sprint releases.',
      solution: 'Created an automated token pipeline connecting Figma Variables with Tailwind CSS theme configuration, paired with tested React components.',
      impact: 'Adopted by 5 startup engineering teams, cutting UI implementation time in half.'
    },
    deliverables: [
      '45+ accessible UI components with comprehensive states (hover, focus, disabled)',
      'Figma community kit with auto-layout and variable modes',
      'Live interactive documentation site with copy-paste code snippets',
      'Automated accessibility regression testing with Axe Core'
    ],
    liveUrl: 'https://example.com/craft-ui',
    githubUrl: 'https://github.com/geraldene/craft-ui',
    figmaUrl: 'https://figma.com/@geraldene/craft-ui',
    featured: false
  }
];

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'ui-ux', label: 'UI/UX Design' },
  { id: 'web-dev', label: 'Web Applications' },
  { id: 'design-systems', label: 'Design Systems' },
];
