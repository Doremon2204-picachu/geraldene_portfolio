# Geraldene — UI/UX Designer & Web Developer Portfolio

A modern, high-performance portfolio tailored for a hybrid **UI/UX Designer & Frontend Web Developer**, built with **React.js (Vite)**, **Tailwind CSS v4**, **Framer Motion**, and **Lucide Icons**.

---

## ✨ Features

- **Dual Aesthetic & Craft**: Showcases both sides of the craft — human-centered UI/UX design systems in Figma and clean, responsive code in React.
- **Light / Dark Mode**: Seamless toggle with persistent `localStorage` memory and OS system preference detection.
- **Interactive Case Studies Modal**: Deep-dive modals for each project featuring the challenge, design solution, measurable impact/metrics, deliverables, and live/source links.
- **Category Filter Tabs**: Easily browse by All, UI/UX Design, Web Applications, or Design Systems.
- **Interactive Design vs Code Card**: Hero section with interactive toggle between Figma tokens/specs and React JSX code.
- **3-Pillar Skills Matrix**: Categorized into UI/UX Design, Frontend Development, and Tools & Engineering Practices with animated mastery bars.
- **4-Step Methodology / Process**: Step-by-step showcase of your design thinking and engineering workflow.
- **Career Timeline & Education**: Professional experience breakdown with key achievements and credentials.
- **Collaborator Testimonials**: Real endorsements highlighting design speed and code quality.
- **Interactive Contact Section**: Contact form with validation and instant state feedback, plus a one-click "Copy Email" button.

---

## 🛠️ Tech Stack

- **Framework**: [React 19](https://react.dev/) + [Vite 8](https://vitejs.dev/)
- **Styling**: [Tailwind CSS v4](https://tailwindcss.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Icons**: [Lucide React](https://lucide.dev/) + Custom SVG Brand Icons
- **Typography**: Plus Jakarta Sans & Inter (via Google Fonts)

---

## 🚀 Getting Started

### 1. Install dependencies
```bash
npm install
```

### 2. Start the local development server
```bash
npm run dev
```
Open your browser at `http://localhost:5173`.

### 3. Build for production
```bash
npm run build
```
The optimized production output will be generated in the `dist/` directory, ready to deploy to Vercel, Netlify, GitHub Pages, or Cloudflare Pages.

---

## 📁 Project Structure

```
geraldene_portfolio/
├── public/                 # Static assets (favicons, CV PDF, etc.)
├── src/
│   ├── components/
│   │   ├── Navbar.jsx         # Sticky header with theme switcher & mobile menu
│   │   ├── Hero.jsx           # Hero with interactive Figma/React preview card
│   │   ├── Projects.jsx       # Filterable portfolio case study grid
│   │   ├── ProjectModal.jsx   # Detailed case study overlay modal
│   │   ├── Skills.jsx         # 3-pillar skills & proficiency indicators
│   │   ├── Process.jsx        # 4-step UX/Engineering framework
│   │   ├── Experience.jsx     # Career timeline & education credentials
│   │   ├── Testimonials.jsx   # Endorsements from founders & engineering leads
│   │   ├── Contact.jsx        # Contact form with copy-email & social links
│   │   ├── Footer.jsx         # Minimalist footer with back-to-top button
│   │   └── Icons.jsx          # SVG brand icons (Figma, GitHub, LinkedIn)
│   ├── context/
│   │   └── ThemeContext.jsx   # Theme state & HTML root dark class toggle
│   ├── data/
│   │   ├── projects.js        # Easy-to-edit project case study items
│   │   ├── skills.js          # Design & engineering skill sets
│   │   ├── experience.js      # Work history & degrees
│   │   └── testimonials.js    # Client & coworker testimonials
│   ├── App.jsx                # Main layout composition
│   ├── index.css              # Tailwind CSS imports & theme setup
│   └── main.jsx               # React DOM entry point
├── package.json
└── vite.config.js             # Vite + Tailwind Vite plugin configuration
```

---

## 📝 Customizing Your Information

All your personal and professional data is decoupled from the UI inside `src/data/`:
- **Change projects**: Edit [`src/data/projects.js`](file:///c:/Users/victc/OneDrive/Desktop/geraldene_portfolio/src/data/projects.js)
- **Change skills**: Edit [`src/data/skills.js`](file:///c:/Users/victc/OneDrive/Desktop/geraldene_portfolio/src/data/skills.js)
- **Change work history**: Edit [`src/data/experience.js`](file:///c:/Users/victc/OneDrive/Desktop/geraldene_portfolio/src/data/experience.js)
- **Change testimonials**: Edit [`src/data/testimonials.js`](file:///c:/Users/victc/OneDrive/Desktop/geraldene_portfolio/src/data/testimonials.js)
- **Change email & socials**: Edit [`src/components/Contact.jsx`](file:///c:/Users/victc/OneDrive/Desktop/geraldene_portfolio/src/components/Contact.jsx)
