
//--------------------Step One--------------------------
// Randomly generate Rock, Paper or Scissors

function getComputerChoice () {
    const weapons = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * weapons.length)
    const computerChoice = weapons[randomIndex]
    return computerChoice
}

console.log(getComputerChoice())


//---------------------Step Two-------------------------
// Play a single round of the game (this is the game logic)


function playRound(playerSelection, computerSelection) {
        if (playerSelection === computerSelection) {
            return "We have a tie!"
        } 
    } 
   
  const playerSelection = "rock";
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));


//--------------------Final Part------------------------
// Play the game 5 times for a round
