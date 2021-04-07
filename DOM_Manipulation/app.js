// let's select an element based on it's ID 

const img = document.getElementById("bear-photo"); // we have to pass the ID as a string.
console.dir(img); // .dir prints in the console the properties of an object.

// So the document.getElementById returns to us the object that corresponds to the element ID we passed in. 
// So basically the img element we passed to id, is translated to a javascript object. 
// And of course we can use javascript to play with it.

// So what if we want to get all the paragraphs of a webpage for example? 
// We can use the getElementsByTagName 

const paragraphs = document.getElementsByTagName('p');
console.dir(paragraphs);

/**
 * Alright, so getElementsByTagName, returns to us a collection of all the elements provided to select
 * It seems like an array, but it's not an actual javascript array, thus we can't use array methods. 
 * BUT, we can loop over that collection of elements, apply css to eah of them, or we could even use spread and make it an actual array if we wanted to.
 */

// Let's see an example.

// get the input of the webpage:

const inputs = document.getElementsByTagName("input");

// iterate that list of inputs: 

for (let input of inputs) {
  console.log(input); // and we should see the 3 input elements printed in the console here (remember they're objects)

  // what if we want to get what the user types in those inputs? 
  // We can simply get the value of each of the inputs
  console.log(input.value); // we should see the value of the inputs that the user typed in.
}

/**
 * Now let's see how we can select elements based on the element classes
 * And it will return to us a collection containing all the elements having the class specified.
 */

const lists = document.getElementsByClassName("special");
console.log(lists);

// What if we want to for example, get only the elements contained inside the ul element with the class of special?

// well first we can select the ul tag
const ul = document.getElementsByTagName("ul")[0]; // [0] means selecting the 1st one from the collection that getElementsByTagName returns.

// and then remember that ul is an object, and it has it's own DOM properties

const insideUl = ul.getElementsByClassName("special"); 
console.log(insideUl);

// and thus we got only the elements that have a class of special that are inside an ul element and not from the whole wepbage

/**
 * Let's see a kinda complex example of selecting an element with a particular class 
 * using querySelector
 */

// ok so looking to our HTML document, we want to select the li element with a class of special that's contained within a section.

// if we do this, it will return to us the 1st element that has a class of special. (i.e. the paragraph tag)
document.querySelector(".special");

// so we need to be a bit more specific to match our description

document.querySelector("section ul li.special");

/**
 * So, "section ul li.special"
 * that's valid css selector.
 * it basically says,
 * look in the document for the li element with a class of special located inside an ul element that's located inside a section element.
 * And thus we get what we wanted.
 */

// so, what if we want to select the input with a type of password? 

document.querySelector('input[type="password"]'); // and again this is a valid css selector to select that particular input

// now, let's see a bit the querySelectorAll
// It's basically the exactly same thing, but instead of returning to us the 1st match, it returns a collection with everything specified.

// Example

console.dir(document.querySelectorAll(".special")); // it will return to us a collection with ALL the elements that have a special class

/**
 * So here you'll find the example of the parent,children,siblings properties.
 */

const firstLI = document.querySelector("li");
console.dir(firstLI); // so if we inspect the firstLI object in the console, we'll find that it has a property called parentElement, and we'll find out that it's value is the <ul> element.

// so we can do the following to find out for a selected element what's his parent: 
console.log(firstLI.parentElement); // and we'll get the <ul> element here again.
console.log(firstLI.parentElement.parentElement); // here we'll get the parent of the <ul> element, which in our case is the body of the page. 
// If we tried one more time, we would get the <html> element which is the parent of the <body> element.
// And if we tried one more time, we would get null. The <html> tag has no parent.

/**
 * So next, let's get the children of the ul element
 */

const ulChildren = document.querySelector("ul");
console.log(ulChildren.children); // we'll get the 3 li elements in an html collection form.

// if we want the innerText of the first of these li's for example we can do: 
console.log(ulChildren.children[0].innerText); // "first thing" should be printed.

// And final 2 are next, previous siblings of an element

console.log(firstLI.nextElementSibling); // we should get the second li 
console.log(firstLI.previousElementSibling); // we get null here, because the first li element has not a previous sibling
// but if we did the same to the 2nd, or 3rd li element, we should get their previous ones.