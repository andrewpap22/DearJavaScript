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
--------------
   |  x | o
--------------
 x |  o |
--------------

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

<hr>

And now we're going to enter the world of...

## Loops !

```javascript
for (let num = 1; num <= 20; num++)
{
  console.log(`${num}x${num} = ${num * num}`);
}

/*
 * This will output:
 * 1x1 = 1
 * 2x2 = 4
 * 3x3 = 9
 * ...
*/
```

### For loops + arrays

> To Loop over an array, start at0 and continue to the last index (length - 1)

```javascript
const animals = ['lion', 'fox', 'wolf'];

for (let i = 0; i < animals.length; i++)
{
  console.log(i, animals[i]);
}

/**
 * output:
 * 0 lion
 * 1 fox
 * 2 wolf
/

// check the ap.js of the loops module for more examples
```

## While Loops

> A while loop continues to run as long as its test condition is true

```javascript
let num = 0;
while (num < 10)
{
  console.log(num);
  num++;
}
```

The best case scenario to write a while loop is when you don't know exactly the number of times the loop is going to run. If we for example know that our loop is going to run 10 times, we better use a for loop instead.

> Check the app.js file of this section for a good use case example of a while loop

There is a special keyword in javaScript called **break** and we usually use it to break out of a loop.
It is not used commonly in for loops, but it is in while loops.

> head again to the app.js file of this section for an example.

## For ... of

A nice and easy way of iterating over arrays. (or other iterable objects)

**Syntax:**

```javascript
/*
 * for (variable of iterable)
 * {
 *   statement;
 * }
*/

let subreddits = [
  "soccer",
  "popheads",
  "cringe",
  "books"
];

for (let subreddit of subreddits)
{
  console.log(subreddit); // printing each element of the array.
}

// with a plain for loop we would do it like:

for (let i = 0; i < subreddits.length; i++)
{
  console.log(subreddits[i]);
}

// since for of works with anything iterable, we can use it to iterate through a string also:

for (let character of "helloThereHowDoYouDo")
{
  console.log(character);
}

// Now, we'll continue with some use cases that we might prefer the plain for loop instead of the for of

// for the below magic square, each row sums up to 15, also each column and each diagonal.
const magicSquare = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8]
];

// So, let's say that we want to verify that each row sums up to 15
// We could do that with a traditional for loop as follows:

for (let i = 0; i < magicSquare.length; i++) // iterate through the magicSquare array
{
  let row = magicSquare[i]; // each element of the magicSquare array, is a sub array
  let sum = 0;
  for (let j = 0; j < row.length; j++) // iterate through each of the sub arrays
  {
    //console.log(row[j]); // printing each element of the sub arrays of the magicSquare array.
    sum += row[j];
  }
  console.log(`${row} summed up to: ${sum}`);
}

// And now, how we could do the same as above with for of loops:

for (let row of magicSquare)
{
  let sum = 0;
  for (let num of row)
  {
    sum += num;
  }
  console.log(`${row} summed up to: ${sum}`);
}

// So it seems like that again using for of is much simpler and less written code.

// But let's now see an example that we might prefer the traditional for loop instead of the for...of

const words1 = ["mail", "milk", "bath", "black"];
const words2 = ["box", "shake", "tab", "berry"];

/*
 * Now, what we want to do is loop through the words1 array and for each element we want to print out the corresponding element from the words2 array.
 * so for example for the 1st element we would have: mailbox and so on..
*/

for (let i  = 0; i < words1.length; i++)
{
  console.log(`${words1[i]}${words2[i]}`);
  /*
   * output:
   * mailbox
   * milkshake
   * bathtab
   * blackberry
  */
}

/*
 * we could not do the same here with the for of even if we tried...
 * Why??
 * Because with the traditional for loop we have the index number of the array, and that is ~> i
 * But with the for of loop we won't have that index to provide the words2 array with and print simultaneously, we would only have each and every element, but not the array index of each and every element!
*/
```

Now we'll talk about how to use a for of loop with objects...

```javascript
const movieReviews = {
  Arrival : 9.5,
  Alien : 9.0,
  Amelie : 8,
  "In Bruges" : 10,
  "Kill Bill" : 9.5,
  Coraline : 9.0
};

/*
 * Objects are not iterable so to loop through them (through their keys or their values or both)
 * we will have to use 2 built in methods:
 * 1. Object.keys()
 * 2. Object.values()
*/

// Examples:

for (let movie of Object.keys(movieReviews))
{
  console.log(movie); // will print out each key of the object
  console.log(movie, movieReviews[movie]); // will also print the value of each key
}

// let's say we want to calculate the average rating of the movies:

const ratings = Object.values(movieReviews);

let total = 0;
for (let rating of ratings)
{
  total += rating;
}

let avg = (total / ratings.length);
console.log(avg);
```

And lastly...

## for .. in loops

> Loop over the keys in an object

```javascript
/*
 * for (variable in object)
 * {
 *   statement;
 * }
*/

// a for in loop will loop over the keys! The properties in an object
// example

const jeopardyWinnings =
{
  regularPlay : 2522700,
  watsonChallenger : 12341234,
  tournamentOfChampions : 50000000,
  battleOfTheDecades : 2222222,
};

for (let property in jeopardyWinnings)
{
  console.log(property); // will print the keys
  console.log(jeopardyWinnings[property]); // will print the values
}
```

And now... the last big topic...

# Functions!!!

> Functions are reusable procedures and allow us to write reusable, modular code.
> We define a "chunk" of code that we can then execute at a later point.

Define a function in javaScript:

```javascript
/*
 * function funcName()
 * {
 *   // do something
 * }
*/

// example:

function grumpus()
{
  console.log("qwerty");
  console.log("qwerty2");
  console.log("qwerty3");
}

// to see the logs in the console we have to call the function:

grumpus(); // now we'll see the 3 logs.
```

Let's try to make another function.

We'll call it a Dice Roll function.

```javascript
function rollDie
{
  let roll = Math.floor(Math.random() * 6) + 1; // generating random numbers from 1 to 6
  console.log(`Rolled: ${roll}`);
}

// And now we have to 'execute', call the function in order to see the output
rollDie();
```

## Function Arguments:

> Arguments is a fancy term for parameters.

```javascript
// Example:

function greet(nickname)
{
  console.log(`Hi, ${nickname}!`);
}

const name = "Mirella";
greet(name);

// will print out: Hi, Mirella!
```

### Multiple arguments for a function!

