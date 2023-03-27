// Import the required dependencies
const http = require('http');
const app = require('./app'); // Import the app module from app.js

// Load the environment variables from the .env file
require('dotenv').config();

// Set the port on which the server will listen for incoming requests
const port = process.env.PORT || 3000;

// Pass the app object as the request listener (a function that is called whenever the server receives a request)
const server = http.createServer(app);

// Start the server and listen for incoming requests on the specified port
server.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});