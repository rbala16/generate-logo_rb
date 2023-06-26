//Include packages for the applications
const fs = require("fs");
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");

//Create an array of questions of user Input
const questions = [
  //Text of the shape
  {
      type: 'input',
      name: 'text',
      message: 'Text: Enter up to 3 Characters:',
   
    },
    //Text Color 
    {
      type: 'input',
      name: 'text-color',
      message: 'Text Color: Enter a color keyword (OR a hexadecimal number):',
   
    },
    //Shape Color
    {
      type: 'input',
      name: 'shape-color',
      message: 'Shape Color: Enter a color keyword (OR a hexadecimal number):',
     
    },
    //Installation
    {
      type: 'list',
      name: 'shape',
      message: 'Choose which shape would you like.',
      choices:["Circle", "Square", "Triangle"]
    
    },
  ]