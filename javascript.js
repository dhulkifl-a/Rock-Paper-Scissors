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

function playRound(){
    let playerSelection = prompt("Pick between Rock, Paper or Scissors")
    const computerSelection = getComputerChoice();
    console.log("Computer chose " + computerSelection)
    const playerSelectionCapital = playerSelection.charAt(0).toUpperCase() + playerSelection.slice(1).toLowerCase
    console.log("Player chose "+ playerSelectionCapital)
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
        return null;
    } else if (playerSelectionCapital == "Rock" && computerSelection == "Rock"){
        return null;
    } else if (playerSelectionCapital == "Scissors" && computerSelection == "Scissors") {
        return null;
    }
}


function game(){
    let playerScore = 0;
    let computerScore = 0;
    for (let i = 0; i < 5; i++){
    let value = playRound();
        if (value == true) {
            playerScore ++;
            console.log("player wins")
            console.log("The players Score is " + playerScore)
            console.log("The computers Score is " + computerScore)
        } else if (value == false) {
            computerScore ++;
            console.log("computer wins")
            console.log("The computers Score is " + computerScore)
            console.log("The players Score is " + playerScore)
        } else {
            console.log("It's a Draw!")
            console.log("The computers Score is " + computerScore)
            console.log("The players Score is " + playerScore)
        }
        console.log("------------------")
    }
    
    if (playerScore > computerScore) {
        return "You won the game!"
    } else if (computerScore > playerScore) {
        return "gg you lost to the computer!"
    } else {
        return "It's a draw, play again?"
    }
}

console.log(game())