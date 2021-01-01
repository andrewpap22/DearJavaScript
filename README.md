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

From here on I'll be writing the information about each and every topic of discussion on the corresponding .js files inside comments alongside the code for better understanding and I'll be providing the links for the specific files under the title of each and every topic. 

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