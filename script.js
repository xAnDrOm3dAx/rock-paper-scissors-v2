// Grab all necessary elements
const rockButton = document.querySelector('[data-choice="rock"]');
const paperButton = document.querySelector('[data-choice="paper"]');
const scissorsButton = document.querySelector('[data-choice="scissors"]');
const startButton = document.querySelector(".start-button");
const playerWeapon = document.querySelector(".player-weapon");
const computerWeapon = document.querySelector(".computer-weapon");
const outcomeText = document.querySelector(".win-or-lose");
const gameOver = document.querySelector(".game-over");
const weaponBtns = document.querySelectorAll(".weapon-btn");
const playerScoreDisplay = document.querySelector(".player-score");
const computerScoreDisplay = document.querySelector(".computer-score");

rockButton.addEventListener("click", () => {
  handlePlayerChoice(Weapon.ROCK);
});
scissorsButton.addEventListener("click", () => {
  handlePlayerChoice(Weapon.SCISSORS);
});
paperButton.addEventListener("click", () => {
  handlePlayerChoice(Weapon.PAPER);
});

function handlePlayerChoice(playerSelection) {
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  checkForWinner();
}

startButton.addEventListener("click", () => {
  resetGame();
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
  const winningThreshold = 5;
  if (playerScore === winningThreshold) {
    weaponBtns.forEach((button) => {
      button.classList.add("hidden");
    });
    startButton.style.display = "block";
    outcomeText.textContent = "GAME OVER...";
    gameOver.textContent = "Player has 5 points";
    // playerWeapon.textContent = "🙌";
    // computerWeapon.textContent = "💀";
  } else if (computerScore === winningThreshold) {
    weaponBtns.forEach((button) => {
      button.classList.add("hidden");
    });
    startButton.style.display = "block";
    outcomeText.textContent = "GAME OVER...";
    gameOver.textContent = "Computer has 5 points";
    // playerWeapon.textContent = "💀";
    // computerWeapon.textContent = "🙌";
  }
}

function resetGame() {
  outcomeText.textContent = "CHOOSE YOUR WEAPON!";
  gameOver.textContent = "PREPARE FOR BATTLE!";
  playerScore = 0;
  playerScoreDisplay.textContent = `Player Score = ${playerScore}`;
  playerWeapon.textContent = "🎲";
  computerScore = 0;
  computerScoreDisplay.textContent = `Computer Score = ${computerScore}`;
  computerWeapon.textContent = "🎲";
  startButton.style.display = "none";
  weaponBtns.forEach((button) => {
    button.classList.remove("hidden");
  });
}
