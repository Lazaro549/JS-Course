/**
 * CALLBACK FUNCTIONS
 * ------------------
 * A function passed as an argument to another function
 */

// Simple callback example
function processUserInput(callback) {
  const name = "Lazaro";
  callback(name);
}

function displayName(name) {
  console.log("User name:", name);
}

processUserInput(displayName);

// Callback with logic
function calculate(a, b, operation) {
  return operation(a, b);
}

const add = (x, y) => x + y;
const subtract = (x, y) => x - y;

console.log("Add:", calculate(10, 5, add));
console.log("Subtract:", calculate(10, 5, subtract));

// Real-world example (array method)
const numbers = [1, 2, 3, 4];

const doubled = numbers.map(num => num * 2);
console.log("Doubled:", doubled);

/**
 * Callbacks are heavily used in:
 * - Array methods
 * - Event handlers
 * - Async code
 */
