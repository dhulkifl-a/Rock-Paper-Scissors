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

const playerSelection = "paper";

function playRound(playerSelection){
    const computerSelection = getComputerChoice();
    console.log(computerSelection)
    const playerSelectionCapital = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1)
    if (playerSelectionCapital == "Rock" && computerSelection == "Scissors") {
        return true;
    } else if (playerSelectionCapital == "Scissors" && computerSelection == "Paper") {
        return true;
    } else if (playerSelectionCapital == "Paper" && computerSelection == "Rock"){
        return true;
    } else if (playerSelectionCapital == "Rock" && computerSelection == "Paper"){
        return false;
    } else if (playerSelectionCapital == "Scissors" && computerSelection == "Rock"){
        return false;
    } else if (playerSelectionCapital == "Paper" && computerSelection == "Scissors"){
        return false;
    } else if (playerSelectionCapital == "Paper" && computerSelection == "Paper") {
        return NaN;
    } else if (playerSelectionCapital == "Rock" && computerSelection == "Rock"){
        return NaN;
    } else if (playerSelectionCapital == "Scissors" && computerSelection == "Scissors") {
        return NaN;
    }
}

function game(){
    let playerScore = 0;
    let computerScore = 0;
    let value = playRound();
    for (let i = 0; i < 5; i++){
        if (value == true) {
            playerScore ++;
        } else if (value == false) {
            computerScore ++;
        }
        console.log(playerScore);
        console.log(computerScore);
    }
}

