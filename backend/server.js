// Import the Express framework to set up the web server
const express = require('express');

// Import Mongoose to interact with MongoDB databases
const mongoose = require('mongoose');

// Import CORS to handle Cross-Origin Resource Sharing, allowing your server to communicate with other domains
const cors = require('cors');

// Import custom task routes from a separate file, typically where you define CRUD operations for tasks
const taskRoutes = require('./routes/taskRoutes');

// Initialize an Express application
const app = express();

// Define the port number on which the server will run
const PORT = 5000; 

// Middleware functions are added here

// Enable CORS for all routes, allowing requests from different origins
app.use(cors()); 

// Parse incoming requests that have a JSON payload, so the server can handle JSON data
app.use(express.json()); 

// MongoDB connection settings
// Connect to the local MongoDB instance and the "taskdb" database
// The 'useNewUrlParser' flag allows using the new MongoDB URL string parser
// The 'useUnifiedTopology' flag enables the use of the new Server Discover and Monitoring engine
mongoose.connect('mongodb://localhost/taskdb', {
  useNewUrlParser: true, // This option is used to opt into the new MongoDB connection string parser
  useUnifiedTopology: true, // This option is used to opt into the new MongoDB server discovery and monitoring engine
})
  .then(() => console.log('MongoDB connected')) // On successful connection, log a success message to the console
  .catch((err) => console.error(err)); // If an error occurs during connection, catch it and log it

// Define routes
// The task routes defined in the 'taskRoutes' file are prefixed with '/api/tasks'
// This means any route defined in 'taskRoutes' will be accessed through the '/api/tasks' URL path
app.use('/api/tasks', taskRoutes); 

// Start the server and have it listen on the specified port
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`); // Log a message to the console indicating that the server has started successfully
});