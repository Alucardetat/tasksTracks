// Import Mongoose to interact with MongoDB and define schemas
const mongoose = require('mongoose');

// Define the schema for a task
// A schema is a structure that represents the shape of the data (documents) in a MongoDB collection
const taskSchema = new mongoose.Schema({
  // 'title' field: it must be a string and is required (meaning it cannot be null or undefined)
  title: { 
    type: String,    // The data type for the 'title' field is a string
    required: true   // This means the 'title' field is mandatory
  },
  // 'description' field: similar to 'title', this must also be a string and is required
  description: { 
    type: String,    // The data type for the 'description' field is a string
    required: true   // This means the 'description' field is mandatory
  }
});

// Create a Mongoose model for the 'Task' schema
// A model is a wrapper for the schema and provides an interface to the MongoDB collection
// The first argument 'Task' is the name of the collection (Mongoose will pluralize it as 'tasks')
// The second argument is the schema to apply to that collection
const Task = mongoose.model('Task', taskSchema);

// Export the Task model so it can be used in other parts of the application
// This allows you to perform CRUD operations (create, read, update, delete) on the 'tasks' collection
module.exports = Task;