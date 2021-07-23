# This will be a sub-journey into learning Javascript. 

> In particular this will be a game development journey in the browser using JavaScript! 

## Intro to canvas 

 - But what is a canvas? 

Well we can think of it as some sort of a placeholder where we can draw something. 
So in HTML, canvas is an element which has a height and a width and inside that element we can draw anything we like. We can draw a rectangle a square, or whatever geometry we would like to. 

Whatever we draw inside the borders of that canvas ( remember: width, height ) we can access it only inside there and not outside of it. 

### Defining a canvas element 

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">

    <link rel="stylesheet" href="styles.css">
    <title>Canvas Intro</title>
</head>
<body>
    <canvas height="500" width="500" style="border: 2px solid #000000;" id="ctx"></canvas>

    <script src="./app.js"></script>
</body>
</html>
```

After defining the canvas element we have to select it inside our javascript file and specify it's context to be 2 Dimensional. Later on we might try some 3D rendering in the browser as well, but for now it will be 2D and we should specify that for our drawing canvas. 

```javascript
// Selecting our canvas element and specifying it to be 2D context and not 3D

let ctx = document.getElementById("ctx").getContext("2d");

/** Check more on Canvas drawing inside the app.js file of this section
 * path: ./canvas/app.js
*/
```

## Canvas State 

So, Canvas State is an important topic but really simple. 
Let's see the following example: 

```javascript
// Let's say we have our ctx canvas from above still selected and then we simply draw a text to it 

ctx.fillText("Sample Text", 150, 200);

// remember that the default color while drawing is black 
// now let's change it and draw something else, 

ctx.fillStyle = "red";
ctx.fillRect(200, 200, 100, 100); //draw a red rectangle at the potition x = 200, y = 200 with 100px width, height

// draw another sample text

ctx.fillText("Some more text", 200, 400);
```

Reading the above code one would think that The `Sample Text` would be black, then our rectangle would be red and then our `Some more text` would be black again. 
But that's not the case. The `Some more text` will be drawn as red color. The reason for that is, that you have to remember that our `ctx` object is simply a javacript object, and by modifying one of it's properties and in our case the `fillStyle` property to red, it will remain as is, and whatever we draw from that point and on will be drawn with a red color. 

Now, remember that we where talking about something called a `Canvas State`. Basically we can call a method called `save()` and then a method called `restore()` and what these 2 methods do is simply save the state of the canvas at a particular point that we select and then later on, at whatever point we want to we can restore that saved state. For example, we can call our save method before setting the canvas drawing color to red and that saved state will hold the default color and that was black. So if we restore that state at the point where we draw the `Some more text` text, then it would be drawn black and not red. 

And that's all, simply we save a state of the canvas, i.e. our ctx object with all it's modified, default properties up to a point that we select, and then if we make changes later on but we want to revert back to that saved state later on we can restore that state instead of chaning back all the properties that we want of our canvas object. 

So the code to make the `Some more text` be drawn as black instead of red using the canvas state would look like this: 

```javascript

ctx.fillText("Sample Text", 150, 200);

ctx.save(); // Saving the state of the canvas to this point, with it's drawing color being the default, i.e. black

ctx.fillStyle = "red"; // changin the style property to red
ctx.fillRect(200, 200, 100, 100); // the rectangle will be drawin as red

ctx.restore(); // restoring the saved state of the canvas so the below text will be drawn as black instead of red

ctx.fillText("Some more text", 200, 400);
```