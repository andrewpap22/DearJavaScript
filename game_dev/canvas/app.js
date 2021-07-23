// Selecting our canvas element and specifying it to be 2D context and not 3D

let ctx = document.getElementById("ctx").getContext("2d");

/** Now that we have our canvas let's try drawing something in it
 * 
 * What the method fillText does is draw something in our canvas. 
 * In particular it "draws" text. 
 * So our line of code below "draws" the text Hello World at the potition x = 150, y = 250
 */


// Change the Hello World text font size and font family: 
// It must be set before drawing the text

ctx.font = "30px Calibri";

ctx.fillText("Hello World", 150, 250);

// Another method for drawing text is the strokeText method 

ctx.strokeText("Stroked Text", 150, 280)

// The following code showcases how to draw a line in the canvas 

ctx.moveTo(100, 300); // we specify first the "borders", the position where inside we will draw our line
ctx.lineTo(200, 300); // this one says define the line from the potition 200 until 300 and then call the stroke method to actually draw the line.
ctx.stroke(); // this one actually draws the line to the canvas

// specifying the color that we want to draw instead of using the default (black)

ctx.fillStyle = "#efa556";

// drawing a rectangle

ctx.fillRect(300, 400, 150, 50); // 4 arguments, first 2 = position of the recangle , next 2 are the width, height of the rectangle.