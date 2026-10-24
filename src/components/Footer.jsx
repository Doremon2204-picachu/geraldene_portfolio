import React from 'react';
import { ArrowUp, Code2 } from 'lucide-react';
import { FigmaIcon } from './Icons';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-12 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          
          {/* Logo & Signature */}
          <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
            <span className="font-extrabold text-lg text-neutral-900 dark:text-white tracking-tight">
              Geraldene.
            </span>
            <span className="hidden sm:inline-block text-neutral-300 dark:text-neutral-700">|</span>
            <p className="text-xs text-neutral-500 flex items-center gap-1.5">
              <span>Bridging</span>
              <span className="font-medium text-neutral-700 dark:text-neutral-300 flex items-center gap-1">
                <FigmaIcon className="w-3 h-3 text-purple-500" /> Figma
              </span>
              <span>and</span>
              <span className="font-medium text-neutral-700 dark:text-neutral-300 flex items-center gap-1">
                <Code2 className="w-3 h-3 text-indigo-500" /> React.js
              </span>
            </p>
          </div>

          {/* Quick Nav Links */}
          <div className="flex flex-wrap justify-center gap-6 text-xs font-medium text-neutral-500 dark:text-neutral-400">
            <a href="#about" className="hover:text-neutral-900 dark:hover:text-white transition-colors">About</a>
            <a href="#projects" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Projects</a>
            <a href="#skills" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Skills</a>
            <a href="#certificates" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Certificates</a>
            <a href="#contact" className="hover:text-neutral-900 dark:hover:text-white transition-colors">Contact</a>
          </div>

          {/* Back to top button */}
          <button
            onClick={scrollToTop}
            aria-label="Back to top"
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 text-neutral-600 dark:text-neutral-300 hover:text-neutral-950 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 text-xs font-semibold transition-all cursor-pointer"
          >
            <span>Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-neutral-100 dark:border-neutral-900 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-neutral-400">
          <div>
            © {new Date().getFullYear()} Geraldene. All rights reserved.
          </div>
          <div>
            Built with React, Vite, Tailwind CSS & Framer Motion
          </div>
        </div>
      </div>
    </footer>
  );
}
