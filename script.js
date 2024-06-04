// Create list of options
const gameOptions = ['rock', 'paper', 'scissors']

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
        return 'tie'
    } else if (
        humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper'
    ) {
        // Winning cases, human wins
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
        return 'win'
    } else {
        // All other cases, human loses
        console.log(`You lose! ${humanChoice} loses to ${computerChoice}!`)
        return 'loss'
    }
}

// Function to play a full game (5 rounds) of RPS
function playGame(n) {
    // Initialize score variables
    let humanScore = 0;
    let computerScore = 0;
    
    for (let i = 0; i < n; i++) {
        let result = playRound(getHumanChoice(), getComputerChoice())
        if (result === 'win') {
            humanScore++
        } else if (result === 'loss') {
            computerScore++;
        }
    }
    
    if (computerScore === humanScore) {
        console.log(`The game is tied: ${humanScore} - ${computerScore}`)
    } else if (computerScore > humanScore) {
        console.log(`You lost: ${humanScore} - ${computerScore}`)
    } else {
        console.log(`You won: ${humanScore} - ${computerScore}`)
    }
}

playGame(5);