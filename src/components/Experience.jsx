import React from 'react';
import { motion } from 'framer-motion';
import { experiences, education } from '../data/experience';
import { Briefcase, GraduationCap, Calendar, MapPin, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Experience() {
  return (
    <section id="education" className="py-24 sm:py-32 bg-neutral-100/50 dark:bg-neutral-900/30 border-y border-neutral-200/80 dark:border-neutral-800/80">
      <div id="experience" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/50 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Academic & Career Journey</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Education & Experience.
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            My academic foundation in Information Technology, continuous learning, and development projects.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          
          {/* Work Experience Timeline */}
          <div className="lg:col-span-8 space-y-8">
            <div className="flex items-center gap-2.5 mb-2">
              <Briefcase className="w-5 h-5 text-indigo-500" />
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                Work Experience
              </h3>
            </div>

            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  className="p-6 sm:p-7 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all space-y-4"
                >
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2">
                    <div>
                      <h4 className="text-lg font-bold text-neutral-900 dark:text-white">
                        {exp.role}
                      </h4>
                      <div className="text-sm font-semibold text-indigo-600 dark:text-indigo-400">
                        {exp.company}
                      </div>
                    </div>
                    <div className="flex items-center gap-3 text-xs text-neutral-500 font-mono">
                      <span className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span>•</span>
                      <span className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {exp.description}
                  </p>

                  {/* Highlights */}
                  <div className="space-y-2 pt-1">
                    {exp.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2.5 text-xs text-neutral-700 dark:text-neutral-300">
                        <CheckCircle2 className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies tags */}
                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education & Credentials */}
          <div className="lg:col-span-4 space-y-8">
            <div className="flex items-center gap-2.5 mb-2">
              <GraduationCap className="w-5 h-5 text-purple-500" />
              <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                Education & Credentials
              </h3>
            </div>

            <div className="space-y-6">
              {education.map((edu, index) => (
                <div
                  key={index}
                  className="p-6 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 shadow-xs space-y-3"
                >
                  <div className="text-xs font-mono text-purple-600 dark:text-purple-400 font-semibold">
                    {edu.year}
                  </div>
                  <h4 className="text-base font-bold text-neutral-900 dark:text-white leading-snug">
                    {edu.degree}
                  </h4>
                  <div className="text-xs font-semibold text-neutral-500">
                    {edu.institution}
                  </div>
                  <p className="text-xs text-neutral-600 dark:text-neutral-400 leading-relaxed pt-1">
                    {edu.description}
                  </p>
                </div>
              ))}

              {/* Quick Resume CTA card */}
              <div className="p-6 rounded-3xl bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-pink-500/10 border border-indigo-200/50 dark:border-indigo-800/50 text-center space-y-3">
                <h4 className="font-bold text-sm text-neutral-900 dark:text-white">
                  Looking for the full curriculum vitae?
                </h4>
                <p className="text-xs text-neutral-600 dark:text-neutral-400">
                  Download the formatted PDF with detailed client case breakdowns.
                </p>
                <a
                  href="/resume.pdf"
                  onClick={(e) => {
                    e.preventDefault();
                    alert("Geraldene's resume download initiated. You can place your actual resume.pdf in public/resume.pdf!");
                  }}
                  className="inline-block px-5 py-2.5 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs font-bold hover:scale-105 transition-transform cursor-pointer"
                >
                  Download Complete Resume
                </a>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
