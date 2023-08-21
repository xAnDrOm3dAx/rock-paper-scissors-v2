// Grab all necessary elements

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const buttons = document.querySelector(".buttons");
const outcomeText = document.querySelector(".win-or-lose");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");
const message = document.querySelector(".result-message");

//  Add event listeners for individual RPS buttons.
rockButton.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
  checkForWinner();
});

scissorsButton.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
  checkForWinner();
});

paperButton.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
  checkForWinner();
});

// Create a variable that holds the values of ‘Rock’, ‘Paper’ or ‘Scissors’ within an array.

const choices = ["rock", "paper", "scissors"];

// Initialize scores at 0 and increment when playing

let playerScore = 0;
let computerScore = 0;

// Create function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function getComputerChoice() {
  const randomIndex = choices[Math.floor(Math.random() * choices.length)];
  console.log(randomIndex);
  return randomIndex;
}

// Play a single round of the game and define the possible outcomes

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    outcomeText.textContent = `Both players chose ${playerSelection}, it's a tie!`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    outcomeText.textContent = `Computer chose ${computerSelection}, Player wins!`;
    playerScore++;
    playerScoreDisplay.innerText = `Player Score = ${playerScore}`;
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    outcomeText.textContent = `Computer chose ${computerSelection}, Computer wins!`;
    computerScore++;
    computerScoreDisplay.innerText = `Computer Score = ${computerScore}`;
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    outcomeText.textContent = `Computer chose ${computerSelection}, Player wins!`;
    playerScore++;
    playerScoreDisplay.innerText = `Player Score = ${playerScore}`;
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    outcomeText.textContent = `Computer chose ${computerSelection}, Computer wins!`;
    computerScore++;
    computerScoreDisplay.innerText = `Computer Score = ${computerScore}`;
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    outcomeText.textContent = `Computer chose ${computerSelection}, Player wins!`;
    playerScore++;
    playerScoreDisplay.innerText = `Player Score = ${playerScore}`;
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    outcomeText.textContent = `Computer chose ${computerSelection}, Computer wins!`;
    computerScore++;
    computerScoreDisplay.innerText = `Computer Score = ${computerScore}`;
  }
}

function checkForWinner() {
  if (playerScore === 5) {
    buttons.classList.add("game-over");
    // buttons.setAttribute("style", "font-size: 4rem;");
    buttons.textContent = "";
    message.textContent = "Game Over! Player has 5 points.";
    endGame();
  } else if (computerScore === 5) {
    buttons.classList.add("game-over");
    // buttons.setAttribute("style", "font-size: 4rem;");
    buttons.textContent = "";
    message.textContent = "Game Over! Computer has 5 points.";
    endGame();
  }
}

function endGame() {
  const startButton = document.createElement("button");
  startButton.classList.add("button", "reset"); // Adding classes
  startButton.textContent = "START";
  buttons.appendChild(startButton);
  startButton.addEventListener("click", resetGame);
}

function resetGame() {
  playerScore = 0;
  computerScore = 0;
  playerScoreDisplay.innerText = "Player Score = 0";
  computerScoreDisplay.innerText = "Computer Score = 0";
  message.textContent = "";
  outcomeText.textContent = "CHOOSE YOUR WEAPON";

  // Remove the "START" button
  const startButton = document.querySelector(".reset");
  if (startButton) {
    startButton.removeEventListener("click", resetGame);
    startButton.remove();
  }

  // Clear the "game-over" class
  buttons.classList.remove("game-over");

  // Clear the contents of the buttons container
  buttons.innerHTML = "";

  // Re-add the RPS buttons
  buttons.appendChild(rockButton);
  buttons.appendChild(paperButton);
  buttons.appendChild(scissorsButton);

  // Reattach event listeners to RPS buttons
  rockButton.addEventListener("click", handleRPSButtonClick);
  scissorsButton.addEventListener("click", handleRPSButtonClick);
  paperButton.addEventListener("click", handleRPSButtonClick);
}

// Define a function to handle RPS button clicks
function handleRPSButtonClick() {
  if (!buttons.classList.contains("game-over")) {
    computerSelection = getComputerChoice();
    const playerSelection = this.dataset.choice; // Use data attribute
    playRound(playerSelection, computerSelection);
    checkForWinner();
  }
}
