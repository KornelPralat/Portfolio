const choices = ["rock", "paper", "scissors"];
let playerWins = 0;
let aiWins = 0;

const PlayerChoice = document.getElementById("PlayerChoice");
const ComputerChoice = document.getElementById("ComputerChoice");
const Result = document.getElementById("Result");
const PlayerScore = document.getElementById("player-score").querySelector('p');
const AI_Score = document.getElementById("AI-score").querySelector('p');

function PlayGame(playerChoice) {
    const computerChoice = choices[Math.floor(Math.random() * 3)];

    PlayerChoice.textContent = "Player Choice: " + playerChoice;
    ComputerChoice.textContent = "Computer Choice: " + computerChoice;

    if (playerChoice === computerChoice) {
        Result.textContent = "It's a tie!";
    } else if (
        (playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        Result.textContent = "Player wins!";
        playerWins++;
    } else {
        Result.textContent = "Computer wins!";
        aiWins++;
    }
    PlayerScore.textContent = playerWins;
    AI_Score.textContent = aiWins;
}
