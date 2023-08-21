// Alternative methods

function playRound(playerSelection, computerSelection) {
  // Convert playerSelection to lowercase
  playerSelection = playerSelection.toLowerCase();

  // Define the possible outcomes
  const outcomes = {
    rock: {
      rock: "It's a tie! Both players chose Rock.",
      paper: "You Lose! Paper beats Rock.",
      scissors: "You Win! Rock beats Scissors.",
    },
    paper: {
      rock: "You Win! Paper beats Rock.",
      paper: "It's a tie! Both players chose Paper.",
      scissors: "You Lose! Scissors beat Paper.",
    },
    scissors: {
      rock: "You Lose! Rock beats Scissors.",
      paper: "You Win! Scissors beat Paper.",
      scissors: "It's a tie! Both players chose Scissors.",
    },
  };

  // Check the outcome based on the choices
  if (outcomes[playerSelection] && outcomes[playerSelection][computerSelection]) {
    return outcomes[playerSelection][computerSelection];
  } else {
    return "Invalid input. Please choose Rock, Paper, or Scissors.";
  }
}

function getComputerChoice() {
  // Generate a random number between 0 and 2
  const randomNumber = Math.floor(Math.random() * 3);

  // Map the random number to Rock, Paper, or Scissors
  switch (randomNumber) {
    case 0:
      return "rock";
    case 1:
      return "paper";
    case 2:
      return "scissors";
  }
}

function game() {
  let playerScore = 0;
  let computerScore = 0;

  for (let round = 1; round <= 5; round++) {
    const playerSelection = prompt("Enter your choice (Rock, Paper, or Scissors):");
    const computerSelection = getComputerChoice();

    const result = playRound(playerSelection, computerSelection);
    console.log(`Round ${round}: ${result}`);

    if (result.includes("Win")) {
      playerScore++;
    } else if (result.includes("Lose")) {
      computerScore++;
    }

    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }

  if (playerScore > computerScore) {
    console.log("You win the game!");
  } else if (playerScore < computerScore) {
    console.log("You lose the game!");
  } else {
    console.log("It's a tie! The game ends in a draw.");
  }
}

// Start the game
game();
