
// Randomly generate Rock, Paper or Scissors

function getComputerChoice() {
    const weapons = ["rock", "paper", "scissors"];
    const randomWeapon = weapons[Math.floor(Math.random() * weapons.length)]
    return randomWeapon;
}

// Play a single round of the game and define the possible outcomes

function playRound(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return `Both players chose ${playerSelection}, it's a tie!`;
    } else if (playerSelection === "rock" && computerSelection === "scissors") {
        return "Rock obliterates scissors, Player wins!";
    } else if (playerSelection === "scissors" && computerSelection === "rock") {
           return "Rock obliterates scissors, Computer wins!!";
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


function game() {

// Initialize scores at 0 and increment when playing

    let playerScore = 0
    let computerScore = 0

// Play the game 5 times per round

    for (let round = 1; round <= 5; round++) {
        const playerSelection = prompt ("Please choose rock, paper, or scissors");
        const computerSelection = getComputerChoice()

    

        const result = playRound(playerSelection, computerSelection)
        console.log("-----------------------------------");
        console.log(`Round ${round}: ${result}`);
        console.log("-----------------------------------");
        console.log("Computer:" + " " + computerSelection);
        console.log("-----------------------------------");
        console.log("Player:" + " " + playerSelection);
        console.log("-----------------------------------");

// Tally the scores and announce the winner

        if (result.includes("Player wins!")) {
            playerScore++
        } else if (result.includes("Computer wins!")) {
            computerScore++
        }
        
        console.log(`Player Score: ${playerScore}`)
        console.log("-----------------------------------");
        console.log(`Computer Score: ${computerScore}`)

    }
}

// Invoke game function

game()


// Score totals

// console.log("Computer Score" + " " + computerScore);
// console.log("Player Score" + " " + playerScore);
