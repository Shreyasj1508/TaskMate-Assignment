import React, { createContext, useCallback, useMemo } from 'react';
import useLocalStorage from '../hooks/useLocalStorage';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useLocalStorage('tasks', []);
  const [filter, setFilter] = useLocalStorage('filter', 'all');
  const [isDarkMode, setIsDarkMode] = useLocalStorage('isDarkMode', false);

  // Add a new task with validation
  const addTask = useCallback((taskText) => {
    if (!taskText.trim()) {
      throw new Error('Task cannot be empty');
    }

    const newTask = {
      id: Date.now(),
      text: taskText.trim(),
      completed: false,
      createdAt: new Date().toISOString(),
    };

    setTasks((prevTasks) => [...prevTasks, newTask]);
    return newTask;
  }, [setTasks]);

  // Toggle task completion status
  const toggleTask = useCallback((id) => {
    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, completed: !task.completed } : task
      )
    );
  }, [setTasks]);

  // Delete a task
  const deleteTask = useCallback((id) => {
    setTasks((prevTasks) => prevTasks.filter((task) => task.id !== id));
  }, [setTasks]);

  // Update a task
  const updateTask = useCallback((id, updatedText) => {
    if (!updatedText.trim()) {
      throw new Error('Task cannot be empty');
    }

    setTasks((prevTasks) =>
      prevTasks.map((task) =>
        task.id === id ? { ...task, text: updatedText.trim() } : task
      )
    );
  }, [setTasks]);

  // Reorder tasks (for drag-and-drop)
  const reorderTasks = useCallback((sourceIndex, destinationIndex) => {
    setTasks((prevTasks) => {
      const newTasks = Array.from(prevTasks);
      const [removed] = newTasks.splice(sourceIndex, 1);
      newTasks.splice(destinationIndex, 0, removed);
      return newTasks;
    });
  }, [setTasks]);

  // Get filtered tasks
  const filteredTasks = useMemo(() => {
    switch (filter) {
      case 'completed':
        return tasks.filter((task) => task.completed);
      case 'pending':
        return tasks.filter((task) => !task.completed);
      default:
        return tasks;
    }
  }, [tasks, filter]);

  // Get task statistics
  const stats = useMemo(
    () => ({
      total: tasks.length,
      completed: tasks.filter((task) => task.completed).length,
      pending: tasks.filter((task) => !task.completed).length,
    }),
    [tasks]
  );

  // Toggle theme
  const toggleTheme = useCallback(() => {
    setIsDarkMode((prev) => !prev);
  }, [setIsDarkMode]);

  const value = {
    tasks: filteredTasks,
    allTasks: tasks,
    filter,
    setFilter,
    addTask,
    toggleTask,
    deleteTask,
    updateTask,
    reorderTasks,
    stats,
    isDarkMode,
    toggleTheme,
  };

  return (
    <TaskContext.Provider value={value}>{children}</TaskContext.Provider>
  );
};
