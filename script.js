// Create list of options
const gameOptions = ['rock', 'paper', 'scissors']

// Initialize score variables
let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
    // get random number x between 0-2 (inclusive)
    let i = Math.floor(Math.random() * 3);

    // return index x of list y
    return gameOptions[i];
}

function getHumanChoice() {
    return prompt("Type your choice: Rock, Paper or Scissors: ").toLowerCase()
}