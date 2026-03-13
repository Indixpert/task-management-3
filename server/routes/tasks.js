const express = require('express');
const router = express.Router();
const { createTask, updateTask, deleteTask } = require('../controllers/taskController');

// @route   POST api/tasks
// @desc    Create a task
router.post('/', createTask);

// @route   PUT api/tasks/:id
// @desc    Update a task
router.put('/:id', updateTask);

// @route   DELETE api/tasks/:id
// @desc    Delete a task
router.delete('/:id', deleteTask);

module.exports = router;