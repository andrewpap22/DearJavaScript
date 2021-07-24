let ctx = document.getElementById("ctx").getContext("2d");

// setting the width and the height as variables inside our js so we don't have to access them from the canvas element each time that we might need them

let WIDTH = 500;
let HEIGHT = 500;

ctx.font = "20px Calibri";

// Setting our snake, food objects

let snakeBody = {
  width: 20,
  height: 20,
  color: "green"
};

let food = {
  width: 20,
  height: 20,
  color: "purple"
};

// those 2 will be needed to contain all the snake bodies, foods

let snakeList;
let foodList;

// the following will determine where the snake will move to

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

// the following functions will be used to draw each of the snake "bodies" i.e. each of the squares that make up the snake's body and our food

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

let drawFood = function (f, i) {
    ctx.save();

    ctx.fillStyle = food.color;
    ctx.fillRect(f.x, f.y, food.width, food.height);

    ctx.restore();
};

// entry point function of our game

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
  direction = 99;

  snakeList.forEach(drawSnake);
};

// start our little game

startGame();