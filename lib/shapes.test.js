const {Circle,Square,Triangle} = require("./shapes")

//Circle 
describe('Circle',()=>{
  if('renders Correctly',()=>{
    const shape = new Circle();
    var color = ('blue');
    shape.setColor(color);
    expect(shape.render()).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${this.color}`)
  });
})
Square
describe('Square',()=>{
  if('renders Correctly',()=>{
  const shape = new Square();
  var color = ('grey')
  shape.setColor(color);
  expect(shape.render().toEqual(`<rect x="50" height="200" width="200" fill="${this.color}">`))
});
});

// //Triangle
// describe('Triangle',()=>{
//   if('renders Correctly',()=>{
//   const shape = new Triangle();
//   var color = ('orangle')
//   shape.setColor(color);
//   expect(shape.render().toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${this.color}">`))
// });
// });



