let points = 0;

// Click button function
document.getElementById("clickButton").addEventListener("click", function() {
  points++;
  document.getElementById("points").innerText = points;
});

// Upgrade 1 function
document.getElementById("upgrade1").addEventListener("click", function() {
  if (points >= 10) {
    points -= 10;
    document.getElementById("points").innerText = points;
    // Add upgrade functionality
  } else {
    alert("Not enough points!");
  }
});

// Upgrade 2 function
document.getElementById("upgrade2").addEventListener("click", function() {
  if (points >= 50) {
    points -= 50;
    document.getElementById("points").innerText = points;
    // Add upgrade functionality
  } else {
    alert("Not enough points!");
  }
});

// Upgrade 3 function
document.getElementById("upgrade3").addEventListener("click", function() {
  if (points >= 100) {
    points -= 100;
    document.getElementById("points").innerText = points;
    // Add upgrade functionality
  } else {
    alert("Not enough points!");
  }
});
