# REST API with Express

This is a template for a Node.js API project with Express for the web project of the third year of engineering school in Computer Science at the University of Polytech Montpellier (2022-2023).

## Table of Contents

- [The tech stack](#the-tech-stack)

- [Installing and running the application](#installing-and-running-the-application)


## The tech stack
### What is Node.js?

Node.js is a JavaScript runtime environment that allows you to execute JavaScript outside of a web browser.
To run a JavaScript file, type `node my_file.js`
as you would do in python with the command `python my_file.py`.


### What is NPM?

NPM (Node Package Manager) is the default package manager for Node.js. It helps you manage dependencies for your libraries and modules (like pip in Python). When you initialize a Node.js project using `npm init`, a package.json file is created, which keeps track of your project's metadata, dependencies, and scripts. Use `npm install` to install dependencies.
### What is Express?

Express is a minimal and flexible Node.js web application framework. It simplifies the process of handling HTTP requests and responses, managing middleware, and routing.

### What is Nodemon?

Nodemon is a utility that monitors your Node.js application for changes and automatically restarts the server when a change is detected. 

## Installing and running the application

Follow these steps to run the project:
### Prerequisites

1. Install Node.js : https://nodejs.org/.

### Installation

1. Clone the project repository:

        git clone https://github.com/louis-marceron/web-project-api-template


2. Navigate to the root of the project and install the dependencies using NPM:

        npm install

### Running the application

1. Start the application using an NPM script that uses Nodemon:

        npm run dev

2. Open your browser and navigate to http://localhost:3000 (or the specified port) to access the application.