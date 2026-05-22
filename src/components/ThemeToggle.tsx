// src/components/ThemeToggle.tsx

import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="fixed bottom-6 left-6 z-[100] flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-r from-violet-600 to-cyan-500 shadow-lg transition-all duration-300 hover:scale-110 active:scale-95 md:bottom-8 md:left-8"
      aria-label="Toggle theme"
    >
      {theme === 'dark' ? (
        <Sun className="h-5 w-5 text-white" />
      ) : (
        <Moon className="h-5 w-5 text-white" />
      )}
    </button>
  );
};

export default ThemeToggle;
