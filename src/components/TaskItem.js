import React, { useState, useContext, useCallback } from 'react';
import { TaskContext } from '../context/TaskContext';
import { Draggable } from 'react-beautiful-dnd';

const TaskItem = React.memo(({ task, index }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(task.text);
  const [error, setError] = useState('');
  const { toggleTask, deleteTask, updateTask } = useContext(TaskContext);

  const handleToggle = useCallback(() => {
    toggleTask(task.id);
  }, [task.id, toggleTask]);

  const handleDelete = useCallback(() => {
    deleteTask(task.id);
  }, [task.id, deleteTask]);

  const handleSaveEdit = useCallback(() => {
    setError('');
    try {
      updateTask(task.id, editText);
      setIsEditing(false);
    } catch (err) {
      setError(err.message);
    }
  }, [editText, task.id, updateTask]);

  const handleCancelEdit = useCallback(() => {
    setEditText(task.text);
    setError('');
    setIsEditing(false);
  }, [task.text]);

  return (
    <Draggable draggableId={String(task.id)} index={index}>
      {(provided, snapshot) => (
        <li
          ref={provided.innerRef}
          {...provided.draggableProps}
          {...provided.dragHandleProps}
          className={`task-item ${task.completed ? 'completed' : ''} ${
            snapshot.isDragging ? 'dragging' : ''
          }`}
        >
          <div className="task-content">
            <input
              type="checkbox"
              checked={task.completed}
              onChange={handleToggle}
              className="task-checkbox"
              aria-label={`Mark ${task.text} as complete`}
            />

            {isEditing ? (
              <div className="task-edit-container">
                <input
                  type="text"
                  value={editText}
                  onChange={(e) => setEditText(e.target.value)}
                  className="task-edit-input"
                  autoFocus
                />
                {error && <div className="error-message">{error}</div>}
                <div className="task-edit-buttons">
                  <button
                    onClick={handleSaveEdit}
                    className="btn-save"
                  >
                    Save
                  </button>
                  <button
                    onClick={handleCancelEdit}
                    className="btn-cancel"
                  >
                    Cancel
                  </button>
                </div>
              </div>
            ) : (
              <span className="task-text">{task.text}</span>
            )}
          </div>

          <div className="task-actions">
            {!isEditing && (
              <>
                <button
                  onClick={() => setIsEditing(true)}
                  className="btn-edit"
                  title="Edit task"
                  aria-label={`Edit ${task.text}`}
                >
                  ✎
                </button>
                <button
                  onClick={handleDelete}
                  className="btn-delete"
                  title="Delete task"
                  aria-label={`Delete ${task.text}`}
                >
                  ✕
                </button>
              </>
            )}
          </div>
        </li>
      )}
    </Draggable>
  );
});

TaskItem.displayName = 'TaskItem';

export default TaskItem;
