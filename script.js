// Grab all necessary elements

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const buttons = document.querySelector(".buttons");
const outcomeText = document.querySelector(".win-or-lose");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const gameOver = document.querySelector(".game-over");

//  Add event listeners for individual RPS buttons.
rockButton.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  const playerSelection = "ROCK";
  playRound(playerSelection, computerSelection);
  checkForWinner();
});

scissorsButton.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  const playerSelection = "SCISSORS";
  playRound(playerSelection, computerSelection);
  checkForWinner();
});

paperButton.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  const playerSelection = "PAPER";
  playRound(playerSelection, computerSelection);
  checkForWinner();
});

// Create a variable that holds the values of ‘Rock’, ‘Paper’ or ‘Scissors’ within an array.

const choices = ["ROCK", "PAPER", "SCISSORS"];

// Initialize scores at 0 and increment when playing

let playerScore = 0;
let computerScore = 0;

// Create function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function getComputerChoice() {
  const randomIndex = choices[Math.floor(Math.random() * choices.length)];
  return randomIndex;
}

// Play a single round of the game and define the possible outcomes

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    outcomeText.textContent = `Both players chose ${playerSelection}, it's a tie!`;
  } else if (playerSelection === "ROCK" && computerSelection === "SCISSORS") {
    outcomeText.textContent = `Computer chose ${computerSelection} - Player wins!`;
    playerScore++;
    playerScoreDisplay.innerText = `Player Score = ${playerScore}`;
  } else if (playerSelection === "SCISSORS" && computerSelection === "ROCK") {
    outcomeText.textContent = `Computer chose ${computerSelection} - Computer wins!`;
    computerScore++;
    computerScoreDisplay.innerText = `Computer Score = ${computerScore}`;
  } else if (playerSelection === "SCISSORS" && computerSelection === "PAPER") {
    outcomeText.textContent = `Computer chose ${computerSelection} - Player wins!`;
    playerScore++;
    playerScoreDisplay.innerText = `Player Score = ${playerScore}`;
  } else if (playerSelection === "PAPER" && computerSelection === "SCISSORS") {
    outcomeText.textContent = `Computer chose ${computerSelection} - Computer wins!`;
    computerScore++;
    computerScoreDisplay.innerText = `Computer Score = ${computerScore}`;
  } else if (playerSelection === "PAPER" && computerSelection === "ROCK") {
    outcomeText.textContent = `Computer chose ${computerSelection} - Player wins!`;
    playerScore++;
    playerScoreDisplay.innerText = `Player Score = ${playerScore}`;
  } else if (playerSelection === "ROCK" && computerSelection === "PAPER") {
    outcomeText.textContent = `Computer chose ${computerSelection} - Computer wins!`;
    computerScore++;
    computerScoreDisplay.innerText = `Computer Score = ${computerScore}`;
  }
}

function checkForWinner() {
  if (playerScore === 5) {
    buttons.textContent = "";
    outcomeText.textContent = "Player Wins!";
    gameOver.textContent = "Game Over... Player has 5 points.";
    resetGame();
  } else if (computerScore === 5) {
    buttons.textContent = "";
    outcomeText.textContent = "Computer Wins!";
    gameOver.textContent = "Game Over... Computer has 5 points.";
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
