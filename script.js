

function computerSelection(){
    let gameChoice = ["rock", "paper", "scissor"];
    let index = Math.floor(Math.random() * gameChoice.length);
    return gameChoice[index];
}