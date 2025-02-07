const p1 = {
  score: 0,
  button: document.querySelector("#btn-P1"),
  display: document.querySelector("#score-01"),
};
const p2 = {
  score: 0,
  button: document.querySelector("#btn-P2"),
  display: document.querySelector("#score-02"),
};

const btnReset = document.querySelector("#btn-reset"); // Reset
const maxScoreSelector = document.querySelector("#max-score");

let winningScore = 3;
let isGameOver = false;

function updateScore(player, opponent) {
  if (!isGameOver) {
    player.score += 1;
    if (player.score === winningScore) {
      isGameOver = true;
      player.display.classList.add("has-text-success");
      opponent.display.classList.add("has-text-danger");
      disablebtns(player, opponent);
    }
    player.display.textContent = player.score;
  }
}

// Event when btn clicked +1 Player 1
p1.button.addEventListener("click", function () {
  updateScore(p1, p2);
});

// Event when btn clicked +1 Player 2
p2.button.addEventListener("click", function () {
  updateScore(p2, p1);
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

  for (const p of [p1, p2]) {
    p.score = 0;
    p.display.textContent = "0";
    p.display.classList.remove("has-text-success", "has-text-danger");
    p.button.disabled = false;
  }
}

const disablebtns = (player, opponent) => {
  player.button.disabled = true;
  opponent.button.disabled = true;
};
