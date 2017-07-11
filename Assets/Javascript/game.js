//This is the list of Car Makes//
var alphabet = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n",
"o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z", "1", "2", "3", 
"4", "5", "6", "7", "8", "9", "0"];

//Choose a random string in the array//
var letter = alphabet[Math.floor(Math.random() * alphabet.length)];

console.log(letter);

var lettersGuessed = [];

var livesLeft = 5;

var letterPosition = [];

document.getElementById("attemptsLeft").innerHTML = livesLeft;

document.onkeydown = function (event) {
	var x = event.key;
	console.log(x);
	if (x === letter) {
    lettersGuessed.push(x);
    console.log(lettersGuessed);
    document.getElementById("winLoss").innerHTML = "WINNER!"
  }
  if (x != letter && lettersGuessed.indexOf(x) == -1) {
    lettersGuessed.push(x);
    console.log(lettersGuessed);
    document.getElementById("displayLettersGuessed").innerHTML = lettersGuessed;
    livesLeft = livesLeft - 1;
    document.getElementById("attemptsLeft").innerHTML = livesLeft;
  }
  if (livesLeft == 0) {
    document.getElementById("winLoss").innerHTML = "LOSER!";
  }
}






