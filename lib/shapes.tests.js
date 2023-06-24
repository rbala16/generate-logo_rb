class Shape {
  // create a class called Shape which has a constructor intializing 'color' and sets the 'color' value.
  constructor(){
    this.color = '';
  }
  setColor(color){
    this.color  = color;
  }
}

class Circle extends Shape{
  render(){
    return `<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}">`
  }
}