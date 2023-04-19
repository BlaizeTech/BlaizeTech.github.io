// Set up game variables
let gameArea = document.getElementById("game-area");
let player = document.getElementById("player");
let target = document.getElementById("target");
let timer = document.getElementById("timer");
let timeLeft = 10; // in seconds
let timerId;

// Set up game logic
function startGame() {
  // Generate random target position
  let maxX = gameArea.clientWidth - target.offsetWidth;
  let maxY = gameArea.clientHeight - target.offsetHeight;
  let targetX = Math.floor(Math.random() * maxX);
  let targetY = Math.floor(Math.random() * maxY);
  target.style.left = targetX + "px";
  target.style.top = targetY + "px";

  // Start timer
  timeLeft = 10;
  timerId = setInterval(updateTimer, 1000);

  // Add event listener for arrow key movement
  document.addEventListener("keydown", movePlayer);
}

function movePlayer(event) {
  // Move player based on arrow key input
  let x = parseInt(player.style.left) || 0;
  let y = parseInt(player.style.top) || 0;
  switch (event.keyCode) {
    case 37: // left arrow
      x -= 10;
      break;
    case 38: // up arrow
      y -= 10;
      break;
    case 39: // right arrow
      x += 10;
      break;
    case 40: // down arrow
      y += 10;
      break;
  }
  player.style.left = x + "px";
  player.style.top = y + "px";

  // Check if player has reached target
  if (isPlayerAtTarget()) {
    stopGame(true);
  }
}

function isPlayerAtTarget() {
  // Check if player is overlapping with target
  let playerRect = player.getBoundingClientRect();
  let targetRect = target.getBoundingClientRect();
  return (
    playerRect.left < targetRect.right &&
    playerRect.right > targetRect.left &&
    playerRect.top < targetRect.bottom &&
    playerRect.bottom > targetRect.top
  );
}

function updateTimer() {
  // Update timer display and check if time is up
  timeLeft--;
  timer.innerHTML = "Time left: " + timeLeft;
  if (timeLeft == 0) {
    stopGame(false);
  }
}

function stopGame(hasWon) {
  // Stop timer and remove event listener
  clearInterval(timerId);
  document.removeEventListener("keydown", movePlayer);

  // Display message based on game outcome
  if (hasWon) {
    timer.innerHTML = "You win!";
  } else {
    timer.classList.add("time-up");
    timer.innerHTML = "Time's up!";
  }

  // Prompt user to play again
  if (confirm("Play again?")) {
    timer.classList.remove("time-up");
    startGame();
  }
}

// Start game on page load
startGame();
