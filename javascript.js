
//Get from HTML
const Rockbtn = document.querySelector('#Rock');
const Paperbtn = document.querySelector('#Paper');
const Scissorsbtn = document.querySelector('#Scissors');
let popup = document.getElementById("popup");
let playerValue = document.getElementById("playerScore").innerHTML;
let compValue = document.getElementById('compScore').innerHTML;
let playerScore = parseInt(playerValue);
let compScore = parseInt(compValue);
let RockImg_player = document.createElement('img');
let PaperImg_player = document.createElement('img');
let ScissorsImg_player = document.createElement('img');
let RockImg_computer = document.createElement('img');
let PaperImg_computer = document.createElement('img');
let ScissorsImg_computer = document.createElement('img');
RockImg_player.src = "./images/Rock.png";
RockImg_player.setAttribute("width", "82");
PaperImg_player.src = "images/paper2.png";
PaperImg_player.setAttribute("width", "82");
ScissorsImg_player.src = "images/Scissors.png";
ScissorsImg_player.setAttribute("width", "82");
RockImg_computer.src = "./images/Rock.png";
RockImg_computer.setAttribute("width", "82");
PaperImg_computer.src = "images/paper2.png";
PaperImg_computer.setAttribute("width", "82");
ScissorsImg_computer.src = "images/Scissors.png";
ScissorsImg_computer.setAttribute("width", "82");



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
    UpdateTitle(playerSelection, computerSelection);
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
    document.getElementById('end-game-message').innerHTML = "";
    document.getElementById('preview-player').innerHTML = "?";
    document.getElementById('preview-computer').innerHTML = "?";
    document.getElementById("main-title").innerHTML = "Choose your weapon";
    document.getElementById("secondary-title").innerHTML = "First to score 5 points wins the game";
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
        document.getElementById("preview-player").appendChild(RockImg_player);
    } else if (playerSelection == "Scissors") {
        document.getElementById("preview-player").innerHTML = ""
        document.getElementById('preview-player').appendChild(ScissorsImg_player);
    } else if (playerSelection == "Paper") {
        document.getElementById("preview-player").innerHTML = ""
        document.getElementById('preview-player').appendChild(PaperImg_player);
    } 
    
    if (computerSelection == "Rock") {
        document.getElementById('preview-computer').innerHTML = ""
        document.getElementById('preview-computer').appendChild(RockImg_computer);
    } else if (computerSelection == "Scissors") {
        document.getElementById('preview-computer').innerHTML = ""
        document.getElementById('preview-computer').appendChild(ScissorsImg_computer);
    } else if (computerSelection == "Paper") {
        document.getElementById('preview-computer').innerHTML = ""
        document.getElementById('preview-computer').appendChild(PaperImg_computer);
    }
}

function UpdateTitle(playerSelection, computerSelection) {

    if (playerSelection == "Rock" && computerSelection == "Scissors") {
        document.getElementById("main-title").innerHTML = "You Won!";
        document.getElementById("secondary-title").innerHTML = "Rock beats scissors";
    } else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        document.getElementById("main-title").innerHTML = "You Won!";
        document.getElementById("secondary-title").innerHTML = "Scissors beats paper";
    } else if (playerSelection == "Paper" && computerSelection == "Rock") {
        document.getElementById("main-title").innerHTML = "You Won!";
        document.getElementById("secondary-title").innerHTML = "Paper beats rock";
    } else if (playerSelection == "Rock" && computerSelection == "Paper") {
        document.getElementById("main-title").innerHTML = "You Lost!";
        document.getElementById("secondary-title").innerHTML = "Paper beats Rock";
    } else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        document.getElementById("main-title").innerHTML = "You Lost!";
        document.getElementById("secondary-title").innerHTML = "Rock beats scissors";
    } else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        document.getElementById("main-title").innerHTML = "You Lost!";
        document.getElementById("secondary-title").innerHTML = "Scissors beats paper";
    } else if (playerSelection == "Paper" && computerSelection == "Paper") {
        document.getElementById("main-title").innerHTML = "Draw!";
        document.getElementById("secondary-title").innerHTML = "You both picked paper";
    } else if (playerSelection == "Rock" && computerSelection == "Rock") {
        document.getElementById("main-title").innerHTML = "Draw!";
        document.getElementById("secondary-title").innerHTML = "you both picked rock";
    } else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        document.getElementById("main-title").innerHTML = "Draw!";
        document.getElementById("secondary-title").innerHTML = "you both picked scissors";
    }
}