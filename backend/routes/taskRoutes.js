// Import the Express framework to create a router for handling routes
const express = require('express');

// Import the Task model, which is used to interact with the MongoDB 'tasks' collection
const Task = require('../models/Task');

// Create an Express router instance to define routes related to task operations
const router = express.Router();

// Define a route to get all tasks from the database
// HTTP GET request to '/' (root of the route)
// This route uses asynchronous code to interact with the database
router.get('/', async (req, res) => {
  // Find all tasks in the database using Mongoose's 'find()' method
  const tasks = await Task.find();
  
  // Send the list of tasks back as a JSON response
  res.json(tasks);
});

// Define a route to create a new task
// HTTP POST request to '/' (root of the route)
// This route expects a task to be sent in the request body (as JSON) and then saves it to the database
router.post('/', async (req, res) => {
  // Create a new Task instance using the data sent in the request body (req.body)
  const newTask = new Task(req.body);
  
  // Save the new task to the database using Mongoose's 'save()' method
  await newTask.save();
  
  // Send the newly created task as a JSON response
  res.json(newTask);
});

// Define a route to update an existing task
// HTTP PUT request to '/:id' where ':id' is a placeholder for the task's unique ID
// This route expects the task's updated data in the request body and the task ID in the URL
router.put('/:id', async (req, res) => {
  // Find the task by its ID and update it with the data in the request body
  // The 'new: true' option ensures the response contains the updated task, not the old one
  const updatedTask = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  
  // Send the updated task as a JSON response
  res.json(updatedTask);
});

// Define a route to delete a task
// HTTP DELETE request to '/:id' where ':id' is the unique ID of the task to be deleted
router.delete('/:id', async (req, res) => {
  // Find the task by its ID and delete it from the database using Mongoose's 'findByIdAndDelete()' method
  await Task.findByIdAndDelete(req.params.id);
  
  // Send a JSON response with a message indicating that the task was deleted
  res.json({ message: 'Task deleted' });
});

// Export the router so it can be used in other parts of the application
// This allows the task-related routes to be mounted in the main server file
module.exports = router;