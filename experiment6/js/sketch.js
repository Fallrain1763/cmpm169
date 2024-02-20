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

let words = [];
let currentSize = 100;

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

    textSize(200); 
    textAlign(CENTER, CENTER);
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    background(240); 
  
    currentSize = map(mouseX, 0, width, 50, 200);
    textSize(currentSize);
    
    for (let i = 0; i < words.length; i++) {
      let x = width / (words.length + 1) * (i + 1);
      let y = height / 2;
      let f = sin(frameCount * 0.05 + i) * 50; 
      
      fill(100, mouseY / 2, 200);
      
      text(words[i], x, y + f);
    } 
}

// mousePressed() function is called once after every time a mouse button is pressed
function mousePressed() {
    let newWord = random(['临', '兵', '斗', '者', '皆', '阵', '列', '前', '行']);
    words.push(newWord);
    if (words.length > 9) {
      words.shift(); 
    }
}