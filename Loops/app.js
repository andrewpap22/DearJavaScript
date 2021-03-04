/**
 * So here we'll do some example of looping through arrays
 */

const examScores = [98, 77, 69, 22, 100];

// printing each of the array elements alongside the index.
for (let i = 0; i < examScores.length; i++)
{
  console.log(i, examScores[i]);
}

const myStudents = [
  {
    fistName : "Zeus",
    grade : 86
  },
  {
    fistName : "Artemis",
    grade : 99
  },
  {
    fistName : "Panos",
    grade : 100
  },
  {
    fistName : "Matsi",
    grade : 22
  }
];

let total = 0; // we need this to store the total grades of the students

for (let i = 0; i < myStudents.length; i++) 
{
  let student = myStudents[i]; // student is each individual object inside the array...

  console.log(`${student.fistName} scored ${student.grade}`);

  // we can try to print an average score of the grades of the students: 
  total += student.grade; // first, we sum all the grades
}

console.log(`Avg score of students is: ${total / myStudents.length}`);

// looping through a string: 
const word = "stressed";

// let's try looping backwards this time
let reversedWord = "";
for (let i = word.length - 1; i >= 0; i--)
{
  reversedWord += word[i]; // each time adding one letter to the reversedWord variable
  //console.log(word[i]);
}
console.log(reversedWord); // and thus we reversed a word! 

/**
 * Example of using a while loop:
 * We'll make a guess game where we have a fixed number and we prompt the user to guess for a number.
 * If their guess matches our fixed number then he wins and we prompt a message whistl exiting the while loop. 
 * Else we continue looping until the player guesses the number. 
 * So here we don't know exactly in how many rounds (the number that our loop will run) the player will guess the number and so that's the best use case for a while loop to be used.
 */

const targetNumber = Math.floor(Math.random() * 10); // generating a random number and keeping it fixed to the const variable.
let guess = Math.floor(Math.random() * 10); // making the variable with let because we want it to be changed, when the player guesses a new number.

// so until the player guesses the number we will keep looping.
while(guess !== targetNumber)
{
  console.log(guess);
  guess = Math.floor(Math.random() * 10);
}

console.log(`Target: ${targetNumber}, GuessedNumber: ${guess}`);

/**
 * example of the 'break' keyword usage
 */

while (true)
{
  if (target === guess) // when the target number is the same as the guess number
  {
    break; // then break out of the infinite while loop.
  }
  console.log(`Target: ${targetNumber}, GuessedNumber: ${guess}`);
  guess = Math.floor(Math.random() * 10);
}
console.log(`Target: ${targetNumber}, GuessedNumber: ${guess}`);