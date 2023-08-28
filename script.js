

function getComputerChoice(){
    let gameChoice = ["rock", "paper", "scissor"];
    let index = Math.floor(Math.random() * gameChoice.length);
    return gameChoice[index];
}
function playRound(playerSelection, computerSelection){

    if(playerSelection === "rock" && computerSelection === "paper"){
        return "You Lose! Paper beats Rock";
    }
    else if(playerSelection === "rock" && computerSelection === "scissor"){
        return "You Won! Rock beats Scissor";
    }
    else if(playerSelection === "paper" && computerSelection === "rock"){
        return "You Won! Paper beats Rock";
    }
    else if(playerSelection === "paper" && computerSelection === "scissor"){
        return "You Lose! Scissor beats Paper";
    }
    else if(playerSelection === "scissor" && computerSelection === "paper"){
        return "You Won! Scissor beats Paper";
    }
    else if(playerSelection === "scissor" && computerSelection === "rock"){
        return "You Won! Rock beats Scissor";
    }
    else {

        if(playerSelection === computerSelection){
            return "Both Selected the same Choice";
        }
        else {
            return "Invalid Selection";
        }
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));