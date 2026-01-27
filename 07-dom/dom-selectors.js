/**
 * DOM SELECTORS
 * -------------
 * Ways to select elements from the HTML document
 */

// Select by ID
const title = document.getElementById("title");
console.log(title);

// Select by class
const description = document.querySelector(".description");
console.log(description);

// Select multiple elements
const listItems = document.querySelectorAll("#list li");
console.log(listItems);

// Change content
title.textContent = "DOM Manipulation with JavaScript";

// Change style
description.style.color = "gray";
