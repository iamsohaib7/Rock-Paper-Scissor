function getComputerChoice() {
  let gameChoice = ["rock", "paper", "scissor"];
  let index = Math.floor(Math.random() * gameChoice.length);
  return gameChoice[index];
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return 0; // Lose
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    return 1; // Win
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return 1; // Win
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    return 0; // Lose
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    return 1; // Win
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    return 0; // Lose
  } else {
    if (playerSelection === computerSelection) {
      return 2; // tie
    } else {
      return -1; // Invalid
    }
  }
}


let playerScore = 0;
let computerScore = 0;
function scoreHandler(result, playerChoice, computerChoice) {
  if (result === 1) {
    const scoreInfo = document.getElementById("scoreInfo");
    scoreInfo.textContent = "You Won!";
    const scoreMessage = document.getElementById("scoreMessage");
    scoreMessage.textContent = `${playerChoice} beats ${computerChoice}`;
    const playerDiv = document.getElementById("player-score");
    const p = playerDiv.querySelector("p");
    playerScore++;
    p.textContent = `Player: ${playerScore}`;
  }
  if (result === 0) {
    const scoreInfo = document.getElementById("scoreInfo");
    scoreInfo.textContent = "You Lose!";
    const scoreMessage = document.getElementById("scoreMessage");
    scoreMessage.textContent = `${computerChoice} beats ${playerChoice}`;
    const computerDiv = document.getElementById("computer-score");
    const p = computerDiv.querySelector("p");
    computerScore++;
    p.textContent = `Computer: ${computerScore}`;
  }
  if (result === 2) {
    const scoreInfo = document.getElementById("scoreInfo");
    scoreInfo.textContent = "It's a tie";
    const scoreMessage = document.getElementById("scoreMessage");
    scoreMessage.textContent = `${playerChoice} ties with ${computerChoice}`;
  }
}

const buttonRock = document.getElementById("rock-btn");
buttonRock.addEventListener("click", function (event) {
  const computerChoice = getComputerChoice();
  const playerChoice = "rock";
  const result = playRound(playerChoice, computerChoice);
  scoreHandler(result, playerChoice, computerChoice);
});
const buttonPaper = document.getElementById("paper-btn");
buttonPaper.addEventListener("click", function (e) {
  const computerChoice = getComputerChoice();
  const playerChoice = "paper";
  const result = playRound(playerChoice, computerChoice);
  scoreHandler(result, playerChoice, computerChoice);
});
const buttonScissor = document.getElementById("scissor-btn");
buttonScissor.addEventListener("click", function (e) {
  const computerChoice = getComputerChoice();
  const playerChoice = "scissor";
  const result = playRound(playerChoice, computerChoice);
  scoreHandler(result, playerChoice, computerChoice);
});
