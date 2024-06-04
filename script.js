// Create list of options
const gameOptions = ['rock', 'paper', 'scissors']

// Initialize score variables
let humanScore = 0;
let computerScore = 0;

// Function to get a random computer choice
function getComputerChoice() {
    // get random number x between 0-2 (inclusive)
    let i = Math.floor(Math.random() * 3);

    // return index x of list y
    return gameOptions[i];
}

// Function to get the human players' choice
function getHumanChoice() {
    return prompt("Type your choice: Rock, Paper or Scissors: ").toLowerCase()
}

// Function to play a round of RPS
function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        // Identical choices, tie
        console.log(`Its a tie! You both chose ${humanChoice}`)
    } else if (
        humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper'
    ) {
        // Winning cases, human wins
        humanScore++
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
    } else {
        // All other cases, human loses
        computerScore++
        console.log(`You lose! ${humanChoice} loses to ${computerChoice}!`)
    }
}

let humanSelection = getHumanChoice();
let computerSelection = getComputerChoice();

playRound(humanSelection, computerSelection)