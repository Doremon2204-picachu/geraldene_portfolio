import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Sparkles } from 'lucide-react';
import gsap from 'gsap';

export default function About() {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  useEffect(() => {
    if (!cardRef.current) return;

    // Set 3D perspective
    gsap.set(cardRef.current, {
      transformPerspective: 1200,
      transformStyle: 'preserve-3d'
    });

    const ctx = gsap.context(() => {
      // 1. Continuous gentle floating up and down
      gsap.to(cardRef.current, {
        y: -15,
        duration: 2.5,
        repeat: -1,
        yoyo: true,
        ease: 'power1.inOut'
      });

      // 2. Continuous 3D Flip Animation Loop (Front <-> Back with full visibility)
      const flipTl = gsap.timeline({ repeat: -1 });

      flipTl
        // Gentle tilt to the right
        .to(cardRef.current, {
          rotationY: 30,
          rotationX: -8,
          duration: 2,
          ease: 'sine.inOut'
        })
        // Gentle tilt to the left
        .to(cardRef.current, {
          rotationY: -30,
          rotationX: 8,
          duration: 2,
          ease: 'sine.inOut'
        })
        // Smoothly flip to the BACK face (180 deg)
        .to(cardRef.current, {
          rotationY: 180,
          rotationX: 0,
          duration: 1.8,
          ease: 'power2.inOut'
        })
        // Slight pause to appreciate back face
        .to(cardRef.current, {
          rotationY: 195,
          rotationX: -6,
          duration: 1.5,
          ease: 'sine.inOut'
        })
        // Smoothly flip back to the FRONT face (360 deg)
        .to(cardRef.current, {
          rotationY: 360,
          rotationX: 0,
          duration: 1.8,
          ease: 'power2.inOut'
        })
        // Seamless reset
        .set(cardRef.current, {
          rotationY: 0
        });

      // 3. Subtle pulsing glow effect
      if (glowRef.current) {
        gsap.to(glowRef.current, {
          scale: 1.15,
          opacity: 0.9,
          duration: 2.5,
          repeat: -1,
          yoyo: true,
          ease: 'sine.inOut'
        });
      }
    });

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="py-24 sm:py-32 relative bg-neutral-100/50 dark:bg-neutral-900/40 border-y border-neutral-200/60 dark:border-neutral-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 space-y-3 max-w-2xl">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-semibold bg-indigo-50 dark:bg-indigo-950/60 text-indigo-600 dark:text-indigo-400 border border-indigo-200/50 dark:border-indigo-800/50">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Get To Know Me</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            About Me
          </h2>
        </div>

        {/* Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center">
          
          {/* Left Column: Combined Single Card for Paragraphs */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-7"
          >
            <div className="p-6 sm:p-10 rounded-3xl bg-white dark:bg-neutral-900/90 border border-neutral-200/80 dark:border-neutral-800 shadow-sm space-y-6 text-neutral-700 dark:text-neutral-300 text-base sm:text-lg leading-relaxed">
              <p>
                Hi, I'm <strong className="text-neutral-900 dark:text-white font-semibold">Geraldene Cabiles</strong>, a fourth-year Information Technology student from Digos City, Davao del Sur. I'm interested in technology, frontend development, and creative UI design. I enjoy exploring new ideas and discovering how technology can turn concepts into useful digital experiences.
              </p>

              <p>
                I'm currently learning and improving my skills in <strong className="text-neutral-900 dark:text-white font-semibold">JavaScript, React, Node.js, and TypeScript</strong>, while exploring <strong className="text-indigo-600 dark:text-indigo-400 font-semibold">GSAP</strong> to create smooth and interactive web animations. Through academic projects and hands-on practice, I aim to expand my knowledge, strengthen my problem-solving skills, and grow one project at a time.
              </p>
            </div>
          </motion.div>

          {/* Right Column: True Back-to-Back GSAP 3D Flipping Card */}
          <div className="lg:col-span-5 flex justify-center items-center">
            <div className="relative w-full max-w-[390px] aspect-square" style={{ perspective: '1200px' }}>
              
              {/* Subtle ambient glow behind image card */}
              <div 
                ref={glowRef}
                className="absolute -inset-2 bg-gradient-to-tr from-indigo-500/30 via-purple-500/25 to-pink-500/30 rounded-3xl blur-2xl opacity-60 pointer-events-none -z-10" 
              />

              {/* Main 3D Card Container (Rotates via GSAP) */}
              <div 
                ref={cardRef}
                className="relative w-full h-full rounded-3xl will-change-transform cursor-pointer"
                style={{ transformStyle: 'preserve-3d' }}
              >
                
                {/* FRONT FACE */}
                <div 
                  className="absolute inset-0 rounded-3xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 sm:p-5 shadow-xl flex items-center justify-center overflow-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden'
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white dark:bg-neutral-950/80 flex items-center justify-center p-2">
                    <img 
                      src="/about-ui-ux.jpg" 
                      alt="UI/UX Design Front" 
                      className="w-full h-full object-contain pointer-events-none select-none"
                    />
                  </div>
                </div>

                {/* BACK FACE (Back-to-Back: Identical picture rotated 180deg, perfectly crisp and upright!) */}
                <div 
                  className="absolute inset-0 rounded-3xl border border-neutral-200/90 dark:border-neutral-800 bg-white dark:bg-neutral-900 p-4 sm:p-5 shadow-xl flex items-center justify-center overflow-hidden"
                  style={{ 
                    backfaceVisibility: 'hidden',
                    WebkitBackfaceVisibility: 'hidden',
                    transform: 'rotateY(180deg)'
                  }}
                >
                  <div className="relative w-full h-full rounded-2xl overflow-hidden bg-white dark:bg-neutral-950/80 flex items-center justify-center p-2">
                    <img 
                      src="/about-ui-ux.jpg" 
                      alt="UI/UX Design Back" 
                      className="w-full h-full object-contain pointer-events-none select-none"
                    />
                  </div>
                </div>

              </div>

            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
