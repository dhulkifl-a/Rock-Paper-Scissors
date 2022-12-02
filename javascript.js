function getComputerChoice(){
    let num = Math.floor((Math.random() * 3) + 1);
    
    if (num == 1) {
        return "Rock"
    } else if (num == 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

function playRound(playerSelection){
    const computerSelection = getComputerChoice();
    const playerSelectionCapital = playerSelection.CharAt(0).toUpperCase() + playerSelection.slice(1)
    if (playerSelectionCapital == "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors!";
    } else if (playerSelectionCapital == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper!";
    } else if (playerSelectionCapital == "Paper" && computerSelection == "Rock"){
        return "You Win! Rock beats Scissors!"
    } else if (playerSelectionCapital == "Rock" && computerSelection == "Paper"){
        return "You lose! Paper beats Rock!"
    } else if (playerSelectionCapital == "Scissors" && computerSelection == "Rock"){
        return "You lose! Rock beats Scissors!"
    } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        return "You lose! Scissors beats Paper!"
    }
}

const playerSelection = "Rock";
console.log(playRound(playerSelection));
