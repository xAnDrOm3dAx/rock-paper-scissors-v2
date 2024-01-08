// Grab all necessary elements

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const buttons = document.querySelector(".buttons");
const playerWeapon = document.querySelector(".player-weapon");
const computerWeapon = document.querySelector(".computer-weapon");
const outcomeText = document.querySelector(".win-or-lose");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const gameOver = document.querySelector(".game-over");

//  Add event listeners for individual RPS buttons.
rockButton.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  const playerSelection = "✊";
  playRound(playerSelection, computerSelection);
  checkForWinner();
});

scissorsButton.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  const playerSelection = "✌";
  playRound(playerSelection, computerSelection);
  checkForWinner();
});

paperButton.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  const playerSelection = "✋";
  playRound(playerSelection, computerSelection);
  checkForWinner();
});

// Initialize scores at 0
let playerScore = 0;
let computerScore = 0;

// Create an Enum which holds three properties and thier values which represent rock, paper ands scissors.
const Weapon = {
  ROCK: "✊",
  PAPER: "✋",
  SCISSORS: "✌",
};

// Create function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.
function getComputerChoice() {
  const weapons = [Weapon.ROCK, Weapon.PAPER, Weapon.SCISSORS];
  const randomIndex = weapons[Math.floor(Math.random() * weapons.length)];
  return randomIndex;
}

// Play a single round of the game and define the possible outcomes
function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    gameOver.textContent = "It's a tie!";
    playerWeapon.textContent = playerSelection;
    computerWeapon.textContent = computerSelection;
  } else if (
    (playerSelection === Weapon.ROCK && computerSelection === Weapon.SCISSORS) ||
    (playerSelection === Weapon.SCISSORS && computerSelection === Weapon.PAPER) ||
    (playerSelection === Weapon.PAPER && computerSelection === Weapon.ROCK)
  ) {
    gameOver.textContent = "Player wins!";
    playerWeapon.textContent = playerSelection;
    computerWeapon.textContent = computerSelection;
    playerScore++;
    playerScoreDisplay.textContent = `Player Score = ${playerScore}`;
  } else if (
    (playerSelection === Weapon.SCISSORS && computerSelection === Weapon.ROCK) ||
    (playerSelection === Weapon.PAPER && computerSelection === Weapon.SCISSORS) ||
    (playerSelection === Weapon.ROCK && computerSelection === Weapon.PAPER)
  ) {
    gameOver.textContent = "Computer wins!";
    playerWeapon.textContent = playerSelection;
    computerWeapon.textContent = computerSelection;
    computerScore++;
    computerScoreDisplay.textContent = `Computer Score = ${computerScore}`;
  }
}

function checkForWinner() {
  const WINNING_THRESHOLD = 5;
  if (playerScore === WINNING_THRESHOLD) {
    buttons.textContent = "";
    outcomeText.textContent = "Game Over...";
    gameOver.textContent = "Player has 5 points";
    resetGame();
  } else if (computerScore === 5) {
    buttons.textContent = "";
    outcomeText.textContent = "Game Over...";
    gameOver.textContent = "Computer has 5 points";
    resetGame();
  }
}

function resetGame() {
  const startButton = document.createElement("button");
  startButton.classList.add("start-button");
  startButton.textContent = "START GAME";
  buttons.appendChild(startButton);
  startButton.addEventListener("click", () => {
    window.location.reload(); // Reload the page when start button is clicked
  });
}

// // Grab all necessary elements

// const rockButton = document.querySelector(".rock");
// const paperButton = document.querySelector(".paper");
// const scissorsButton = document.querySelector(".scissors");
// const buttons = document.querySelector(".buttons");
// const playerWeapon = document.querySelector(".player-weapon");
// const computerWeapon = document.querySelector(".computer-weapon");
// const outcomeText = document.querySelector(".win-or-lose");
// const playerScoreDisplay = document.querySelector(".player-score");
// const computerScoreDisplay = document.querySelector(".computer-score");
// const gameOver = document.querySelector(".game-over");

// //  Add event listeners for individual RPS buttons.
// rockButton.addEventListener("click", () => {
//   computerSelection = getComputerChoice();
//   const playerSelection = "✊";
//   playRound(playerSelection, computerSelection);
//   checkForWinner();
// });

// scissorsButton.addEventListener("click", () => {
//   computerSelection = getComputerChoice();
//   const playerSelection = "✌";
//   playRound(playerSelection, computerSelection);
//   checkForWinner();
// });

// paperButton.addEventListener("click", () => {
//   computerSelection = getComputerChoice();
//   const playerSelection = "✋";
//   playRound(playerSelection, computerSelection);
//   checkForWinner();
// });

// // Create a variable that holds the values of ‘Rock’, ‘Paper’ or ‘Scissors’ within an array.

// const choices = ["✊", "✋", "✌"];

// // Initialize scores at 0 and increment when playing

// let playerScore = 0;
// let computerScore = 0;

// // Create function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

// function getComputerChoice() {
//   const randomIndex = choices[Math.floor(Math.random() * choices.length)];
//   return randomIndex;
// }

// // Play a single round of the game and define the possible outcomes
// const resultsWindow = document.querySelector("#round-results");
// const playerResult = document.querySelector("#player-result");
// const computerResult = document.querySelector("#computer-result");

// function playRound(playerSelection, computerSelection) {
//   if (playerSelection === computerSelection) {
//     gameOver.textContent = "It's a tie!";
//     playerWeapon.textContent = playerSelection;
//     computerWeapon.textContent = computerSelection;
//   } else if (
//     (playerSelection === "✊" && computerSelection === "✌") ||
//     (playerSelection === "✌" && computerSelection === "✋") ||
//     (playerSelection === "✋" && computerSelection === "✊")
//   ) {
//     gameOver.textContent = "Player wins!";
//     playerWeapon.textContent = playerSelection;
//     computerWeapon.textContent = computerSelection;
//     playerScore++;
//     playerScoreDisplay.textContent = `Player Score = ${playerScore}`;
//   } else if (
//     (playerSelection === "✌" && computerSelection === "✊") ||
//     (playerSelection === "✋" && computerSelection === "✌") ||
//     (playerSelection === "✊" && computerSelection === "✋")
//   ) {
//     gameOver.textContent = "Computer wins!";
//     playerWeapon.textContent = playerSelection;
//     computerWeapon.textContent = computerSelection;
//     computerScore++;
//     computerScoreDisplay.textContent = `Computer Score = ${computerScore}`;
//   }
// }

// function checkForWinner() {
//   if (playerScore === 5) {
//     buttons.textContent = "";
//     outcomeText.textContent = "Game Over...";
//     gameOver.textContent = "Player has 5 points";
//     resetGame();
//   } else if (computerScore === 5) {
//     buttons.textContent = "";
//     outcomeText.textContent = "Game Over...";
//     gameOver.textContent = "Computer has 5 points";
//     resetGame();
//   }
// }

// function resetGame() {
//   const startButton = document.createElement("button");
//   startButton.classList.add("start-button");
//   startButton.textContent = "START GAME";
//   buttons.appendChild(startButton);
//   startButton.addEventListener("click", () => {
//     window.location.reload(); // Reload the page when start button is clicked
//   });
// }
