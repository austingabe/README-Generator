const inquirer = require("inquirer");
const fs = require('fs');

const questions = [
    {
        type: "input",
        name: "title",
        message: "What is the title of your project? (Title)",
        validate: function(title) {
            return title !== "";
        }
    },

    {
        type: "input",
        name: "description",
        message: "Please describe your project (Description)",
        validate: function(description) {
            return description !== "";
        }
    },

    {
        type: "input",
        name: "installation",
        message: "How does the user install this program? (Installation)",
        validate: function(installation) {
            return installation !== "";
        }
    },

    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using this application? (Usage)",
        validate: function(usage) {
            return usage !== "";
        }
    },

    {
        type: "list",
        name: "license",
        message: "Please select a license for this project (License)",
        choices: ["Apache", "GNU", "MIT", "None"],
    },

    {
        type: "input",
        name: "contributing",
        message: "May others contribute to this project? If so, what are the conditions for contributing? (Contributing)",
        validate: function(contributing) {
            return contributing !== "";
        }
    },

    {
        type: "input",
        name: "tests",
        message: "What tests have been written for this application and how are they run? (Tests)",
        validate: function(tests) {
            return tests !== "";
        }
    }
];

inquirer
    .prompt(
        questions
    )
    .then(function (answers) {
        console.log(answers)
    })
// .then(push answers to array? generate markdown?)

function writeToFile(fileName, data) {
}

function init() {

}

init();