// Grab all necessary elements
const rockButton = document.querySelector('[data-choice="rock"]');
const paperButton = document.querySelector('[data-choice="paper"]');
const scissorsButton = document.querySelector('[data-choice="scissors"]');
const startButton = document.querySelector(".start-button");
const playerWeapon = document.querySelector(".player-weapon");
const computerWeapon = document.querySelector(".computer-weapon");
const outcomeText = document.querySelector(".win-or-lose");
const gameOver = document.querySelector(".game-over");
const weaponButtons = document.querySelectorAll(".weapon-btn");
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

startButton.addEventListener("click", () => {
  resetGame();
});

// Initialize scores at 0
let playerScore = 0;
let computerScore = 0;

// Create an Enum which holds three properties and thier values which represent rock, paper ands scissors.
const Weapon = {
  ROCK: "✊🏼",
  PAPER: "🤚🏼",
  SCISSORS: "✌🏼",
};

function handlePlayerChoice(playerSelection) {
  playerWeapon.classList.add("weapon-animation");
  computerWeapon.classList.add("weapon-animation");
  gameOver.classList.add("weapon-animation");
  computerSelection = getComputerChoice();
  playRound(playerSelection, computerSelection);
  setTimeout(() => {
    // Delay slightly to allow animation to play
    playerWeapon.classList.remove("weapon-animation");
    computerWeapon.classList.remove("weapon-animation");
    gameOver.classList.remove("weapon-animation");
  }, 200); // Adjust the delay as needed based on animation duration
  checkForWinner();
}

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
    weaponButtons.forEach((button) => {
      button.style.display = "none";
    });
    startButton.style.display = "block";
    outcomeText.textContent = "Game Over...";
    gameOver.textContent = "Player has 5 points";
  } else if (computerScore === winningThreshold) {
    weaponButtons.forEach((button) => {
      button.style.display = "none";
    });
    startButton.style.display = "block";
    outcomeText.textContent = "Game Over...";
    gameOver.textContent = "Computer has 5 points";
  }
}

function resetGame() {
  outcomeText.textContent = "Choose Your Weapon!";
  gameOver.textContent = "Prepare For Battle!";
  playerScore = 0;
  playerScoreDisplay.textContent = `Player Score = ${playerScore}`;
  playerWeapon.textContent = "🎲";
  computerScore = 0;
  computerScoreDisplay.textContent = `Computer Score = ${computerScore}`;
  computerWeapon.textContent = "🎲";
  startButton.style.display = "none";
  weaponButtons.forEach((button) => {
    button.style.display = "flex";
  });
}
