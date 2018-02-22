// Set the variables to start a foundation..
var wordList = ["hansolo", "lukeskywalker", "yoda", "darthvader", "chewbacca", "c3po", "rey", "jangofett"];

var guess = "";
var letterInChosenWord = [];
var numBlanks = 0;
var blanksAndSuccesses = [];
var wrongGuesses = [];

var winCounter = 0;
var lossCounter = 1;
var numGuesses = 15;

function startGame() {
    
    wrongGuesses = [];

    numGuesses = 15;
    blanksAndSuccesses = [];


    guess = wordList[Math.floor(Math.random() * wordList.length)];
    lettersInChosenWord = guess.split("");
    numBlanks = lettersInChosenWord.length;


    for (var i = 0; i < numBlanks; i++) {
        blanksAndSuccesses.push("_");
    }

    document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById('guesses-left').innerHTML = numGuesses;

}

function checkLetters(letter) {
    

    var letterInWord = false;

    for (var i = 0; i < numBlanks; i++) {
        if (guess[i] === letter) {
            letterInWord = true;

        }
    }

    if (letterInWord) {
        for (i = 0; i < numBlanks; i++) {
            if (guess[i] === letter) {
                blanksAndSuccesses[i] = letter;

            }

        }
    } else {
        numGuesses--;
        wrongGuesses.push(letter)
    }

    


}


function roundComplete() {
   

    document.getElementById('word-blank').innerHTML = blanksAndSuccesses.join(" ");
    document.getElementById('guesses-left').innerHTML = numGuesses;
    document.getElementById('wrong-guesses').innerHTML = wrongGuesses.join(" ");


   

    if (lettersInChosenWord.join(" ") === blanksAndSuccesses.join(" ")) {
        winCounter++;
        alert("Winner Winner Chicken Dinner!");
        document.getElementById('win-counter').innerHTML = winCounter;
        startGame();
    } else if (numGuesses === 0) {
        document.getElementById('loss-counter').innerHTML = lossCounter++;
        document.getElementById('wrong-guesses').innerHTML = "";
        alert("Too bad so sad!");
        startGame();
    }




}
startGame();
document.onkeyup = function (event) {
   
    var letterGuessed = String.fromCharCode(event.keyCode).toLowerCase();

    checkLetters(letterGuessed)
    roundComplete();


}