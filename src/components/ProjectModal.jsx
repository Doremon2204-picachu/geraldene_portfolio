import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, ExternalLink, CheckCircle, ArrowRight, Calendar, User, Clock } from 'lucide-react';
import { FigmaIcon, GithubIcon } from './Icons';

export default function ProjectModal({ project, isOpen, onClose }) {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!project) return null;

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-neutral-950/70 backdrop-blur-md"
          />

          {/* Modal Container */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            className="relative w-full max-w-3xl max-h-[90vh] bg-white dark:bg-neutral-900 rounded-3xl shadow-2xl border border-neutral-200 dark:border-neutral-800 overflow-hidden flex flex-col z-10"
          >
            {/* Header Banner */}
            <div className={`p-6 sm:p-8 bg-gradient-to-r ${project.gradient} border-b border-neutral-200 dark:border-neutral-800 relative`}>
              <button
                onClick={onClose}
                aria-label="Close modal"
                className="absolute top-5 right-5 p-2 rounded-full bg-white/80 dark:bg-neutral-800/80 text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white backdrop-blur-sm transition-colors cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="space-y-3">
                <span className="inline-block px-3 py-1 rounded-full bg-white/80 dark:bg-neutral-800/80 backdrop-blur-sm text-xs font-semibold uppercase tracking-wider text-neutral-800 dark:text-neutral-200">
                  {project.category}
                </span>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-neutral-950 dark:text-white tracking-tight">
                  {project.title}
                </h3>
                <p className="text-sm sm:text-base text-neutral-700 dark:text-neutral-300 max-w-xl">
                  {project.tagline}
                </p>
              </div>

              {/* Meta stats bar */}
              <div className="grid grid-cols-3 gap-4 pt-6 mt-4 border-t border-neutral-300/40 dark:border-neutral-700/40 text-xs sm:text-sm">
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <User className="w-4 h-4 text-indigo-500" />
                  <div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400">Role</div>
                    <div className="font-semibold">{project.role}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <Clock className="w-4 h-4 text-indigo-500" />
                  <div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400">Duration</div>
                    <div className="font-semibold">{project.duration}</div>
                  </div>
                </div>
                <div className="flex items-center gap-2 text-neutral-700 dark:text-neutral-300">
                  <Calendar className="w-4 h-4 text-indigo-500" />
                  <div>
                    <div className="text-[11px] text-neutral-500 dark:text-neutral-400">Year</div>
                    <div className="font-semibold">{project.year}</div>
                  </div>
                </div>
              </div>
            </div>

            {/* Scrollable Body */}
            <div className="p-6 sm:p-8 overflow-y-auto space-y-8">
              
              {/* Metrics Highlights */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
                  Key Outcomes & Impact
                </h4>
                <div className="grid grid-cols-3 gap-3 sm:gap-4">
                  {project.metrics.map((metric, idx) => (
                    <div
                      key={idx}
                      className="p-4 rounded-2xl bg-neutral-100 dark:bg-neutral-800/60 border border-neutral-200/60 dark:border-neutral-700/60 text-center"
                    >
                      <div className="text-xl sm:text-2xl font-extrabold text-indigo-600 dark:text-indigo-400">
                        {metric.value}
                      </div>
                      <div className="text-xs text-neutral-600 dark:text-neutral-400 mt-1 font-medium">
                        {metric.label}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-rose-500/5 border border-rose-500/20 space-y-2">
                  <h5 className="font-bold text-sm text-rose-600 dark:text-rose-400 flex items-center gap-1.5">
                    <span>The Challenge</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.overview.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-emerald-500/5 border border-emerald-500/20 space-y-2">
                  <h5 className="font-bold text-sm text-emerald-600 dark:text-emerald-400 flex items-center gap-1.5">
                    <span>The Solution</span>
                  </h5>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                    {project.overview.solution}
                  </p>
                </div>
              </div>

              {/* Key Deliverables */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-400 dark:text-neutral-500 mb-3">
                  Deliverables & Execution
                </h4>
                <ul className="space-y-2.5">
                  {project.deliverables.map((item, idx) => (
                    <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-700 dark:text-neutral-300">
                      <CheckCircle className="w-4 h-4 text-emerald-500 mt-0.5 shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div>
                <h4 className="text-xs uppercase font-bold tracking-wider text-neutral-400 dark:text-neutral-500 mb-2.5">
                  Tech & Design Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-lg text-xs font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-700 dark:text-neutral-300 border border-neutral-200/50 dark:border-neutral-700/50"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Footer with External Links */}
            <div className="p-5 sm:p-6 border-t border-neutral-200 dark:border-neutral-800 bg-neutral-50/80 dark:bg-neutral-950/80 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                {project.figmaUrl && (
                  <a
                    href={project.figmaUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <FigmaIcon className="w-4 h-4 text-purple-500" />
                    <span>Figma Specs</span>
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3.5 py-2 rounded-xl text-xs font-semibold border border-neutral-300 dark:border-neutral-700 hover:bg-neutral-200 dark:hover:bg-neutral-800 transition-colors"
                  >
                    <GithubIcon className="w-4 h-4 text-neutral-900 dark:text-white" />
                    <span>Source Code</span>
                  </a>
                )}
              </div>

              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 px-5 py-2 rounded-xl bg-neutral-900 dark:bg-white text-white dark:text-neutral-950 text-xs font-bold hover:bg-neutral-800 dark:hover:bg-neutral-100 transition-all cursor-pointer shadow-xs"
                >
                  <span>Launch Live Preview</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              )}
            </div>

          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
