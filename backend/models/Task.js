import { Schema, model } from 'mongoose'; // Import mongoose

// Define the Task schema
const taskSchema = new Schema({
    title: { type: String, required: true },
    description: { type: String }, // Optional description field
    dueDate: { type: Date }, // Optional due date field
    completed: { type: Boolean, default: false }, // Ensure default is false
});

// Create a model based on the schema
const Task = model('Task', taskSchema); 

export default Task; // Export the model