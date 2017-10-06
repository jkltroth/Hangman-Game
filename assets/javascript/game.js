// 
// PSUEDOCODE
// Start new game (press spacebar to start)
// Reset guesses to max amount
// Reset letters already guessed
// Computer chooses a random word from the array
// Display random word as "_ _ _ _ _"

// User selects letters on keyboard
// If selected letter is within random word, replace "_" with letter
// If selected letter is not within random word:
// 1. Subtract 1 from "Number of Remaining Guesses" 
// 2. Add selected letter to "Letters Already Guessed"
// If selected letter has already been selected, do nothing

// Game ends when:
// 1. All letters in random word are guessed 
// Add 1 to "Wins" total
// Reset guesses to max amount
// Reset letters already guessed
// Computer chooses new random word from the array
// 2. Guesses remaining = 0
// Add 1 to "Losses" total
// Reset guesses to max amount
// Reset letters already guessed
// Computer chooses new random word from the array

// // // // // // // // // // // // // // // // // // // // // // // 

// Object for game
var game = {
    wins: 0,
    losses: 0,
    remainingGuesses: 10,
    underscores: [], // use push to add underscores per length of currentWord
    lettersGuessed: [], //use push to add guessed letters to this array
    teams: ["bears", "bengals", "bills", "broncos", "browns", "buccaneers", "colts", "cardinals", "chargers", "chiefs", "cowboys", "dolphins", "eagles", "falcons", "fortyniners", "giants", "jaguars", "jets", "lions", "packers", "panthers", "patriots", "redskins", "raiders", "rams", "ravens", "saints", "seahawks", "steelers", "texans", "titans", "vikings"],
    currentWord: null,

    // Randomly chooses a choice from the teams array - Does this need to be set as a variable or run as a function???
    randomTeam: function () {
        return this.teams[Math.floor(Math.random() * this.teams.length)]
    },

};

// When the window loads...
window.onload = function () {

    // Converts 'randomTeam' to an array and assigns array to 'currentWord'
    currentWord = (game.randomTeam()).split('');

    // Pushes '_' into 'underscores' array x times based on length of 'currentWord' array
    for (i = 0; i < currentWord.length; i++) {
        game.underscores.push("_");
    };

    // Logs 'currentword' and 'underscores' to console and pushes 'wins, losses, underscores and remainingGuesses' to html
    console.log(currentWord);
    console.log(game.underscores);
    document.getElementById("wins").innerHTML = (game.wins);
    document.getElementById("losses").innerHTML = (game.losses);
    document.getElementById("currentWord").innerHTML = ((game.underscores.join(" ")))
    document.getElementById("guessesRemaining").innerHTML = (game.remainingGuesses);

    // When a key is pressed...
    document.onkeyup = function (event) {

        // Determines which key was pressed.
        var keyPress = event.key;


        //  If spacebar is pressed...
        if (keyPress == " ") {
            currentWord = game.randomTeam();
            game.remainingGuesses = 10;
            game.lettersGuessed = []; // Clear the lettersGuessed array
            console.log(currentWord); // For validation of underscores
            alert(game.underscores); // need to refactor to push to html instead of alert


        }
    };

};