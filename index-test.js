// Create a variable that holds the values of ‘Rock’, ‘Paper’ or ‘Scissors’ within an array.

const choices = ["rock", "paper", "scissors"];

// Create function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’.

function getComputerChoice() {
  const randomIndex = choices[Math.floor(Math.random() * choices.length)];
  return randomIndex;
}

// Create function called getPlayerChoice that will ask the user to choose and then validate the input

function getPlayerChoice() {}

// Play a single round of the game and define the possible outcomes

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return `Both players chose ${playerSelection}, it's a tie!`;
  } else if (playerSelection === "rock" && computerSelection === "scissors") {
    return "Rock obliterates scissors, Player wins!";
  } else if (playerSelection === "scissors" && computerSelection === "rock") {
    return "Rock obliterates scissors, Computer wins!";
  } else if (playerSelection === "scissors" && computerSelection === "paper") {
    return "Scissors shreds paper, Player wins!";
  } else if (playerSelection === "paper" && computerSelection === "scissors") {
    return "Scissors shreds paper, Computer wins!";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "Paper smothers rock, Player wins!";
  } else if (playerSelection === "rock" && computerSelection === "paper") {
    return "Paper smothers rock, Computer wins!";
  }
}

// Create a function called game, the previous function (playRound()) inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

function game() {
  // Initialize scores at 0 and increment when playing

  let playerScore = 0;
  let computerScore = 0;
  console.log(
    "Welcome! Please make your selection. Best of 5 rounds wins the game."
  );

  // Play the game 5 times per round, increment the winner score by one, log the choices and total score for player and computer on each round.

  for (let round = 1; round <= 5; round++) {
    console.log("-----------------------------------");
    console.log(`Round ${round}`);
    console.log("Computer chose:" + " " + `${computerSelection}`);
    console.log("Player chose:" + " " + `${playerSelection}`);
    console.log(`${result}`);
    console.log(`Player Score: ${playerScore}`);
    console.log(`Computer Score: ${computerScore}`);
  }
}

// Invoke game function

game();
