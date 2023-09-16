
//Get from HTML
const Rockbtn = document.querySelector('#Rock');
const Paperbtn = document.querySelector('#Paper');
const Scissorsbtn = document.querySelector('#Scissors');
let popup = document.getElementById("popup");
let playerValue = document.getElementById("playerScore").innerHTML;
let compValue = document.getElementById('compScore').innerHTML;
let playerScore = parseInt(playerValue);
let compScore = parseInt(compValue);
let RockImg = document.createElement('img');
let PaperImg = document.createElement('img');
let ScissorsImg = document.createElement('img');
RockImg.src = "./images/Rock.png";
RockImg.setAttribute("width", "82");
PaperImg.src = "images/paper2.png";
PaperImg.setAttribute("width", "82");
ScissorsImg.src = "images/Scissors.png";
ScissorsImg.setAttribute("width", "82");



//Event Listeners
Rockbtn.addEventListener('click', () => handleClick('Rock'));
Paperbtn.addEventListener('click', () => handleClick('Paper'));
Scissorsbtn.addEventListener('click', () => handleClick('Scissors') );


//Functions

//Get Computer Choice
function getComputerChoice() {
    let num = Math.floor((Math.random() * 3) + 1);

    if (num == 1) {
        return "Rock"
    } else if (num == 2) {
        return "Paper"
    } else {
        return "Scissors"
    }
}

//Handle Click Event
function handleClick(playerSelection){
    const computerSelection = getComputerChoice();
    playRound(playerSelection, computerSelection);


    //Update 
    UpdateImg(playerSelection, computerSelection);
    UpdateScore(playerScore, compScore);
    isGameOver(playerScore, compScore);
}

//Play One Round of Game
function playRound(playerSelection, computerSelection) {
    console.log("Computer chose " + computerSelection)
    console.log("Player chose " + playerSelection)
    if (playerSelection == "Rock" && computerSelection == "Scissors") {
       return playerScore++;
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return playerScore++;
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return playerScore++;
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        return compScore++;
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return compScore++;
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return compScore++;
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return null;
    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        return null;
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        return null;
    }
}

//Update the Score and attach to HTML
function UpdateScore(playerScore, compScore){
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('compScore').innerHTML = compScore;
}

function openPopup(){
    popup.classList.add("open-popup");
}

function closePopup() {
    popup.classList.remove("open-popup");
    playerScore = 0;
    compScore = 0;
    document.getElementById('playerScore').innerHTML = playerScore;
    document.getElementById('compScore').innerHTML = compScore;
    document.getElementById('end-game-message').innerHTML = ""
    document.getElementById('preview-player').innerHTML = "?"
    document.getElementById('preview-computer').innerHTML = "?"
}

//Check if Game is over
function isGameOver(playerScore, compScore) {

    if (playerScore == 5) {
        document.getElementById('end-game-message').innerHTML = "Congratulations, You Win!"
        openPopup()
    } else if (compScore == 5) {
        document.getElementById('end-game-message').innerHTML = "You Lost, Computer Wins!"
        openPopup()
    }

}

function UpdateImg(playerSelection, computerSelection) {
    if (playerSelection == "Rock") {
        document.getElementById("preview-player").innerHTML = ""
        document.getElementById("preview-player").appendChild(RockImg);
    } else if (playerSelection == "Scissors") {
        document.getElementById("preview-player").innerHTML = ""
        document.getElementById('preview-player').appendChild(ScissorsImg);
    } else if (playerSelection == "Paper") {
        document.getElementById("preview-player").innerHTML = ""
        document.getElementById('preview-player').appendChild(PaperImg);
    } 
    
    if (computerSelection == "Rock") {
        document.getElementById('preview-computer').innerHTML = ""
        document.getElementById('preview-computer').appendChild(RockImg);
    } else if (computerSelection == "Scissors") {
        document.getElementById('preview-computer').innerHTML = ""
        document.getElementById('preview-computer').appendChild(ScissorsImg);
    } else if (computerSelection == "Paper") {
        document.getElementById('preview-computer').innerHTML = ""
        document.getElementById('preview-computer').appendChild(PaperImg);
    }
}

