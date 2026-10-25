import React from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowUpRight, FolderGit2, ExternalLink } from 'lucide-react';
import { GithubIcon } from './Icons';

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 space-y-3 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900 dark:text-white">
            Selected Works & Exploration
          </h2>
          <p className="text-base text-neutral-600 dark:text-neutral-400">
            A collection of web applications, user interfaces, and projects.
          </p>
        </div>

        {/* Clean Project Boxes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className="group rounded-3xl border border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900/80 p-6 sm:p-7 shadow-xs hover:shadow-xl hover:border-neutral-300 dark:hover:border-neutral-700 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="space-y-4">
                {/* Visual Image / Screenshot or Placeholder Box (Clickable) */}
                <a
                  href={project.githubUrl || project.liveUrl || '#'}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block relative aspect-video w-full rounded-2xl overflow-hidden group-hover:scale-[1.02] transition-transform duration-300 border border-neutral-200/60 dark:border-neutral-800/60"
                >
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title} 
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                  ) : (
                    <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center`}>
                      <FolderGit2 className="w-8 h-8 text-neutral-400 dark:text-neutral-500 opacity-60" />
                      <span className="text-xs font-mono font-medium text-neutral-400 dark:text-neutral-500 mt-2">Project Preview</span>
                    </div>
                  )}
                </a>

                {/* Title & Description */}
                <div className="space-y-2">
                  <a
                    href={project.githubUrl || project.liveUrl || '#'}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block"
                  >
                    <h3 className="text-lg sm:text-xl font-bold text-neutral-900 dark:text-white group-hover:text-indigo-600 dark:group-hover:text-indigo-400 transition-colors">
                      {project.title.split('—')[0].trim()}
                    </h3>
                  </a>
                  <p className="text-xs sm:text-sm text-neutral-600 dark:text-neutral-400 line-clamp-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Tags & Action Links */}
              <div className="pt-5 mt-5 border-t border-neutral-100 dark:border-neutral-800/80 flex items-center justify-between gap-3">
                <div className="flex flex-wrap gap-1.5 flex-1 min-w-0">
                  {project.tags.slice(0, 3).map((tag) => (
                    <span
                      key={tag}
                      className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-neutral-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-300 truncate"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action Buttons: GitHub & Live Demo */}
                <div className="flex items-center gap-2 shrink-0">
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-neutral-700 dark:text-neutral-300 bg-neutral-100 dark:bg-neutral-800 hover:bg-neutral-200 dark:hover:bg-neutral-700 hover:text-neutral-900 dark:hover:text-white transition-colors"
                      title="View GitHub Repository"
                    >
                      <GithubIcon className="w-3.5 h-3.5" />
                      <span>Code</span>
                    </a>
                  )}

                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
                      title="View Live Demo"
                    >
                      <ArrowUpRight className="w-4 h-4" />
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
