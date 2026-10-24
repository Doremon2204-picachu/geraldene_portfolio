import React, { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Download, Sparkles, CheckCircle2, ArrowRight, Camera, Code2 } from 'lucide-react';
import { FigmaIcon } from './Icons';

export default function Hero() {
  const fileInputRef = useRef(null);

  // Default high-resolution designer portrait
  const defaultPhoto = 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=800&auto=format&fit=crop&q=80';
  
  // Try local /profile.jpg first, fall back to defaultPhoto if not yet uploaded
  const [profileImage, setProfileImage] = useState(() => {
    return localStorage.getItem('geraldene-profile-img') || '/profile.jpg';
  });

  const handleImageUpload = (e) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (uploadEvent) => {
        const result = uploadEvent.target?.result;
        if (typeof result === 'string') {
          setProfileImage(result);
          try {
            localStorage.setItem('geraldene-profile-img', result);
          } catch (err) {
            console.warn('Image too large for localStorage, showing in memory only');
          }
        }
      };
      reader.readAsDataURL(file);
    }
  };

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
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
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

          {/* Right Column: Modified Picture Box Layout */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            {/* Outer Picture Card with Glow */}
            <div className="relative group w-full max-w-[380px] sm:max-w-[410px]">
              
              {/* Ambient Glow behind the card */}
              <div className="absolute -inset-1.5 bg-gradient-to-tr from-indigo-500/25 via-purple-500/25 to-pink-500/25 rounded-[32px] blur-xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-10" />

              {/* Main Card Container */}
              <div className="relative rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/90 p-3 sm:p-3.5 shadow-2xl backdrop-blur-md overflow-hidden">
                
                {/* Top Subtle Mac-Style Window Dots / Controls */}
                <div className="flex items-center justify-between px-3 py-2 pb-3 border-b border-neutral-100 dark:border-neutral-800/80 mb-2.5">
                  <div className="flex items-center gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-rose-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-amber-400/80" />
                    <div className="w-2.5 h-2.5 rounded-full bg-emerald-400/80" />
                  </div>
                  <div className="flex items-center gap-1.5 text-[11px] font-mono text-neutral-400 dark:text-neutral-500">
                    <Sparkles className="w-3 h-3 text-indigo-500" />
                    <span>geraldene.portrait</span>
                  </div>
                </div>

                {/* Picture Frame */}
                <div className="relative aspect-[4/5] sm:h-[460px] w-full rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <img
                    src={profileImage}
                    alt="Geraldene — UI/UX Designer & Web Developer"
                    onError={(e) => {
                      // Fallback to beautiful default photo if custom file isn't found
                      if (e.currentTarget.src !== defaultPhoto) {
                        e.currentTarget.src = defaultPhoto;
                      }
                    }}
                    className="w-full h-full object-cover object-top group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />

                  {/* Gentle gradient overlay for high contrast text at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent pointer-events-none" />

                  {/* Top-Right Floating Pill: Available Badge */}
                  <div className="absolute top-3.5 right-3.5 z-10">
                    <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900/80 dark:bg-neutral-900/90 text-white backdrop-blur-md border border-white/20 text-[11px] font-semibold shadow-lg">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400"></span>
                      </span>
                      <span>Online / Active</span>
                    </div>
                  </div>

                  {/* Change Photo Quick Action Button */}
                  <button
                    onClick={() => fileInputRef.current?.click()}
                    aria-label="Upload custom picture"
                    title="Click to preview your own photo"
                    className="absolute top-3.5 left-3.5 z-10 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-white/80 dark:bg-neutral-900/80 text-neutral-800 dark:text-neutral-200 backdrop-blur-md border border-white/40 dark:border-neutral-700/60 text-[10px] font-medium opacity-90 hover:opacity-100 hover:scale-105 transition-all cursor-pointer shadow-md"
                  >
                    <Camera className="w-3 h-3 text-indigo-500" />
                    <span>Change Photo</span>
                  </button>

                  <input
                    ref={fileInputRef}
                    type="file"
                    accept="image/*"
                    onChange={handleImageUpload}
                    className="hidden"
                  />

                  {/* Bottom Information Card over picture */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 p-4 rounded-xl bg-white/90 dark:bg-neutral-950/85 backdrop-blur-md border border-white/40 dark:border-neutral-800 shadow-xl">
                    <div className="flex items-center justify-between">
                      <div>
                        <h3 className="font-extrabold text-base text-neutral-900 dark:text-white tracking-tight">
                          Geraldene
                        </h3>
                        <p className="text-xs text-neutral-600 dark:text-neutral-400 font-medium">
                          UI/UX Designer & Web Developer
                        </p>
                      </div>
                      
                      {/* Dual Craft Badges */}
                      <div className="flex items-center gap-1.5">
                        <span className="p-1.5 rounded-lg bg-purple-500/10 border border-purple-500/20 text-purple-600 dark:text-purple-400" title="Figma UI/UX Design">
                          <FigmaIcon className="w-3.5 h-3.5" />
                        </span>
                        <span className="p-1.5 rounded-lg bg-indigo-500/10 border border-indigo-500/20 text-indigo-600 dark:text-indigo-400" title="React.js Web Development">
                          <Code2 className="w-3.5 h-3.5" />
                        </span>
                      </div>
                    </div>
                  </div>

                </div>

                {/* Card Sub-Footer info */}
                <div className="mt-2.5 px-2 flex items-center justify-between text-[11px] text-neutral-500 dark:text-neutral-400">
                  <span className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-500"></span>
                    Portfolio Portrait
                  </span>
                  <span className="font-mono text-[10px] text-neutral-400">
                    Replace via public/profile.jpg
                  </span>
                </div>

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
