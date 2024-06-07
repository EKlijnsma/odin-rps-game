const gameOptions = ['rock', 'paper', 'scissors']


function getComputerChoice() {
    const i = Math.floor(Math.random() * 3);
    return gameOptions[i];
}


function getHumanChoice() {
    // Case-insensitive, but the user must add a valid response. If no valid response is given (e.g. 'Dog") 
    // the player loses the round because of how the playRound function is set-up
    return prompt("Type your choice: Rock, Paper or Scissors: ").toLowerCase()
}


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) {
        // Identical choices is a tie
        console.log(`Its a tie! You both chose ${humanChoice}`)
        return 'tie'
    } else if (
        // cases where the human wins
        humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper'
    ) {
        console.log(`You win! ${humanChoice} beats ${computerChoice}!`)
        return 'win'
    } else {
        console.log(`You lose! ${humanChoice} loses to ${computerChoice}!`)
        return 'loss'
    }
}

function displayResult(humanScore, computerScore) {
    const score = `${humanScore} - ${computerScore}`
    if (computerScore === humanScore) {
        console.log(`The game is tied: ${score}`)
    } else if (computerScore > humanScore) {
        console.log(`You lost: ${score}`)
    } else {
        console.log(`You won: ${score}`)
    }
}

const rockBtn = document.querySelector("#r-btn");
const paperBtn = document.querySelector("#p-btn");
const scissorsBtn = document.querySelector("#s-btn");
rockBtn.addEventListener("click", () => playRound('rock', getComputerChoice()))
paperBtn.addEventListener("click", () => playRound('paper', getComputerChoice()))
scissorsBtn.addEventListener("click", () => playRound('scissors', getComputerChoice()))