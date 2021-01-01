/* So what if statement does is: Run code if a give condition is true. So the It's true will be printed to the console if the condition inside the if statement is true. And if it's not then the code inside it's brackets will not be executed. */

if (1 === 1)
{
  console.log("It's true!");
}

// another example: 

let rating = 22; 

if (rating === 3)
{
  // this piece of code will not be executed because the condition is false.
  console.log("You're a superstar!");
}

// another example: 

let num = 37; 

// checking if the number is odd. 
if (num % 2 !== 0)
{
  /* if the remainder of the number divided by 2 is not equal to 0, then the division is not perfect and thus the number is odd. If it was equal to 0 then the division would be perfect and the number would be even. And that's how you check for odd or even numbers! */
  console.log("ODD NUMBER");
}

/* 
 * Now let's introduce else if statement. 
 * Think of it as: (If not the first thing, maybe the other thing?)
 * We can have as many else if as we want.
 * 
 * We also have the else statement
 * Think of it as, (if nothing else was true, the do this.)
*/

// example

let rating2 = 2;

if (rating2 === 3)
{
  console.log("You're a superstar!");
}
else if (rating2 === 2)
{
  console.log("meets the expectations of the comparison");
}
else if (rating2 === 5)
{
  console.log("this one will not be printed");
}
else
{
  console.log("nothing from the above was true so this one will be printed.");
}

// example 2

let highScore = 1430;
let userScore = 1200; 

if (userScore >= highScore)
{
  console.log(`Congrats, you have the new high score of ${userScore}`);
}
else
{
  console.log(`Good Game. Your score of ${userScore} did not beat the high score of ${highScore}`);
}

/*
 * Next thing: Nesting conditionals: 
 * We can nest conditionals inside conditionals
*/

// example

let password = "cat dog";
if (password.length >= 6)
{
  if (password.indexOf(' ') !== -1)
  {
    console.log("password cannot include spaces");
  }
  else
  {
    console.log("Valid password!!");
  }
}
else
{
  console.log("password too short!");
}

/*
 * Truthy & falsy values
 * All values have an inherent truthy or falsy boolean value. 
 * Falsy values: 
 * false
 * "" (empty string)
 * null
 * undefined
 * NaN
 * Everything else is truthy 
 */

// example

let mystery = 5; 

if (mystery)
{
  console.log("Truthy"); // this will get printed.
}
else
{
  console.log("Falsy");
}

let mystery2 = (0 / 0); // 0 / 0 is equal to NaN 

if (mystery)
{
  console.log("Truthy");
}
else
{
  console.log("Falsy"); // this will get printed.
}

// a more realistic example

let loggedInUser = null;

if (loggedInUser)
{
  console.log("you are logged in!");
}
else
{
  console.log("please log in!");
}

/* 
 * LOGICAL OPERATORS
 * && (and)
 * || (or)
 * ! (not)
 * 
 * AND (&&) Both sides must be true in order for the whole thing to be true 
 * 
 * OR (||) if one side is true, the whole thing is true.
 * 
 * NOT (!) !expression returns true if the expression is false.
 */

// example

let password2 = 'taco tuesday';

/* if the length of the password is greater or equal to 6 and there are no spaces inside the password, then the password is valid, else it's invalid. (Remember indexOf() returns -1 if the given substring we're searching for in a string is not included in that string) */
if (password2.length >= 6 && password.indexOf(" ") === -1)
{
  console.log("valid password");
}
else
{
  console.log("invalid password");
}

// example 2

let age = 76;

// for values of age from 6 to 64 else block will be executed.
if (age < 6 || age >= 65)
{
  console.log("you get in for free!");
}
else
{
  console.log("That will be 10$ please.");
} 

// example 3 

// if there isn't a logged in user: 

let loggedInUser2; // this is undefined and undefined is a falsy value. 

// so here we're basically doing not false (!false) and it gives us true, thus the if block will get executed.
if (!loggedInUser2)
{
  console.log("please log in");
}

/*
 * Operator precedence
 * NOT (!) has higher precedence than && and ||, 
 * && has higher precedence than ||
 * Remember that by using parentheses () the higher precedence goes to whatever is inside the parenthesis.
 */


/*
 * The switch statement 
 * The if else alternative
*/

// Let's say we wanted to print what day it is based on the value of a variable

// 1. implementation with if else.

let day = 3; 

if (day === 1)
{
  console.log("monday");
}
else if (day === 2)
{
  console.log("tuesday");
}
else if (day === 3)
{
  console.log("wednesday");
}
else if (day === 4)
{
  console.log("thursday");
}
else if (day === 5)
{
  console.log("friday");
}
else if (day === 6)
{
  console.log("saturday");
}
else if (day === 7)
{
  console.log("sunday");
}
else 
{
  console.log("invalid day");
}

// 2. implementation with switch case 

switch(day)
{
  case 1: 
    console.log("monday");
    break;
  case 2:
    console.log("tuesday");
    break;
  case 3: // day is equal to 3
    console.log("wednesday"); // this will get printed.
    break; // and we're going to break out of the switch statements.
  case 4:
    console.log("thursday");
    break;
  case 5: 
    console.log("friday");
    break;
  case 6:
    console.log("saturday");
    break;
  case 7:
    console.log("sunday");
    break;
  default:
    console.log("invalid day");
}

// we can 'stack' cases without using a break keyword so it will run the code below other cases as well.

// example: 

let emoji = "sad face";

switch (emoji)
{
  case "sad face": // so this is  a match!
  // there is no brake statement here.
  case "happy face": // so this one will run as well.
    console.log("yellow"); // and this will get printed.
    break;
  case "eggplant":
    console.log("purple");
    break;
  case "heart":
  case "lips":
    console.log("red");
    break;
}


/*
 * Ternary operator
 * (a shortcut for an if - else statement)
 * condition ? expIfTrue : expIfFalse 
 */

// example 

let number = 22;

if (number === 22)
{
  console.log("lucky!");
}
else
{
  console.log("unlucky!");
}

// we can re-write the above if else as follows:

(number === 2) ? console.log("lucky!") : console.log("unlucky!"); 

// we can also use the ternary operator to assign a value to a variable.

/*
 * let's say we have a chat app and we want to have a status icon where it is green when the user is online and red when offline
 */

let status = "offline";

// one way of doing it:
let color;
if (status === "offline")
{
  color = "red";
}
else 
{
  color = "green";
}

// another way of doing the same thing:

let status2 = "online";
let color2 = status2 === "online" ? "green" : "red";