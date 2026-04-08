import React, { useContext, useCallback } from 'react';
import { TaskContext } from '../context/TaskContext';

const ThemeToggle = React.memo(() => {
  const { isDarkMode, toggleTheme } = useContext(TaskContext);

  const handleToggle = useCallback(() => {
    toggleTheme();
  }, [toggleTheme]);

  return (
    <button
      className="theme-toggle"
      onClick={handleToggle}
      title={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
      aria-label={`Switch to ${isDarkMode ? 'light' : 'dark'} mode`}
    >
      {isDarkMode ? '☀️' : '🌙'}
    </button>
  );
});

ThemeToggle.displayName = 'ThemeToggle';

export default ThemeToggle;
