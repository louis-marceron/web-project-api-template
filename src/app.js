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

// Catch 404 errors and forward them to the error handler
app.use((req, res, next) => {
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handling middleware
app.use((err, req, res, next) => {
  // Set the response status to the error status, or default to 500 (Internal Server Error)
  res.status(err.status || 500);

  // Send the error message as a response
  res.json({
    message: err.message,
    // Only send the error details in development mode to prevent leaking sensitive information
    error: process.env.NODE_ENV === 'development' ? err : {},
  });
});

// Export the app module for use in other files (e.g., index.js)
module.exports = app;
