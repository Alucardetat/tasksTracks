const mongoose = require('mongoose'); // Import mongoose

// Define the Task schema
const taskSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String }, // Optional description field
    dueDate: { type: Date }, // Optional due date field
    completed: { type: Boolean, default: false },
});

// Create a model based on the schema
const Task = mongoose.model('Task', taskSchema); 

module.exports = Task; // Export the model