// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    message: 'What is your GitHub username?',
    name: "github"
  },
  {
    type: 'input',
    message: 'What is your email address?',
    name: "email"
  },
  {
    type: 'input',
    message: "What is your project's name?",
    name: 'project'
  },
  {
    type: 'input',
    message: 'Please write a short description of your project',
    name: 'description'
  },
  {
    type: 'list',
    message: "What kind of license should your project have?",
    name: 'license',
    choices: []
  },
  {
    type: 'input',
    message: "What command should be run to install dependencies?",
    name: 'dependencies'
  },
  {
    type: 'input',
    message: "What command should be run to run tests?",
    name: 'tests'
  },
  {
    type: 'input',
    message: "What does the user need to know about using the repo?",
    name: 'needtoknow'
  },
  {
    type: 'input',
    message: "What does the user need to know about contributing to the repo?",
    name: "conbribute"
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      var file = `${response.project.toLowerCase().split(' ').join('')}_README.md`;
      writeToFile(file, response);
    });
}

// Function call to initialize app
init();
