import React, { useContext, useCallback } from 'react';
import { TaskContext } from '../context/TaskContext';
import { DragDropContext, Droppable } from 'react-beautiful-dnd';
import TaskItem from './TaskItem';

const TaskList = React.memo(() => {
  const { tasks, reorderTasks, allTasks } = useContext(TaskContext);

  const handleDragEnd = useCallback(
    (result) => {
      const { source, destination } = result;

      // If dropped outside the list
      if (!destination) {
        return;
      }

      // If dropped in the same position
      if (
        source.droppableId === destination.droppableId &&
        source.index === destination.index
      ) {
        return;
      }

      // Find the actual indices in allTasks
      const sourceIndex = allTasks.findIndex(
        (task) => task.id === parseInt(result.draggableId)
      );
      const destinationIndex = Math.min(destination.index, allTasks.length - 1);

      if (sourceIndex !== -1) {
        reorderTasks(sourceIndex, destinationIndex);
      }
    },
    [reorderTasks, allTasks]
  );

  if (tasks.length === 0) {
    return (
      <div className="empty-state">
        <p>No tasks to display. Add one to get started!</p>
      </div>
    );
  }

  return (
    <DragDropContext onDragEnd={handleDragEnd}>
      <Droppable droppableId="tasks">
        {(provided, snapshot) => (
          <ul
            className={`task-list ${snapshot.isDraggingOver ? 'dragging-over' : ''}`}
            ref={provided.innerRef}
            {...provided.droppableProps}
          >
            {tasks.map((task, index) => (
              <TaskItem key={task.id} task={task} index={index} />
            ))}
            {provided.placeholder}
          </ul>
        )}
      </Droppable>
    </DragDropContext>
  );
});

TaskList.displayName = 'TaskList';

export default TaskList;
