let computerScore = 0;
let playerScore = 0;

function showModal() {
  const modal = document.querySelector(".modal");
  modal.style.display = "block";
}

function handleClick() {
  window.location.reload();
}

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
    return "scissors";
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
    return "Player wins " + playerSelection + " beats " + computerSelection;
  } else {
    computerScore++;
    return (
      "Computer wins " + playerSelection + " lose with " + computerSelection
    );
  }
}
function score() {
  if (computerScore === 5) {
    return "Computer wins the whole game!";
  } else if (playerScore === 5) {
    return "Player wins the whole game!";
  } else {
    return `Player: ${playerScore} - Computer: ${computerScore}`;
  }
}

const buttons = document.querySelectorAll("button");
const resultDiv = document.getElementById("result");
const refreshBtn = document.getElementById("refreshButton");
refreshBtn.addEventListener("click", handleClick);

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const playerChoice = getPlayerChoice(button.id);
    const computerChoice = getComputerChoice();
    const result = playRound(playerChoice, computerChoice);
    resultDiv.innerHTML = `${result}<br>${score()}`;
    resultDiv.classList.add("centered-content");
    if (playerScore === 5 || computerScore === 5) {
      showModal();
    }
  });
});
