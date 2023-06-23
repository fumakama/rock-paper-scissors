// Return the choice of computer

function getComputerChoice() {
    let randomOfThree = Math.floor(Math.random() * 3);
    results = ["rock", "paper", "scissors"];
    return results[randomOfThree];
}

// Function returns the result of one round of the game

function getRoundResult(playerSelection, computerSelection) {
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

// Function Updates the page after each played round of the game
function playRound(playerSelection, score) {
    // Get computer choice
    let computerSelection = getComputerChoice();
    // Get the elements of the page
    const para = document.querySelector('.paraResult');
    const overallScore = document.querySelector('.overall');
    // Get result of the round and update the page content
    let roundResult = getRoundResult(playerSelection, computerSelection);
    para.textContent = roundResult;
    // Update score and print it
    score = updateScore(roundResult, score);
    overallScore.textContent = `Player - ${score.player} : Computer - ${score.computer}`;

    // Print out the result of the round and the whole score after it to the console
    console.log(roundResult);
    console.log(`Player - ${score.player} : Computer - ${score.computer}`);
}



// Function updates the score 
function updateScore(roundResult, score) {
    scoreMarker = roundResult.substring(0, 5);
    if (scoreMarker === "You W") {
        score.player++;
    } else if (scoreMarker === "You L") {
        score.computer++;
    } 
    return score;
}
// Function checks if it is a gameover
function checkGameover(score) {
    let gameover = document.querySelector('.gameover');
    if (score.player === 5) {
        // Output for player winner
        gameover.textContent = 'Game Over! Player won the Match!';
        
    } else if (score.computer === 5) {
        // Output for computer winner 
        gameover.textContent = 'Game Over! Computer won the Match!';
    }
}

// Main Game function
function game() {
    
    // Declare the score object
    let score = {
        player: 0,
        computer: 0
    }

    // Get the content of .gameover paragraph
    let gameover = document.querySelector('.gameover');
    gameover.textContent = '';

    // Add the logic to 3 buttons with three different variants
    const btnRock = document.querySelector('#rock');
    btnRock.addEventListener('click', () => {
        playRound('rock', score);
        checkGameover(score);
    });

    const btnPaper = document.querySelector('#paper');
    btnPaper.addEventListener('click', () => {
        playRound('paper', score);
        checkGameover(score);
    });
    const btnScissors = document.querySelector('#scissors');
    btnScissors.addEventListener('click', () => {
        playRound('scissors', score);
        checkGameover(score);
    });
}

// Call the main function after loading the page
game();