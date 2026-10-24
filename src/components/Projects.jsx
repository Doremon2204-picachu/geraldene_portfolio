import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '../data/projects';
import ProjectModal from './ProjectModal';
import { ExternalLink, ArrowUpRight, Sparkles, Eye } from 'lucide-react';
import { FigmaIcon, GithubIcon } from './Icons';

export default function Projects() {
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter((p) => p.type === activeCategory);

  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 sm:mb-16 gap-6">
          <div className="space-y-3 max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-indigo-50 dark:bg-indigo-950/40 border border-indigo-200/50 dark:border-indigo-800/50 text-indigo-600 dark:text-indigo-400 text-xs font-semibold uppercase tracking-wider">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Selected Work</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
              Crafted with intent, built to perform.
            </h2>
            <p className="text-base text-neutral-600 dark:text-neutral-400">
              A curated collection of UI/UX design case studies, design systems, and responsive React web applications.
            </p>
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 p-1.5 rounded-2xl bg-neutral-100 dark:bg-neutral-900 border border-neutral-200 dark:border-neutral-800">
            {projectCategories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.id
                    ? 'bg-white dark:bg-neutral-800 text-neutral-900 dark:text-white shadow-xs'
                    : 'text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Project Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8"
        >
          <AnimatePresence>
            {filteredProjects.map((project) => (
              <motion.article
                key={project.id}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="group relative rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 overflow-hidden shadow-xs hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
              >
                {/* Visual Banner Preview */}
                <div className={`relative h-56 sm:h-64 p-6 sm:p-8 bg-gradient-to-br ${project.gradient} overflow-hidden flex flex-col justify-between border-b border-neutral-200/60 dark:border-neutral-800/60`}>
                  
                  {/* Subtle Grid Pattern Overlay */}
                  <div className="absolute inset-0 opacity-20 bg-[radial-gradient(#888_1px,transparent_1px)] [background-size:16px_16px] pointer-events-none" />

                  {/* Top Bar inside Banner */}
                  <div className="relative z-10 flex items-center justify-between">
                    <span className="px-3 py-1 rounded-full bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md text-neutral-900 dark:text-white text-xs font-semibold shadow-2xs">
                      {project.category}
                    </span>
                    <span className="text-xs font-mono text-neutral-700 dark:text-neutral-300 font-semibold bg-white/50 dark:bg-neutral-800/50 backdrop-blur-xs px-2.5 py-0.5 rounded-md">
                      {project.year}
                    </span>
                  </div>

                  {/* Center abstract interactive preview UI */}
                  <div className="relative z-10 py-4">
                    <div className="p-4 rounded-2xl bg-white/80 dark:bg-neutral-950/80 backdrop-blur-md shadow-lg border border-white/40 dark:border-neutral-700/40 group-hover:scale-[1.02] transition-transform duration-300">
                      <div className="flex items-center justify-between pb-2 border-b border-neutral-200/50 dark:border-neutral-800/50 text-[11px] font-mono text-neutral-500">
                        <span>ROLE: {project.role}</span>
                        <span className="text-emerald-500 font-bold">ACTIVE</span>
                      </div>
                      <div className="mt-2 text-sm font-bold text-neutral-900 dark:text-white line-clamp-1">
                        {project.title.split('—')[0]}
                      </div>
                      <div className="mt-1 flex items-center gap-3 text-xs text-neutral-500">
                        {project.metrics[0] && (
                          <span className="text-indigo-600 dark:text-indigo-400 font-bold">
                            {project.metrics[0].label}: {project.metrics[0].value}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Bottom Action Hint */}
                  <div className="relative z-10 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-neutral-900/90 dark:bg-white/90 text-white dark:text-neutral-950 text-xs font-semibold backdrop-blur-sm hover:scale-105 transition-transform cursor-pointer"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Read Case Study</span>
                    </button>
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-1.5 rounded-full bg-white/70 dark:bg-neutral-900/70 text-neutral-700 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white transition-colors"
                        title="Open Live Preview"
                      >
                        <ArrowUpRight className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>

                {/* Card Info Body */}
                <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between space-y-6">
                  <div className="space-y-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-neutral-950 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-sm text-neutral-600 dark:text-neutral-400 line-clamp-2 leading-relaxed">
                      {project.description}
                    </p>
                  </div>

                  {/* Metrics bar */}
                  <div className="grid grid-cols-3 gap-2 py-3 px-4 rounded-xl bg-neutral-50 dark:bg-neutral-800/40 border border-neutral-100 dark:border-neutral-800 text-center">
                    {project.metrics.map((m, idx) => (
                      <div key={idx}>
                        <div className="text-xs font-extrabold text-neutral-900 dark:text-white">
                          {m.value}
                        </div>
                        <div className="text-[10px] text-neutral-500 font-medium truncate">
                          {m.label}
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Tags */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* Bottom Action Bar */}
                  <div className="pt-4 border-t border-neutral-100 dark:border-neutral-800 flex items-center justify-between">
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="text-xs font-bold text-indigo-600 dark:text-indigo-400 hover:underline inline-flex items-center gap-1 cursor-pointer"
                    >
                      <span>Full Case Study</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>

                    <div className="flex items-center gap-2">
                      {project.figmaUrl && (
                        <a
                          href={project.figmaUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="Figma link"
                          className="p-2 text-neutral-400 hover:text-purple-500 transition-colors"
                        >
                          <FigmaIcon className="w-4 h-4" />
                        </a>
                      )}
                      {project.githubUrl && (
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label="GitHub link"
                          className="p-2 text-neutral-400 hover:text-neutral-900 dark:hover:text-white transition-colors"
                        >
                          <GithubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>

              </motion.article>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Case Study Modal */}
      <ProjectModal
        project={selectedProject}
        isOpen={!!selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
