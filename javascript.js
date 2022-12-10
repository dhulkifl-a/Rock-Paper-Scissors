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
    console.log(computerSelection)
    const playerSelectionCapital = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    if (playerSelectionCapital == "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors!";
    } else if (playerSelectionCapital == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper!";
    } else if (playerSelectionCapital == "Paper" && computerSelection == "Rock"){
        return "You Win! Paper beats Rocks!"
    } else if (playerSelectionCapital == "Rock" && computerSelection == "Paper"){
        return "You lose! Paper beats Rock!";
    } else if (playerSelectionCapital == "Scissors" && computerSelection == "Rock"){
        return "You lose! Rock beats Scissors!";
    } else if (playerSelectionCapital == "Paper" && computerSelection == "Scissors"){
        return "You lose! Scissors beats Paper!";
    } else if (playerSelectionCapital == "Paper" && computerSelection == "Paper") {
        return "It's a Draw!";
    } else if (playerSelectionCapital == "Rock" && computerSelection == "Rock"){
        return "It's a Draw!";
    } else if (playerSelectionCapital == "Scissors" && computerSelection == "Scissors") {
        return "It's a Draw!"
    }
}

const playerSelection = "paper";
console.log(playRound(playerSelection));
