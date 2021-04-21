/**
 * So we will hardcode some data below,
 * (which would normally come from an external source (an API probably))
 * And then we're going to build an NBA score table based of, on that data
 * Obviously we want to build our NBA Scores table dynamically and not simply hardcode it inside our HTML file, 
 * because, imagine if we want 100 NBA games with information, it would not be that possible to hardcode that, so each time we get some new data, we want them automatically to be displayed on our webpage.
 */

const warriorsGames = [
    {
        awayTeam: {
            team: "Warriors",
            points: 119,
            isWinner: true
        },
        homeTeam: {
            team: "Houston",
            points: 106,
            isWinner: false
        }
    },
    {
        awayTeam: {
            team: "Bucks",
            points: 122,
            isWinner: true
        },
        homeTeam: {
            team: "Warriors",
            points: 99,
            isWinner: false
        }
    },
    {
        awayTeam: {
            team: "Warriors",
            points: 80,
            isWinner: false
        },
        homeTeam: {
            team: "qwertz",
            points: 110,
            isWinner: true
        }
    },
    {
        awayTeam: {
            team: "Bulls",
            points: 222,
            isWinner: true
        },
        homeTeam: {
            team: "Warriors",
            points: 100,
            isWinner: false
        }
    }
];

// first we're going to create a ul element to append inside our lists of data. (we're going to make it in lists instead of table elements because it's simpler)
const ulParent = document.createElement("ul");

// iterate over the data
for (let game of warriorsGames)
{
    // using object destructuring to get the homeTeam, awayTeam, properties of each of the objects we have in our data.
    const { homeTeam, awayTeam } = game;
    console.log(awayTeam.team, homeTeam.team); // printing the names of each of the teams to check that everything's working.
    
    // Now, we're going to create an li element for each basketball game
    const gameLi = document.createElement("li");

    // we'll use destructuring again to get the name and the points of each of the teams (remember that using the : means that we can rename the destructured variable, thus we renamed team to hTeam, aTeam and so on...)
    const { team: hTeam, points: hPoints } = homeTeam;
    const { team: aTeam, points: aPoints } = awayTeam;

    // creating the string to be inserted on the each of the li elements in the format that we want to: 
    const teamNames = `${aTeam} @ ${hTeam}`;

    // doing the same for the scores with the only difference that we want to make bold the winning score
    if (aPoints > hPoints)
    {
      var scoreLine = `<b>${aPoints}</b>-${hPoints}`;
    }
    else
    {
      var scoreLine = `${aPoints}-<b>${hPoints}</b>`;
    }

    // and now we can try to set the background color to red or green based on if the warriors team lost or won

    // if the name of the team is Warriors then it's the home team, else it's the away team
    const warriors = hTeam === "Warriors" ? homeTeam : awayTeam;

    // if the warriors team are winners (based on the isWinner property) then asign the string "win" to the variable className, else assign to it the string "loss"
    const className = warriors.isWinner ? "win" : "loss"

    // and now add the class name on our lists, based on our above logic. (prerequisite is that you have those 2 classes in the styles.css file defined as you want)
    gameLi.classList.add(className);

    // inserting our strings to our li elements
    gameLi.innerHTML = `${teamNames} ${scoreLine}`;

    // and now we got to append each li to the ul element to get it displayed on our webpage
    ulParent.append(gameLi);
}

// but still we won't see nothing displayed to our page at this point because we haven't yet appended the ul element that we created in the beginning:
// So, let's add it before our script tag in the body of our page 
document.body.prepend(ulParent);

/**
 * Head to the app2.js file to check the refactored and better version of this example. 
 * Currently we are biased to the Warriors team to display our colors based on if they won or lost. 
 * What if we wanted to make it whichever team we pass in biased? 
 * What if we wanted to generate a new table with new data but keep our table with the colors and bold scores as is?
 * Well we gotta make a function called generateScoreTable() for example where we pass an argument in of the team and if for example we pass Celtics in we will get the same behavior as we already have but for that particular team that we pass in.
 */