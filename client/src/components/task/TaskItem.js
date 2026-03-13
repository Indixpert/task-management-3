import React from 'react';
import api from '../../services/api';

function TaskItem({ task, onTaskUpdate }) {

  const handleStatusChange = async (e) => {
    const newStatus = e.target.value;
    try {
      const res = await api.put(`/tasks/${task._id}`, { ...task, status: newStatus });
      onTaskUpdate(res.data);
    } catch (err) {
      console.error('Failed to update task status', err);
    }
  }

  return (
    <div className="task-card">
      <p>{task.title}</p>
      <select value={task.status} onChange={handleStatusChange}>
        <option value="To Do">To Do</option>
        <option value="In Progress">In Progress</option>
        <option value="Done">Done</option>
      </select>
    </div>
  );
}

export default TaskItem;