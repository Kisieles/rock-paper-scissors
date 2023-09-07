let computerScore = 0;
let playerScore = 0;

function getComputerChoice() {
  let choiceNum = Math.floor(Math.random() * 3);
  if (choiceNum == 0) {
    return "rock";
  } else if (choiceNum == 1) {
    return "paper";
  } else if (choiceNum == 2) {
    return "scissors";
  }
}

function getPlayerChoice() {
  let choice = prompt("What is your choice?");
  choice = choice.toLowerCase();
  return choice;
}

function playRound(playerSelection, computerSelection) {
  if (playerSelection === computerSelection) {
    return "Tie " + playerSelection + " draw with " + computerSelection;
  } else if (
    (playerSelection === "rock" && computerSelection === "scissors") ||
    (playerSelection === "paper" && computerSelection === "rock") ||
    (playerSelection === "scissors" && computerSelection === "paper")
  ) {
    playerScore++;
    return "player wins " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    return (
      "computer wins " + playerSelection + " lose with " + computerSelection
    );
  }
}
function score() {
  if (computerScore > playerScore) {
    return "computer whole wins";
  } else if (computerScore < playerScore) {
    return "player whole wins";
  } else {
    return "Tie";
  }
}
function game() {
  for (let i = 0; i < 5; i++) {
    console.log(playRound(getPlayerChoice(), getComputerChoice()));
  }
  console.log(score());
}

game();
