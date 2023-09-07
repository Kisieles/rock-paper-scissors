let computerScore = 0;
let playerScore = 0;

function getComputerSelection() {
  let choiceNum = Math.floor(Math.random() * 3);
  if (choiceNum == 0) {
    return "rock";
  } else if (choiceNum == 1) {
    return "paper";
  } else if (choiceNum == 2) {
    return "scissors";
  }
}

function getPlayerSelection() {
  const choice = prompt("What is your choice?");
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
console.log(playRound(getPlayerSelection(), getComputerSelection()));
