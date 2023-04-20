let points = 0;
let upgrade1Cost = 10;
let upgrade2Cost = 50;
let upgrade3Cost = 100;

// Click button function
document.getElementById("clickButton").addEventListener("click", function() {
  points++;
  document.getElementById("points").innerText = points;
});

// Upgrade 1 function
document.getElementById("upgrade1").addEventListener("click", function() {
  if (points >= upgrade1Cost) {
    points -= upgrade1Cost;
    upgrade1Cost *= 2;
    document.getElementById("points").innerText = points;
    document.getElementById("upgrade1").innerText = "Upgrade 1 - Cost: " + upgrade1Cost + " points";
    // Add upgrade 1 functionality
  } else {
    alert("Not enough points!");
  }
});

// Upgrade 2 function
document.getElementById("upgrade2").addEventListener("click", function() {
  if (points >= upgrade2Cost) {
    points -= upgrade2Cost;
    upgrade2Cost *= 2;
    document.getElementById("points").innerText = points;
    document.getElementById("upgrade2").innerText = "Upgrade 2 - Cost: " + upgrade2Cost + " points";
    // Add upgrade 2 functionality
  } else {
    alert("Not enough points!");
  }
});

// Upgrade 3 function
document.getElementById("upgrade3").addEventListener("click", function() {
  if (points >= upgrade3Cost) {
    points -= upgrade3Cost;
    upgrade3Cost *= 2;
    document.getElementById("points").innerText = points;
    document.getElementById("upgrade3").innerText = "Upgrade 3 - Cost: " + upgrade3Cost + " points";
    // Add upgrade 3 functionality
  } else {
    alert("Not enough points!");
  }
});
