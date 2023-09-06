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
