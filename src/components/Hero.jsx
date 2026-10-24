import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowDown, Download, Sparkles, Code, Layers, CheckCircle2, ArrowRight } from 'lucide-react';
import { FigmaIcon } from './Icons';

export default function Hero() {
  const [activeTab, setActiveTab] = useState('design');

  const stats = [
    { value: '4+', label: 'Years Experience' },
    { value: '25+', label: 'Shipped Projects' },
    { value: '100%', label: 'Commitment to Quality' },
    { value: '99%', label: 'Avg Lighthouse Score' },
  ];

  return (
    <section id="about" className="relative pt-32 pb-20 sm:pt-40 sm:pb-28 overflow-hidden">
      {/* Background ambient decorative glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[550px] h-[550px] bg-gradient-to-tr from-indigo-500/10 via-purple-500/10 to-pink-500/10 rounded-full blur-3xl pointer-events-none -z-10" />
      <div className="absolute top-1/3 -right-20 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Headline & Value Proposition */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7 space-y-6 text-center lg:text-left"
          >
            {/* Status Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-neutral-200 dark:border-neutral-800 bg-white/60 dark:bg-neutral-900/60 backdrop-blur-sm text-xs font-medium text-neutral-700 dark:text-neutral-300 shadow-2xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Freelance & Full-time Opportunities</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
              Designing intuitive interfaces.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Crafting clean React code.
              </span>
            </h1>

            {/* Bio paragraph */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Hi, I'm <strong className="text-neutral-900 dark:text-white font-semibold">Geraldene</strong> — a hybrid 
              UI/UX Designer and Frontend Web Developer. I bridge the gap between user empathy, design systems in Figma, 
              and performant, accessible web applications in React.
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 font-semibold text-sm hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 group"
              >
                <span>View Selected Works</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </a>

              <a
                href="#contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/70 dark:bg-neutral-900/70 hover:bg-neutral-100 dark:hover:bg-neutral-800 text-neutral-900 dark:text-white font-semibold text-sm transition-all hover:-translate-y-0.5"
              >
                <span>Get In Touch</span>
              </a>

              <a
                href="/resume.pdf"
                onClick={(e) => {
                  e.preventDefault();
                  alert("Geraldene's resume download initiated. You can replace this link with your actual resume.pdf in public/");
                }}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm font-medium transition-colors"
                title="Download CV"
              >
                <Download className="w-4 h-4" />
                <span>Resume (CV)</span>
              </a>
            </div>

            {/* Highlights pill tags */}
            <div className="pt-4 flex flex-wrap items-center justify-center lg:justify-start gap-2.5 text-xs text-neutral-500 dark:text-neutral-400">
              <span className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-200/60 dark:border-neutral-800/60">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
                Figma Design Systems
              </span>
              <span className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-200/60 dark:border-neutral-800/60">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
                React & Tailwind CSS
              </span>
              <span className="flex items-center gap-1.5 bg-neutral-100 dark:bg-neutral-900 px-3 py-1.5 rounded-lg border border-neutral-200/60 dark:border-neutral-800/60">
                <CheckCircle2 className="w-3.5 h-3.5 text-indigo-500" />
                WCAG 2.1 Accessibility
              </span>
            </div>
          </motion.div>

          {/* Right Column: Interactive Hybrid Designer/Developer Showcase Card */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md rounded-2xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/90 shadow-xl overflow-hidden backdrop-blur-md">
              
              {/* Window Title Bar & Tabs */}
              <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 dark:border-neutral-800 bg-neutral-100/70 dark:bg-neutral-900/70">
                <div className="flex items-center gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-rose-400/80" />
                  <div className="w-3 h-3 rounded-full bg-amber-400/80" />
                  <div className="w-3 h-3 rounded-full bg-emerald-400/80" />
                </div>
                
                {/* Switcher: Design view vs Code view */}
                <div className="flex p-0.5 rounded-lg bg-neutral-200/70 dark:bg-neutral-800 text-xs font-medium">
                  <button
                    onClick={() => setActiveTab('design')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all cursor-pointer ${
                      activeTab === 'design'
                        ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-2xs font-semibold'
                        : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    <Layers className="w-3.5 h-3.5 text-purple-500" />
                    <span>Figma Specs</span>
                  </button>
                  <button
                    onClick={() => setActiveTab('code')}
                    className={`flex items-center gap-1.5 px-3 py-1 rounded-md transition-all cursor-pointer ${
                      activeTab === 'code'
                        ? 'bg-white dark:bg-neutral-700 text-neutral-900 dark:text-white shadow-2xs font-semibold'
                        : 'text-neutral-500 hover:text-neutral-900 dark:hover:text-white'
                    }`}
                  >
                    <Code className="w-3.5 h-3.5 text-indigo-500" />
                    <span>React JSX</span>
                  </button>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6">
                {activeTab === 'design' ? (
                  <div className="space-y-4">
                    {/* Design Specs simulation */}
                    <div className="flex items-center justify-between text-xs font-mono text-neutral-400 dark:text-neutral-500 pb-2 border-b border-neutral-100 dark:border-neutral-800">
                      <span>FRAME: HeroCard.component</span>
                      <span>AUTO-LAYOUT: flex-col</span>
                    </div>

                    {/* Visual Card Component Preview */}
                    <div className="p-5 rounded-xl border border-dashed border-indigo-300 dark:border-indigo-800/80 bg-indigo-50/30 dark:bg-indigo-950/20 space-y-3">
                      <div className="flex items-center justify-between">
                        <span className="text-xs uppercase font-bold tracking-wider text-indigo-600 dark:text-indigo-400 font-mono">
                          Design System Token
                        </span>
                        <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-indigo-100 dark:bg-indigo-900/60 text-indigo-700 dark:text-indigo-300">
                          rad: 16px
                        </span>
                      </div>
                      <h4 className="font-bold text-neutral-900 dark:text-white text-base">
                        Human-Centered Interface
                      </h4>
                      <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed">
                        Precision typography, optical balance, and frictionless user flows designed for clarity.
                      </p>
                      
                      <div className="pt-2 flex items-center gap-2">
                        <div className="h-4 w-4 rounded-full bg-indigo-500" title="#6366f1 Primary" />
                        <div className="h-4 w-4 rounded-full bg-purple-500" title="#a855f7 Secondary" />
                        <div className="h-4 w-4 rounded-full bg-pink-500" title="#ec4899 Accent" />
                        <span className="text-[11px] font-mono text-neutral-400 pl-2">tokens.color.palette</span>
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-3 text-xs">
                      <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/50 dark:border-neutral-700/50">
                        <div className="text-neutral-400 dark:text-neutral-500 text-[11px]">Typography</div>
                        <div className="font-semibold text-neutral-800 dark:text-neutral-200 mt-0.5">Plus Jakarta Sans</div>
                      </div>
                      <div className="p-3 rounded-lg bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/50 dark:border-neutral-700/50">
                        <div className="text-neutral-400 dark:text-neutral-500 text-[11px]">Grid System</div>
                        <div className="font-semibold text-neutral-800 dark:text-neutral-200 mt-0.5">8pt Base Rhythm</div>
                      </div>
                    </div>
                  </div>
                ) : (
                  <div className="space-y-3 font-mono text-xs">
                    <div className="flex items-center justify-between text-[11px] text-neutral-400 pb-2 border-b border-neutral-100 dark:border-neutral-800">
                      <span>src/components/HeroCard.jsx</span>
                      <span>ES2026</span>
                    </div>
                    <pre className="p-4 rounded-xl bg-neutral-950 text-neutral-300 text-[11px] leading-relaxed overflow-x-auto selection:bg-neutral-800">
                      <code>
                        <span className="text-purple-400">export default</span>{' '}
                        <span className="text-blue-400">function</span>{' '}
                        <span className="text-amber-300">GeraldenePortfolio</span>() &#123;{'\n'}
                        {'  '}<span className="text-purple-400">const</span> [state, setState] = <span className="text-cyan-400">useState</span>(&#123;{'\n'}
                        {'    '}design: <span className="text-emerald-400">'Figma Systems'</span>,{'\n'}
                        {'    '}code: <span className="text-emerald-400">'React + Tailwind'</span>,{'\n'}
                        {'    '}passion: <span className="text-emerald-400">'Flawless UX'</span>{'\n'}
                        {'  '}&#125;);{'\n\n'}
                        {'  '}<span className="text-purple-400">return</span> ({'\n'}
                        {'    '}&lt;<span className="text-pink-400">Experience</span>{' '}
                        <span className="text-amber-300">impact</span>=&#123;<span className="text-cyan-400">true</span>&#125; /&gt;{'\n'}
                        {'  '});{'\n'}
                        &#125;
                      </code>
                    </pre>
                    <div className="flex items-center justify-between pt-1 text-[11px] text-neutral-500">
                      <span className="flex items-center gap-1.5">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
                        TypeScript & JSX Validated
                      </span>
                      <span>0 errors</span>
                    </div>
                  </div>
                )}
              </div>

              {/* Card Footer Status */}
              <div className="px-6 py-3 border-t border-neutral-100 dark:border-neutral-800 bg-neutral-50/50 dark:bg-neutral-900/50 flex items-center justify-between text-xs text-neutral-500 dark:text-neutral-400">
                <div className="flex items-center gap-1.5">
                  <Sparkles className="w-3.5 h-3.5 text-amber-500" />
                  <span>Dual Mindset: Aesthetic & Algorithmic</span>
                </div>
                <span className="font-mono text-[11px]">v2.4.0</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Stats Row */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="mt-16 sm:mt-24 pt-10 border-t border-neutral-200 dark:border-neutral-800 grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8"
        >
          {stats.map((stat, idx) => (
            <div key={idx} className="space-y-1">
              <div className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
                {stat.value}
              </div>
              <div className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 font-medium">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
