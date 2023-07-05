
//--------------------Step One--------------------------
// Randomly generate Rock, Paper or Scissors

function getComputerChoice() {
    const weapons = ["Rock", "Paper", "Scissors"];
    const randomWeapon = weapons[Math.floor(Math.random() * weapons.length)]
    return randomWeapon;
}

console.log(getComputerChoice());


//---------------------Step Two-------------------------
// Play a single round of the game (this is the game logic)



//--------------------Final Part------------------------
// Play the game 5 times for a round
