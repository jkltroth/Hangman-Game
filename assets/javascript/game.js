// 
// PSUEDOCODE
// Start new game on page load
// Display wins, losses, number of guesses remaining, and letters guessed as preset values
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
    document.getElementById("wins").innerHTML = (game.wins);
    document.getElementById("losses").innerHTML = (game.losses);
    document.getElementById("currentWord").innerHTML = (game.underscores.join(" "));
    document.getElementById("guessesRemaining").innerHTML = (game.remainingGuesses);

    // When a key is pressed...
    document.onkeyup = function (event) {

        // Assigns the key pressed to variable keyPress
        var keyPress = event.key;

        // Assigns index of 'keyPress' within 'currentWord' array to 'keyIndex'. If 'keyPress' is not within 'currentWord', 'keyIndex' is assigned a value of -1
        var keyIndex = currentWord.indexOf(keyPress);

        // If keyIndex is -1, subtract one from remainingGuesses and push to html
        if (keyIndex === -1) {

            game.remainingGuesses--;

            //Pushes incorrect letter guessed to lettersGuessed array
            game.lettersGuessed.push(" " + keyPress);

            document.getElementById("guessesRemaining").innerHTML = (game.remainingGuesses);
            document.getElementById("lettersGuessed").innerHTML = (game.lettersGuessed);

        }
        //  If keyIndex is greater than -1...
        else if (keyIndex > -1) {
            // Execute while loop...
            while (keyIndex > -1) {

                // Replaces the 'keyIndex' value of the 'underscores' array with the 'keyPress' value
                game.underscores.splice(keyIndex, 1, keyPress);

                // Repeat loop to end of 'currentWord' array...
                keyIndex = currentWord.indexOf(keyPress, keyIndex + 1);

                // Pushes new 'underscores' array to html
                document.getElementById("currentWord").innerHTML = (game.underscores.join(" "));
            };

        };

        //If all letters are guessed, add one to wins and reset all else
        if (((game.underscores).indexOf("_")) === -1) {
            game.wins++;
            game.remainingGuesses = 10; // Resets guesses
            game.lettersGuessed = []; // Clear the lettersGuessed array
            game.underscores = [];
            currentWord = (game.randomTeam()).split('');

            for (i = 0; i < currentWord.length; i++) { // Sets underscores
                game.underscores.push("_");
            };

            document.getElementById("wins").innerHTML = (game.wins);
            document.getElementById("currentWord").innerHTML = ((game.underscores.join(" ")));
            document.getElementById("guessesRemaining").innerHTML = (game.remainingGuesses);
            document.getElementById("lettersGuessed").innerHTML = (game.lettersGuessed);
        }

        //  If spacebar is pressed...
        if (keyPress == " ") {
            game.remainingGuesses = 10; // Resets guesses
            game.lettersGuessed = []; // Clear the lettersGuessed array
            game.underscores = [];
            currentWord = (game.randomTeam()).split('');

            for (i = 0; i < currentWord.length; i++) { // Sets underscores
                game.underscores.push("_");
            };

            console.log(currentWord); // For validation of underscores
            document.getElementById("currentWord").innerHTML = ((game.underscores.join(" ")));
            document.getElementById("guessesRemaining").innerHTML = (game.remainingGuesses);
            document.getElementById("lettersGuessed").innerHTML = (game.lettersGuessed);

        };
    };
};