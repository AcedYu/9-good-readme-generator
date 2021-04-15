// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  switch(license) {
    case 'MIT':
      return "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)";
    case 'APACHE 2.0':
      return "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    case 'GPL 3.0':
      return "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)";
    case 'BSD 3':
      return "[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch(license) {
    case 'MIT':
      return "https://opensource.org/licenses/MIT";
    case 'APACHE 2.0':
      return "https://opensource.org/licenses/Apache-2.0";
    case 'GPL 3.0':
      return "https://www.gnu.org/licenses/gpl-3.0";
    case 'BSD 3':
      return "https://opensource.org/licenses/BSD-3-Clause";
    default:
      return "";
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  return `[${license}](${renderLicenseLink(license)})`;
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
${renderLicenseBadge(data.license)}
## Table of Contents
1. [Description](#description)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Testing](#testing)
5. [Contributing](#contributing)
6. [License](#license)
7. [Author](#author)

<a name="description"></a>
## Description
${data.description}

<a name="installation"></a>
## Installation
${data.dependencies}

<a name="usage"></a>
## Usage
${data.usage}

<a name="testing"></a>
## Testing
${data.tests}

<a name="contributing"></a>
## Contributing
${data.contribute}

<a name="license"></a>
## License
${renderLicenseSection(data.license)}

<a name="author"></a>
## Author
- [Link to Github](https://github.com/${data.github})
- ${data.email}
`;
}

module.exports = generateMarkdown;
