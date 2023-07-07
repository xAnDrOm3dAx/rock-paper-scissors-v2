
// Create a variable that holds the values of ‘Rock’, ‘Paper’ or ‘Scissors’ within an array.

const options = ["rock", "paper", "scissors"];

//  Create function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 

function getComputerChoice() {
    const randomIndex = options[Math.floor(Math.random() * options.length)];
    return randomIndex;
}

getComputerChoice()