```javascript
function sum(x, y)
{
  console.log(x + y);
}

// We have to keep in mind that the order of the arguments matters!

// Example:

function divide(a, b)
{
  console.log(a / b);
}

// call of the function
divide(1, 4); // -> 1/4 = 0.25
divide(4, 1); // -> 4/1 = 4
```

### RETURN

> Built - in methods **return** values when we call them.

We can store those values:

```javascript
const yell = "I will end you".toUpperCase();

console.log(yell); // I WILL END YOU

const idx = ['a', 'b', 'c'].indexOf('c');

console.log(idx); // 2
```

> **Important note!!!** The return statement ends function execution AND specifies the value to be returned by that function.

```javascript
function square(x)
{
  return x * x; // function is done here and will not execute any statement below it.
  console.log("this will not get printed");
}

// but obviously if a conditional specifies otherwise then:

function isPurple(color)
{
  if (color.toLowerCase() === "purple")
  {
    return true;
  }
  else
  {
    return false;
  }
}

// another and more elegant way of writing the above function:

function isPurple(color)
{
  if (color.toLowercase() === "purple")
  {
    return true;
  }
  return false;
}

// yet another shorter way:

function isPurple(color)
{
  return color.toLowerCase() === "purple"; // if the string passed is purple ~> true will be returned, else ~> false will be returned.
}

// Now we'll write a more 'advanced' purple color checking function:

/**
 * We'll pass an array to our function and
 * if we find a position in the array which the string purple or magenta is contained then,
 * we'll return true, else we'll return false
*/

function containsPurple(arr)
{
  for (let element of arr)
  {
    if (element === "purple" || element === "magenta")
    {
      return true;
    }
  }

  return false;
}
```

❗️**Challenges**❗️

> ❗️ Please do try the challenges yourself before going to the app.js file and have a look on the solution.

 1. Write a isValidPassword function. It accepts 2 arguments: password and username. The password must:
  - be at least 8 characters
  - cannot contain spaces
  - cannot contain the username
  - If all the requirements are met, return true. Otherwise, return false.
  - isValidPassword("89F@#$", "dogLuvr"); // true
  - isValidPassword("dogLuvr123", "dogLuvr"); // false

 2. Write a function to find the average value in an array of numbers.

 3. A pangram is a sentence that contains every letter of the alphabet like:
  - "The quick brown fox jumps over the lazy dog"
  - > Write a function called isPangram, which checks to see if a given sentence contains every letter of the alphabet. (Make sure you ignore string casing!!)
  - Example: isPangram("The five boxing wizards jump quickly"); // true
  - isPangram("The five boxing wizards jump quick"); // false

 4. Write a getCard() function which returns a random playing card object, like:
  - {
      value : 'K',
      suit  : 'clubs'
    }
  - Pick a random value from: (2,3,4,5,6,7,8,9,10,J,Q,K,A)
  - Pick a random suit from: Clubs, Spades, Hearts, Diamonds
  - Return both in an object.

<hr>

## An advanced look at functions!

### Scope

> Variable "visibility"

 - The location where a variable is defined dictates where we have access to that variable.

The first type of scope we're going to see is called: **Function Scope**

```javascript
function helpMe()
{
  let msg = "I'm on fire!";

  console.log(msg); // I'm on fire!
}

console.log(msg); // !! msg NOT defined!

/**
 * msg variable is scoped to the helpMe function only!
*/

// another example:

let bird = "mandarin duck";

function birdWatch()
{
  let bird = "golden pheasant";
  console.log(bird); // golden pheasant
}

console.log(bird); // mandarin duck
```

### Block Scope

```javascript
let radius = 8;

if (radius > 0)
{
  const PI = 3.14;

  let circ = 2 * PI * radius;
}

console.log(radius); // 8
console.log(PI); // NOT DEFINED
console.log(circ); // NOT DEFINED

/**
 * PI & circ are scoped to the if BLOCK
*/

// ! IMPORTANT

if (true)
{
  let letVariable = 1;
  const constVariable = 2;
  var varVariable = 3;
}

console.log(letVariable); // ERROR, NOT DEFINED
console.log(constVariable); // ERROR, NOT DEFINED
console.log(varVariable); // 3

/**
 * So we can see that let const and var have different scope rules.
 * When we declare a variable inside a scope, i.e a function scope or a block of code (if, for, while, etc..) with let and const then those variables are scoped only to the above mentioned scopes.
 * But! When we declare a variable with var, then var variables are only scoped within functions! They're not scoped in block of codes and thus we can access it as we see in the above example.
*/
```

## Lexical Scope

```javascript
function outer()
{
  let hero = "Black Panther";

  function inner()
  {
    let cryForHelp = `${hero}, please save me!`; // we can have access to the hero variable inside the nested function.
    console.log(cryForHelp);
  }

  inner(); // Black Panther, please save me!
}

console.log(hero); // NOT DEFINED.

// what if we try to call inner() outside of the outer() function?

inner(); // ERROR! inner is not defined!

// So we can have access to the inner function ONLY inside the outer function.
```

## Function Expressions

There another syntax we can use to define functions

```javascript
const square = function (num)
{
  return num * num;
}

square(7); // 49
```

How can we store a function in a variable?
Well... in javaScript **functions are objects!**

And that means that... we can store 10 of them in an array for example...  we can pass them as arguments... and so on..

If we type in the google chrome developer tools console: ```console.dir(square)``` we will see that function in an object-like output format. And that proves the above statement.

Let's now see an example of passing functions in an array...

```javascript
function add(x, y)
{
  return x + y;
}

const subtract = function(x, y)
{
  return x - y;
}

function multiply(x, y)
{
  return x * y;
}

const divide = function(x, y)
{
  return x / y;
}

const operations = [add, subtract, multiply, divide]; // passing the functions (which are objects) as array elements.

// And for example we can call them now with 2 different ways:

// 1.
add(11,11);

// 2.
operations[0](100,4);

// The above 2 will call the add function and give us 22 and 104.

// Also we can loop over this array and call each function

for (let func of operations)
{
  let result = func(30,5);
  console.log(result);

  /*
   * output:
   * 35
   * 25
   * 150
   * 6
  */

} // by the time this loop is executed 4 functions will have been called, passing in the 30 and 5 parameters
```

