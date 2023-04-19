const bird = document.getElementById("bird");
const pipe = document.getElementById("pipe");
const score = document.getElementById("score");
const restartBtn = document.getElementById("restartBtn");

let birdPos = 250;
let pipePos = 500;
let scoreVal = 0;
let gameover = false;

function startGame() {
  if (gameover) {
    resetGame();
  }
  const gameLoop = setInterval(() => {
    birdPos += 2;
    bird.style.top = birdPos + "px";
    pipePos -= 5;
    pipe.style.left = pipePos + "px";
    if (pipePos < -80) {
      pipePos = 500;
      scoreVal++;
      score.textContent = "Score: " + scoreVal;
    }
    if (birdPos < 0 || birdPos > 450) {
      endGame(gameLoop);
    }
    if (pipePos < 90 && pipePos > 20 && birdPos > 200) {
      endGame(gameLoop);
    }
  }, 20);

  // add event listener for the up arrow key
  document.addEventListener("keydown", (event) => {
    if (event.code === "ArrowUp") {
      birdPos -= 20;
      bird.style.top = birdPos + "px";
    }
  });
}

function endGame(loop) {
  clearInterval(loop);
  gameover = true;
  restartBtn.style.display = "block";
}

function resetGame() {
  birdPos = 250;
  pipePos = 500;
  scoreVal = 0;
  gameover = false;
  restartBtn.style.display = "none";
  score.textContent = "Score: 0";
  bird.style.top = birdPos + "px";
  pipe.style.left = pipePos + "px";
}

restartBtn.addEventListener("click", startGame);

startGame();
