'use client';

import { useTheme } from '@/contexts/ThemeContext';
import { useEffect, useState } from 'react';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="relative w-14 h-8 bg-gradient-to-r from-emerald-200/80 to-green-200/80 dark:from-emerald-900/80 dark:to-green-900/80 rounded-full border border-emerald-200/50 dark:border-emerald-700/50">
        <div className="absolute top-0.5 left-0.5 w-7 h-7 bg-white dark:bg-gray-800 rounded-full shadow-md flex items-center justify-center">
          <span className="text-sm">🌙</span>
        </div>
      </div>
    );
  }

  return (
    <button
      onClick={toggleTheme}
      className="relative w-14 h-8 bg-gradient-to-r from-emerald-200/80 to-green-200/80 dark:from-emerald-900/80 dark:to-green-900/80 rounded-full border border-emerald-200/50 dark:border-emerald-700/50 transition-colors duration-300 group"
      aria-label={`Toggle ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <div className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-50/30 to-green-50/30 dark:from-emerald-950/30 dark:to-green-950/30" />
      
      <div
        className={`absolute top-0.5 w-7 h-7 rounded-full shadow-md flex items-center justify-center transition-all duration-300 ${
          theme === 'light'
            ? 'left-0.5 bg-gradient-to-br from-yellow-50 to-orange-50'
            : 'left-6 bg-gradient-to-br from-emerald-50 to-green-50'
        }`}
      >
        <span className="text-sm">
          {theme === 'light' ? '☀️' : '🌙'}
        </span>
      </div>
    </button>
  );
}