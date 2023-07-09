// 1. Start a new Git Repo.
// 2. Create a new HTML document and like the JS file.

// 3. Create a variable that holds the values of ‘Rock’, ‘Paper’ or ‘Scissors’ within an array.

const options = ["rock", "paper", "scissors"];


// 3. Create function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 

function getComputerChoice() {
    const randomIndex = options[Math.floor(Math.random() * options.length)];
    return randomIndex;
}


// 4.1 Define the possible outcomes. Check the winner based on the choices.

function checkWinner(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "tie";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors")) {
        return "player"
        } else {
            return "computer"
        }
}


// 4. Write a function that plays a single round of rock, paper scissors. 

function playRound(playerSelection, computerSelection) {
    const result = (checkWinner(playerSelection, computerSelection))
    if (result === `tie`) {
        return `Both players chose ${playerSelection}, it's a tie!`
    } else if (result === "player") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    
}

// 5. Test functions by using console.log to see the results:

// const playerSelection = "scissors";
// const computerSelection = getComputerChoice();
// console.log("Player chose:" + " " + playerSelection);
// console.log("Computer chose:" + " " + computerSelection);
// console.log(playRound(playerSelection, computerSelection));


// 5.1 Create function called getPlayerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 

function getPlayerChoice() {
    let validatedInput = false;
    while(validatedInput == false) {
        const choice = prompt ("Please choose Rock, Paper, or Scissors.");
        if (choice == null) {
            continue;
        }
        const choiceInLower = choice.toLowerCase();
        if (options.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}



// 5. Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.

function game() {
    let computerScore = 0;
    let playerScore = 0;
    console.log("Welcome! Please make your selection. Best of 5 rounds wins the game.");
    console.log("-------------------------------------------");
    
    for (let round = 1; round <= 5; round++) {
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();
        if (checkWinner(playerSelection, computerSelection) === "player") {
            playerScore++
        } else if (checkWinner(playerSelection, computerSelection) === "computer") {
            computerScore++
        } 

        console.log(`Round: ${round}`);
        console.log("Player:" + " " + playerSelection);
        console.log("Computer:" + " " + computerSelection);
        console.log(playRound(playerSelection, computerSelection)); 
        console.log(`Player score: ${playerScore}`) 
        console.log(`Computer score: ${computerScore}`);
        console.log("-------------------------------------------");
    }

    console.log("Game over...")
    if (playerScore > computerScore) {
        console.log("Player wins!");
    } else if (computerScore < playerScore) {
        console.log("Computer wins!");
    } else {
        console.log("We have a tie game! Please try again.");
    }
}


game()
    

        
                

    





