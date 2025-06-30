const user = JSON.parse(localStorage.getItem("user"));
document.getElementById("username").innerText = user?.username || "Guest";

function play(playerMove) {
  const moves = ['rock', 'paper', 'scissors'];
  const computerMove = moves[Math.floor(Math.random() * moves.length)];

  let result = "";

  if (playerMove === computerMove) {
    result = `🤝 It's a tie! You both chose ${playerMove}.`;
  } else if (
    (playerMove === 'rock' && computerMove === 'scissors') ||
    (playerMove === 'paper' && computerMove === 'rock') ||
    (playerMove === 'scissors' && computerMove === 'paper')
  ) {
    result = `🎉 You win! ${playerMove} beats ${computerMove}.`;
  } else {
    result = `💀 You lose! ${computerMove} beats ${playerMove}.`;
  }

  document.getElementById("result").innerText = result;
}
