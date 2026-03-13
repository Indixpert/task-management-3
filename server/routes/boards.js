const express = require('express');
const router = express.Router();
const { getBoards, createBoard, getBoardById } = require('../controllers/boardController');

// @route   GET api/boards
// @desc    Get all boards
router.get('/', getBoards);

// @route   POST api/boards
// @desc    Create a board
router.post('/', createBoard);

// @route   GET api/boards/:id
// @desc    Get single board with tasks
router.get('/:id', getBoardById);

module.exports = router;