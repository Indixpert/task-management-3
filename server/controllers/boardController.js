const Board = require('../models/Board');
const Task = require('../models/Task');

// Get all boards
exports.getBoards = async (req, res) => {
  try {
    const boards = await Board.find().sort({ createdAt: -1 });
    res.json(boards);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Create a board
exports.createBoard = async (req, res) => {
  const { name, description } = req.body;
  try {
    const newBoard = new Board({ name, description });
    const board = await newBoard.save();
    res.json(board);
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};

// Get a single board and its tasks
exports.getBoardById = async (req, res) => {
  try {
    const board = await Board.findById(req.params.id);
    if (!board) {
      return res.status(404).json({ msg: 'Board not found' });
    }
    const tasks = await Task.find({ boardId: req.params.id });
    res.json({ board, tasks });
  } catch (err) {
    console.error(err.message);
    res.status(500).send('Server Error');
  }
};