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
‼️ <span style="color:red; font-weight: bold;">IMPORTANT NOTICE</span><br>
**In string template Literals we use BACK-TICKS `` and NOT SINGLE QUOTES**
 - <p>`I am a template literal`</p>

 - *The back-tick key is usually above the tab key*

