// create list of options
const gameOptions = ['Rock', 'Paper', 'Scissors']

function getComputerChoice() {
    // get random number x between 0-2 (inclusive)
    let x = Math.floor(Math.random() * 3);

    // return index x of list y
    return gameOptions[x];
}

console.log(getComputerChoice())