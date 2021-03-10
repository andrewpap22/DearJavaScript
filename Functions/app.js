// Challenger number 1

/** 
function isValidPassword(password, username)
{
  if (password.length >= 8) // password should be at least 8 characters
  {
    if (password.indexOf(' ') === -1) // if space character not found in the string move on
    {
      if ((password.indexOf(username)) === -1) // if username is not contained into the password
      {
        return true;
      }
    }
  }

  return false;
}
*/

// Another way to write the above function (refactoring)

function isValidPassword(password, username)
{
  const notTooShort = password.length >= 8;
  const hasNotSpace = password.indexOf(' ') === -1;
  const usernameNotContained = password.indexOf(username) === -1; 

  if (notTooShort && hasNotSpace && usernameNotContained) return true; 

  return false;
}

/**
 * Challenge #2
 */


/**
function avgArray(array)
{
  let total = 0;

  for (let i = 0; i < array.length; i++)
  {
    total += array[i];
  }

  let avg = (total / array.length);

  return avg;
}
*/

// Another way of writing the above function: 

function avgArray(array)
{
  let total = 0;

  for (let num of array)
  {
    total += num;
  }

  let avg = (total / array.length);

  return avg;
}

/**
 * Challenger #3
 */

function isPangram(sentence) 
{
  // We have to make sure that the string passed in our function
  // Contains every letter of the alphabet
  // i.e. [a, b, c, d, e, f, g, h, i, j, k, l, m, n, o, p, q, r, s, t, u, v, w, x, y, z] ~> 24 unique characters.

  const englishAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

  for (let char of englishAlphabet)
  {
    if ((sentence.toLowerCase()).indexOf(char) === -1) return false;
  } 

  return true;
}

// Another way of writing the above: 
// instead of looping through the array of characters we can put them into a string: 

function isPangramV2(phrase)
{
  let lowerCasedPhrase = phrase.toLowerCase();

  for (let char of "abcdefghijklmnopqrstuvwxyz")
  {
    if (!lowerCasedPhrase.includes(char)) return false; // if the character is not included in the phrase then return false.
  }

  return true;
}

/**
 * Challenge #4
 */

function pickRandomElement(array)
{
  const randomValue = Math.floor(Math.random() * array.length); 

  return randomValue;
}

function getCard()
{
  const value = ["2", "3", "4", "5", "6", "7", "8", "9", "10", "J", "Q", "K", "A"];
  const suit = ["Clubs", "Spades", "hearts", "Diamonds"];
  
  // Get a random value and a random suit
  // const randomValue = Math.floor(Math.random() * value.length);
  // const randomSuit = Math.floor(Math.random() * suit.length);

  const randomValue = pickRandomElement(value);
  const randomSuit = pickRandomElement(suit);

  // Store them in an object and return it.
  let card = {
    value : value[randomValue],
    suit  : suit[randomSuit]
  };

  return card;
}

/**
 * TIP: Whenever we find ourselves repeating code, it's a good indication that we can refactor it by making a function for it for example. 
 * So in our case above, we repeat the way we pick a random element from an array. 
 * So we can make a function for that and use it inside the getCard function
 */