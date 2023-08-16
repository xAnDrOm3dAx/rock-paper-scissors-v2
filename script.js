// Grab all necessary elements

const rockButton = document.querySelector(".rock");
const paperButton = document.querySelector(".paper");
const scissorsButton = document.querySelector(".scissors");
const outcomeHeading = document.querySelector(".win-or-lose");

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

// Create function called getPlayerChoice that will ask the user to choose and then validate the input. Convert Input to lower.

// function getPlayerChoice() {
//   let playerChoice = false;
//   while (playerChoice === false) {
//     const playerInput = prompt("Please choose rock, paper, or scissors");
//     if (playerInput === null) {
//       continue;
//     }
//     const playerInputInLower = playerInput.toLowerCase();
//     if (choices.includes(playerInputInLower)) {
//       return playerInputInLower;
//     }
//   }
// }

// Play a single round of the game and define the possible outcomes

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    outcomeHeading.textContent = `Both players chose ${playerSelection}, it's a tie!`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    outcomeHeading.textContent = "Rock obliterates scissors, Player wins!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    outcomeHeading.textContent = "Rock obliterates scissors, Computer wins!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    outcomeHeading.textContent = "Scissors shreds paper, Player wins!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    outcomeHeading.textContent = "Scissors shreds paper, Computer wins!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    outcomeHeading.textContent = "Paper smothers rock, Player wins!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    outcomeHeading.textContent = "Paper smothers rock, Computer wins!";
  }
}

//  Add event listeners for individual RPS buttons.
rockButton.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  const playerSelection = "rock";
  playRound(playerSelection, computerSelection);
});

scissorsButton.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  const playerSelection = "scissors";
  playRound(playerSelection, computerSelection);
});

paperButton.addEventListener("click", () => {
  computerSelection = getComputerChoice();
  const playerSelection = "paper";
  playRound(playerSelection, computerSelection);
});

// Create a function called game, the previous function (playRound()) inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

// function game() {
//   // Play the game 5 times per round, increment the winner score by one, log the choices and total score for player and computer on each round.

//   for (let round = 1; round <= 5; round++) {
//     const playerSelection = getPlayerChoice();
//     const computerSelection = getComputerChoice();
//     const result = playRound(playerSelection, computerSelection);

//     if (result.includes("Player")) {
//       playerScore++;
//     } else if (result.includes("Computer")) {
//       computerScore++;
//     }

//     console.log("-----------------------------------");
//     console.log(`Round ${round}`);
//     console.log("Computer chose:" + " " + `${computerSelection}`);
//     console.log("Player chose:" + " " + `${playerSelection}`);
//     console.log(`${result}`);
//     console.log(`Player Score: ${playerScore}`);
//     console.log(`Computer Score: ${computerScore}`);
//   }

//   if (playerScore > computerScore) {
//     console.log("-----------------------------------");
//     console.log("Game Over! Player Wins!");
//   } else if (playerScore < computerScore) {
//     console.log("-----------------------------------");
//     console.log("Game Over, Computer Wins!");
//   } else {
//     console.log("-----------------------------------");
//     console.log("Game Over, it's a tie! Please try again.");
//   }
// }

// // Invoke game function

// game();
