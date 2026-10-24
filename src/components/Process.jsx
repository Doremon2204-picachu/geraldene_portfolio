import React from 'react';
import { motion } from 'framer-motion';
import { designPrinciples } from '../data/skills';
import { Compass, Lightbulb, PenTool, Terminal, Sparkles, ArrowRight } from 'lucide-react';

export default function Process() {
  const stepIcons = [
    <Compass className="w-5 h-5 text-indigo-500" key="compass" />,
    <Lightbulb className="w-5 h-5 text-amber-500" key="lightbulb" />,
    <PenTool className="w-5 h-5 text-purple-500" key="pentool" />,
    <Terminal className="w-5 h-5 text-emerald-500" key="terminal" />
  ];

  return (
    <section id="process" className="py-24 sm:py-32 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/50 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Methodology</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            How I turn ambiguity into polished digital products.
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            A battle-tested 4-step framework uniting empathetic product strategy with clean engineering execution.
          </p>
        </div>

        {/* 4 Process Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {designPrinciples.map((item, index) => (
            <motion.div
              key={item.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative p-6 sm:p-7 rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/60 shadow-xs hover:border-neutral-300 dark:hover:border-neutral-700 transition-all group flex flex-col justify-between"
            >
              <div>
                {/* Step Number & Icon */}
                <div className="flex items-center justify-between mb-6">
                  <span className="font-mono text-xs font-bold text-neutral-400 dark:text-neutral-500 px-2.5 py-1 rounded-lg bg-neutral-100 dark:bg-neutral-800">
                    STEP {item.step}
                  </span>
                  <div className="p-2.5 rounded-xl bg-neutral-100 dark:bg-neutral-800/80 border border-neutral-200/60 dark:border-neutral-700/60">
                    {stepIcons[index]}
                  </div>
                </div>

                <h3 className="text-lg font-bold text-neutral-900 dark:text-white mb-2 group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                  {item.title}
                </h3>

                <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="pt-6 mt-6 border-t border-neutral-100 dark:border-neutral-800 flex items-center text-xs font-semibold text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white transition-colors">
                <span>Phase {item.step}</span>
                <ArrowRight className="w-3.5 h-3.5 ml-1 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
