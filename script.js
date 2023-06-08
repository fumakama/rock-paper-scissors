// Return the choice of computer

function getComputerChoice() {
    let randomOfThree = Math.floor(Math.random() * 3);
    results = ["rock", "paper", "scissors"];
    return results[randomOfThree];
}

// Return the result of one round of the game

function playRound(playerSelection, computerSelection) {
    let result = (playerSelection === "rock" && 
        computerSelection === "scissors") ? "You Win! Rock beats Scissors" :
                 (playerSelection === "rock" &&
        computerSelection === "paper") ? "You Lose! Paper beats Rock" :
                 (playerSelection === "paper" && 
        computerSelection === "rock") ? "You Win! Paper beats Rock" :
                 (playerSelection === "paper" && 
        computerSelection === "scissors") ? "You Lose! Scissors beat Paper" :
                 (playerSelection === "scissors" && 
        computerSelection === "paper") ? "You Win! Scissors beat Paper" :
                 (playerSelection === "scissors" && 
        computerSelection === "rock") ? "You Lose! Rock beats Scissors" :
                 "It's a Tie!"
    return result;
}

// Main Game function
function game() {

    let pScore = 0;
    let cScore = 0;

    for (let i = 0; i < 5; i++) {

        computerSelection = getComputerChoice();
        
        // Here the loop prompts user untill he makes a valid choice
        do {
            playerSelection = prompt("Rock, Paper or Scissors?").toLowerCase();
        } while (playerSelection != "rock" && playerSelection != "paper" && playerSelection != "scissors");

        // Get the resulting string of the game
        let roundResult = playRound(playerSelection, computerSelection);
        // Check and change the score of each player
        scoreMarker = roundResult.substring(0, 5);
        if (scoreMarker === "You W") {
            pScore++;
        } else if (scoreMarker === "You L") {
            cScore++;
        } 

        // Print out the result of the round and the whole score after it
        console.log(roundResult);
        console.log(`Player - ${pScore} : Computer - ${cScore}`);
    }
}

// Call the main function after loading the page
game();