import React, { useState } from 'react';
import TaskItem from './TaskItem';
import api from '../../services/api';

function TaskColumn({ status, tasks, boardId, onTaskCreated, onTaskUpdate }) {
  const [newTaskTitle, setNewTaskTitle] = useState('');

  const handleCreateTask = async () => {
    if (!newTaskTitle) return;
    const res = await api.post('/tasks', { title: newTaskTitle, boardId, status });
    onTaskCreated(res.data);
    setNewTaskTitle('');
  };

  return (
    <div className="task-column">
      <h3>{status}</h3>
      {tasks.map(task => (
        <TaskItem key={task._id} task={task} onTaskUpdate={onTaskUpdate} />
      ))}
      <div>
        <input 
          type="text" 
          placeholder="+ Add a card"
          value={newTaskTitle}
          onChange={(e) => setNewTaskTitle(e.target.value)}
        />
        <button onClick={handleCreateTask}>Add</button>
      </div>
    </div>
  );
}

export default TaskColumn;