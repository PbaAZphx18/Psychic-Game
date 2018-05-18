
//variables for game 

var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
var win = 0;
var loss = 0;
var guessesLeft = 9;
var guessedSoFar = [];

  // console.log(letters);
  var compGuess = letters[Math.floor(Math.random() * letters.length)];
  // console.log(compGuess);


  document.onkeyup = function (event) {

  //function for user
  var userGuess = event.key;
    // console.log(userGuess);

    //When user wins.
  if (userGuess === compGuess) {
    win++;
    alert("You win!!!");
    document.getElementById("win").textContent = win;
  }
    //When user losses.
  else  {
    guessesLeft--;
    // console.log(guessesLeft);
    if(guessesLeft === 0) {
      alert("You lose - Play Again?");
      document.getElementById("loss").textContent = loss;
    }
  }


}

