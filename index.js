// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const markdown = require('./utils/generateMarkdown.js');
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
    name: 'title'
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
    choices: ['MIT', 'APACHE 2.0', 'GPL 3.0', 'BSD 3', 'None']
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
    name: 'usage'
  },
  {
    type: 'input',
    message: "What does the user need to know about contributing to the repo?",
    name: "conbribute"
  }
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  var content = markdown(data);
  fs.writeFile(fileName, content, err => {
    if (err) {
      console.log(err);
    } else {
      console.log(`Creating file ${fileName}`);
    }
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((response) => {
      var file = `${response.title.toLowerCase().split(' ').join('')}_README.md`;
      writeToFile(file, response);
    });
}

// Function call to initialize app
init();
