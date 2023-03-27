// Import required dependencies
const express = require('express');
const helmet = require('helmet');

// Import custom routes
// const exampleRoutes = require('./routes/example');

// Create an Express application
const app = express();

// Middleware (function that runs before the request handler)
app.use(helmet()); // Add security-related HTTP headers to the application 
// Explanation for express.json and urlencoded : https://stackoverflow.com/a/51844327
app.use(express.json()); // Allow to recognize the incoming request object as a JSON object
app.use(express.urlencoded({ extended: true })); // Allow to recognize the incoming request object as strings or arrays

// Use custom routes in the application
// app.use('/example', exampleRoutes);
// Export the app module for use in other files (e.g., index.js)
module.exports = app;
