//This needs to be updated
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

//Can be kept the same but remove then prompt
function playRound(){
    const Rock = document.querySelector('.Rock');
    Rock.addEventListener('click', () => {
        playerSelection = 'Rock'
    })

    const Paper = document.querySelector('.Paper');
    Rock.addEventListener('click', () => {
        playerSelection = 'Paper'
    })

    const Scissors = document.querySelector('.Scissors');
    Rock.addEventListener('click', () => {
        playerSelection = 'Rock'
    })
    //let playerSelection = prompt("Pick between Rock, Paper or Scissors")
    const computerSelection = getComputerChoice();
    console.log("Computer chose " + computerSelection)
    console.log("Player chose "+ playerSelection)
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return true;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return true;
    } else if (playerSelection == "Paper" && computerSelection == "Rock"){
        return true;
    } else if (playerSelection == "Rock" && computerSelection == "Paper"){
        return false;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock"){
        return false;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors"){
        return false;
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return null;
    } else if (playerSelection == "Rock" && computerSelection == "Rock"){
        return null;
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        return null;
    }
}


function game(){
    let playerScore = 0;
    let computerScore = 0;
    
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
    
    
    if (playerScore > computerScore) {
        return "You won the game!"
    } else if (computerScore > playerScore) {
        return "gg you lost to the computer!"
    } else {
        return "It's a draw, play again?"
    }
}

// console.log(game())