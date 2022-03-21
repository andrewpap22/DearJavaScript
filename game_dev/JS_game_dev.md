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

> Next up we're going to build our very first snake game in 🍦 JavaScript and render it in HTML5 canvas element!

## 🐍 Snake Game! 

So first of all we gotta 'initialize' our project and the structure for this one will be pretty simple, we'll have a directory called: `snake_game` and inside that directory we'll have 3 files, 
 1. index.html
 2. app.js
 3. styles.css

The initial code for the setup of our little 🐍 game of the above 3 mentioned files, as we saw in the introduction to canvas will look like the following: 

`index.html`

```html
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Snake Game</title>

    <!-- Favicon -->
    <link href="data:image/x-icon;base64,AAABAAEAEBAQAAEABAAoAQAAFgAAACgAAAAQAAAAIAAAAAEABAAAAAAAgAAAAAAAAAAAAAAAEAAAAAAAAAD9/f0AAAAAAP///wDx8fEA+vr6APz8/ADu7u4A/v7+APDw8AD5+fkA8vLyAAwM6AD7+/sAAAAAAAAAAAAAAAAAEREREREREREREbuxG7sRERERsRuxGxEREREbsRuxERERZxERERFAEREmEREREagREREYK7YhERERESUSYWIRERFnaBYhJkAREVFZNTU1GhEREcERERwRERERG3Z2sRERERG7u7u7EREREbu7u7sRERERG7u7sRERERERERERERHxjwAA4AcAAOAHAADAAwAAgAEAAIABAADAAwAAwAMAAIABAACAAQAAwAMAAMADAADgBwAA4AcAAPAPAAD4HwAA" rel="icon" type="image/x-icon" />

    <link rel="stylesheet" href="./styles.css">
</head>
<body>
    <canvas height="500" width="500" id="ctx"></canvas>
    
    <script src="./app.js"></script>
</body>
</html>
```

`styles.css`

```css
#ctx {
    border: 2px solid #000000;
}
```

`app.js`

```javascript
let ctx = document.getElementById("ctx").getContext("2d");

ctx.fillText("checking if your canvas is working properly", 150, 200);
```

> Next up we're going to declare the objects of our game

### Declaring the objects of the 🐍 game.

So, next, adding up to our `app.js` file, we're going to declare our game objects as well as some needed variables throughout our game. 

```javascript
let ctx = document.getElementById("ctx").getContext("2d");

// setting the width and the height as variables inside our js so we don't have to access them from the canvas element each time that we might need them

let WIDTH = 500;
let HEIGHT = 500;

ctx.font = "20px Calibri";

// Setting our snake, food objects

let snakeBody = {
    width: 20,
    height: 20
};

let food = {
    width: 20,
    height: 20
}
```

`Explanations:`

 1. Why do we declare our width and height variables inside our javascript file, when we already got em in our canvas element? 

The reason for that is that later on we might want to access many times inside our game those 2 variables, so instead of getting them from our canvas element, we simply do re-create them as variables inside our `.js` file since it is more convenient. 

 2. Why the called our snake object snakeBody and not simply snake and why do both our objects have set width and height but not set x,y positions on our canvas? 

The reason we called our snakeBody object as is, is because our snake will not be a huge rectangle initily but instead it will be a little square and each time it eats a food it will grow +1 square. 
So our snake as it grows up, will be a sum of multiple squares, instead of 1 big rectangle. 

Usually we want to keep our stable properties, i.e. properties that are not going to change throughout the game (think constants) inside our objects, and the actualy stuff that are going to change throughout the game outside of them. For example the x,y coordinates for the food will change every time the snake eats one food, because it will spawn on a random place (i.e. random x,y) on our canvas. 

And finally we simply change our font size and the font family for the score that we're going to keep track of as the snake eats the food.

> moving on to initializing our snake, food objects. 

So, next up in our `app.js` file, we did create our `startGame` function which will be our entry point in our game. Usually in this function we initialize all of our variables that we need for our game and it's usually the one function that we want to call each time that we want to start, restart our game from the beggining. 

The code up until now with the added stuff looks like the following: 

```javascript
let ctx = document.getElementById("ctx").getContext("2d");

// setting the width and the height as variables inside our js so we don't have to access them from the canvas element each time that we might need them

let WIDTH = 500;
let HEIGHT = 500;

ctx.font = "20px Calibri";

// Setting our snake, food objects

let snakeBody = {
    width: 20,
    height: 20
};

let food = {
    width: 20,
    height: 20
}

// those 2 will be needed to contain all the snake bodies, foods
let snakeList;
let foodList; 

// entry point function of our game 

startGame = function () {
  
  // initializing our snake 
  snakeList = [
      {
        x: 220, y:200 // position of the 1st part of the snake body
      },
      {
        x: 210, y:200 // of the 2nd one
      },
      {
        x: 200, y:200 // of the 3rd one
      }            
  ];
  

  // We're not going to set an initial fixed position for the food, because we want to spawn randomly in our map
  foodList = []; 
};

```

Hopefully the comments in the code do help with the understanding of how the code itself works a bit better, but the important thing to keep in mind here is that we
initialized our snake to have a 3 square body long being spawned when we start the game at the desired specific x,y coordinates on our canvas. 
We also kept the foodList empty, because we will later on implement a function to make it spawn randomly each time we start, re-start our game, or each time that the snake eats the food.

