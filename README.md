# REST API with Express

This is a template for a Node.js API project with Express for the web project of the third year of engineering school in Computer Science at the University of Polytech Montpellier (2022-2023).

## Table of Contents

- [The tech stack](#the-tech-stack)

- [The file structure](#the-file-structure)

- [Installing and running the application](#installing-and-running-the-application)


## The tech stack

**Node.js**: JavaScript runtime environment that allows you to execute JavaScript outside of a web browser.
To run a JavaScript file, type `node my_file.js`
as you would do in python with the command `python my_file.py`.

**NPM (Node Package Manager)**: default package manager for Node.js. It helps you manage dependencies for your libraries and modules (like pip in Python). When you initialize a Node.js project using `npm init`, a package.json file is created, which keeps track of your project's metadata, dependencies, and scripts. Use `npm install` to install dependencies.

**Express**: minimal and flexible Node.js web application framework. It simplifies the process of handling HTTP requests and responses, managing middleware, and routing

**Nodemon**: utility that monitors your Node.js application for changes and automatically restarts the server when a change is detected.

## The file structure

`controllers/`: Contains the code responsible for handling user input, interacting with models, and returning appropriate responses. 

`middleware/`: Contains functions executed between the request and the response for tasks such as authentication, error handling, and request validation.

`models/`: Contains the logic for interacting with the database.

`routes/`: Contains the route definitions and their associated controllers. Separating the routes makes it easier to manage, update, and test individual endpoints.

`app.js`: Initializes the application, sets up middleware, and configures the routes. This file serves as the central point for configuring your application.

`index.js`: The entry point of the application, responsible for starting the server and listening for incoming requests.

## Installing and running the application

1. Install Node.js : https://nodejs.org/.

2. Clone the project repository:

        git clone https://github.com/louis-marceron/web-project-api-template


3. Navigate to the root of the project and install the dependencies using NPM:

        npm install

4. Start the application using an NPM script that uses Nodemon:

        npm run dev

2. Open your browser and navigate to http://localhost:3000 (or the specified port) to access the application.