
let humanScore = 0;

let computerScore = 0;

const beginGame = document.getElementById("startGame");

beginGame.addEventListener('click', function() {
    alert ("This Event Listener Works!")
})

function getComputerChoice () {
    
    let computerChoice = Math.floor(Math.random()*3)
    
    if (computerChoice == 0) {return "rock"}
        
    else if (computerChoice == 1) {return "paper"}
        
    else if (computerChoice == 2) {return "scissors"}
    

}
// which returns either rock, paper, scissors using the Math.random method


function getHumanChoice () {

    let humanChoice = prompt("Rock, Paper, or Scissors?")

    humanChoice.toLowerCase()

    if (humanChoice == "rock") {return console.log("rock")}
        
    else if (humanChoice.toLowerCase() == "paper") {return console.log("paper")}
        
    else if (humanChoice.toLowerCase() == "scissors") {return console.log("scissors")}
        
    else {return console.log("ERROR! Invalid Input!"); getHumanChoice() }
    
    }

// use the prompt method to get user's input


function playGame () {
    
// This function can call playRound several times, depending on the amount of rounds they entered to play
    
    function playRound (humanChoice, computerChoice) {}
}
