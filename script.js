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

function getPlayerChoice(id) {
  if (id == 1) {
    return "rock";
  } else if (id == 2) {
    return "paper";
  } else if (id == 3) {
    return "sicssors";
  }
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
    return "computer wins whole game";
  } else if (computerScore < playerScore) {
    return "player wins whole game";
  } else {
    return "Tie";
  }
}

const buttons = document.querySelectorAll("button");
const resultDiv = document.getElementById("result");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = getPlayerChoice(button.id);
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    resultDiv.textContent = result;
  });
});