> next up we will draw our snake to the canvas

## Drawing the 🐍

So, the following additional function in our code will be used to draw our little snake on our canvas. 

```javascript

let drawSnake = function (sb, i) {
    ctx.save();

    if (i === 0) {
        ctx.fillStyle = "brown"; // will make the snake's head brown
    } else {
        ctx.fillStyle = snakeBody.color; // will make the rest of the body green
    } 

    ctx.fillRect(sb.x, sb.y, snakeBody.width, snakeBody.height);

    ctx.restore();
};

```

`Explanations:`

First of all, remember from our cavas state section, we learned that every time we want to make modifications to our canvas object it is best coding practise to make it in between the `save()`, `restore()` methods.
Next, we use the `if else` statement to draw differently the head of the snake and the rest of it's body. The way this works is, that we iterate with the `snakeList` and we store on the `i` parameter it's first object,
which we assumed to be the head of the snake. And then similarly we do draw with the `fillRect()` method as we've seen before our whole snake based on it's x,y coordinates that we have set on our `snakeList` variable. 

So, our `startGame` function now looks like this: 

```javascript
let startGame = function () {
  // initializing our snake
  snakeList = [
    {
      x: 220,
      y: 200, // position of the 1st part of the snake body i.e. it's head
    },
    {
      x: 210,
      y: 200, // of the 2nd one
    },
    {
      x: 200,
      y: 200, // of the 3rd one
    },
  ];

  // We're not going to set an initial fixed position for the food, because we want to spawn randomly in our map
  foodList = [];

  snakeList.forEach(drawSnake);
};

// start the game 

startGame();
```

After calling the `startGame()` function at the end of the file we should see our snake, be drawn on the canvas

> next up we're going to set the user inputs

## ⌨️ User inputs

After drawing our snake we might want to be able to move it right? So that the user can use his keyboard ⬆️⬇️⬅️➡️ keys or his `WASD` keys to control the snake. 

The following code does exactly that: 

```javascript

let direction;

/** The following function will monitor what button the user presses on his keyboard and then, 
 * we will map the WASD, arrow keys to be able to get used to control the movement of our snake. 
 * The mapping is the following: 
 * 
 * 0 - snake will go left
 * 1 - snake will go up 
 * 2 - snake will go right
 * 3 - snake will go down
 */

document.onkeydown = function (event) {

    // left arrow key
    if (event.key === "ArrowLeft") {
        direction = 0;
        console.log("0");
    } 
    // up arrow key
    else if (event.key === "ArrowUp") {
        direction = 1;
        console.log("1");
    }
    // right arrow key
    else if (event.key === "ArrowRight") {
        direction = 2;
        console.log("2");
    }
    // down arrow key
    else if (event.key === "ArrowDown") {
        direction = 3;
        console.log("3");
    }

    // a,A
    if (event.key === "a" || "A") {
        direction = 0;
        console.log("0");
    } 
    // w,W
    else if (event.key === "w" || "W") {
        direction = 1;
        console.log("1");
    }
    // d,D
    else if (event.key === "d" || "D") {
        direction = 2;
        console.log("2");
    }
    // s,S
    else if (event.key === "s" || "S") {
        direction = 3;
        console.log("3");
    }
};

```

I think the code itself here is pretty self explanatory but in case you need more information (probably about event handling and DOM manipulation in JavaScript) then a really good resource is the following: 
[Events](https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Building_blocks/Events)

> next up we're going to update the snake's position based on the user's input

## Update The 🐍 Position

So, we keep adding functions to our app.js file to add extra functionality for our game. For really large applications best practise would be to split our different functions in many JavaScript files and import them in a `main` JavaScript file so that the code becomes more modular and readable. But since this is just a simple snake game for simplicity purposes we will keep everything into our initial `app.js` file, but feel free to split it into multiple ones if you wish to do so. 

So our new function that updates the position of our snake based on the key that the user has pressed is the following: 

```javascript

// update the potition of the snake based on the user's input.

let updateSnakeList = function () {
    for (let i = snakeList.length - 1; i >= 0; i--) {
        // check the direction of the snake ( left, right, top, down )
        if (direction === 0) {
            if (i === 0) {
                snakeList[i].x = snakeList[i].x - 5;
            }
            else {
                snakeList[i].x = snakeList[i-1].x;
                snakeList[i].y = snakeList[i-1].y;
            }
        } 
        else if (direction === 1) {
            if (i === 0) {
                snakeList[i].y = snakeList[i].y - 5;
            }
            else {
                snakeList[i].x = snakeList[i-1].x;
                snakeList[i].y = snakeList[i-1].y;
            }
        }
        else if (direction === 2) {
            if (i === 0) {
                snakeList[i].x = snakeList[i].x + 5;
            }
            else {
                snakeList[i].x = snakeList[i-1].x;
                snakeList[i].y = snakeList[i-1].y;
            }
        }
        else if (direction === 3) {
            if (i === 0) {
                snakeList[i].y = snakeList[i].y + 5;
            }
            else {
                snakeList[i].x = snakeList[i-1].x;
                snakeList[i].y = snakeList[i-1].y;
            }
        }
    };
};

```

`Explanations:`

So, first of all you will notice that we are implementing a for loop for our `snakeList` but we are iterating backwards. Why is that?
 