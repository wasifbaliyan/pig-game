/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many 
  times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. 
  After that, it's the next player's turn
- The player can choose to 'Hold',
  which means that his ROUND score gets added to his GLBAL score. 
  After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game
*/

let activePlayer = 0;
const scores = [0, 0];
const globalScores = [0, 0];
const winningScore = 20;
let isPlaying = true;

document.querySelector(".dice-pic").style.display = "none";

document.querySelector(".roll-dice").addEventListener("click", () => {
  if (isPlaying) {
    let dice = Math.floor(Math.random() * 6) + 1;
    if (dice !== 1) {
      document.querySelector(".dice-pic").style.display = "block";
      document.querySelector(".dice-pic").src = `./images/dice-${dice}.png`;
      scores[activePlayer] += dice;
      document.querySelector(
        `.player-${activePlayer}-current-score`
      ).textContent = scores[activePlayer];
    } else {
      nextPlayer();
    }
  }
});

document.querySelector(".hold-dice").addEventListener("click", () => {
  if (isPlaying) {
    globalScores[activePlayer] += scores[activePlayer];
    if (globalScores[activePlayer] >= winningScore) {
      document.querySelector(`.player-${activePlayer}-name`).textContent =
        "Winner";
      isPlaying = false;
    }
    document.querySelector(`.player-${activePlayer}-global-score`).textContent =
      globalScores[activePlayer];
    nextPlayer();
  }
});

document.querySelector(".new-game").addEventListener("click", () => {
  globalScores[0] = 0;
  globalScores[1] = 0;
  scores[0] = 0;
  scores[1] = 0;
  activePlayer = 0;
  document.querySelector(".dice-pic").style.display = "none";
  document.querySelector(`.player-0-name`).classList.add("active");
  document.querySelector(`.player-1-name`).classList.remove("active");
  document.querySelector(`.player-0-current-score`).textContent = scores[0];
  document.querySelector(`.player-1-current-score`).textContent = scores[1];
  document.querySelector(`.player-0-global-score`).textContent =
    globalScores[0];
  document.querySelector(`.player-1-global-score`).textContent =
    globalScores[1];

  document.querySelector(`.player-0-name`).textContent = `Player 1`;
  document.querySelector(`.player-1-name`).textContent = `Player 2`;
});

function nextPlayer() {
  scores[activePlayer] = 0;
  document.querySelector(`.player-${activePlayer}-current-score`).textContent =
    scores[activePlayer];
  document
    .querySelector(`.player-${activePlayer}-name`)
    .classList.remove("active");

  activePlayer = activePlayer === 0 ? 1 : 0;
  if (isPlaying) {
    document
      .querySelector(`.player-${activePlayer}-name`)
      .classList.add("active");
  }
  document.querySelector(".dice-pic").style.display = "none";
}
