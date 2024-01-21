// sketch.js - purpose and description here
// Author: Your Name
// Date:

// Here is how you might set up an OOP p5.js project
// Note that p5.js looks for a file called sketch.js

// Constants - User-servicable parts
// In a longer project I like to put these in a separate file
const VALUE1 = 1;
const VALUE2 = 2;

// Globals
let myInstance;
let canvasContainer;

class MyClass {
    constructor(param1, param2) {
        this.property1 = param1;
        this.property2 = param2;
    }

    myMethod() {
        // code to run when method is called
    }
}

// setup() function is called once when the program starts
function setup() {
    // place our canvas, making it fit our container
    canvasContainer = $("#canvas-container");
    let canvas = createCanvas(canvasContainer.width(), canvasContainer.height());
    canvas.parent("canvas-container");
    // resize canvas is the page is resized
    $(window).resize(function() {
        console.log("Resizing...");
        resizeCanvas(canvasContainer.width(), canvasContainer.height());
    });
    // create an instance of the class
    myInstance = new MyClass(VALUE1, VALUE2);

    var centerHorz = windowWidth / 2;
    var centerVert = windowHeight / 2;
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    background(220);    
    // call a method on the instance
    myInstance.myMethod();

    // Put drawings here
    var centerHorz = canvasContainer.width() / 2 - 125;
    var centerVert = canvasContainer.height() / 2 - 125;
     // No ongoing drawing in this example
    // Define the central point
  let centerX = canvasContainer.width() / 2
  let centerY = canvasContainer.height() / 2
  
  // Draw the three areas
  noStroke()
  
  // Area 1
  fill(255,0 ,0);
  beginShape();
  vertex(0, height);
  vertex(0, 0);
  vertex(centerX, 0);
  vertex(centerX, centerY);
  endShape(CLOSE);
  
  // Area 2
  fill(0, 255, 0);
  beginShape();
  vertex(centerX, 0);
  vertex(width, 0);
  vertex(width, height);
  vertex(centerX, centerY);
  endShape(CLOSE);
  
  // Area 3
  fill(0, 0, 255);
  beginShape();
  vertex(0, height);
  vertex(width, height);
  vertex(centerX, centerY);
  endShape(CLOSE);
  
  var c = "";
  
  if(color(get(mouseX, mouseY)).toString() == color(255, 0, 0).toString())
  {   
     c = "红";
     fill(color(0, 255, 255));
  }
  else if(color(get(mouseX, mouseY)).toString() == color(0, 255, 0).toString())
  {   
     c = "绿";
    fill(color(255, 0, 255));
  }
  else if(color(get(mouseX, mouseY)).toString() == color(0 ,0, 255).toString())
  {   
     c = "蓝";
    fill(color(255, 255, 0));
  }
  
  
  
  textSize(48)
  text(c, mouseX, mouseY)
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
}