const {Circle, Square, Triangle} = require("./shapes")

//Circle 
describe('Circle',()=>{
  it('renders Correctly',()=>{
    const shape = new Circle();
    var color = ('blue');
    shape.setColor(color);
    let generatedSVG = shape.render();
    expect(generatedSVG).toEqual(`<circle cx="50%" cy="50%" r="100" height="100%" width="100%" fill="${color}"/>`);
  });
})
//Square
describe('Square',()=>{
  it('renders Correctly',()=>{
  const shape = new Square();
  var color = ('grey')
  shape.setColor(color);
  let generatedSVG = shape.render();
  expect(generatedSVG).toEqual(`<rect x="50" height="200" width="200" fill="${color}"/>`);
});
});

//Triangle
describe('Triangle',()=>{
  it('renders Correctly',()=>{
  const shape = new Triangle();
  var color = ('orange')
  shape.setColor(color);
  let generatedSVG = shape.render();
  expect(generatedSVG).toEqual(`<polygon height="100%" width="100%" points="0,200 300,200 150,0" fill="${color}"/>`)
});
});



