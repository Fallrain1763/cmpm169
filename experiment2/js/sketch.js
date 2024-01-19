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

let x;
let y;
let xSpeed;
let ySpeed;

function setup() {
  createCanvas(400, 400);
  // Initialize ball in the center of the canvas
  x = width / 2;
  y = height / 2;
  // Initialize speed
  xSpeed = 5;
  ySpeed = 3;
}

function draw() {
  background(220);
  
  // Draw ball
  fill(255, 0, 0);
  ellipse(x, y, 50, 50);
  
  // Update ball position
  x += xSpeed;
  y += ySpeed;
  
  // Check for bouncing
  if (x > width - 25 || x < 25) {
    xSpeed *= -1;
  }
  if (y > height - 25 || y < 25) {
    ySpeed *= -1;
  }
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
}