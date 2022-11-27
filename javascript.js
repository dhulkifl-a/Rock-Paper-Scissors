
function getComputerChoice() {
    let choice = Math.floor(Math.random() * (3 - 1 + 1)) + 1;

    console.log(choice)

    if (choice == 3) {
        return "Paper";
    } else if (choice == 2) {
        return "Rock"
    } else {
        return "scissors"
    }
}