const fs = require("fs");
const path = require('path');
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");

// array of questions for user
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Enter a title for your project:',
    validate: titleInput => {
        if (titleInput) {
            return true;
    }
}
},
{
  type: 'input',
  name: 'description',
  message: 'Provide a description of your project:'
},
{
  type: 'input',
  name: 'installation',
  message: 'Provide installation instructions:'
},
{
  type: 'input',
  name: 'usage',
  message: 'Provide usage information:'
},
{
  type: 'list',
  name: 'license',
  message: 'Choose a license for your application:',
  choices: ['MIT', 'Apache 2.0', 'GPL 3.0', 'BSD 3', 'None']
},
{
  type: 'input',
  name: 'contributing',
  message: 'Provide contribution guidelines:'
},
{
  type: 'input',
  name: 'tests',
  message: 'Provide test instructions:'
},
{
  type: 'input',
  name: 'githubUsername',
  message: 'Enter your GitHub username:'
},
{
  type: 'input',
  name: 'email',
  message: 'Enter your email address:'
}
];

// function to write README file
function writeToFile(fileName, data) {
  return new Promise((resolve, reject) => {
    fs.writeFile(fileName, data, err => {
        if (err) {
            reject(err);
            return;
        }
        resolve({
            ok: true,
            message: 'File created!'
        });
    });
});
}

// function to initialize program
function init() {

}

// function call to initialize program
init();
