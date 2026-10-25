import React, { createContext, useContext, useEffect } from 'react';

const ThemeContext = createContext({
  theme: 'light',
  toggleTheme: () => {},
});

export const ThemeProvider = ({ children }) => {
  useEffect(() => {
    // Ensure dark class is completely removed and light mode is enforced
    const root = document.documentElement;
    root.classList.remove('dark');
    try {
      localStorage.removeItem('geraldene-portfolio-theme');
    } catch (_) {}
  }, []);

  return (
    <ThemeContext.Provider value={{ theme: 'light', toggleTheme: () => {} }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
