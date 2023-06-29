
# 10 Object-oriented Programming: SVG Logo Maker

## Description

 Create a Node.js command-line application that takes in user input to generate a logo . The application prompts the user to select a color and shape, provide text for the logo, and save the generated SVG to a `.svg` file.

## Table of Contents

- [User Story](#user-story)
- [Acceptance Criteria](#acceptance-criteria)
- [License](#license)
- [Installation](#installation)
- [Usage](#usage)
- [Contributing](#contributing)
- [Questions](#questions)

### User Story

```md
AS a freelance web developer
I WANT to generate a simple logo for my projects
SO THAT I don't have to pay a graphic designer
```

## Acceptance Criteria

```md
GIVEN a command-line application that accepts user input
WHEN I am prompted for text
THEN I can enter up to three characters
WHEN I am prompted for the text color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I am prompted for a shape
THEN I am presented with a list of shapes to choose from: circle, triangle, and square
WHEN I am prompted for the shape's color
THEN I can enter a color keyword (OR a hexadecimal number)
WHEN I have entered input for all the prompts
THEN an SVG file is created named `logo.svg`
AND the output text "Generated logo.svg" is printed in the command line
WHEN I open the `logo.svg` file in a browser
THEN I am shown a 300x200 pixel image that matches the criteria I entered
```

## Installation
1. Clone the repository
2. Install the following: 
- Node.JS [Version 16.18.1](https://nodejs.org/en/blog/release/v16.18.1/)
- Jest [Version 29.4.3](https://www.npmjs.com/package/jest)
- Inquirer.js: [Version 8.2.4](https://www.npmjs.com/package/inquirer/v/8.2.4)
3. run node index.js in terimal and answer few questions to generate logo.
4. run npm run test for running a unit tests(jest)

## License 
MIT License

## Mock-Up

The following image shows a mock-up of the generated SVG given the following input entered by the user: `SVG` for the text, `white` for the text color, `circle` from the list of shapes, and `green` for the shape color. Note that this is just an image of the output SVG and not the SVG file itself:

![Image showing a green circle with white text that reads "SVG.".](./images/logo.png)

* A walkthrough video demonstrating the functionality of the application.
![alt demo](./examples/logo.gif.gif)
<br>

The full movie file showing functionality of the application can be found here : https://drive.google.com/file/d/1oeLgSmnspT2CmFGc2yxT0Du2zw09t2WV/view

## Usage
💻   
  
Run the following command at th root of your project and answer the prompted questions:
  
`node index.js`

## Contributing
Rajni bala : (https://github.com/rbala16)

## Questions
✉️ Contact me with any questions: [Email:]bala12rajni@gmail.com , [Github](https://github.com/rbala16)<br />


## Important Links!!

* A walkthrough video that demonstrates the functionality of the application and passing tests.<br>
https://drive.google.com/file/d/1oeLgSmnspT2CmFGc2yxT0Du2zw09t2WV/view


* At least one sample SVG file generated using your application.<br>
https://github.com/rbala16/generate-logo_rb/blob/main/logo.svg

* The URL of the GitHub repository, with a unique name and a README describing the project.<br>
https://github.com/rbala16/generate-logo_rb


