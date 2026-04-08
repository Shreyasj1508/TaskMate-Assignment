import React, { useContext, useCallback } from 'react';
import { TaskContext } from '../context/TaskContext';

const FilterButtons = React.memo(() => {
  const { filter, setFilter, stats } = useContext(TaskContext);

  const handleFilter = useCallback(
    (newFilter) => {
      setFilter(newFilter);
    },
    [setFilter]
  );

  return (
    <div className="filter-container">
      <div className="filter-buttons">
        <button
          className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
          onClick={() => handleFilter('all')}
        >
          All ({stats.total})
        </button>
        <button
          className={`filter-btn ${filter === 'pending' ? 'active' : ''}`}
          onClick={() => handleFilter('pending')}
        >
          Pending ({stats.pending})
        </button>
        <button
          className={`filter-btn ${filter === 'completed' ? 'active' : ''}`}
          onClick={() => handleFilter('completed')}
        >
          Completed ({stats.completed})
        </button>
      </div>
      <div className="stats">
        <span>Total: {stats.total}</span>
      </div>
    </div>
  );
});

FilterButtons.displayName = 'FilterButtons';

export default FilterButtons;
