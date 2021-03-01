# JavaScript Programming Language 

> This one will be a JavaScript `Notebook` covering some basic features of the JavaScript programming language and some more **advanced** ones.
 
 [![GitHub license](https://img.shields.io/github/license/mashape/apistatus.svg?style=flat-square)](http://goldsborough.mit-license.org)
 [![Open Source](https://badges.frapsoft.com/os/v1/open-source.svg?v=103)](https://opensource.org/)

# Terminology 
## What's the difference???

 - `JAVASCRIPT`
 - `ECMASCRIPT`
 - `ES2018`
 - `ES2017`
 - `ES2016`
 - `ES2015`
 - `ES5?` `ES6?` 

JavaScript is implemented by all the different browsers out there. And it's up to those browsers to implement new features of the language. <br>
So, the way it all works is first of all based on [ECMA](https://www.ecma-international.org/), which is an organization that creates many different standards for technologies. <br>

 - Now, what about ECMAScript inside there? 

Basically ECMAScript is a `document that describes how a language should work`, but it is not itself a language that we can download and use. In the end it's essentially a set of rules that a browser like Safari should follow and implement those rules into the JavaScript programming language.<br>
So, all the above mentioned acronyms basically boil down into the ECMAScript specification document and all are different versions / releases of that document.

 - The question is: How do I know which features of JavaScript I can use?

Well there is this [site](https://caniuse.com/), in which we can type in for example: `arrow functions` and it will inform us about which browsers support arrow functions. <br>

 <hr>

# 🧱 JS building blocks

## Primitive Types

 - Number
 - String
 - Boolean
 - Null
 - Undefined 
 - Symbol
 - BigInt

## 🔢 Numbers in JS 

 - JavaScript has ONE Number type
 - Positive numbers,
 - Negative numbers,
 - Whole number (integers)!
 - Decimal numbers.

```javascript
// creates a comment, which JS will ignore 
/*
 * This would be a multiline comment in JS.
 * In JS we have all the basic math operation you would expect...
*/
50 + 5 // addition 
90 - 1 // subtraction
11111 * 7 // multiplication
400 / 5 // division
25 % 2 // modulo 
2 ** 3 // exponential operator
```

<hr>

**NaN** Not A Number. <br>
NaN is a numeric value that represents something that is not a number.

```javascript
0 / 0 // We'll get NaN
1 + NaN // We'll get Nan
```

<hr>

# 📦 Variables

> Variables are like `labeled jars` for a value in JavaScript
> We can store a value and give it a name, so that we can...
 
 - recall it
 - use it
 - or change it later on.

## 🗒️ Basic Syntax 

```javascript
let someName = value;

/*
 * In JavaScript as the name of the language itself shows,
 * there is a convention to naming the variables in camelCase 
 * i.e. the casing of the 1st word is all lower and if a second word is to come in it's 1st letter goes Uppercase followed by all lowercase 
 * Example: camelCase
*/
```

### Unary Operators 

> Unary Operators are operators where there is only one side.

For example: 

```javascript
let counter = 0;

counter++; // ++ is a Unary Operator 

// these 2 expressions do not invoke Unary Operators because they have 2 sides. (left and right)
counter = counter + 1; 
counter += 1; 
```

## 🛑 CONST 

> `const` works just like `let`, except you **CANNOT** change the value

```javascript
const hens = 4;
hens = 20; // [!] Error
```

## Var 

> Before let & const, var was the only way of declaring a variable. These Days, there isn't really a reason to use it.

```javascript
var tripDistance = 7.4;
```

<hr>

## Booleans 0️⃣1️⃣

> Booleans are simply `True` or `False` values, Yes or No. 1 or 0.

```javascript
let isLoggedIn = true;

let gameOver = false;

const isWaterWet = true;
```

<hr>

# Variables CAN change type! (in JS)

```javascript
let numDonuts = 12; // it's a Number

numDonuts = false; // Now it's a Boolean

numDonuts = 22; // back to number :)
```

> You probably wouldn't change a number to a boolean, but you can!

<hr>

# 📜 Strings

In JavaScript string are pieces of text, or string of characters. 

> We wrap then in quotes

```javascript
let firstName = "Ziggy"; // double quotes work

let msg = "Please do not feed the chimps!";

let animal = 'Fox' // single quotes work as well

let bad = "this is wrong'; // [!] Error

let quotesInsideQuotes = "We can do it 'like this'!"; 

let quotesInsideQuotesVol2 = 'Or like "this"!';
```

> Whether you use single or double quotes, just make sure you stay consistent.

### Concatenating Strings (in JS)

```javascript
let firstName = "Matsi";

let lastName = " Matsi";

let fullName = firstName + lastName; // Matsi Matsi

let test = "hi" + 1; // will turn 1 into string and result into: hi1
```

### Strings are Indexed! 

|C|H|I|C|K|E|N|
|-|-|-|-|-|-|-|
|0|1|2|3|4|5|6|

> Each character has a corresponding index (a positional number)

 - We can get the length of the string by using the `.length` property. 

 ```javascript
 "hello".length // 5
 ```

 Let's now say we have the following string: 

 ```javascript
 let myString = "My beautiful string.";
 ```

 We can do the following things: 

 ```javascript
 // 1. Get the length of the string
 myString.length;

 // 2. Get the 1st character of the string
 myString[0];

 // 3. Get the 2nd character of the string and so on...
 myString[1];

 // 4. Get the LAST character of the string
 myString[myString.length - 1];
 ```

 > `Note:` in javaScript you can NOT change a single character in a string. The strings in javaScript are immutable. There are other ways dealing with this as we'll see later on.

## String Methods 

Strings come with a set of built-in methods, which are actions that can be performed on or with that particular string.

We can do things like...
 - Searching within a string
 - Replacing parts of a string
 - Changing case (upper/lower)

So, there are quite a few built in methods that we can perform on strings in JS and we can have a look here ~> [info](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String) about them. 

The syntax looks like this: 

```javascript
str.method();
```

Example: 

```javascript
let msg = "you are so grounded mr."

msg.toUpperCase(); // Output: YOU ARE SO GROUNDED MR.
```

Remember though that strings in javaScript are immutable so if we check the value of the msg variable it will be the string "you are so grounded mr." all lowercase, even though we used the toUpperCase() method. <br>
If we want to save the upperCase string we'll have to save it. 

```javascript
let upperCaseMsg = msg.toUpperCase();
```

## String methods with arguments

> Some methods accept `arguments` that modify their behavior. We pass these arguments inside of the parentheses. `thing.method(arg)`

 - Example1: The **indexOf** method.

The method `indexOf` will tell you where in a string a given substring occurs. 

```javascript
let tvShow = 'catdog';

tvShow.indexOf('cat'); // 0
tvShow.indexOf('dog'); // 3
tvShow.indexOf('z'); // -1 (not found)
```

- Example2: The **slice** method.

It takes slices of an existing string and it gives you a piece of it. 

```javascript
let str = "supercalifragilisticexpialidocious";

str.slice(0,5); // "super"

str.slice(5); // "califragilisticexpialidocious"
```

- Example3: The **replace** method.

It does what it's name suggests. You specify what you want to replace with a selected string.

```javascript
let annoyingLaugh = "teehee so funny! teehee!";

annoyingLaugh.replace("teehee", "haha"); // "haha so funny! teehee!"
// [!] Notice that it only replaces the first instance.
```

## ❓Quiz Time! 

 - *What is the value of `age`?*

```javascript
const age = "5" + "4";
```

 - *What does this evaluate to?*

```javascript
"pecan pie"[7];
```

 - *What does this evaluate to?*

```javascript
"PUP"[3];
```

 - *What is the value of song?*

```javascript
let song = "london calling";
song.toUpperCase();
```

 - *What is the value of the cleanedInput variable?*

```javascript
let userInput = "  TODD@gmail.com";
let cleanedInput = userInput.trim().toLowerCase();
```

 - *What is the value of index?*

```javascript
let park = 'Yellowstone';
const index = park.indexOf('Stone');
```

 - *What is the value of index?*

```javascript
let yell = "GO AWAY!!!";
let index = yell.indexOf('!');
```

 - *What does this evaluate to?*

```javascript
"GARBAGE!".slice(2).replace("B", '');
```

## String Escapes 

 1. \n - newline
 2. \' - single quote
 3. \" - double quote
 4. \\ - backslash

Let's say I want to have a single quote inside a string in JS. 
For example: 

```javascript
'he said I aint happy' // If I go and add a ' at ain't it will not work. 

// to make it work properly we have to use the single quote character escape like this: 
'he said I ain\'t happy' // and we'll get our result as expected.
```

We can find more information about escape characters on the mdn docs ~> [link](https://developer.cdn.mozilla.net/nl/docs/Web/JavaScript/Reference/Global_Objects/String#Escape_notation)


## String Template Literals 

Template literals are strings that allow embedded expressions, which will be evaluated and then turned into a resulting string. 

 - Example: 

```javascript
`I counted ${3 + 4} sheep`; // Output: "I counted 7 sheep"
```
‼️ **IMPORTANT NOTICE**<br>
**In string template Literals we use BACK-TICKS `` and NOT SINGLE QUOTES**
 - <p>`I am a template literal`</p>

 - *The back-tick key is usually above the tab key*

 - Another example: 

```javascript
let userName = "Ziggy31";
`Welcome back, ${userName}` // "Welcome back, Ziggy31"

`GAME OVER ${userName.toUpperCase()}` // "GAME OVER ZIGGY31"
```

 - Yet another example: 

```javascript
let item = "cucumbers;
let price = 1.99;
let quantity = 4;

`You bought ${quantity} ${item}, total price is: $${price * quantity}`; // Output: "You bought 4 cucumbers, total price is: $7.96"
```

## Null & Undefined

 - `Null`
  - Intentional absence of any value
  - Must be assigned

 - `Undefined`
  - Variables that do not have an assigned value are undefined.

Example:

```javascript
// No one is logged in yet...
let loggedInUser = null; // value is explicitly nothing.

// A user logs in...
loggedInUser = "Alan Rickman";
```

```javascript
let bla; 
// if we console.log bla we will get that it is undefined.
```

Both null and undefined kinda represent the same thing. The difference is that when we declare a variable and we don't initialize it, it's value is undefined, whereas with the null, we do it on purpose. We set a variable to null (i.e. the variables equals nothing) so that we know it's an 'empty' variable that we can use for whatever purposes we would like to, later on...

## The Math Object. 

Contains properties and methods for mathematical constants and functions.

 - Example: 

Let's say we want to generate random numbers between 1 and 10

```javascript
const step1 = Math.random();
// 0.5912342314214210214
const step2 = step1 * 10;
// 5.5912342314214210214
const step3 = Math.floor(step2);
// 5
const step4 = step3 + 1;
// 6

/* All together in 1 line */

const random = Math.floor(Math.random() * 10) + 1;
```

## Type of operator

```javascript
typeof "hello"; // string
typeof 2; // number
typeof true; // boolean
```

## parseInt & parseFloat

Use to parse strings into numbers, but watch out for NaN! 

```javascript
parseInt("24"); // 24
parseInt("24,1234"); // 24
parseInt("24dayslater"); // 24

parseFloat("24.987") // 24.987
parseFloat("7") // 7
parseFloat("I ate 3 shrimps") // NaN (not a number)
```

# Boolean Logic

## Comparisons 

### Comparison operators 

```javascript
> // greater than
< // smaller than
>= // greater or equal to
<= // smaller or equal to
== // equal to
!= // not equal to
=== // strict equality
!== // strict non-equality
```

 - **`All comparison operators return a boolean in JavaScript (true or false)`**

For example: 

```javascript
-2 > 1 // false
10 < 999 // true
"hello".length >= "hello!".length // false
```

We can also compare strings with the comparison operators. The thing to note here is that, we're not comparing in alphabetical order, but we're comparing the corresponding Unicode values of each and every character we're trying to compare. More information on what are the Unicode values of characters / strings can be found [here!](https://en.wikipedia.org/wiki/Unicode)

### Double equals (==) VS triple equals (===)

#### Double equals (==)

> Usually referred to as the equality operator. 
- It checks for equality of value but not equality of type.
- It coerces both values to the same type and then compares them. 
- This can lead to some unexpected results! 

Examples:
---------

```javascript
4 == 4 // true
'A' == 'A' // true 
false == false // true 

7 == '7' // true
```

The last one, compares the integer 7 to the character '7' and it returns us true. But these 2 are obviously not equal and the programmer didn't want them to be true as well. But remember! Double equals will not see the types of comparison and it will try to convert both sides of comparison to the same type and thus return us true in that particular case.

- Some more examples: 

```javascript
0 == ""; // true

0 == false; // true 

null == undefined; // true
```

Now, why the 3 above comparisons are true? 
Because, javaScript behind the scenes will translate and consider the programmer when making the particular comparisons to have meant for example that when he compares 0 to false he actually translates in his mind 0 to be false as that's the case usually and that's what exactly javaScript is trying to do as well behind the scenes. Same goes for the other 2 comparisons, but this might not always be the case. Sometimes we might want 0 to mean the integer 0 and not false and that's exactly the reasons why we have and can use both of them as different things. So based on the above logic that's why is almost always 99% of the time better to use triple equals (===) and strict not equals as well (!==) and completely ignore == and != as we're mentioning below. 

### Triple equals (===)

Checks for equality of value AND the type. 

```javascript
5 === 5; // true
1 === 2; // false
2 === '2'; // false 
false === 0; // false
```

Same logic applies for != and !== 

```javascript
10 != '10'; // false (but probably we want true, 10 and '10' to be different things)

10 !== '10'; // true
```

> Rule of thumb: 99% of the time we're going and must use the triple equals === and the strict not equals !== operators. As mentioned above it's best practice to care about the type when doing comparisons. 

Why the above statement holds? 

- Example:

```javascript
// We have the following variable: 

let isTheUserLoggedIn = false; 

// Now we're comparing: 

isTheUserLoggedIn == false; // We're getting true

// Now let's say someone writes it this way: 

isTheUserLoggedIn = 0; 

// And then: 

isTheUserLoggedIn == false; // We're still getting true

// ??? 

/* As we saw earlier by assigning 0 to the particular variable it doesn't mean that we mean it to be false. We might, but we also might not. So what if we wanted to treat 0 as zero and not as false? JavaScript behind the scenes will try to translate on the double equality comparison the zero as false and that might not be exactly what we want to and thus result in unexpected behavior. That's why it's 99% better to use the strict comparison operators === and !== than the == and !=. */
```

## How to write javaScript code in a file and compile and execute it in the browser. 

So, we can't simply create a .js file for example app.js and write our code in there and throw it at our browser to compile and execute it. That's not how things will work. 

Browsers don't know what to do with plain .js files.
We have to first make an html file that links with a .js file, because browsers know how to render an html file and whatever else files are linked with that particular html file we're throwing to our browser. 

 - Example below: 

Consider the 2 below files, for example inside the same directory. 

1. index.html
2. app2.js

Pay attention inside the index.html file and you'll find the following line of code: `<script src="app2.js"></script>`. What this does is, it is linking the app2.js file with our index.html file and if we open our html file inside the browser we'll see an alert with a message, which is the exact message we wrote at our app2.js file and that indicates that everything works successfully and our browser has rendered our html file and compiled and run our app.js file. 
So that's the workaround of writing javascript scripts and 'throwing' 'em at our browsers. 
*You might also see that we have another script commented on our html file. Instead of creating an html file for each and every of our .js files we can simply swap the names of our .js files inside the script tag and compile each time a different js file inside the same html file.*

```html
<!-- file: index.html -->

<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My First JS Script</title>

  <!-- <script src="app.js"></script> -->
  <script src="app2.js"></script>
</head>
<body>
  
</body>
</html>
```

```javascript
/* file: app2.js */

alert("It's working!");
```

> So from now and on, we’ll be creating an html file and we’ll be linking that file with a script .js file so we can give it to our browser to compile and run it and test our code with it. 

**From here on I'll be writing the information about each and every topic of discussion on the corresponding .js files inside comments alongside the code for better understanding and I'll be providing the links for the specific files under the title of each and every topic.**

<hr>

## console.log() method

<ul>
  <li>
    <a href="https://github.com/andrewpap22/DearJavaScript/tree/master/first_JS_files">📁 first_JS_files</a>
    <ul>
      <li>
        <a href="https://github.com/andrewpap22/DearJavaScript/blob/master/first_JS_files/app.js">📄 app.js</a>
      </li>
    </ul>
  </li>
</ul>

# Boolean Logic

<ul>
  <li>
    <a href="https://github.com/andrewpap22/DearJavaScript/tree/master/Boolean_Logic">📁 Boolean_logic</a>
    <ul>
      <li>
        <a href="https://github.com/andrewpap22/DearJavaScript/blob/master/Boolean_Logic/app.js">📄 app.js</a>
      </li>
    </ul>
  </li>
</ul>

## ❓ Quiz 

> Go study the contents inside the app.js file of the Boolean logic section before trying to answer the below

```javascript
let x = 7; 

// what does this evaluate to?
x == 7 || x === 3 && x > 10;
```

More information on operator precedence can be found [here](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Operator_Precedence)

## Next Chapter: `Arrays!`

So Arrays are **ordered collections of values.** 
We can think of them as: 
 - List of comments on IG post.
 - Collection of levels in a game
 - Songs in a playlist
 - pills packed in many boxes in a row. 

So to create an array: 

```javascript
// To make an empty array
let students = [];

//An array of strings
let colors = ['red', 'orange', 'yellow'];

//An array of numbers
let lottoNums = [19, 22, 56, 12, 51];

// A mixed array
let stuff = [true, 68, 'cat', null];
```

> Remember that arrays are indexed! 

For example, let's say we have: 

```javascript
let colors = ["red", "blue", "green", "violet", "yellow"];
```

If we want to access the 1st element of the array we should do something like: 

```javascript
console.log(colors[0]); 

// the above line will print us ~> red

/*
 * Remember that arrays have a length property
 * So if we want to access the last element of the colors array we can do something like:
*/

console.log(colors[colors.length - 1])
```

**Why did we do -1 in the above line of code?**

> The .length property gives us the number of elements that the array contains, so in our case 5, but remember that arrays start indexing from 0 so if we did: **console.log(colors[5])** we would be out of bounds of the array. So to get the last element of the array we should always do the .length property - 1.

## Modifying Arrays

```javascript
let colors = ["rad", "orange", "red", "blue", "green"];

colors[0] = "red";

colors[2] = "yellow";
colors[3] = "green";

colors[5]; // undefined (our array has 5 elements so the indexes are 0-4)
colors[5] = "violet";

// after adding the violet to the 5th position of the array (6th element) our array is modified as: 
// ["red", "orange", "yellow", "green", "blue", "violet"]
```

Pay your attention in the example above. We has an array of 5 elements i.e. 5 indices 0-4 and we added another element at the end of the array by typing: **colors[5] = "violet";**.
But in that case we simply counted that we had 5 elements so 0-4 and then we simply manually typed the number 5 index and that resulted in adding another element after the last element of the array. 
But what if we don't have a way to count the elements of the array? 
Say for example that we get our data from a user, or from a database, how can we then add a new element at the end of the array? 
Well... we can use once again the **.length** property! 

```javascript
colors[colors.length] = "purple"; 
```

> Notice that we don't have to do a -1 here because we simply want to add a new element **after** the currently last item of the array, so it becomes our new last element. 

## Array Methods

 - **Push**, add to the end
 - **Pop**, remove from end
 - **Shift**, remove from start
 - **Unshift**, add to start
 - **Concat**, merge arrays
 - **includes**, look for a value
 - **indexOf**, just like str.indexOf
 - **join**, creates a string from array
 - **reverse**, reverses an array
 - **slice**, copy portion of an array
 - **splice**, remove / replace elements
 - **sort**,  sorts an array

### Examples

```javascript
/*
 * Go have a look on the app.js file of this module.
 * Arrays_and_Objects directory
*/
```
> We can have more information about all the methods on the MDN documentation

[**INFO**](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array)

❗️❗️ **We can store arrays inside other arrays** ❗️❗️

```javascript
const colors = [
  ["red", "pink"],
  ["another element", "yet another element"],
  ["we keep nesting arrays inside the colors array"],
  ["you get the point now i think...", "qwerty"],
  22,
  true,
  "a simple string",
  ["a string as an element inside an array which is inside another array"]
];
```

How do we access an element of an array inside another array? 

```javascript
// Let's say on the colors array we want to access the element ~> yet another element
// First we see that it is a string inside an array which array is a second element of our colors array. 
// So first to access that 2nd element we can do: 

console.log(colors[1]); // will print: ["another element", "yet another element"]

// Now to access the yet another element which is the second element of that array we have to do: 
console.log(colors[1][1]) // this will print: yet another element.

/*
 * and if we want to change the string: "yet another element" we can do:
*/
colors[1][1] = "we changed the yet another element.";

console.log(colors[1][1]); // this will now print: we changed the yet another element instead of: yet another element
```

A good reason to have nested arrays is when you want to display a grid for example, like a chess grid, or something else similar. 

Let's say we have the below tic - tac - toe picture 

  o |    | x
----|----|----
    |  x | o
----|----|----
  x |  o |

We can describe the above picture with nested arrays like following: 

```javascript
const board = [
  ['o', null, 'x'],
  [null, 'x', 'o'],
  ['x', 'o', null]
];
```

And now let's go to...

# Objects ❗️

An object allows us to store data where we can associate things and group pieces of data together but rather than simply ordering data, based of an index i.e the 0th, the 1st, the 2nd and so on... (like an array)
We can instead specify labels. 
For example totalSteps we made equals 1234. 
So we have labels and values for the labels.

```javascript
const fitBitData = {
  totalSteps : 1324,
  totalMiles : 222,
  avgCalorieBurn : 12341324, 
  WorkoutsThisWeek : "5 of 7",
  avgGoodSleep : "2:13"
};
```

Basically Objects at a high level are: 

 - Objects are collections of properties. 
 - Properties are a key - value pair. 
 - Rather than accessing data using an index, we use custom keys.

How can we access data inside an object? 

 - Using the dot . syntax 

```javascript
// Let's say we have the fitBitData object we created above and we want to access the value of the totalMiles

console.log(fitBitData.totalMiles); // will print: 222
```

> Keys in javaScript objects are automatically converted to strings!!!

We also have another way to access data from objects simply because of the above statement! 
Example: 

```javascript
const palette = {
  red : "#eb4d4b",
  yellow : "#f9ca24",
  blue : "#30336b"
};

console.log(palette.red); // will print: #eb4d4b

console.log(palette["blue"]); // will print: #30336b

let color = "yellow";
console.log(palette[color]); // will print: #f9ca24
```

Why do we have the brackets [] notation as well to access data in objects?? 

Let's say we have the following object: 

```javascript
const numbers = {
  100 : "one hundred",
  200 : "two hundred",
  "76 trombones" : "great song!",
  red : "#eb4d4b"
};

// if we try to do: numbers.100; 
// we might expect to get one hundred but instead we will get an error. 
// the same goes for numbers.76 trombones; 

// but if we do: 

console.log(numbers["76 trombones"]); // it will print: great song! 

// we can even do something like this: 

console.log(numbers["re" + "d"]); // it will print out #eb4d4b
```

## Updating & Adding properties

```javascript
const fitBitData = {
  totalSteps : 1234,
  totalMiles : 12345,
  avgCalorieBurn: 5,
  workoutThisWeek : "5 of 7",
  avgGoodSleep : "2:13"
};

// Updating properties: 
fitBitData.workoutsThisWeek = "6 of 7";
fitBitData.totalMiles += 22;

// Adding a new property
fitBitData.heartStillBeating = true;
```

## Arrays + Objects

We can mix 'em up...

```javascript
// so.. we can have objects as array elements.

const shoppingCard = [
  {
    product : "Jenga Classic",
    price : 6.99,
    quantity : 1
  },
  {
    product : "Jenga non Classic",
    price : 6.9999,
    quantity : 2
  },
  {
    product : "Jenga almost Classic",
    price : 6,
    quantity : 22
  }
];

// or.. we can have arrays as object values and also have objects inside objects...

const student = {
  firstName : "David",
  lsatName : "Jones",
  strengths : ["Music", "Art"],
  exams : {
    midterm : 92,
    final : 69
  }
};

// Short Quiz: How can we access the midterm and final properties, add their values and divide them by 2?

// Answer: 

let mid = student.exams.midterm;
let fin = student.exams.final;

console.log((mid + fin) / 2);

// We want to print out the string Art of the array located in the object above: 

// Answer: 

console.log(student.strengths[1]);
```

## Arrays and Objects Equality 

Whatever we will discuss bellow for the arrays works exactly the same for the objects in javaScript.

So, let's say we have 2 arrays and we want to check if they are the same: 

```javascript
const array1 = [1, 2, 3];
const array2 = [1, 2, 3];

// if we try to do: 

if (array1 === array2)
{
  console.log(true);
}
else
{
  console.log(false); // this block will be executed and false will be printed. 
}
```

What's the reason for the above code sample? 
We have to understand something really important here! 

When we declare an array variable in javaScript, it is **NOT** the actual array that's store in that variable in memory like with a simple string for example, but instead, a reference (memory address) is stored inside that variable that POINTS to the specific array we initialized it with. 

So for example the **array1** has store in memory an address like **0xaf12e** and the **array2** has for example another one, let's say **0x0099bef**. 

Even though both point to a similar looking array (an array containing 3 elements, ~> 1,2,3) they actually point to different arrays. So if I modify array1 for example, then array2 will not be modified as well. And that makes sense right? 

So finally when we do **array1 === array2** we're actually doing: **0xaf12e === 0x0099bef**, which obviously is not the case! 

 - !! Quick quiz (try to think for it before checking the answer below.)
 1. What would be the case where array1 === array2 gives us true?? 

```javascript
// Answer
const array1 = [1, 2, 3];
const array2 = array1; 

if (array1 === array2)
{
  console.log(true); // this block will be executed and true will be printed.
}
else
{
  console.log(false);  
}
```

Now, try to think what's the difference here. 
We're assigning to array2 the memory address which array1 contains. 
So basically, now both array1, array2 POINT TO the same exact array ~> [1, 2, 3].
And so the case now is: **array1 === array2 === 0xaf12e**!!!

And if we here try to modify the array2 then array1 will be modified as well and vice versa! 