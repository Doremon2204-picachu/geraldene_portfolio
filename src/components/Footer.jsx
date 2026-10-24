import React from 'react';

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-950 py-8 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 dark:text-neutral-400">
        <div>
          © {new Date().getFullYear()} Geraldene Cabiles. All rights reserved.
        </div>
        <div>
          Designed & Built with React & Tailwind CSS
        </div>
      </div>
    </footer>
  );
}
