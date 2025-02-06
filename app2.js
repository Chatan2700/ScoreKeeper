// Select the span
const span01 = document.querySelector("#score-01"); // Score P1
const span02 = document.querySelector("#score-02"); // Score P2
// Select the buttons
const btn1 = document.querySelector("#btn-01"); // +1 P1
const btn2 = document.querySelector("#btn-02"); // +1 P2
const btn3 = document.querySelector("#btn-03"); // Reset
// Select the Select?
const winningScoreSelect = document.querySelector("#win-score");
// Score variables
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let winningScore = 0;

winningScoreSelect.addEventListener("change", function () {
  // alert(this.value);
  winningScore = parseInt(this.value);
  reset();
});

// Event when btn clicked +1 Player 1
btn1.addEventListener("click", function (e) {
  scorePlayer1 += 1;
  span01.textContent = scorePlayer1;
  winnerPlayer(scorePlayer1, scorePlayer2);
});

// Event when btn clicked +1 Player 2
btn2.addEventListener("click", function (e) {
  scorePlayer2 += 1;
  span02.textContent = scorePlayer2;
  winnerPlayer(scorePlayer1, scorePlayer2);
});

// Event when btn clicked Reset scores, textContent  & disabled states
btn3.addEventListener("click", function (e) {
  reset();
});

// Checks every time a btn is pressed if one of the two player has won
function winnerPlayer(score1, score2) {
  if (score1 >= winningScore) {
    disablebtns();
    return console.log("player 1 won");
  }

  if (score2 >= winningScore) {
    disablebtns();
    return console.log("player 2 won");
  }
}

// Disable buttons function
const disablebtns = () => {
  btn1.disabled = true;
  btn2.disabled = true;
};

// resets stuff
const reset = () => {
  scorePlayer1 = 0;
  scorePlayer2 = 0;

  span01.textContent = "0";
  span02.textContent = "0";

  btn1.disabled = false;
  btn2.disabled = false;

  winningScoreSelect.selectedIndex = 0;
  winningScore = 0;
};
