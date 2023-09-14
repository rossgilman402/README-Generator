// This function will check the answer of the license and return the values to be ouput in the README
// If the selection is None then the README will not contain licensing
function licenseSelection(license) {
  if (license === "None") {
    const license = {
      license: "",
      link: "",
      badge: "",
    };
    return license;
  }
  if (license === "MIT") {
    const license = {
      license: "MIT",
      link: "https://opensource.org/licenses/MIT",
      badge:
        "[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)",
    };
    return license;
  } else if (license === "Apache") {
    const license = {
      license: "Apache",
      link: "https://opensource.org/licenses/Apache-2.0",
      badge:
        "[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)",
    };
    return license;
  } else if (license === "GNU") {
    const license = {
      license: "GNU",
      link: "https://www.gnu.org/licenses/gpl-3.0",
      badge:
        "[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)",
    };
    return license;
  } else if (license === "ISC") {
    const license = {
      license: "ISC",
      link: "https://opensource.org/licenses/ISC",
      badge:
        "[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)",
    };
    return license;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  //Get the license selection
  const licenseObject = licenseSelection(data.license);
  //Create license object
  const licenseOutputObject = {
    TOC: "",
    licenseOutput: "",
    badge: "",
  };

  //Add the data for the license to be output if the answer is not none
  if (licenseObject.license !== "") {
    licenseOutputObject.TOC = "- [License](#license)";
    licenseOutputObject.licenseOutput = `## License
      
    ${licenseObject.license}
    ${licenseObject.link}
        `;
    licenseOutputObject.badge = licenseObject.badge;
  }

  //Create our readme template to return
  const readMe = `# ${data.projectName}

  ${licenseOutputObject.badge}
      
  ## Description
      
    ${data.shortDescription}
      
  ## Table of Contents
      
  - [Installation and Run](#installation-and-run)
  - [Usage](#usage)
  - [Credits](#credits)
  - [How to Contribute](#how-to-contribute)
  ${licenseOutputObject.TOC}
      
  ## Installation and Run
      
  Run this command to install your code
  \`\`\`
  ${data.install}
  \`\`\`

  Run this command to run your code
  \`\`\`
  ${data.run}
  \`\`\`
      
  ## Usage
      
  ${data.usage}
      
  ## Credits
      
  ${data.name}
      
  - https://www.github.com/${data.github}
  - https://www.linkedin.com/in/${data.linkedin}
  - ${data.email}
      
  ## How to Contribute
      
  ${data.contribution}
      
  ## Tests
      
  Run this command to test your code
  \`\`\`
  ${data.tests}
  \`\`\`
      
  ${licenseOutputObject.licenseOutput}
  `;

  return readMe;
}

module.exports = generateMarkdown;
