// Import the required dependencies
const http = require('http');
const app = require('./app');

// Load the environment variables from the .env file
require('dotenv').config();

// Set the port on which the server will listen for incoming requests
const port = process.env.PORT || 3000;

const server = http.createServer(app);

// Start the server and listen for incoming requests on the specified port
server.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});