Also, we can store functions in objects... (so basically store objects inside objects as we've already seen.)

```javascript
const thing = {
  doSomething : multiply // so the value of the doSomething property is the multiply function.
}

// so if we do:

console.log(thing.doSomething) // we'll get the multiply function as an output

// but if we do:

console.log(thing.doSomething(50, 2)); // we'll get: 100
```

And now, right here we just created our very first method!

By adding a function to an object ~> thing.doSomething(50,2) we're creating a method.

Just like we have used the ~> "somestring".toUpperCase();
Notice we're doing the same thing!

> Next topic ~> Functions as arguments!

So, what are **higher order functions**
They're functions that operate on/with other functions.
They can:
 - Accept other functions as arguments
 - Return a function!

```javascript
function callThreeTimes(f)
{
  f();
  f();
  f();
}

function laugh()
{
  console.log("HAHAHHAHAHAHA");
}

/**
 * so, here we pass the function laugh as an arugment to the callThreeTimes function.
 * And what it does, is it calls 3 times the function that was passed as an argument.
 * And so we'll see at the console the string "AHAHAHAHAHA" printed 3 times.
*/
callThreeTimes(laugh);
```

```javascript
// Another example
function repeat_n_Times(action, num)
{
  for (let i = 0; i < num; i++)
  {
    action();
  }
}

/**
 * So here what we're doing is, simply passing to the repeat_n_Times function, another function as an argument (action) and a number.
 * And we're simply looping up until the number passed and calling the function passed as an argument
 * and so we'll now see the string "HAHAHAHAH" printed 22 times.
*/
repeat_n_Times(laugh, 22);
```

```javascript
// yet another example

/**
 * We're going to make a function now,
 * that is going to take 2 other functions as arguments,
 * and it will call randomly 1 of the 2
*/

function pickRandomly(f1, f2)
{
  let rand = Math.random();
  if (rand < 0.5)
  {
    f1();
  }
  else
  {
    f2();
  }
}
```

Now, we'll see examples of returning functions.

```javascript
function makeBetweenFunc(min, max)
{
  return function(val)
  {
    return val >= min && val <= max; // this will return true of false, based on the values
  }
}

const inAgeRange = makeBetweenFunc(18, 100);

inAgeRange(17); // false
inAgeRange(68); // true
```

Explanation of the above:
So we can think of functions returning other functions as a factory that generates functions.
If we see our example above, we return an anonymous function and we pass in as an argument a value *val*.
Then we do call the makeBetweenFunc and we pass in 2 numbers as arguments and we save the function that makeBetweenFunc returns to a variable. And basically it's not a variable now, but it's a function and in our example, *inAgeRange* is the name of the new function that was returned from the *makeBetweenFunc*.
And now, when we're calling our new *inAgeRange* function, we pass in a value, and then that value get's inside it's block of code which is the return statement of the anonymous function that the *makeBetweenFunc* returns.
And finally we compare for example the value 17 passed through the inAgeRange function, with the min and max values from the makeBetweenFunc and we return true or false finally after the comparison.
And that's all!

And now a super important javaScript topic and that is:

## CALLBACK FUNCTIONS

> A callback function is a function passed into another function as an argument, which is then invoked inside the outer function.

So, we've already done this, remember with the callTwice function and the laugh function.

```javascript
function callTwice(func)
{
  func();
  func();
}

function laugh()
{
  console.log("HAHAHAHAH");
}

callTwice(laugh) // pass the laugh function as an argument.

// will print the string "HAHAHAH" 2 times
```

**So, in the above example, the laugh() function is a callback function.**

Callbacks are extremely useful.
For example, let's say we want to make a request to load data from Facebook's API, then that request takes times to execute and we would have to pass a callback function which will be called when the request is finished and the data is back.

Now, an extremely day to day use case of callbacks is with anonymous functions. (we'll see examples below.)
There is nothing wrong with making a standalone function and give it a name and then use it as a callback, but we usually just want to pass as a callback a function that we're going to use only one time. And for that usecase, anonymous functions are the perfect fit.

```javascript
/**
 * in javascript there is a built in method called setTimeout()
 * it expects to pass 2 arguments.
 * 1 is a function, and the other one is a number, which is a miliseconds counter.
*/

function grumpus()
{
  alert("GAHH GO AWAY!");
}

setTimeout(grumpus, 5000);

/**
 * So what we've done here is that we call the setTimeout() function and we pass in our grumpus function
 * which basically executes an alert.
 * What this will do simply is, display the alert on our webpage 5 seconds after the page has loaded.
*/

/**
 * Now, remember than grumpus is a callback function, so we can do the exact same thing as above,
 * with anonymous functions
*/

setTimeout(function() {
  alert("GAHH GO AWAY!");
}, 5000);

// And thus we achieved the same thing in much lesser lines of code.
// But we're simply saying: Just execute the block of code inside the anonymous function after 5seconds and simply do it one time, we will not use this function again anywhere else, if we wanted to do that we could make a reusable function by declaring it with a name or save it to a variable as we've seen.
```

Now let's see a more advanced example.
We'll write some code that will run when we click a button on the page.
**Head to the .html and .js files of this section (functions)**

Now, last thing we're going to cover and you should not stress much about it, is,

### Hoisting

```javascript
var animal = "fox";
console.log(animal)

// this will print "fox" obviously

// but what if we reverse the lines?

console.log(animal);
var animal = "fox";

// we will get ~> undefined.

// if we remove completely the let animal = ...

console.log(animal);

// this will give us an error, that the variable animal is not defined anywhere.

// So what is called hoisting is the second of this 3 examples.
// Even though we've defined the variable animal but we're trying to print it before the definition we're not getting an error, but we get undefined. Why?

// Behind the scenes what javaScript is doing is basically this:

var animal;
console.log(animal);
animal = "fox";

// and thus we get undefined, and that is what's called hoisting.
```

! Notice that everything we said in the above example is by using the **var** keyword.
Let's see what happens with const and let

```javascript
console.log(shrimp);
let shrimp = 'Harlequin Shrimp';

/**
 * We'll get a reference error in this case... : Cannot access shrimp before initialization.
 * So that means that with the let keyword there is no hoisting!
 * And that's another reason we use let unstead of var besides the scope life of a variable that we've previously discussed. (same with const)
*/
```

And now let's discuss hoisting with functions...

```javascript

howl(); // call function before definition, ~> still works!

function howl()
{
  console.log("AWOOOOOO");
}

howl(); // call of the function after definition it woks as expected...
```

So yes... functions are hoisted. So we can imagine behind the scenes that, whenever and wherever we define and implement a function, javaScript behind the scenes will put them all in order at the top of the file as with, when declaring a variable with the var keyword.

Remember that also we can define and implement functions as expressions.
And those are NOT hoisted!

```javascript

hoot(); // reference error! Cannot access hoot before initialization!

let hoot = function() {
  console.log("HOOO HOOOOO");
}

hoot(); // works as expected
```

> Next topic: ~> Apply Functions to Collections of Data

So, this section is focused on useful array methods that expects you to pass in a callback!

Arrays come with many built-in methods that accept callback functions.
They are super super useful.

So, the first method that we'll talk about is called:

## forEach

> accepts a callback function.
> Calls the function once per element in the array.

```javascript
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

nums.forEach(function(n) {
  console.log(n * n);
  // prints: 81, 64, 49, 36, 25, 16, 9, 4, 1
});

nums.forEach(function(el) {
  if (el % 2 === 0)
  {
    console.log(el)
    // prints: 8, 6, 4, 2
  }
});

// we can also get the index alongside the element with the forEach method.
nums.forEach(function(num, idx) {
  console.log(idx, num);
  /**
   * will print:
   * 0 9
   * 1 8
   * 2 7
   * ...
  */
});

// a more complex example:

const books = [{
   title: "Good Omens",
   authors: ["Terry", "Neil"],
   rating: 4.25
  },
  {
    title: "blah blah",
    authors: ["qwerty"],
    rating: 4.25
  },
  {
    title: "skrr pop",
    authors: ["qwerty2", "Neil"],
    rating: 4.25
  },
  {
    title: "Good Omenzzzzz",
    authors: ["Terryzzzz", "Neilzzzzzzz"],
    rating: 4.25
  }
];

// So we have an array where each element is an object.
// Let's say we want to print each title

books.forEach(function(book) { // so this book represents an element of the array which in our case is an object
  // and so to print the title for example we need to do: book.title
  console.log(book.title);
});

/**
 * So, we can achieve the exact same result as above with a for of loop...
*/
for (let book of books)
{
  console.log(book.title);
}

// another way of achieving the same thing...
for (let i  0; i < books.length; i++)
{
  console.log(books[i].title);
}
```

## Map

> creates a new array with the results of calling a callback on every element in the array.

```javascript
const texts = ["rofl", "lol", "omg", "ttyl"];
const caps = texts.map(function(t) {
  return t.toUpperCase();
});

console.log(texts); // ["rofl", "lol", "omg", "ttyl"]
console.log(caps); // ["ROFL", "LOL", "OMG", "TTYL"]

// so the .map() method generates a new array and thus the texts array is not modified.
```

Another example using map

```javascript
const numbers = [20, 21, 22, 23, 24, 25, 26];

const numDetail = numbers.map(function(n) {
  return {
    value: n,
    isEven: n % 2 === 0
  }
});

/**
 * So what the above does is: It creates a new array with name: numDetail which contains 7 objects as elements,
 * where each object corresponds to each element of the numbers array,
 * and it tells us which of the numbers are even and which are not, but returning true or false to the isEven property.
 * the .map() function maps the original array, but it doesn't modify it and in our case we simply return an object immediately with a boolean expression to be returned in the isEven property.
*/
```

Yet another example...

```javascript
const words = ["asap", "byob", "rsvp", "diy", "wtf"];

// what we want to do is format each string of the array to the form of:
// A.S.A.P for example for the 1st string, and do the same with the rest

const dotSeparatedWords = words.map(function(w) {
  return w.toUpperCase().split('').join('.');
});

/**
 * So how the above code exactly works...
 * We first make every letter capital.
 * Then we apply the split() method by passing with an empty string and that results in giving us an array,
 * whose elements is every single character of the word.
 * so for example ~> ['A', 'S', 'A', 'P']
 * and then the join() method joins into a single string each and every character of the array and it will join the characters by whatever we pass it as an argument.
 * In our case we wanted a dot (.), but we could also give a ~> (-), or whatever else.
*/
```

Yet another useful example, using the map() method.

```javascript
// Let's say we have the following array.

const books = [{
   title: "Good Omens",
   authors: ["Terry", "Neil"],
   rating: 4.25
  },
  {
    title: "blah blah",
    authors: ["qwerty"],
    rating: 4.25
  },
  {
    title: "skrr pop",
    authors: ["qwerty2", "Neil"],
    rating: 4.25
  },
  {
    title: "Good Omenzzzzz",
    authors: ["Terryzzzz", "Neilzzzzzzz"],
    rating: 4.25
  }
];

// what we want to do is create an array that contains all our book titles from our library

const bookTitles = books.map(function(b) {
  return b.title;
});

// And that's it

/**
 * We have created a new array called bookTitles and the map method will go through every element of the books array
 * where in our case the elements of that array are objects,
 * and we can simply call b.title, to return each title of each element and store it in our new array.
 * And now if we do:
*/

console.log(bookTitles);

// we should see that array containing as elements all the titles of the books array.
// So simple and so useful.
```

## Arrow Functions =>

> syntactically compact alternative to a regular function expression

```javascript
const square = function(x) {
  return x * x;
}

// ---------------------

const square = (x) => {
  return x * x;
}

const sum = (x, y) => {
  return x + y;
}
```

2 Rules:

```javascript
// parenthesis are optional if there's only one parameter:

const square = x => {
  return x * x;
}

// use empty parenthesis for functions with no parameters:

const singASong = () => {
  return "LALALALAL";
}
```

**Implicit Return** in arrow functions:

The bellow functions do the exact same thing

```javascript
// regular function expression
const isEven = function(num) {
  return num % 2 === 0;
}

// arrow function with parenthesis around parameter
const isEven = (num) => {
  return num % 2 === 0;
}

// no parenthesis around 1 parameter
const isEven = num => {
  return num % 2 === 0;
}

// implicit return
const isEven = num => (
  num % 2 === 0)
);

// one-liner implicit return
const isEven = num => num % 2 === 0;
```

So, in scenarios where you have one expression that you want to be returned, you can re-write the arrow function by removing the curly braces and the return keyword and simple add parenthesis (see implicit return in the above example.)

The one-liner implicit return should be used only when we have short expressions that we want to return as our example above. For longer ones just use parenthesis. It's better to read.

Now, an example of when we can't use an explicit return:

```javascript
const square = n => (
  if (n < 0)
  {
    return false;
  }

  n * n;
);
```

The above code snippet is wrong!
Javascript does not know what to return in this case, and thus that arrow function syntax is wrong.
We can use the explicit return ONLY when we have just a single expression that we want to return and nothing else.

Now, let's see some more nice examples.

```javascript
/**
 * Let's say we have an array of numbers and we want to double these numbers and store them into a new array
 * of course we can use map!
 * let's see 3 different ways of achieving the same thing!
*/

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9];

const doubles1 = nums.map(function(n) {
  return n * 2;
});

const doubles2 = nums.map(n => {
  return n * 2;
});

const doubles3 = nums.map(n => n * 2);
```

## Find

> returns the value of the **first element** in the array that satisfies the provided testing function.

```javascript
let movies = [
  "The Fantastic Mr. Fox",
  "Mr. and Mrs. Smith",
  "Mrs. Doubtfire",
  "Mr. Deeds"
];

let movie = movies.find(movie => {
  return movie.includes("Mrs.");
}); // Will return: Mr. and Mrs. Smith

/**
 * Notice that we also have Mrs. Doubtfire, BUT remember that it ONLY returns the FIRST element that satisfies our "condition"
*/

let movie2 = movies.find(m => m.indexOf("Mrs") === 0); // This will return: Mrs. Doubtfire .
```

## Filter

> Creates a new array with all elements that pass the test implemented by the provided function.

```javascript
const nums = [9, 8, 7, 6, 5, 4, 3, 2, 1];

const odds = nums.filter(n => {
  return n % 2 === 1; // our callback returns true or false
}); // if it returns true, n is added to the filtered array.

console.log(odds); // [9, 7, 5, 3, 1]

const smallNums = nums.filter(n => n < 5); // [4, 3, 2, 1]
```

## Every & Some

> **Every**, tests whether all elements in the array pass the provided function. It returns a boolean value.
> **Some**, similar to every, but returns true if ANY of the array elements pass the test function.

```javascript
const words = ["dog", "dig", "log", "bag", "wag"];

words.every(word => {
  return word.length === 3;
}); // true

words.every(word => word[0] === 'd'); //false

words.every(w => {
  let last_letter = w[w.length - 1];
  return last_letter === 'g';
}); // true
```

```javascript
const words = ["dog", "jello", "log", "cupcake", "bag", "wag"];

// Are there any words longer than 4 characters?
words.some(word => {
  return word.length > 4;
}); // true

// Do any words start with 'Z'?
words.some(word => word[0] === 'Z'); // false

// Do any words contain "cake"?
words.some(word => word.includes("cake"));
```

## Sort!

> arr.sort(compareFunc(a,b));

 - If compareFunc(a,b) returns less than 0
  - Sort a before b

 - If compareFunc(a,b) returns 0
  - Leave a and b unchanged with respect to each other

 - If compareFunc(a,b) returns greater than 0
  - Sort b before a

```javascript
const prices = [400.50, 3000, 99.99, 35.99, 12.00, 9500];

const ascSort = prices.sort((a,b) => a - b); // this way we're sorting in ascending order. From smallest to largest.
// [12, 35.99, 99.99, 400.5, 3000, 9500]

const descSort = prices.sort((a,b) => b - a); // this way we're sorting in descendin order. From largest to smallest.
// [9500, 3000, 400.5, 99.99, 35.99, 12]
```

And last but not least...

## Reduce!

> Reduce executes a reducer function on each element of the array, resulting in a single value.

Applications for reduce include stuff like, summing elements from an array.
Or, finding the maximum value in an array.
Or, Reducing an array of 100 numbers down to 1 Maximum.

```javascript
// accumulator is the variable that will store the end result of reduce.
// currentValue represents each individual element in the array.
[3, 5, 7, 9, 11].reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
});
```

| Callback    | accumulator | currentValue | return value |
| :---------: | :---------: | :----------: | :----------: |
| first call  | 3           | 5            | 8            |
| ----------- |             |              |              |
| second call | 8           | 7            | 15           |
| ----------- |             |              |              |
| third call  | 15          | 9            | 24           |
| ----------- |             |              |              |
| fourth call | 24          | 11           | 35           |

**Now, Let's see how to find the maximum value in an array.**

```javascript
let grades = [89, 96, 58, 77, 22, 62, 93, 99, 70];

// in this case the accumulator (i.e. the 1st parameter of the callback) is just tracking the max value.
const topScore = grades.reduce((max, currVal) => {
  if (currVal > max) return currVal;
  return max;
});

console.log(topScore); // 99

// A shorter option with Math.max and implicit return
// We can obviously easily modify the below code to find the min value in the array by using Math.ming
const topScore2 = grades.reduce((max, currVal) => Math.max(max, currVal));
```

Reduce with initial value.

```javascript
// We can also pass as a second parameter to the reduce method an initial value.

const nums = [1, 2, 3, 4, 5, 6];

const sum = nums.reduce((accumulator, currValue) => {
  return accumulator + currValue;
}, 100); // <~ notice the 100 here after the callback

/**
 * So, what the second parameter does is, it simply initializes the accumulator variable.
 * So this time the accumulator variable will not start with the 1st array elements as it's value but with the value of the parameter passed. i.e. 100
 * So our final result that will get returned from the callback would be: 100 + 1 + 2 + 3 + 4 + 5 + 6 = 121.
*/
```

Now let's talk about **tallying** in reduce.

```javascript
const votes = ['y', 'n', 'n', 'y', 'n', 'y', 'y', 'y', 'n', 'n', 'y'];

const tally = votes.reduce((tally, vote) => {
  tally[vote] = (tally[vote] || 0) + 1;
  return tally;
}, {}); // <~ Initial value: {}, an empty object!

console.log(tally); // {y: 6, n: 5}
```

So... let's get to the explanation...
We first set the tally parameter of the callback to be an empty object.
Then we want to count how many yes and no's we have inside our votes array.
So we can get to our final object: {y: 6, n: 5}
But how do we get there?
AFter the initialization of the tally parameter to be an empty object the logic is:
Check the tally of vote ~> (first element of the array) ~> 'y'.
Is there a 'y' inside the empty object {}?
No it's not, so add 1 to it.
And now we have: {y: 1}
Then check the next element.
The next element is 'n'.
Is there an 'n' inside: {y: 1}?
No there is not, so add 1 to it.
So now we have: {y: 1, n: 1}.
And we keep progressing like that until our end result.
Now let's get to the syntax.
First of all what is ```tally[vote]```?
Remember that tally is an object and we usually access object properties with the dot (.) operator. So why we're using brackets here?
Remember that we can also have an object property written as a string, in our case 'y', 'n' BUT we can't use the dot **.** operator to access object properties that are strings. In that case we use brackets ~> **[]**. So that one thing is out of the way.
Another thing is, what about the bellow snippet of code? How does it describe our logic above?

```javascript
tally[vote] = (tally[vote] || 0) + 1;
```

Well the logic we described above could be more easily understanded if we write it as follows:

```javascript
votes.reduce((tally, vote) => {
  if (tally[vote]) // if there is a 'y' or 'n'
  {
    tally[vote]++; // increment it by 1
  }
  else // if there is not
  {
    tally[vote] = 1; // initialize it
  }

  return tally; // return the end result after finishing with the whole array.
}, {});
```

So how does the above code snippet do the same as the one liner: ```tally[vote] = (tally[vote] || 0) + 1;```?

Well, it all boils down to understand how this works ~> ```(tally[vote] || 0) + 1```
What we're saying is: in the beggining where we have our empty object, is there a vote of 'y' or 'n'?
No, there is not so ```tally[vote]``` becomes 0.
And now we have: ```(0 || 0) + 1```
0 || 0 gives us 0 and + 1 gives us 1
And thus we now have: {y: 1} for the first element.
The same operation will be handled for the 'n' vote.
So now we have: {y: 1, n: 1}
The next step is:
```tally[vote]``` now becomes 1 when we encounter another 'y' or 'n' and so we have:
1 || 0 which gives us (1) + 1 = 2
And so now we have: {y: 2, n:1}
And thus we will continue like that until our end result...

<hr>

And now heading to some new JS features!!!

## 1. Default Parameters

So the old way of doing it is:

```javascript
function multiply(x, y)
{
  y = typeof y === "undefined" ? 1 : y
  return x * y;
}
```

The new way of doing it:

```javascript
function multiply(a, b = 1)
{
  return a * b;
}

multiply(4); // 4
multiply(4, 5); // 20
```

## 2. Spread

> Spread syntax allows an iterable such as an array to be **expanded** in places where zero or more arguments
> (for function calls) or elements (for array literals) are expected,
> or an object expression to be expanded in places where zero or more key-value pairs (for object literals) are expected.

So let's see spread for function calls.

```javascript
const nums = [9, 3, 2, 8];

Math.max(nums); // NaN

// Use spread!
Math.max(...nums); // 9

// Same as calling:
// Math.max(9,3,2,8);
```

Now, let's see spread in **Array Literals**.

```javascript
const nums1 = [1,2,3];
const nums2 = [4,5,6];

[...nums1, ...nums2]; // [1, 2, 3, 4, 5, 6]

['a', 'b', ...nums2]; // ['a', 'b', 4, 5, 6]

[...nums1, ...nums2, 7, 8, 9]; // [1, 2, 3, 4, 5, 6, 7, 8, 9]
```

Spread is usually great in cases you want to combine arrays...
And one of the most actually used cases of **spread** is to just make a copy of an array.

```javascript
// Another example of using spread in strings

// Remember that if we have a string and we want to split it into seperate characters we can do the following:

"qwerty".split(''); // ~> ['q', 'w', 'e', 'r', 't', 'y']

// but we can also use spread to achieve the same thing

[..."qwerty"];  // ~> ['q', 'w', 'e', 'r', 't', 'y']
```

Now, let's see spread in **Object Literals**.

```javascript
const feline = { legs: 4, family: "Felidae" };
const canine = { family: "Caninae", furry: true };

const dog = { ...canine, isPet: true };
// {family: "Caninae", furry: true, isPet: true}

const catDog = { ...feline, ...canine };
// {legs: 4, family: "Caninae", furry: true}
```

## Rest Parameters! 

> Rest params, collects all remaining arguments into an actual array. 

**!** Be careful though, the syntax is the same as with spread (...) it's 3 dots, BUT! we use it only, inside parenthesis of functions. i.e. where parameters are being put in functions. 

Example: 

```javascript
function sumAll(...nums) // nums is the name of the array that contains all the arguments being passed
{
  let total = 0;
  for (let n of nums) total += n; // so we can loop over that array...
  return total; 
}

sumAll(1, 2); // 3
sumAll(1, 2, 3, 4, 5); // 15

// Another way of doing it using reduce!

function sum(...numbers) 
{
  return numbers.reduce((total, currVal) => {
    return total + currVal;
  })
}

sum(4,5,6,7); // 22
```

What we did above is to use rest, to collect ALL the parameters but as mentioned in the definition of rest, we can use it to collect the REST of the parameters of a function. 

Example: 

```javascript
function fullName(first, last, ...titles)
{
  console.log("first", first);
  console.log("last", last);
  console.log("titles", titles);
}

fullName("Tom", "Jones", "qwerty", "qwerty1", "qwerty2"); 

// first Tom
// last Jones
// titles ["qwerty", "qwerty1", "qwerty2"]
```

We can also use rest in arrow functions! 

```javascript
const multiply = (...nums) => (
  nums.reduce((total, currVal) => total * currVal; // and also we're doing another implicit return (one line) here
  );
) // notice we're doing an implicit return here, so no return keyword needed! 

multiply(1,2,3); // 6
```

## Destructuring!

> A short, clean syntax to 'unpack': 
> - Values from arrays
> - Properties from objects
> Into distinct variables. 

### Array destructuring 

```javascript
const raceResults = [ "Eliud Kipchoge", "Feyisa Lelisa", "Galen Rupp" ];

const [ gold, silver, bronze ] = raceResults; // this is the new shorter syntax (keep in mind the position matters) 

// which is equivalent to the following: 

const gold = raceResults[0];
const silver = raceResults[1];
const bronze = raceResults[2];

// ------------------------------

console.log(gold); // Eliud Kipchoge
console.log(silver); // Feyisa Lelisa
console.log(bronze); // Galen Rupp

/**
 * Another nice trick we could do: 
 * Let's say we want to save to a variable the 1st element, and then skip the 2nd and the 3rd and pick directly the 4th
 * To do that, we can add extra commas 
*/

const raceResults2 = ["qwerty", "qwerty1", "qwerty2", "qwerty3", "qwerty4"];

const [first, , , fourth] = raceResults2; 

console.log(first, fourth); // "qwerty" "qwerty3"

const [ fastest, ...everyoneElse ] = raceResults; // using the rest operator here to collect the rest (remaining) of the array elements. 

console.log(fasest); // Eliud Kipchoge
console.log(); // ["Feyisa Lelisa", "Galen Rupp"]
```

### Object Destructuring!

```javascript
const runner = {
  first: "Eliud", 
  last: "Kipchoge",
  country: "Kenya",
  title: "Elder of the order of the golden heart of kenya"
};

const { first, last, country } = runner;

// in an array we unpack (destructure) based on the index of the array (so the order matters)
// but in objects we destructure based on the name of the property
// so the variable names we're going to create must be existing properties in the object

// keep in mind that first, last, country are variables which are different from the first, last, country inside the object, which are properties of the runner object!

console.log(first); // "Eliud"
console.log(last); // "Kipchoge"
console.log(country); // "Kenya"

// We can also give new names to our variables also,

const { country: nation } = runner; // so this will create a new varible called nation based on the country property, that it found in the object, and it will store the property's value in it. 

// So: 

console.log(nation); // "Kenya"
```

### Nested Destructuring

```javascript
const results = [
  {
    first: "Eliud",
    last: "Kipchoge",
    country: "Kenya"
  },
  {
    first: "Feyisa",
    last: "Lilesa",
    country: "Ethiopia"
  },
  {
    first: "Galen",
    last: "Rupp",
    country: "United States"
  }
];

// Let's say we want to extract the country of the second element of the array (the second object), i.e. Ethiopia

const [, { country }] = results; 

/**
 * Explanation: 
 * Notice we do skip the 1st element of the array with a comma, and then we make the country variable,
 * from the 2nd object's country property
 * and thus we get Ethiopia.
*/

console.log(country); // "Ethiopia"
```

### Parameters Destructuring

```javascript
const fullName = ( { first, last } ) => {
  return `${first} ${last}`;
}

const runner = {
  first: "Eliud",
  last: "Kipchoge",
  country: "Kenya"
};

console.log( fullName( runner ) ); // "Eliud Kipchoge"
```

```javascript
// Let's use a more practical example

/**
 * So, let's say we have a response from a website, 
 * And the response contains it's info into an array
 * And then for example I want to use a function to extract the status code from that array
 * Let's see what we can do. 
*/

const response = [
  "HTTP/1.1",
  "200 OK",
  "application/json"
];

function parseResponse( [, statusCode] )
{
  return statusCode;
}

let statusCode = parseResponse( response ); 
console.log(statusCode); // "200 OK"
```

Let's now continue onto a new chapter!

## Object Methods and the 'this' keyword

**Goals**:
 - Add methods to objects
 - use new object shorthand syntax
 - Use computed properties
 - Understand prototypes
 - Explain how the !@#$ *this* works.

So let's start with: 

### ShortHand Properties 

```javascript
const reviews = [4.5, 5.0, 3.44, 2.8, 3.5, 4.0, 3.5];

const max = Math.max(...reviews);
const min = Math.min(...reviews); 
const sum = reviews.reduce( (sum, currValue) => sum + currValue );
const avg = sum / reviews.length;

const stats = { min, max, sum, avg }; // new shorthand properties object syntax!

console.log(stats); // { min: 2.8, max: 5, sum: 26.74, avg: 3.82 }
```
### Computed properties. 

another nice shorthand new syntax for objects. 

So computed properties are just an improvement for the object literal syntax where we can add a property with a dynamic key. 

```javascript
const user = "Jools";

const userRoles = {
  [user]: "Admin"
};

console.log(userRoles); // {Jools: "Admin"}

// So, we can use a variable as a key name in an object literal property!.
```

## Methods!!!

> So, we can add functions as properties on objects!!!
> And we call them methods!

```javascript
const math = {
  multiply : function (x,y ) {
    return x * y;
  },
  dividey : function (x,y ) {
    return x / y;
  },
  square : function (x,y ) {
    return x * x;
  }
};

// there also a shorter syntax we can use to add methods into objects: 

const auth = {
  username: "qwerty",
  login() {
    console.log("LOGGED IN");
  },
  logout() {
    console.log("Bye");
  }
};

// and to call a method we use the dot notation: 

auth.login(); // "LOGGED IN"
```

# THIS <~~ 

> The keyword **this** can be a major point of confusion and misery and hardship and general suffering in the life of a new JS developer.

So, **this** is a keyword. You can think of it as a **reference to the current execution scope**!

So, **this** will return an object back to us which refers to the current execution scope.

Example: 

```javascript
function sayHi()
{
  console.log("Hi");
  console.log(this);
}

sayHi(); // Hi, Window {}
```

So as we can see in the above example, our function prints the string "Hi" and then the **this** keyword returns to use an object with the name Window. What Window is? It's the global scope in the browser!!!

So the above sayHi function, seems like it floats in the middle of nowhere but that's not the exact case. Actually its a method of the Window object which is the global scope of our browser! So if we go and open up the console to our browser and type in: *Window*, we'll get that particular object which has lots of built in methods already, but if we scroll we'll find as well our sayHi() function that we defined in our app.js file.

> An IMPORTANT thing to remember here. 
> When we declare a variable with the keyword **var** that particular variable is being added automatically to the Window object, i.e. the global scope. 
> BUT, that is not the case for the **let** and **const** keywords! 

Just keep this in the back of your head for now...

Now, let's see where **this** is actually useful! 

```javascript
// so let's say we have an object: 

const person = {
  first: "Cherily",
  last: "Sarkisian",
  nickName: "Cher",

  fullName() { // Remember that this is a function with a name: fullName, contained inside the person object!!!
    console.log(this);
  }
};

// so let's execute the fullName method: 

person.fullName(); // what will be printed? What's the value of this, this time? 

// {first: "Cherify", last: "Sarkisian", nickName: "Cher", fullName: f}

/**
 * So, we got back the person object this time from the this keyword and we didn't get the window global scope object.
 * Why is that usefull? 
 * Because it allows us to reference the other properties inside of that particular object!!!
 * For example, let's say we want to use the fullName method to prin the fullName of that person. 
 * So we should modify our method like below: 
*/

const person = {
  first: "Cherily",
  last: "Sarkisian",
  nickName: "Cher",

  fullName() { 
    const { first, last, nickName } = this;  // remember that that's object destructuring 
    console.log(`${first} ${last } AKA ${nickName}`); // so here first actualy is: this.first and so on..
  }
};

person.fullName(); // Cherilyn Sarkisian AKA Cher
```

So write now we have the ability to write a method, that is aware of the object it lives in, which means, we can use objects not just to store different methods because they are related (just like we did above with the math example, where we added, add, multiply methods in) but now we have a way of also interacting with properties with other values or even other methods. So our object, can now be a *self contained world* where we can have variables or properties to be used inside of the methods of the object! 

**IMPORTANT!!!**, The value of **this** depends on the invocation xontext of the function it is used in. What that means is, that the value of **this** will change, depending on how the function is being executed.

So on our above example, when we call: **person.fullName();** that is actually what is setting the value of **this** to be the person object. That particular way we call the fullName method.

So, how we could actually change the value of **this**?

```javascript
// Based on our previous person object.

const printFullName = person.fullName; // so basically creating a reference to the person.fullName method, basically a variable 'poiting' to it.

// And now if we call printFullName(); we get: 

/**
 * undefined undefined AKA undefined
*/
```

So right now, the way we executed our fullName method of the person object, we basically created a pointer variable, to point to that particular method. BUT, doing so, the **this** keyword now changes value to the Window object and at the window object we have not defined first, last, nickname variables and thus we get undefined! 

So we can think of it like the following: 

When we have: `person.fullName();` we can think of fullName being set to the thing that's to the left of it. If there's nothing on the left, like with the `printFullName()` case then that will be set to the global execution scope i.e. the Window object and thus the value of **this** changes accordingly!

Now, one more important thing! One of the key differences about regular functions and arrow functions is that, **arrow functions do not get their own version of `this`.** It doesn't matter how you call an arrow function the value of **this** is not going to change!!!

```javascript
const aRandomObject = {
  qwerty: "qwertz",
  laughs: () => {
    console.log(this);
    console.log(`${this.qwerty} xa0xa0xa0`);
  }
};

aRandomObject.laughs(); 

/**
 * We'll get: 
 * Window {}
 * undefined xa0xaxa0
*/
```

So, remember that arrow functions always will NOT get their own value of **this** and that's exactly why we don't use arrow functions as methods inside of objects. Because usually inside objects we want our methods to be able to access the other properties or methods of the object and with arrow functions we can't do that!!!

Now, why arrow functions do not get their own **this** and how can it be usefull *sometimes*.

```javascript
const annoyer = {
  phrases: [
    "yolo",
    "0xa0xa0",
    "qwerty",
    "qwertz",
    "blablabla"
  ],
  pickPhrase() { // so pickPhrase method will return a random phrase from the phrases array above.
    const { phrases } = this; // basically we use destructuring here so we won't have to do this.phrases later on and simply write phrases, which is of course equal to this.phrases...
    const index = Math.floor(Math.random() * phrases.length);

    return phrases[index];
  },
  start() {
    console.log(this.pickPhrase()); // here we'll get a random phrase of the phrases array. The value of the this keyword here is set to the annoyer object.
    setInterval(function () {
      console.log("qwerqwerqwetewqrewq");
      console.log(this); // the value of this keyword here is set to the Window object though...
      console.log(this.pickPhrase()); // So here we'll get an error that pickPhrase is not a function (because it's not included in the Window object.)
    }, 3000) // so what the start function will do is, print the above string every 3 seconds (3k milisseconds).
  }
};
```

So, why inside the **start()** method the **this** keyword is set to the annoyer object in the first line we use it but when we get inside the setIterval function which uses an anonymous function as a parameter the **this** keyword inside that anonymous functon is set to the Window object instead?? 
Remember that **this** changes depending on how it's called!
So, in the beggining we execute the start() method by doing: **annoyer.start()** and thus the **this** keyword get's the annoyer object as it's value. But then, the anonymous function is called by setInterval and not by us and since the setInterval is a method of the Window object, then the **this** keyword inside the anonymous function of setInterval is set to the Window object and thus we get the error right there that pickPhrase is not a method, because it's not defined inside the Window object.

So, how can we solve the above problem? How can we use the **this** keyword inside the anonymous function of setInterval to have a value of our annoyer object and thus use our pickPhrase method? 
Well, we can solve that with arrow functions! 
Remember that arrow functions don't get their own version of **this**. So by using an anonymous function as a parameter of setInterval then that particular anonymous function will get it's own value of **this** keyword. BUT, if we use an anonymous function over there, that particular anonymous function will not have it's own value of **this** and thus the **this** keyword will remain unchanged inside the anonymous function and will still have as it's value the annoyer object and thus we can use the this.pickPhrase() method normally and we would have achieved what we wanted to do in the beginning, i.e. to print a random phrase from our phrases array of our method every 3 seconds. 
So setInterval() should look like the below to solve our problem: 

```javascript
setInterval( () => {
  console.log(this.pickPhrase());
}, 3000 );
```

Now, an extra bonus here. When we have a setInterval we usually don't want it to repeat forever until we refresh the page, so we want another method so we're able to call it and stop the interval. 
To do this we can make a new method on our annoyer object and call it stop() and stop() will use a bult in method of javaScript called clearInterval to doe exactly what we want. 

```javascript
// Consider the below method added to our annoyer object above 

stop() {
  clearInterval(this.timerId); // where did this timerId come from? 
}

// well, setInterval returns an Id which is an integer and it's the number of times that it has been called. 
// So we can modify our start() method to save that id into a variable and then use it as we're doing above! 

start() {
  const timerId = setInterval(blabla); // <- that way though we won't have access to the timerId variable inside the stop method because it's out of it's scope. 
  this.timerId = setInterval(blabla); // So, by using the this keyword here we're basically adding the timerId as a property to the annoyer object when the method start() is being executed and the timerId value is updated every time setInterval it's called (every 3 seconds)
  // And now we can refer to it inside the stop() method by saying: this.timerId and basically it will stop the interval with that particular id.
}
```

Next up we're going to take an example to put everything we've learned in this section (Object_methods) together. 
So head to the app.js file of this particular section for that! 

<hr>

And now, we're going to move on to...

# DOM Manipulation!!!

> **DOM** = **D**ocument **O**bject **M**odel!

**What is it?**

 - The DOM is a JavaScript representation of a webpage. 
 - It's your JS "window" into the contents of a webpage
 - It's just a bunch of objects that you can interact with via JS.

So in the browser everything get's translated to objects. Simply javascript objects as we know them. 
You give it CSS, HTML and it creates JavaScript objects to translate them. 

And that's what DOM is, it's the tree of objects that the browser creates for a particular webpage. 

Example: 

```html
<body>
  <h1>Hello!</h1>
  <ul>
    <li>qwerty</li>
    <li>qwertz</li>
  </ul>
</body>
```

So given the following html file for a webpage, the browser will translate it to the following DOM tree: 

Document <~~ This is a javascript object
    \
     Body <~~ And this as well
      /\ 
     h1 ul <~~ And this...
        /\
       li li

All of the above objects have a bunch of properties built in to them. 
The simplest one is for example what's the text inside of the <li> element (or object) and that property is called innerText. 

epomeno video: "another fun dom example.mp4"