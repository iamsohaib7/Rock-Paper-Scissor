function getComputerChoice() {
  let gameChoice = ["rock", "paper", "scissor"];
  let index = Math.floor(Math.random() * gameChoice.length);
  return gameChoice[index];
}
function playRound(playerSelection, computerSelection) {
  if (playerSelection === "rock" && computerSelection === "paper") {
    return "You Lose! Paper beats Rock";
  } else if (playerSelection === "rock" && computerSelection === "scissor") {
    return "You Won! Rock beats Scissor";
  } else if (playerSelection === "paper" && computerSelection === "rock") {
    return "You Won! Paper beats Rock";
  } else if (playerSelection === "paper" && computerSelection === "scissor") {
    return "You Lose! Scissor beats Paper";
  } else if (playerSelection === "scissor" && computerSelection === "paper") {
    return "You Won! Scissor beats Paper";
  } else if (playerSelection === "scissor" && computerSelection === "rock") {
    return "You Won! Rock beats Scissor";
  } else {
    if (playerSelection === computerSelection) {
      return "Both Selected the same Choice";
    } else {
      return "Invalid Selection";
    }
  }
}
let score = 0;
for (let i = 0; i < 5; i++) {
  const playerSelection = prompt(
    "Enter Your Choice to Play the Game"
  ).toLowerCase();
  const computerSelection = getComputerChoice();
  console.log(playRound(playerSelection, computerSelection));
  const result = playRound(playerSelection, computerSelection);
  const points = result.search(/Won/i);
  console.log(points);
  if (points != -1) {
    score++;
  }
}
console.log(`Your Scores are ${score}`);
