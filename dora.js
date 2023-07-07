// 1. Start a new Git Repo.
// 2. Create a new HTML document and like the JS file.
// 3. Create a variable that holds the values of ‘Rock’, ‘Paper’ or ‘Scissors’ within an array.

const options = ["rock", "paper", "scissors"];


// 3. Create function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 

function getComputerChoice() {
    const randomIndex = options[Math.floor(Math.random() * options.length)];
    return randomIndex;
}


// 4.1 Check the winner based on the choices

function checkWinner(playerSelection, computerSelection) {

    if (playerSelection === computerSelection) {
        return "Tie";
    } else if ((playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "scissors" && computerSelection === "paper") ||
        (playerSelection === "paper" && computerSelection === "scissors")) {
        return "Player Wins"
        } else {
            return "Computer Wins"
        }
}


// 4. Write a function that plays a single round of rock, paper scissors

function playRound(playerSelection, computerSelection) {
    const result = (checkWinner(playerSelection, computerSelection))
    if (result === `Tie`) {
        return `Both players chose ${playerSelection}, it's a tie!`
    } else if (result === "Player Wins") {
        return `You win! ${playerSelection} beats ${computerSelection}`
    } else if (result === "Computer Wins") {
        return `You lose! ${computerSelection} beats ${playerSelection}`
    }
    
}

// 5. Test functions by using console.log to see the results:

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log("Player chose:" + " " + playerSelection);
console.log("Computer chose:" + " " + computerSelection);
console.log(playRound(playerSelection, computerSelection));



// 5. Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.


    

        
                

    





