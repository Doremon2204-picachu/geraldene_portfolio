import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, BookOpen } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-24 sm:py-32 bg-neutral-100/50 dark:bg-neutral-900/30 border-y border-neutral-200/80 dark:border-neutral-800/80 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-14 space-y-4">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Education & Academic Journey.
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            Building a strong foundation in Information Technology through coursework, hands-on development, and collaborative academic projects.
          </p>
        </div>

        {/* Featured Education Card - Clean & Focused */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="relative rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/90 p-7 sm:p-10 shadow-lg hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 overflow-hidden"
        >
          {/* Subtle background gradient glow */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-gradient-to-bl from-indigo-500/10 via-purple-500/5 to-transparent rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl space-y-5">
            
            {/* Institution Badge */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 dark:bg-indigo-950/60 border border-indigo-200/50 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400 text-xs font-bold">
                <GraduationCap className="w-3.5 h-3.5" />
                Cor Jesu College
              </span>
            </div>

            {/* Degree Title */}
            <div>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-900 dark:text-white tracking-tight">
                Bachelor of Science in Information Technology (BSIT)
              </h3>
              <div className="flex items-center gap-3 mt-2 text-xs sm:text-sm text-neutral-500 font-medium">
                <span className="flex items-center gap-1.5">
                  <BookOpen className="w-4 h-4 text-indigo-500" />
                  College of Information Technology
                </span>
                <span>•</span>
                <span className="font-semibold text-neutral-700 dark:text-neutral-300">
                  4th Year
                </span>
              </div>
            </div>

            {/* Description */}
            <p className="text-sm sm:text-base text-neutral-600 dark:text-neutral-300 leading-relaxed pt-1">
              Currently pursuing a degree in Information Technology, with an interest in web development, software development, and digital solutions. Gaining knowledge and practical experience through academic projects and hands-on learning.
            </p>

          </div>
        </motion.div>

      </div>
    </section>
  );
}
