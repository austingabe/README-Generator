const inquirer = require("inquirer"); // Requires Inquirer module
const fs = require("fs"); // Requires File System module
const markdown = require("./utils/generateMarkdown") // Requires local module to generate from template literal

// Array of questions to prompt using Inquirer.js
const questions = [
    {
        type: "input",
        name: "username",
        message: "What is your GitHub username?",
        validate: function (username) {
            // If line is left blank, it will not proceed to the next question
            return username !== "";
        }
    },

    {
        type: "input",
        name: "title",
        message: "What is the title of your project? (Title)",
        validate: function (title) {
            return title !== "";
        }
    },

    {
        type: "input",
        name: "description",
        message: "Please describe your project (Description)",
        validate: function (description) {
            return description !== "";
        }
    },

    {
        type: "input",
        name: "installation",
        message: "How does the user install this program? (Installation)",
        validate: function (installation) {
            return installation !== "";
        }
    },

    {
        type: "input",
        name: "usage",
        message: "What does the user need to know about using this application? (Usage)",
        validate: function (usage) {
            return usage !== "";
        }
    },

    {
        type: "list",
        name: "license",
        message: "Please select a license for this project (License)",
        choices: ["Apache", "GNU", "MIT", "N/A"],
    },

    {
        type: "input",
        name: "contributing",
        message: "May others contribute to this project? If so, what are the conditions for contributing? (Contributing)",
        validate: function (contributing) {
            return contributing !== "";
        }
    },

    {
        type: "input",
        name: "tests",
        message: "What tests have been written for this application and how are they run? (Tests)",
        validate: function (tests) {
            return tests !== "";
        }
    },

    {
        type: "input",
        name: "email",
        message: "What is your e-mail address?",
        validate: function (email) {
            return email !== "";
        }
    }
];

function markdownFile(fileName, data) {
    // Represents the answers to the prompts
    const markdownContent = markdown(data);

    // Creates README.md
    fs.writeFile(fileName, markdownContent, function (err) {
        if (err) { console.log("Error"); }
        console.log("README.md generated");
    })
}

function init() {
    // Executes prompts from "questions" array
    inquirer.prompt(questions).then(function(response){
        // Once answered, the results are logged in the console
        console.log(response);
        // New file is written using the prompt responses
        markdownFile("README.md", response);
    })
}

// Executes init function
init();