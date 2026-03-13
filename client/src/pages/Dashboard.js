import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import api from '../services/api';

function Dashboard() {
  const [boards, setBoards] = useState([]);
  const [boardName, setBoardName] = useState('');

  useEffect(() => {
    const fetchBoards = async () => {
      const res = await api.get('/boards');
      setBoards(res.data);
    };
    fetchBoards();
  }, []);

  const handleCreateBoard = async (e) => {
    e.preventDefault();
    if (!boardName) return;
    const res = await api.post('/boards', { name: boardName });
    setBoards([res.data, ...boards]);
    setBoardName('');
  };

  return (
    <div>
      <h2>My Boards</h2>
      <form onSubmit={handleCreateBoard}>
        <input 
          type="text" 
          placeholder="New Board Name"
          value={boardName}
          onChange={(e) => setBoardName(e.target.value)}
        />
        <button type="submit">Create Board</button>
      </form>
      <div>
        {boards.map(board => (
          <div key={board._id} style={{margin: '10px', padding: '10px', border: '1px solid #ccc'}}>
            <Link to={`/boards/${board._id}`}>{board.name}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Dashboard;