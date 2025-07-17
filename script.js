
let humanScore = 0;

let computerScore = 0;


function getComputerChoice () {
    
    computerChoice = Math.floor(Math.random()*3)
    
    if (computerChoice == 0) {return "rock"}
        
    else if (computerChoice == 1) {return "paper"}
        
    else if (computerChoice == 2) {return "scissors"}
    

}
// which returns either rock, paper, scissors using the Math.random method


function getHumanChoice () {

    humanChoice = prompt.toLowerCase(("Rock, Paper, or Scissors?"))

    if (humanChoice == "rock") {return "rock"}
        
    else if (humanChoice == "paper") {return "paper"}
        
    else if (humanChoice == "scissors") {return "scissors"}
        
    else {return "ERROR! Invalid Input!"; getHumanChoice() }
}

// use the prompt method to get user's input


function playGame () {
    
// This function can call playRound several times, depending on the amount of rounds they entered to play
    
    function playRound (humanChoice, computerChoice) {}
}
