import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { projects } from '../data/projects';
import { ArrowUpRight, FolderGit2 } from 'lucide-react';
import { GithubIcon } from './Icons';
import gsap from 'gsap';

function ProjectCard({ project, idx }) {
  const cardRef = useRef(null);
  const glowRef = useRef(null);

  const handleMouseMove = (e) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    // Calculate rotation (-10deg to 10deg)
    const rotateX = ((y - centerY) / centerY) * -10;
    const rotateY = ((x - centerX) / centerX) * 10;

    gsap.to(cardRef.current, {
      rotationX: rotateX,
      rotationY: rotateY,
      transformPerspective: 1000,
      scale: 1.02,
      duration: 0.35,
      ease: 'power2.out',
    });

    // Move subtle spotlight glow under cursor
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        x: x - rect.width / 2,
        y: y - rect.height / 2,
        opacity: 0.6,
        duration: 0.25,
        ease: 'power1.out'
      });
    }
  };

  const handleMouseLeave = () => {
    if (!cardRef.current) return;
    gsap.to(cardRef.current, {
      rotationX: 0,
      rotationY: 0,
      scale: 1,
      duration: 0.6,
      ease: 'power2.out',
    });

    if (glowRef.current) {
      gsap.to(glowRef.current, {
        opacity: 0,
        duration: 0.4,
        ease: 'power1.out'
      });
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: idx * 0.1 }}
      className="relative"
      style={{ perspective: '1000px' }}
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseLeave={handleMouseLeave}
        className="group relative rounded-3xl border border-neutral-200/90 bg-white p-6 sm:p-7 shadow-sm hover:shadow-2xl transition-shadow duration-300 flex flex-col justify-between will-change-transform overflow-hidden"
        style={{ transformStyle: 'preserve-3d' }}
      >
        {/* Dynamic Cursor Spotlight / Radial Glow */}
        <div
          ref={glowRef}
          className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%] bg-gradient-to-tr from-indigo-500/15 via-purple-500/10 to-transparent rounded-full blur-2xl pointer-events-none opacity-0 select-none -z-10"
        />

        <div className="space-y-4" style={{ transform: 'translateZ(15px)' }}>
          {/* Visual Image / Screenshot (Clickable) */}
          <a
            href={project.githubUrl || project.liveUrl || '#'}
            target="_blank"
            rel="noopener noreferrer"
            className="block relative aspect-video w-full rounded-2xl overflow-hidden group-hover:scale-[1.01] transition-transform duration-300 border border-neutral-200/60"
          >
            {project.image ? (
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            ) : (
              <div className={`w-full h-full bg-gradient-to-br ${project.gradient} flex flex-col items-center justify-center`}>
                <FolderGit2 className="w-8 h-8 text-neutral-400 opacity-60" />
                <span className="text-xs font-mono font-medium text-neutral-400 mt-2">Project Preview</span>
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
              <h3 className="text-lg sm:text-xl font-bold text-neutral-900 group-hover:text-indigo-600 transition-colors">
                {project.title.split('—')[0].trim()}
              </h3>
            </a>
            <p className="text-xs sm:text-sm text-neutral-600 line-clamp-3 leading-relaxed">
              {project.description}
            </p>
          </div>
        </div>

        {/* Tags & Action Links */}
        <div 
          className="pt-5 mt-5 border-t border-neutral-100 flex items-center justify-between gap-3"
          style={{ transform: 'translateZ(20px)' }}
        >
          <div className="flex flex-wrap gap-1.5 flex-1 min-w-0">
            {project.tags.slice(0, 3).map((tag) => (
              <span
                key={tag}
                className="px-2.5 py-1 rounded-md text-[11px] font-medium bg-neutral-100 text-neutral-600 truncate"
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
                className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold text-neutral-700 bg-neutral-100 hover:bg-neutral-200 hover:text-neutral-900 transition-colors shadow-xs"
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
                className="p-1.5 rounded-lg text-neutral-500 hover:text-neutral-900 hover:bg-neutral-100 transition-colors"
                title="View Live Demo"
              >
                <ArrowUpRight className="w-4 h-4" />
              </a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="py-24 sm:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="mb-12 sm:mb-16 space-y-3 max-w-2xl">
          <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-neutral-900">
            Selected Works & Exploration
          </h2>
          <p className="text-base text-neutral-600">
            A collection of web applications, user interfaces, and projects.
          </p>
        </div>

        {/* Clean Project Boxes Grid with GSAP 3D Interactive Tilt */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {projects.map((project, idx) => (
            <ProjectCard key={project.id} project={project} idx={idx} />
          ))}
        </div>

      </div>
    </section>
  );
}
