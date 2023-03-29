const http = require('http');

// Load the environment variables from the .env file
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').config();
}

const app = require('./app'); // Import the app module from app.js
const sequelize = require('./config/database'); // Import the sequelize instance from database.js



// Set the port on which the server will listen for incoming requests
const PORT = process.env.PORT || 3000;

(async () => {
  try {
      await sequelize.authenticate();
      await sequelize.sync();
      console.log('Database connection established and models synced.');

      const server = http.createServer(app);
      server.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}`);
      });
  } catch (error) {
      console.error('Unable to connect to the database or sync models:', error);
  }
})();