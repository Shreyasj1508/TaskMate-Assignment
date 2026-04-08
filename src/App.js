import React, { useContext, useEffect } from 'react';
import { TaskContext } from './context/TaskContext';
import TaskForm from './components/TaskForm';
import TaskList from './components/TaskList';
import FilterButtons from './components/FilterButtons';
import ThemeToggle from './components/ThemeToggle';
import './styles/index.css';

const App = () => {
  const { isDarkMode } = useContext(TaskContext);

  useEffect(() => {
    // Apply theme to document
    if (isDarkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', 'light');
    }
  }, [isDarkMode]);

  return (
    <div className="app">
      <header className="app-header">
        <div className="header-content">
          <h1>📋 Task Manager</h1>
          <ThemeToggle />
        </div>
      </header>

      <main className="app-main">
        <div className="container">
          <TaskForm />
          <FilterButtons />
          <TaskList />
        </div>
      </main>

      <footer className="app-footer">
        <p>Built with React · Tasks are automatically saved</p>
      </footer>
    </div>
  );
};

export default App;
