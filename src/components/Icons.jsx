import React from 'react';

export function FigmaIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      viewBox="0 0 38 57"
      fill="none"
      stroke="currentColor"
      strokeWidth="0"
      className={className}
      {...props}
    >
      <path
        d="M19 28.5C19 23.2533 23.2533 19 28.5 19C33.7467 19 38 23.2533 38 28.5C38 33.7467 33.7467 38 28.5 38L19 38L19 28.5Z"
        fill="currentColor"
      />
      <path
        d="M0 47.5C0 42.2533 4.25329 38 9.5 38L19 38L19 47.5C19 52.7467 14.7467 57 9.5 57C4.25329 57 0 52.7467 0 47.5Z"
        fill="currentColor"
      />
      <path
        d="M19 0L28.5 0C33.7467 0 38 4.25329 38 9.5C38 14.7467 33.7467 19 28.5 19L19 19L19 0Z"
        fill="currentColor"
      />
      <path
        d="M0 9.5C0 4.25329 4.25329 0 9.5 0L19 0L19 19L9.5 19C4.25329 19 0 14.7467 0 9.5Z"
        fill="currentColor"
      />
      <path
        d="M0 28.5C0 23.2533 4.25329 19 9.5 19L19 19L19 38L9.5 38C4.25329 38 0 33.7467 0 28.5Z"
        fill="currentColor"
      />
    </svg>
  );
}

export function GithubIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4" />
      <path d="M9 18c-4.51 2-5-2-7-2" />
    </svg>
  );
}

export function LinkedinIcon({ className = "w-4 h-4", ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      {...props}
    >
      <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
      <rect width="4" height="12" x="2" y="9" />
      <circle cx="4" cy="4" r="2" />
    </svg>
  );
}
