// TODO: Include packages needed for this application

const inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("./utils/generateMarkdown");

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    message: "What is your name?",
    name: "name",
  },
  {
    type: "input",
    message: "What is your Github username?",
    name: "github",
  },
  {
    type: "input",
    message: "What is your Linkedin username?",
    name: "linkedin",
  },
  {
    type: "input",
    message: "What is your email address?",
    name: "email",
  },
  {
    type: "input",
    message: "What is your project's name?",
    name: "projectName",
  },
  {
    type: "input",
    message: "Write a short description of your project",
    name: "shortDescription",
  },
  {
    type: "list",
    name: "license",
    message: "What liscense should your project have?",
    choices: ["MIT", "Apache", "GNU", "ISC", "None"],
  },
  {
    type: "input",
    message: "Enter the command to install the dependencies",
    name: "install",
    default: "npm i",
  },
  {
    type: "input",
    message: "Enter the command to run the dependencies",
    name: "run",
    default: "node index.js",
  },
  {
    type: "input",
    message: "Enter the command to run the tests",
    name: "tests",
    default: "npm test",
  },
  {
    type: "input",
    message: "Enter the contribution guidelines",
    name: "contribution",
  },
  {
    type: "input",
    message: "Enter the usage of this repo",
    name: "usage",
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let markDown = generateMarkdown(data);

  fs.writeFile(fileName, markDown, (err) =>
    err ? console.error(err) : console.log("Generating README...")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer.prompt(questions).then((data) => {
    writeToFile("README.md", data);
  });
}

// Function call to initialize app
init();
