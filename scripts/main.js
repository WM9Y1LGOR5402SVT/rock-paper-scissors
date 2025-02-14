function getComputerChoice() {
    let options = ["rock", "paper", "scissors"];
    let choice = Math.floor(Math.random() * 3);
    // console.log("Choice: ", choice);
    // console.log("Option: ", options[choice]);
    return options[choice];
}

function checkPlayerChoice(playerChoice) {
    playerChoice = playerChoice.toLowerCase();
    if (playerChoice === "rock" || playerChoice === "paper" || playerChoice === "scissors") {
        return playerChoice;
    } 
    else {
        playerChoice = prompt("Your option was not rock, paper or scissors!\nEnter your choice again: ");
        checkPlayerChoice(playerChoice);
        return playerChoice;
    }
}

function getPlayerChoice() {
    let playerChoice = prompt("Choose rock, paper, or scissors: ");
    playerChoice = checkPlayerChoice(playerChoice);
    return playerChoice;
}

//Potential improvements: Extract Tie Conditions (if playerChoice === computerChoice)
function computeWinner(playerChoice, computerChoice) {
    if (playerChoice === "rock") {
        if (computerChoice === "scissors") {
            return "Player Wins! Computer chose scissors."
        } else if (computerChoice === "paper") {
            return "Computer Wins! Computer chose paper."
        } else {
            return "Tie! Computer also chose rock."
        }
    }
    else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
            return "Player Wins! Computer chose rock."
        } else if (computerChoice === "scissors") {
            return "Computer Wins! Computer chose scissors."
        } else {
            return "Tie! Computer also chose paper."
        }
    }
    else {
        // playerChoice is scissors 
        if (computerChoice === "paper") {
            return "Player Wins! Computer chose paper."
        } else if (computerChoice === "rock") {
            return "Computer Wins! Computer chose rock."
        } else {
            return "Tie! Computer also chose scissors."
        }
    }
}

function startRound() {
    let playerChoice = getPlayerChoice();
    console.log("Player Choice: ", playerChoice);
    let computerChoice = getComputerChoice();
    console.log("Computer Choice: ", computerChoice);
    alert(computeWinner(playerChoice, computerChoice));
}

function playGame(numberOfRounds) {
    for (let i = 0; i < numberOfRounds; i++) {
        startRound();
    }
}

playGame(5);