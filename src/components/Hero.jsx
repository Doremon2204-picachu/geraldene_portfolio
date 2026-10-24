import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowRight } from 'lucide-react';

export default function Hero() {
  // Clear any legacy localStorage photo override on mount to ensure Geraldene's real photo loads
  useEffect(() => {
    if (typeof window !== 'undefined') {
      try {
        localStorage.removeItem('geraldene-profile-img');
      } catch (_) {}
    }
  }, []);

  const profileImage = '/profile.jpg';

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
            {/* Main Headline */}
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-extrabold tracking-tight text-neutral-900 dark:text-white leading-[1.12]">
              Curiosity in code.{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
                Creativity in motion.
              </span>
            </h1>

            {/* Bio paragraph */}
            <p className="text-base sm:text-lg text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto lg:mx-0 leading-relaxed font-normal">
              Hi, I'm <strong className="text-neutral-900 dark:text-white font-semibold">Geraldene Cabiles</strong>, an Information Technology student exploring the world of frontend development, creative UI design, and interactive web experiences. I'm passionate about learning, turning ideas into digital experiences, and growing one project at a time.
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
                  alert("Geraldene's resume download initiated. You can place your actual resume.pdf in public/");
                }}
                className="inline-flex items-center gap-1.5 px-4 py-3.5 rounded-xl text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white text-sm font-medium transition-colors"
                title="Download CV"
              >
                <Download className="w-4 h-4" />
                <span>Resume (CV)</span>
              </a>
            </div>
          </motion.div>

          {/* Right Column: Clean Minimalist Picture Frame with Cyber Circuit Accent */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            {/* Outer Picture Card with subtle glow */}
            <div className="relative group w-full max-w-[380px] sm:max-w-[410px]">
              
              {/* Ambient Glow behind the card */}
              <div className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/30 via-purple-500/30 to-pink-500/30 rounded-[36px] blur-2xl opacity-75 group-hover:opacity-100 transition-opacity duration-500 -z-20" />

              {/* Cyber Circuit Tech Accent - Steady and shifted to the right to fit the frame */}
              <div className="absolute -top-6 -right-10 sm:-top-8 sm:-right-14 w-44 sm:w-52 pointer-events-none z-20 select-none">
                {/* Glowing node aura */}
                <div className="absolute top-2 right-2 w-20 h-20 bg-cyan-400/25 rounded-full blur-xl pointer-events-none" />
                <img 
                  src="/circuit-tech.png" 
                  alt="Cyber Tech Circuit Accent" 
                  className="relative w-full h-auto drop-shadow-md dark:drop-shadow-[0_0_18px_rgba(34,211,238,0.7)] dark:brightness-125"
                />
              </div>

              {/* Main Card Container with increased shadow */}
              <div className="relative z-10 rounded-3xl border border-neutral-200/90 dark:border-neutral-800/90 bg-white dark:bg-neutral-900/95 p-3 sm:p-3.5 shadow-[0_22px_55px_rgba(0,0,0,0.16),0_12px_24px_rgba(0,0,0,0.08)] dark:shadow-[0_30px_75px_-15px_rgba(0,0,0,0.85),0_0_35px_rgba(0,0,0,0.5)] backdrop-blur-md overflow-hidden">
                
                {/* Picture Frame */}
                <div className="relative aspect-[4/5] sm:h-[480px] w-full rounded-2xl overflow-hidden bg-neutral-100 dark:bg-neutral-800">
                  <img
                    src={profileImage}
                    alt="Geraldene Cabiles — UI/UX Designer & Web Developer"
                    className="w-full h-full object-cover object-center group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                  />

                  {/* Gentle gradient overlay for high contrast text at bottom */}
                  <div className="absolute inset-0 bg-gradient-to-t from-neutral-950/80 via-neutral-950/20 to-transparent pointer-events-none" />

                  {/* Clean Bottom Nameplate over picture */}
                  <div className="absolute bottom-3 left-3 right-3 z-10 p-4 rounded-xl bg-white/90 dark:bg-neutral-950/85 backdrop-blur-md border border-white/40 dark:border-neutral-800 shadow-xl">
                    <h3 className="font-extrabold text-base text-neutral-900 dark:text-white tracking-tight">
                      Geraldene Cabiles
                    </h3>
                    <p className="text-xs text-neutral-600 dark:text-neutral-400 font-medium mt-0.5">
                      BSIT · UI/UX Designer & Web Developer
                    </p>
                  </div>

                </div>

              </div>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
