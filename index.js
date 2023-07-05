/*Your game is going to play against the computer, so begin with a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. We’ll use this function in the game to make the computer’s play. Tip: use the console to make sure this is returning the expected output before moving to the next step!*/



//Create variable which stores an array that holds the values of rock, paper and scissors.

const options = ["rock", "paper", "scissors"];


// Create a function called getComputerChoice that will randomly return either ‘Rock’, ‘Paper’ or ‘Scissors’. 
//Math.random always returns a floating point number between 0 and 1. Math.floor(x) returns the value of x rounded down to its nearest integer. Math.random() used with Math.floor() can be used to return random integers. 

function getComputerChoice () {
    let computerChoice = Math.floor(Math.random() * options.length)
    console.log(options[computerChoice])
}



 
 // Write a function that plays a single round of Rock Paper Scissors. The function should take two parameters - the playerSelection and computerSelection 
 
 
// Write a function which returns a string that declares the winner of the round like so: "You Lose! Paper beats Rock". Make your function’s playerSelection parameter case-insensitive (so users can input rock, ROCK, RocK or any other variation).


// Get player choice



//Write a NEW function called game(). Use the previous function inside of this one to play a 5 round game that keeps score and reports a winner or loser at the end.
