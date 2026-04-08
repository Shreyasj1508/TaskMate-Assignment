import React, { useState, useCallback, useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

const TaskForm = React.memo(() => {
  const [input, setInput] = useState('');
  const [error, setError] = useState('');
  const { addTask } = useContext(TaskContext);

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();
      setError('');

      try {
        addTask(input);
        setInput('');
      } catch (err) {
        setError(err.message);
      }
    },
    [input, addTask]
  );

  const handleChange = useCallback((e) => {
    setInput(e.target.value);
    setError('');
  }, []);

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        value={input}
        onChange={handleChange}
        placeholder="Add a new task..."
        className="task-input"
        aria-label="New task input"
      />
      <button type="submit" className="task-submit-btn">
        Add Task
      </button>
      {error && <div className="error-message">{error}</div>}
    </form>
  );
});

TaskForm.displayName = 'TaskForm';

export default TaskForm;
