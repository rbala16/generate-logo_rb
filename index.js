//Include packages for the applications
const fs = require("fs");
const inquirer = require("inquirer");
const {Circle, Square, Triangle} = require("./lib/shapes");


class Svg{
  constructor(){
      this.textElement = ''
      this.shapeElement = ''
  }
  render(){

      return `<svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="300" height="200">${this.shapeElement}${this.textElement}</svg>`
  }
  setTextElement(text,color){
      this.textElement = `<text x="150" y="125" font-size="60" text-anchor="middle" fill="${color}">${text}</text>`
  }
  setShapeElement(shape){
      this.shapeElement = shape.render()

  }
  
}
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

//  Create a function to data svg file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, (err) =>{
  err ? console.log(err) : console.log('Successfully created logo.svg')
;
})
}

async function init() {
  console.log("Starting init");
var svgString = "";
var svg_file = "logo.svg";

  // Prompt the user for answers
  const answers = await inquirer.prompt(questions);

//user text
var user_text = "";
if (answers.text.length > 0 && answers.text.length < 4) {
  // 1-3 chars, valid entry
  user_text = answers.text;
} else {
  // 0 or 4+ chars, invalid entry
  console.log("Please enter 1-3 Characters!!");
      return;
}
console.log("User text: [" + user_text + "]");
//user font color
user_font_color = answers["text-color"];
console.log("User font color: [" + user_font_color + "]");
//user shape color
user_shape_color = answers["shape-color"];
console.log("User shape color: [" + user_shape_color + "]");
//user shape type
user_shape_type = answers.shape;
console.log("User entered shape = [" + user_shape_type + "]");

//user shape
let user_shape;
if (user_shape_type === "Square" || user_shape_type === "square") {
  user_shape = new Square();
  console.log("User selected Square shape");
}
else if (user_shape_type === "Circle" || user_shape_type === "circle") {
  user_shape = new Circle();
  console.log("User selected Circle shape");
}
else if (user_shape_type === "Triangle" || user_shape_type === "triangle") {
  user_shape = new Triangle();
  console.log("User selected Triangle shape");
}
else {
  console.log("Invalid shape!");
}
user_shape.setColor(user_shape_color);

// Create a new Svg instance and add the shape and text elements to it
var svg = new Svg();
svg.setTextElement(user_text, user_font_color);
svg.setShapeElement(user_shape);
svgString = svg.render();

//Print shape to log
console.log("Displaying shape:\n\n" + svgString);
//document.getElementById("svg_image").innerHTML = svgString;

console.log("Shape generation complete!");
console.log("Writing shape to file...");
writeToFile(svg_file, svgString); 
}
init()