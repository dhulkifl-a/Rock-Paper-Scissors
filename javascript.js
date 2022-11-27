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

    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        return "You Win! Rock beats Scissors";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return "You Win! Scissors beats Paper";
    } else if (playerSelection == "Paper" && computerSelection == "Rock"){
        return "You Win! Rock beats Scissors"
    } else {
        return "You lose! Try again!"
    }
}

const playerSelection = "Rock";
console.log(playRound(playerSelection));
