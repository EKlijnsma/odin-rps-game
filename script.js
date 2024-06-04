// create list of options
const gameOptions = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    // get random number x between 0-2 (inclusive)
    let i = Math.floor(Math.random() * 3);

    // return index x of list y
    return gameOptions[i];
}

function getHumanChoice() {
    // create input variable
    // ask for input and store answer in variable
    let i = parseInt(prompt("Type [0] for Rock, [1] for Paper or [2] for Scissors: "))

    // verify that input is valid?
    // if not valid, new iteration
    // If valid, return value
    return gameOptions[i]
}

console.log(getHumanChoice())
console.log(getComputerChoice())