import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import api from '../services/api';
import TaskColumn from '../components/task/TaskColumn';

function BoardView() {
  const { boardId } = useParams();
  const [board, setBoard] = useState(null);
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const fetchBoardData = async () => {
      try {
        const res = await api.get(`/boards/${boardId}`);
        setBoard(res.data.board);
        setTasks(res.data.tasks);
      } catch (err) {
        console.error('Error fetching board data', err);
      }
    };
    fetchBoardData();
  }, [boardId]);

  const handleTaskCreated = (newTask) => {
    setTasks([...tasks, newTask]);
  }

  const handleTaskUpdate = (updatedTask) => {
    setTasks(tasks.map(task => task._id === updatedTask._id ? updatedTask : task));
  }

  if (!board) return <div>Loading...</div>;

  const statuses = ['To Do', 'In Progress', 'Done'];

  return (
    <div>
      <h2>{board.name}</h2>
      <div className="board-view">
        {statuses.map(status => (
          <TaskColumn 
            key={status} 
            status={status} 
            tasks={tasks.filter(task => task.status === status)}
            boardId={boardId}
            onTaskCreated={handleTaskCreated}
            onTaskUpdate={handleTaskUpdate}
          />
        ))}
      </div>
    </div>
  );
}

export default BoardView;