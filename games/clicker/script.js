// Upgrade 1 function
document.getElementById("upgrade1").addEventListener("click", function() {
  if (points >= upgrade1Cost) {
    points -= upgrade1Cost;
    upgrade1Cost *= 2;
    clickValue *= 2;
    document.getElementById("points").innerText = points;
    document.getElementById("upgrade1").innerText = "Upgrade 1 - Cost: " + upgrade1Cost + " points (Click Value x2)";
  } else {
    alert("Not enough points!");
  }
});

// Upgrade 2 function
document.getElementById("upgrade2").addEventListener("click", function() {
  if (points >= upgrade2Cost) {
    points -= upgrade2Cost;
    upgrade2Cost *= 2;
    autoClickerLevel++;
    document.getElementById("points").innerText = points;
    document.getElementById("upgrade2").innerText = "Upgrade 2 - Cost: " + upgrade2Cost + " points (Auto Clicker Level " + autoClickerLevel + ")";
    setInterval(function() {
      points += autoClickerLevel;
      document.getElementById("points").innerText = points;
    }, 1000);
  } else {
    alert("Not enough points!");
  }
});

// Upgrade 3 function
document.getElementById("upgrade3").addEventListener("click", function() {
  if (points >= upgrade3Cost) {
    points -= upgrade3Cost;
    upgrade3Cost *= 2;
    clickValue *= 3;
    document.getElementById("points").innerText = points;
    document.getElementById("upgrade3").innerText = "Upgrade 3 - Cost: " + upgrade3Cost + " points (Click Value x3)";
  } else {
    alert("Not enough points!");
  }
});
