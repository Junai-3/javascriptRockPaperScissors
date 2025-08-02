


function getComputerChoice(humanChoice) {

    let computerRandom = Math.floor(Math.random() * 3)

    if (computerRandom === 0) {
        const computerChoice = "rock";
        playGame(humanChoice, computerChoice)
    }

    else if (computerRandom === 1) {
        const computerChoice = "paper";
        playGame(humanChoice, computerChoice);
    }

    else if (computerRandom === 2) {
        const computerChoice = "scissors";
        playGame(humanChoice, computerChoice);
    }


}


// which returns either rock, paper, scissors using the Math.random method


function getHumanChoice(humanChoice) {

    if (humanChoice.toLowerCase() === "rock") {
        getComputerChoice('rock');
    }

    else if (humanChoice.toLowerCase() === "paper") {
        getComputerChoice('paper');
    }

    else if (humanChoice.toLowerCase() === "scissors") {
        getComputerChoice('scissors');
    }

}

// use the prompt method to get user's input


function playGame(humanChoice, computerChoice) {


    const playerDisplay = document.getElementById('playerDisplay');
    const computerDisplay = document.getElementById('computerDisplay'); 
    const resultDisplay = document.getElementById('resultDisplay');

    // This function can call playRound several times, depending on the amount of rounds they entered to play
    


    
   if (humanChoice === computerChoice) {
       resultDisplay.textContent = `RESULT: It's a Tie!`;
   }
        
    else if (humanChoice == "rock" & computerChoice == "paper") {
        resultDisplay.textContent = `RESULT: You Lose!`;
    } 

    else if (humanChoice == "paper" & computerChoice == "rock") {
        resultDisplay.textContent = 'RESULT: You Win!';
    } 
    
    else if (humanChoice == "rock" & computerChoice == "scissors") {
        resultDisplay.textContent = 'RESULT: You Win!';
    } 

    else if (humanChoice == "scissors" & computerChoice == "rock") {
        resultDisplay.textContent = `RESULT: You Lose!`;
    } 

    else if (humanChoice == "paper" & computerChoice == "rock") {
        resultDisplay.textContent = 'RESULT: You Win!';
    } 

    else if (humanChoice == "rock" & computerChoice == "paper") {
        resultDisplay.textContent = `RESULT: You Lose!`;
    } 

    else if (humanChoice == "scissors" & computerChoice == "paper") {
        resultDisplay.textContent = 'RESULT: You Win!';
    } 

    else if (humanChoice == "paper" & computerChoice == "scissors") 
        resultDisplay.textContent = `RESULT: You Lose!`;

    
    playerDisplay.textContent = `PLAYER: ${humanChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;


}
