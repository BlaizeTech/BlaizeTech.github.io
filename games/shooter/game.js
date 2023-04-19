// Get the canvas element and context
const canvas = document.getElementById("gameCanvas");
const ctx = canvas.getContext("2d");

// Set the starting position of the player
let playerX = canvas.width / 2;
let playerY = canvas.height - 30;

// Set the size of the player and bullets
const playerWidth = 20;
const playerHeight = 20;
const bulletWidth = 5;
const bulletHeight = 10;

// Set the speed of the player and bullets
const playerSpeed = 7;
const bulletSpeed = 10;

// Set the number of enemies and their speed
const numEnemies = 8;
const enemyWidth = 20;
const enemyHeight = 20;
const enemySpeed = 5;

// Keep track of the player's bullets and score
let bullets = [];
let score = 0;

// Set up the enemies
let enemies = [];
for (let i = 0; i < numEnemies; i++) {
  enemies.push({
    x: Math.random() * (canvas.width - enemyWidth),
    y: Math.random() * -canvas.height,
  });
}

// Handle player input
document.addEventListener("keydown", function(event) {
  if (event.key === "ArrowLeft" && playerX > 0) {
    playerX -= playerSpeed;
  } else if (event.key === "ArrowRight" && playerX < canvas.width - playerWidth) {
    playerX += playerSpeed;
  } else if (event.key === " ") {
    // Create a new bullet when the space bar is pressed
    bullets.push({
      x: playerX + playerWidth / 2 - bulletWidth / 2,
      y: playerY - bulletHeight,
    });
  }
});

// Update the game state
// Update the game state
function update() {
  // Move the enemies
  enemies.forEach(function(enemy) {
    enemy.y += enemySpeed;

    // Check if the enemy goes off the bottom of the screen and move it back to the top
    if (enemy.y > canvas.height) {
      enemy.x = Math.random() * (canvas.width - enemyWidth);
      enemy.y = Math.random() * -canvas.height;
    }

    // Check for collision between the player's bullets and the enemy
    bullets.forEach(function(bullet, index) {
      if (bullet.x < enemy.x + enemyWidth &&
          bullet.x + bulletWidth > enemy.x &&
          bullet.y < enemy.y + enemyHeight &&
          bullet.y + bulletHeight > enemy.y) {
        // If there is a collision, remove the bullet and increment the score
        bullets.splice(index, 1);
        score++;
        enemy.x = Math.random() * (canvas.width - enemyWidth);
        enemy.y = Math.random() * -canvas.height;
      }
    });

    // Check for collision between the player and the enemy
    if (playerX < enemy.x + enemyWidth &&
        playerX + playerWidth > enemy.x &&
        playerY < enemy.y + enemyHeight &&
        playerY + playerHeight > enemy.y) {
      // If there is a collision, reset the score and enemy positions
      score = 0;
      enemies.forEach(function(enemy) {
        enemy.x = Math.random() * (canvas.width - enemyWidth);
        enemy.y = Math.random() * -canvas.height;
      });
    }
  });

  // Move the player's bullets
  bullets.forEach(function(bullet, index) {
    bullet.y -= bulletSpeed;

    // Remove the bullet if it goes off the top of the screen
    if (bullet.y < 0) {
      bullets.splice(index, 1);
    }
  });
}


// Draw the game state
// Load the player image
var playerImage = new Image();
playerImage.src = "https://cdn.glitch.global/b27313d0-9a50-4774-8822-e3e7ca161f05/thumbnails%2FBT.jpg";

// Draw the player image
function draw() {
  // Clear the canvas
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  // Draw the player image
  ctx.drawImage(playerImage, playerX, playerY, playerWidth, playerHeight);

// Draw the bullets
ctx.fillStyle = "#ff0000";
bullets.forEach(function(bullet) {
ctx.fillRect(bullet.x, bullet.y, bulletWidth, bulletHeight);
});

// Draw the enemies
ctx.fillStyle = "#00ff00";
enemies.forEach(function(enemy) {
ctx.fillRect(enemy.x, enemy.y, enemyWidth, enemyHeight);
});

// Draw the score
ctx.fillStyle = "#000000";
ctx.font = "16px Arial";
ctx.fillText("Score: " + score, 8, 20);
}

// Game loop
function gameLoop() {
update();
draw();
requestAnimationFrame(gameLoop);
}

// Start the game loop
requestAnimationFrame(gameLoop);
