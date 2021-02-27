let shoppingList = ['cereal', 'cheese', 'ice'];

let lotto = [45, 12, 22, 29, 44];

let myCollection = [12, "dog", true, null, NaN];

// Let's say we have the following example: 

let topSongs = [
  "First time Ever I Saw Your Face",
  "God ONly Knows",
  "A Day In The Life",
  "Life On Mars"
];

// Now we want to add another element at the end of the array. 
// We saw that we can do this by doing:

topSongs[topSongs.length] = "Another song!"; 

// There is though a simpler and nicer way of doing the same thing: 

topSongs.push("Yet again another song!");

/**
 * The push method will not only add another element at the end of the array,
 * but it will also return us the length of the array AFTER pushing the new element to the end
 * So let's say before push our array had 5 elements and so the length of the array is 5,
 * but after using .push it will add the new element and the length right now will be 6 so it will also return us that number.
 * And we can at the same time store than number in a variable and use it or print it and so on...
 */

console.log(topSongs.push(true)); // this one will add true at the end of the array and print 7 in the console..

/**
 * Now let's say we want to remove that last true we added in because it doesn't fit with our array. 
 * We will use the pop method.
 */

console.log(topSongs.pop()); // it will remove true from the array (which is the last element of the array) and it will also return what it removed. So true will get printed to the console.

/**
 * Now we have the shift and unshift methods. 
 * They are exactly the same and do exactly the same as push and pop but simply at the beggining of the array instead of it's end.
 */

let dishesToDo = ["big platter"];

dishesToDo.unshift("large plate"); // adds large plate at the beggining of the array and returns 2
dishesToDo.unshift("small plate"); // adds small plate at the beggining of the array and returns 3

dishesToDo.shift(); // removes the 1st element of the array and returns that element.

// Now let's have a look at the concat() method.

/**
 * The concat() method is used to merge two or more arrays. 
 * This method does not change the existin arrays, but instead returns a new array.
 */

const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];
const array3 = array1.concat(array2);

console.log(array3);
// expected output: Array ["a", "b", "c", "d", "e", "f"]

// We can also concat more than 2 arrays

const num1 = [1, 2, 3];
const num2 = [4, 5, 6];
const num3 = [7, 8, 9];

const numbers = num1.concat(num2, num3);

console.log(numbers);
// results in [1, 2, 3, 4, 5, 6, 7, 8, 9]

/**
 * Next we have the includes() and indexOf() methods
 * The includes() method determines whether an array includes a certain value among its entries, returning true or false as appropriate.
 */

const arrayOne = [1, 2, 3];

console.log(arrayOne.includes(2));
// expected output: true

const pets = ['cat', 'dog', 'bat'];

console.log(pets.includes('cat'));
// expected output: true

console.log(pets.includes('at'));
// expected output: false

if (pets.includes("dog")) 
{
  console.log("Of course i got a dog!");
}

/**
 * The indexOf() method returns the first index at which a given element can be found in the array, or -1 if it is not present.
 */

const beasts = ['ant', 'bison', 'camel', 'duck', 'bison'];

console.log(beasts.indexOf('bison'));
// expected output: 1

// start searching from index 2 (that's what the second parameters does)
console.log(beasts.indexOf('bison', 2));
// expected output: 4

console.log(beasts.indexOf('giraffe'));
// expected output: -1

/**
 * The join() method creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.
 */

const elements = ['Fire', 'Air', 'Water'];

console.log(elements.join());
// expected output: "Fire,Air,Water"

console.log(elements.join(''));
// expected output: "FireAirWater"

console.log(elements.join('-'));
// expected output: "Fire-Air-Water"

/**
 * The reverse() method reverses an array in place. The first array element becomes the last, and the last array element becomes the first.
 */

const array5 = ['one', 'two', 'three'];
console.log('array5:', array5);
// expected output: "array5:" Array ["one", "two", "three"]

const reversed = array5.reverse();
console.log('reversed:', reversed);
// expected output: "reversed:" Array ["three", "two", "one"]

// Careful: reverse is destructive -- it changes the original array.
console.log('array5:', array5);
// expected output: "array5:" Array ["three", "two", "one"]

/**
 * The slice() method returns a shallow copy of a portion of an array into a new array object selected from start to end (end not included) where start and end represent the index of items in that array. The original array will not be modified.
 */

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant'];

console.log(animals.slice(2));
// expected output: Array ["camel", "duck", "elephant"]

console.log(animals.slice(2, 4));
// expected output: Array ["camel", "duck"]

console.log(animals.slice(1, 5));
// expected output: Array ["bison", "camel", "duck", "elephant"]

/**
 * The splice() method changes the contents of an array by removing or replacing existing elements and/or adding new elements in place.
 */

const months = ['Jan', 'March', 'April', 'June'];
months.splice(1, 0, 'Feb');
// inserts at index 1
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "June"]

months.splice(4, 1, 'May');
// replaces 1 element at index 4
console.log(months);
// expected output: Array ["Jan", "Feb", "March", "April", "May"]

// ----------------------------------------------------------------------

/**
 * Now let's have a look at the sort() method for arrays
 * The sort() method sorts the elements of an array in place and returns the sorted array. 
 * The default sort order is built upon converting the elements into strings,
 * then comparing their sequences of UTF-16 code units values. 
 */

const months2 = ['March', 'Jan', 'Feb', 'Dec'];
months.sort();
console.log(months2);
// expected output: Array ["Dec", "Feb", "Jan", "March"]

const array22 = [1, 30, 4, 21, 100000];
array1.sort();
console.log(array22);
// expected output: Array [1, 100000, 21, 30, 4]

// ----------------------------------------------------------------------------

