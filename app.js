// Target Counter
let counter = document.querySelector(".counter");

// Target Add Button
const addCount = document.querySelector("#addCountBtn");

// Target lower Button
const lowerCount = document.querySelector("#lowerCountBtn");

// Actual Counter
let count = 0;

// Create click event listener with call back function
addCount.addEventListener("click", incrementCounter);
lowerCount.addEventListener("click", decrementCounter);

// Add function
function incrementCounter() {
  count++;
  counter.innerHTML = count;
  if (counter.innerHTML > "0") {
    counter.style.color = "#4caf50";
  } else if (counter.innerHTML === "0") {
    counter.style.color = "white";
  }
  // Also animate this counter to delay
  counter.animate([{ opacity: "0.2" }, { opacity: "1.0" }], {
    duration: 1000,
    fill: "forwards"
  });
}

// Create if statement to change color depending on where ur numbers are

// Lower function
function decrementCounter() {
  count--;
  counter.innerHTML = count;
  if (counter.innerHTML < "0") {
    counter.style.color = "red";
  } else if (counter.innerHTML === "0") {
    counter.style.color = "white";
  }
  // Also animate this counter to delay
  counter.animate([{ opacity: "0.2" }, { opacity: "1.0" }], {
    duration: 1000,
    fill: "forwards"
  });
}
