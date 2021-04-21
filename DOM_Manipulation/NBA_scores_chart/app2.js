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
            team: "Houston",
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
            team: "Houston",
            points: 110,
            isWinner: true
        }
    },
    {
        awayTeam: {
            team: "Houston",
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

const makeChart = (games, targetTeam) => {
    const ulParent = document.createElement("ul");

    for (let game of games)
    {
        const gameLi = document.createElement("li");
        gameLi.innerHTML = getScoreLine(game);

        gameLi.classList.add( isWinner(game, targetTeam) ? "win" : "loss" );

        ulParent.appendChild(gameLi);
    }

    return ulParent;
}

const getScoreLine = ( { homeTeam, awayTeam } ) => {
    const { team: hTeam, points: hPoints } = homeTeam;
    const { team: aTeam, points: aPoints } = awayTeam;

    const teamNames = `${aTeam} @ ${hTeam}`;

    if (aPoints > hPoints)
    {
      var scoreLine = `<b>${aPoints}</b>-${hPoints}`;
    }
    else
    {
      var scoreLine = `${aPoints}-<b>${hPoints}</b>`;
    }

    return `${teamNames} ${scoreLine}`;

}

const isWinner = ({ homeTeam, awayTeam }, targetTeam) => {
    const target = homeTeam.team === targetTeam ? homeTeam : awayTeam;
    return target.isWinner;
}

// --------------------------------------------------------------------------------------

const warriorsSection = document.querySelector("#gs");
const houstonSection = document.querySelector("#hr");

const chart1 = makeChart(warriorsGames, "Warriors");
const chart2 = makeChart(warriorsGames, "Houston");

warriorsSection.append(chart1);
houstonSection.append(chart2);