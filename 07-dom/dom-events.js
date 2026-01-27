/**
 * DOM EVENTS
 * ----------
 * React to user interactions
 */

const changeTextBtn = document.getElementById("changeTextBtn");
const toggleBoxBtn = document.getElementById("toggleBoxBtn");
const box = document.getElementById("box");

changeTextBtn.addEventListener("click", () => {
  document.getElementById("title").textContent =
    "Text changed via Event Listener";
});

toggleBoxBtn.addEventListener("click", () => {
  box.classList.toggle("hidden");
});

// Mouse events
box.addEventListener("mouseenter", () => {
  box.style.backgroundColor = "tomato";
});

box.addEventListener("mouseleave", () => {
  box.style.backgroundColor = "steelblue";
});
