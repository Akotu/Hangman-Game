// Set the variables to start a foundation..
var wordList = ["hansolo", "lukeskywalker", "yoda", "darthvader", "chewbacca", "c3po", "rey", "jangofett"];

var letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
var chosenWord = "";
var letterInChosenWord = [];
var Blanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 1;
var numGuesses = 15;

function startGame() {
    /*
    1. computer chooses a word from word list
    2. computer breaks down that random word as letters and replace them with
    underscores _
    3. add those underscores to the HTML to display to the player
    4. numguesses always equals 15, and blankandsuccess is an empty array, 
    and wronggueses is empty as well.
    */
    wrongGuesses = [];

    numGuesses = 15;
    blanksAndSuccesses = [];


    chosenWord = wordList[Math.floor(Math.random() * wordList.length)];
    lettersInChosenWord = chosenWord.split("");
    Blanks = lettersInChosenWord.length;
    

    for (var i = 0; i < Blanks; i++) {
        blanksAndSuccesses.push("_");
    }
    console.log(blanksAndSuccesses);
    document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById('guesses-left').innerHTML = "Guesses Left: " + numGuesses;

}
startGame();






function checkLetters(letter) {


    var letterInWord = false;

    for (var i = 0; i < Blanks; i++) {
        if (chosenWord[i] === letter) {
            letterInWord = true;

        }
    }

    if (letterInWord) {
        for (i = 0; i < Blanks; i++) {
            if (chosenWord[i] === letter) {
                blanksAndSuccesses[i] = letter;

            }

        }
    } else {
        numGuesses--;
        wrongGuesses.push(letter)
    }




}


function complete() {


    document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById('guesses-left').innerHTML = "Guesses Left: " + numGuesses;
    document.getElementById('wrong-guesses').innerHTML = "Wrong Guesses: " + wrongGuesses.join(" ");




    if (lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")) {
        winCounter++;
        alert("Winner Winner Chicken Dinner!" );
        document.getElementById('win-counter').innerHTML = "You have won: " + winCounter + " time(s)";
        startGame();
    } else if (numGuesses === 0) {
        document.getElementById('loss-counter').innerHTML = lossCounter++;
        document.getElementById('wrong-guesses').innerHTML = "";
        alert("you ran out of guesses!");
        startGame();
    }
    if (winCounter

    




}
startGame();
document.onkeyup = function (event) {

    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    checkLetters(letterGuessed)
    complete();


}