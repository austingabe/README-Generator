function generateMarkdown(data) {
  const url = `https://github.com/${data.username}/${data.title}`
  return `
# ${data.title}

[![GitHub Link](https://cdn.iconscout.com/icon/free/png-256/github-163-761603.png)](${url})

## Description
${data.description}

## Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)

## Installation
${data.installation}

## Usage
${data.usage}

## License
The license for this project is ${data.license}.

## Contributing
${data.contributing}

## Tests
${data.tests}

## Support
For any questions, please contact ${data.email}.
`;
}

module.exports = generateMarkdown;