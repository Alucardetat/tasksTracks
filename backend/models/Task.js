const mongoose = require('mongoose'); // Import mongoose

// Define the Task schema
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true }, // Task title
    completed: { type: Boolean, default: false }, // Task completion status
});

// Create a model based on the schema
const Task = mongoose.model('Task', taskSchema); 

module.exports = Task; // Export the model