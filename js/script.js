// Varibale 
const choices = ["bear", "ninja", "hunter"];
let playerWins = 0;
let computerWins = 0;

function playGame(playerChoice) {
  // Comp Choice
  let computerChoice = choices[Math.floor(Math.random() * 3)];

  // Choice Display
  document.getElementById("playerPick").innerHTML = "You picked: " + capitalize(playerChoice);
  document.getElementById("compPick").innerHTML = "Computer picked: " + capitalize(computerChoice);

  // Game Logic
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

  // Outcome Box
  document.getElementById("outcome").innerHTML = outcome;
  document.getElementById("results-box").classList.remove("hidden");
  document.getElementById("playerWins").innerHTML = "Player Wins: " + playerWins;
  document.getElementById("computerWins").innerHTML = "Computer Wins: " + computerWins;
  document.getElementById("scoreboard").classList.remove("hidden");

  // Replay Again
  document.getElementById("play-again").classList.remove("hidden");
  document.querySelector(".button-row").classList.add("hidden");
}

function resetGame() {
  // Display
  document.getElementById("results-box").classList.add("hidden");
  document.getElementById("play-again").classList.add("hidden");
  document.querySelector(".button-row").classList.remove("hidden");
}

// Capital letter
function capitalize(str) {
  return str.charAt(0).toUpperCase() + str.slice(1);
}
