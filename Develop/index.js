// Inquirer
const inquirer = require("inquirer");

// File system module (npm) import
const fs = require("fs");

// function to write README file
function writeToFile(fileName, data) {
  var fileText = "";
  // Users name
  fileText += `${data.name}'s README\n\n`;
  // Users README title
  fileText += ` # ${data.title}\n\n`;
  // Licensing badge
  fileText += `${generateLicense(data.license)}\n\n`;
  // Table of contents
  fileText += `## Table of Contents\n\n`;
  // Links to sections within the table of contents
  fileText += ` * [Description](#description)\n\n * [Installation](#installation)\n\n * [Usage-Information](#usage-information)\n\n * [Contribution-Guidelines](#contribution-guidelines)\n\n * [Test-Instructions](#test-instructions)\n\n * [License](#license)\n\n * [Questions](#questions)\n\n`;
  // Description section
  fileText += `## Description\n\n${data.description}\n\n`;
  // Installation section
  fileText += `## Installation\n\n${data.installation}\n\n`;
  // Usage information section
  fileText += `## Usage Information\n\n${data.usage}\n\n`;
  // Contribution guidelines section
  fileText += `## Contribution Guidelines\n\n${data.contribution}\n\n`;
  // Test instructions section
  fileText += `## Test Instructions\n\n${data.test}\n\n`;
  // License section (complete with NOTICE)
  fileText += `## License\n\nNOTICE: This application is covered under the ${data.license}\n\n`;
  // Questions section
  fileText += `## Questions\n\nHave additional questions? Click the links below to reach me through my GitHub account or Email address.\n\n`;
  // Link to users GitHub
  fileText += `[Link to Github](https://github.com/${data.github})\n\n`;
  // Link to users email
  fileText += `<a href="mailto:${data.email}">${data.email}</a>\n\n`;
  // Utilizing the file system write file method to generate the users README.md doc as well as error handling, that tells the user "Success!" within the terminal when README is successfully generated or logs any errors to the console
  fs.writeFile(fileName, fileText, (err) =>
    err ? console.error(err) : console.log("Success!")
  );
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt([
      // User name
      {
        type: "input",
        message: "What is your name?",
        name: "name",
      },
      // User README title
      {
        type: "input",
        message: "What is the title of your project?",
        name: "title",
      },
      // User README description
      {
        type: "input",
        message: "Add the description of your project:",
        name: "description",
      },
      // User README installation instructions
      {
        type: "input",
        message: "Add the installation instructions of your project:",
        name: "installation",
      },
      // User README usage info
      {
        type: "input",
        message: "Add the usage information of your project:",
        name: "usage",
      },
      // User README contribution guidelines
      {
        type: "input",
        message: "Add the contribution guidelines of your project:",
        name: "contribution",
      },
      // User README test instructions
      {
        type: "input",
        message: "Add the test instructions of your project:",
        name: "test",
      },
      // User github
      {
        type: "input",
        message: "What is your GitHub Username?",
        name: "github",
      },
      // User email
      {
        type: "input",
        message: "What is your email?",
        name: "email",
      },
    ])
    // .then takes the user inputs from above questions and inserts them into the writeToFile function, generating a "sample-README.md" file with user's inputs
    .then((data) => {
      writeToFile("sample-README.md", data);
    });
}


// Function call to initialize app
init();