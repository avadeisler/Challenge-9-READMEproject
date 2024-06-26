
// Returns a license badge based on which license is passed in
// If no license, return empty string
function renderLicenseBadge(license) { 
  if (license !== 'no license') {
    return `
  ![badge](https://img.shields.io/badge/license-${license}-blue)
    `;
  } else {
    return ' ';
  }
}

// Returns the license link
// If there no license, return empty string
function renderLicenseLink(license) {
  if (license !== 'no license') {
  return `
  [${license}](https://choosealicense.com/licenses/${license})
    `;
  } else {
    return ' ';
  }
}

// Returns the license section of README
// If no license, return empty string
function renderLicenseSection(license) {
  if (license !== 'no license') {
  return `
  ## [License](#table-of-contents)

  The app is covered under the following license:

  ${renderLicenseLink(license)}
    `;
  } else {
    return ' ';
  }
 }

 // Function that returns license in table of contents
 // If there is no license, return an empty string
function renderLicenseTOC(license) {
  if (license !== 'no license') {
  return `
  * [License](#license)
    `;
  } else {
    return ' ';
  }
 }

// Function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.title}
  
  ${renderLicenseBadge(data.license)}

  ## Table-of-Contents

  * [Description](#description)
  * [Installation](#installation)
  * [Usage](#usage)
  ${renderLicenseTOC(data.license)}
  * [Contributing](#contributing)
  * [Tests](#tests)
  * [Questions](#questions)
  
  ## [Description](#table-of-contents)

  ${data.what}

  ${data.why}

  ${data.how}

  ## [Installation](#table-of-contents)

  ${data.installation}

  ## [Usage](#table-of-contents)

  ${data.usage}
  
  For info on how to add screenshots for examples, visit this website:
  
  [Mark Down Tutorial](https://agea.github.io/tutorial.md/)
  
  ${renderLicenseSection(data.license)}

  ## [Contributing](#table-of-contents)
  
  ${renderContributingSection(data.confirmContributers, data.contribute)}

  ## [Tests](#table-of-contents)

  ${data.test}

  ## [Questions](#table-of-contents)

  Please contact me using the following links:

  [GitHub](https://github.com/${data.githubUsername})

  [Email: ${data.email}](mailto:${data.email})
`;
}

module.exports = generateMarkdown;