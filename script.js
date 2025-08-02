


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
    

   let result = "";
    
   if (humanChoice === computerChoice) {
       result = "It's a Tie!";
       resultDisplay.textContent = `RESULT: ${console.log(result)}`;
   }
        
    else if (humanChoice == "rock" & computerChoice == "paper") {
        result = "You Lose!";
        resultDisplay.textContent = `RESULT: ${console.log(result)}`;
    } 

    else if (humanChoice == "paper" & computerChoice == "rock") {
        result = "You Win!";
    } 
    
    else if (humanChoice == "rock" & computerChoice == "scissors") {
        result = "You Win!";
        resultDisplay.textContent = `RESULT: ${console.log(result)}`;
    } 

    else if (humanChoice == "scissors" & computerChoice == "rock") {
        result = "You Lose!";
        resultDisplay.textContent = `RESULT: ${console.log(result)}`;
    } 

    else if (humanChoice == "paper" & computerChoice == "rock") {
        result = "You Win!";
        resultDisplay.textContent = `RESULT: ${console.log(result)}`;
    } 

    else if (humanChoice == "rock" & computerChoice == "paper") {
        result = "You Lose!";
        resultDisplay.textContent = `RESULT: ${console.log(result)}`;
    } 

    else if (humanChoice == "scissors" & computerChoice == "paper") {
        result = "You Win
        resultDisplay.textContent = `RESULT: ${console.log(result)}`;
    } 

    else if (humanChoice == "paper" & computerChoice == "scissors") 
        
        result = "You Lose!";
        resultDisplay.textContent = `RESULT: ${console.log(result)}`;

    
    playerDisplay.textContent = `PLAYER: ${humanChoice}`;
    computerDisplay.textContent = `COMPUTER: ${computerChoice}`;
    resultDisplay.textContent = `RESULT: ${console.log(result)}`;


    
    function playRound() { }
}
