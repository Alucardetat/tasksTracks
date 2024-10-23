const express = require('express'); // Import express
const router = express.Router(); // Create a new router
const Task = require('../models/Task').default; // Import Task model

// Create a new task
router.post('/', async (req, res) => {
    const { title, description, dueDate } = req.body; // Get title, description, and due date from request body
    const task = new Task({ title, description, dueDate }); // Create a new task

    try {
        await task.save(); // Save task to database
        res.status(201).json(task); // Respond with the created task
    } catch (error) {
        res.status(400).json({ message: error.message }); // Handle errors
    }
});

// Get all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find(); // Fetch all tasks
        res.json(tasks); // Respond with tasks
    } catch (error) {
        res.status(500).json({ message: error.message }); // Handle errors
    }
});

module.exports = router; // Export the router