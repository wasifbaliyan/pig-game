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
let playerOneScore = 0;
let playerTwoScore = 0;
document.querySelector(".dice-pic").style.display = "none";

document.querySelector(".roll-dice").addEventListener("click", () => {
  let dice = Math.floor(Math.random() * 6) + 1;
  if (dice !== 1) {
    document.querySelector(".dice-pic").style.display = "block";
    document.querySelector(".dice-pic").src = `./images/dice-${dice}.png`;
    scores[activePlayer] += dice;
    document.querySelector(
      `.player-${activePlayer}-current-score`
    ).textContent = scores[activePlayer];
  } else {
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.querySelector(".dice-pic").style.display = "none";
  }
});
