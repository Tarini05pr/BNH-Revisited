// Game Data
const choices = ["bear", "ninja", "hunter"];
let playerWins = 0;
let computerWins = 0;

function playGame(playerChoice) {
  // Random computer pick
  let computerChoice = choices[Math.floor(Math.random() * 3)];

  // Display choices
  document.getElementById("playerPick").innerHTML = "You picked: " + capitalize(playerChoice);
  document.getElementById("compPick").innerHTML = "Computer picked: " + capitalize(computerChoice);

  // Determine winner
  let outcome = "";
  if (playerChoice === computerChoice) {
    outcome = "It's a Tie!";
  } else if (
    (playerChoice === "bear" && computerChoice === "ninja") ||
    (playerChoice === "ninja" && computerChoice === "hunter") ||
    (playerChoice === "hunter" && computerChoice === "bear")
  ) {
    outcome = "You Win!";
    playerWins++;
  } else {
    outcome = "Computer Wins!";
    computerWins++;
  }

  // Show results
  document.getElementById("outcome").innerHTML = outcome;
  document.getElementById("results-box").classList.remove("hidden");

  // Update scoreboard
  document.getElementById("playerWins").innerHTML = "Player Wins: " + playerWins;
  document.getElementById("computerWins").innerHTML = "Computer Wins: " + computerWins;
  document.getElementById("scoreboard").classList.remove("hidden");

  // Show Play Again
  document.getElementById("play-again").classList.remove("hidden");

  // Hide buttons to reset flow
  document.querySelector(".button-row").classList.add("hidden");
}

function resetGame() {
  // Reset display to initial state
  document.getElementById("results-box").classList.add("hidden");
  document.getElementById("play-again").classList.add("hidden");
  document.querySelector(".button-row").classList.remove("hidden");
}

// Helper function to capitalize first letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
