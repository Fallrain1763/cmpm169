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

var t;

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

    background(0);
    noStroke();
    t = 0;
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    // fade the background by giving it a low opacity
  background(0, 5);

  // Draw multiple circles
 for (let i = 0; i < 100; i++) {
   // Use noise for x and y to get smooth, continuous changes
   let x = width * noise(t+i);
   let y = height * noise(t+i+5);
 
   // Use random for size and color to get more variation
   let r = random(0, 255);
   let g = random(0, 255);
   let b = random(0, 255);
   let size = random(25, 50);
   
   fill(r, g, b);
   ellipse(x, y, size, size);
 }
 
 // update time
 t = t + 0.01;
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    // code to run when mouse is pressed
}