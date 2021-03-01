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