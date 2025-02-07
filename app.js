// Select the span
const span01 = document.querySelector("#score-01"); // Score P1
const span02 = document.querySelector("#score-02"); // Score P2
// Select the buttons
const btnP1 = document.querySelector("#btn-P1"); // +1 P1
const btnP2 = document.querySelector("#btn-P2"); // +1 P2
const btnReset = document.querySelector("#btn-reset"); // Reset
// Select the Selector
const maxScoreSelector = document.querySelector("#max-score");
// Score variables
let scorePlayer1 = 0;
let scorePlayer2 = 0;
let winningScore = 3;
let isGameOver = false;

// Event when btn clicked +1 Player 1
btnP1.addEventListener("click", function (e) {
  if (!isGameOver) {
    scorePlayer1 += 1;
    if (scorePlayer1 === winningScore) {
      isGameOver = true;
      span01.classList.add("has-text-success");
      span02.classList.add("has-text-danger");
      disablebtns();
    }
    span01.textContent = scorePlayer1;
  }
});

// Event when btn clicked +1 Player 2
btnP2.addEventListener("click", function (e) {
  if (!isGameOver) {
    scorePlayer2 += 1;
    if (scorePlayer2 === winningScore) {
      isGameOver = true;
      span01.classList.add("has-text-danger");
      span02.classList.add("has-text-success");
      disablebtns();
    }
    span02.textContent = scorePlayer2;
  }
});

// Event Reset the game
btnReset.addEventListener("click", reset);

// Select Event on Change
maxScoreSelector.addEventListener("change", function () {
  // alert(this.value);
  winningScore = parseInt(this.value);
  reset();
});

function reset() {
  isGameOver = false;
  scorePlayer1 = 0;
  scorePlayer2 = 0;
  span01.textContent = "0";
  span02.textContent = "0";
  span01.classList.remove("has-text-success", "has-text-danger");
  span02.classList.remove("has-text-success", "has-text-danger");
  btnP1.disabled = false;
  btnP2.disabled = false;
}

const disablebtns = () => {
  btnP1.disabled = true;
  btnP2.disabled = true;
};
