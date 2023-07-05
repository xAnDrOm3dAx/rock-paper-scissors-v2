
// Randomly generate Rock, Paper or Scissors

function getComputerChoice() {
    const weapons = ["rock", "paper", "scissors"];
    const randomWeapon = weapons[Math.floor(Math.random() * weapons.length)]
    return randomWeapon;
}

console.log(getComputerChoice());

// Initialize scores at 0

let playerScore = 0
let computerScore = 0 

// Play a single round of the game


//--------------------Final Part------------------------
// Play the game 5 times for a round
