import React from 'react';
import { motion } from 'framer-motion';
import { skillCategories } from '../data/skills';
import { Palette, Code2, Wrench, Sparkles, CheckCircle2 } from 'lucide-react';

export default function Skills() {
  const getCategoryIcon = (iconName) => {
    switch (iconName) {
      case 'Palette':
        return <Palette className="w-5 h-5 text-indigo-500" />;
      case 'Code2':
        return <Code2 className="w-5 h-5 text-cyan-500" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-emerald-500" />;
      default:
        return <Sparkles className="w-5 h-5 text-indigo-500" />;
    }
  };

  return (
    <section id="skills" className="py-24 sm:py-32 bg-neutral-100/50 dark:bg-neutral-900/30 border-y border-neutral-200/80 dark:border-neutral-800/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/50 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Dual Capabilities</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Where design sensibility meets engineering rigor.
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            A comprehensive overview of my technical stack and product design disciplines. 
            I don't just hand off Figma links — I build the actual accessible components.
          </p>
        </div>

        {/* 3 Pillar Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, catIdx) => (
            <motion.div
              key={category.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: catIdx * 0.15 }}
              className="rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 p-7 sm:p-8 shadow-xs hover:shadow-lg transition-shadow flex flex-col justify-between"
            >
              <div>
                {/* Header with Icon */}
                <div className="flex items-center gap-3.5 mb-4">
                  <div className="p-3 rounded-2xl bg-neutral-100 dark:bg-neutral-800 border border-neutral-200/80 dark:border-neutral-700/80">
                    {getCategoryIcon(category.icon)}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg text-neutral-900 dark:text-white">
                      {category.title}
                    </h3>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-neutral-500 dark:text-neutral-400 mb-6 leading-relaxed">
                  {category.subtitle}
                </p>

                {/* Skills List */}
                <div className="space-y-4">
                  {category.skills.map((skill, sIdx) => (
                    <div key={sIdx} className="space-y-1.5">
                      <div className="flex items-center justify-between text-xs">
                        <span className="font-semibold text-neutral-800 dark:text-neutral-200">
                          {skill.name}
                        </span>
                        <span className="font-mono text-neutral-400 text-[11px]">
                          {skill.level}%
                        </span>
                      </div>

                      {/* Progress bar */}
                      <div className="h-1.5 w-full bg-neutral-100 dark:bg-neutral-800 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${skill.level}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 0.8, delay: 0.2 + sIdx * 0.05 }}
                          className="h-full bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full"
                        />
                      </div>

                      <div className="text-[11px] text-neutral-500 dark:text-neutral-400 leading-tight">
                        {skill.description}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Card Footer Pill */}
              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between text-[11px] text-neutral-500">
                <span className="flex items-center gap-1.5 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                  Production Tested
                </span>
                <span className="font-mono">Ready to deploy</span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
