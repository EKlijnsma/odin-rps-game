const gameOptions = ['rock', 'paper', 'scissors']

const score = document.querySelector("#score")
const results = document.querySelector("#results")
const rockBtn = document.querySelector("#r-btn");
const paperBtn = document.querySelector("#p-btn");
const scissorsBtn = document.querySelector("#s-btn");

rockBtn.addEventListener("click", () => playRound('rock', getComputerChoice()))
paperBtn.addEventListener("click", () => playRound('paper', getComputerChoice()))
scissorsBtn.addEventListener("click", () => playRound('scissors', getComputerChoice()))

let humanScore = 0
let computerScore = 0


function getComputerChoice() {
  const i = Math.floor(Math.random() * 3);
  return gameOptions[i];
}

function playRound(humanChoice, computerChoice) {
  if (humanChoice === computerChoice) {
    // Identical choices is a tie
    results.textContent = `Its a tie! You both chose ${humanChoice}`
    return
  } else if (
    // cases where the human wins
    humanChoice === 'rock' && computerChoice === 'scissors' ||
    humanChoice === 'paper' && computerChoice === 'rock' ||
    humanChoice === 'scissors' && computerChoice === 'paper'
  ) {
    results.textContent = `You win! ${humanChoice} beats ${computerChoice}!`
    updateScore(true)
  } else {
    results.textContent = `You lose! ${humanChoice} loses to ${computerChoice}!`
    updateScore(false)
  }
}

function updateScore(win) {
    if (win) {
        humanScore++
    } else {
        computerScore++
    }
    score.textContent = `player ${humanScore} : ${computerScore} computer`
}