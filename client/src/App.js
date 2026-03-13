import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import BoardView from './pages/BoardView';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <nav className="nav"><a href="/">MERN Task Manager</a></nav>
        <main className="container">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/boards/:boardId" element={<BoardView />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;