/**
 * So, remember that in the functions section, we had an exercise where,
 * we had values of a standard deck of cards and also we had the suits for them
 * and we wanted to make a function to return a random valid card (suit, value) stored in an object.
 * So basically we returned an object containing a random card inside.
 * But what if we also want to have different functionality for our deck instead of only what that function was doing?
 * Let's say that instead of just making a deck of cards, we might want to shuffle the deck, or remove a card and then make a pile to store the removed cards and so on..
 */

// To design the above description we could start with a function approach again...

function makeDeck() {
  const deck = [];
  const suits = ["hearts", "diamonds", "spades", "clubs"];
  const values = "2,3,4,5,6,7,8,9,10,J,Q,K,A";

  for (let value of values.split(',')) {
    for (let suit of suits) {
      deck.push({
        value,
        suit
      });
    }
  }

  return deck;
}

// So at this point we've made our deck. 
// What if we want to draw a single card from the above created deck?
// Well we have to save the above deck to a variable and then we need to make a new function called drawCard.

function drawCard(deck) {
  return deck.pop(); // poping a card out of the deck (remember that modifies the original array passed in)
}

const myDeck = makeDeck(); // so we create our deck
const card1 = drawCard(myDeck); // and then we 'draw' a card out, so now myDeck has 51 cards instead of 52 

// What if we want to draw another card? 
// We would have to call again drawCard() and pass in my deck and save it to another variable
// Or we could make the myDeck variable, a global variable but this way we would only have 1 exactly deck
// And if we wanted to make more decks we would hardcode them, and you can see that this is not a good practice!
// So this is where objects come in
// What can we do? 

// We can use an object to store the deck, and on that object we can have a method called drawCard() 
// And another one called shuffle() and another and another one...
// And we have access to that deck because of the keyword *this*.
// So let's now re-write our above code...

/*
const d3ck = {
  deck: [],
  drawnCards: [],
  suits : ["hearts", "diamonds", "spades", "clubs"],
  values : "2,3,4,5,6,7,8,9,10,J,Q,K,A",

  initializeDeck() { // so this method is updating the deck property which is an empty array of this object.

    const { suits, values, deck } = this;

    for (let value of values.split(',')) {
      for (let suit of suits) {
        deck.push({
          value,
          suit
        });
      }
    }

    // return deck;
  },

  drawSingleCard() {
    // So before returning the card we're going to draw, we're going to first saved it to the drawnCards pile, so we can keep track of it.
    const card = this.deck.pop();
    this.drawnCards.push(card);

    return card; // remember that this will update the deck property of our object, so we'll be left with -1 card each time it's called.
  },

  // method for drawing multiple cards.
  drawMultipleCards(numCards) {

    const cards = [];

    for (let i = 0; i < numCards; i++)
    {
      cards.push(this.drawSingleCard());
    }

    return cards;
  },

  // method for shuffling the array
  shuffle() {
    const { deck } = this; // simply shorthand for writing deck, instead of this.deck

    // loop over array backwards
    for (let i = deck.length - 1; i > 0; i--)
    {
      // pick random index before current element
      let j = Math.floor(Math.random() * (i + 1));

      // swap (using array destructuring)
      [deck[i], deck[j]] = [deck[j], deck[i]];
    }
  }
};
*/

// And so right here we've grouped the data and the functionality together.
// We don't have to pass parameters to functions, saves to new variables
// We simply have an object called deck, and we have all the data and the functionallity we want for that deck within that particular object. 
// So we can use our deck of cards now...

// d3ck.initializeDeck(); // first we initialize the deck (just filling the empty deck array property of the object)
// d3ck.shuffle(); // then we shuffle the deck
// const h1 = d3ck.drawMultipleCards(2); // we draw 2 cards from the deck (50 left)
// const h2 = d3ck.drawMultipleCards(5); // then we draw 5 cards from the deck (45 left)
// console.log(d3ck.drawnCards); // this should be 7 (we drew 2 and then 5 cards).

// All this is good, but how can we make a new deck?? Because right now we're modifying only 1 deck inside that object.

// This is not the best way of doing it, but it's a solution for now.

// So the trick is, to simply make a function which is going to make a number of this d3cks (of the above object)

const makeDecks = () => {
  return {
    deck: [],
    drawnCards: [],
    suits: ["hearts", "diamonds", "spades", "clubs"],
    values: "2,3,4,5,6,7,8,9,10,J,Q,K,A",

    initializeDeck() { // so this method is updating the deck property which is an empty array of this object.

      const {
        suits,
        values,
        deck
      } = this;

      for (let value of values.split(',')) {
        for (let suit of suits) {
          deck.push({
            value,
            suit
          });
        }
      }

      // return deck;
    },

    drawSingleCard() {
      // So before returning the card we're going to draw, we're going to first saved it to the drawnCards pile, so we can keep track of it.
      const card = this.deck.pop();
      this.drawnCards.push(card);

      return card; // remember that this will update the deck property of our object, so we'll be left with -1 card each time it's called.
    },

    // method for drawing multiple cards.
    drawMultipleCards(numCards) {

      const cards = [];

      for (let i = 0; i < numCards; i++) {
        cards.push(this.drawSingleCard());
      }

      return cards;
    },

    // method for shuffling the array
    shuffle() {
      const {
        deck
      } = this; // simply shorthand for writing deck, instead of this.deck

      // loop over array backwards
      for (let i = deck.length - 1; i > 0; i--) {
        // pick random index before current element
        let j = Math.floor(Math.random() * (i + 1));

        // swap (using array destructuring)
        [deck[i], deck[j]] = [deck[j], deck[i]];
      }
    }
  };
};

// And now we have the makeDecks() arrow function which simply returns the d3ck object that we created before.
// So to use it...

const deck1 = makeDecks(); // and now we made 1 deck
deck1.initializeDeck(); // then we can initialize it
deck1.shuffle(); // shuffle it, draw cards and whatever else we have implemented in the object.

// And if we want a second deck to play with then....

const deck2 = makeDecks(); // and so on....