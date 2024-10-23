// Importing necessary packages
const express = require('express'); // Framework for building the server
const mongoose = require('mongoose'); // MongoDB object modeling
const cors = require('cors'); // CORS middleware to allow cross-origin requests
require('dotenv').config(); // For environment variables

const app = express(); // Creating an instance of express
const PORT = process.env.PORT || 5000; // Setting the port for the server

// Middleware
app.use(cors()); // Enable CORS
app.use(express.json()); // Parse JSON bodies

// MongoDB connection
mongoose.connect(process.env.MONGODB_URI, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => console.log('MongoDB connected'))
    .catch(err => console.log(err));

// Define your routes here
app.get('/', (req, res) => {
    res.send('API is running...');
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});