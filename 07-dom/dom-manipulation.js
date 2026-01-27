/**
 * DOM MANIPULATION
 * ----------------
 * Create, update, and remove elements dynamically
 */

const list = document.getElementById("list");

// Create a new element
const newItem = document.createElement("li");
newItem.textContent = "Item 3";

// Append element
list.appendChild(newItem);

// Remove element after 5 seconds
setTimeout(() => {
  if (list.firstElementChild) {
    list.removeChild(list.firstElementChild);
  }
}, 5000);

// Modify attributes
newItem.setAttribute("data-id", "3");
console.log(newItem.getAttribute("data-id"));
