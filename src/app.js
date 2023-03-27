// Import required dependencies
const express = require('express');
const helmet = require('helmet');

// Import error handling middleware
const notFoundErrorHandler = require('./middlewares/error-handlers/not-found-error-handler.js');
const genericErrorHandler = require('./middlewares/error-handlers/generic-error-handler.js');

// Import custom routes
// const exampleRoutes = require('./routes/example');

// Create an Express application
const app = express();

// Express or module-specific middlewares
app.use(helmet()); // Add security-related HTTP headers to the application 
// Explanation for express.json and urlencoded : https://stackoverflow.com/a/51844327
app.use(express.json()); // Allow to recognize the incoming request object as a JSON object
app.use(express.urlencoded({ extended: true })); // Allow to recognize the incoming request object as strings or arrays

// Custom middlewares
// app.use(customMiddleware);

// Error handling middlewares (must be added after all other middlewares)
app.use(notFoundErrorHandler);
app.use(genericErrorHandler);

// Use custom routes in the application
// app.use('/example', exampleRoutes);

// Export the app module for use in other files (index.js)
module.exports = app;
