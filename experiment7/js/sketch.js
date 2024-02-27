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

let table;
let data = [];
let timer = 0;
let r = 0;

function preload() {
   table = loadTable('csv/data.csv', 'csv', 'header');
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

    for (let i = 0; i < 9; i++) { 
        data.push(float(table.getString(0, i)));
      }
}

// draw() function is called repeatedly, it's the main animation loop
function draw() {
    background(220);
    
    if (millis() >= 1000+timer) { 
  
      updateData();
      timer = millis();
    }
    drawBarChart(data);
} 

function updateData() {
    r += 1;
    if (r > 21)
    {
      r = 0;
    }
    for (let i = 0; i < data.length; i++) {
      data[i] = float(table.getString(r, i)); 
    }
  }
  
  function drawBarChart(data) {
    let barWidth = width / data.length;
    for (let i = 0; i < data.length; i++) {
      let barHeight = data[i]*50;
      fill(0);
      textAlign(CENTER);
  
      text(table.columns[i], i * barWidth + barWidth / 2, height - barHeight - 5)
      
      if (i == 0)
        fill(255, 0, 0);
      else if (i == 1)
        fill(255, 125, 0);
      else if (i == 2)
        fill(255, 255, 0);
      else if (i == 3)
        fill(0, 255, 0);
      else if (i == 4)
        fill(0, 255, 255);
      else if (i == 5)
        fill(0, 0, 255);
      else if (i == 6)
        fill(255, 0, 255);
      else if (i == 7)
        fill(255, 255, 255);
      
      rect(i * barWidth, height - barHeight, barWidth - 5, barHeight);
      
    }
    
  }