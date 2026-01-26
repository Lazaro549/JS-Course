/**
 * FUNCTION DECLARATIONS
 * ---------------------
 * Functions allow you to reuse code and organize logic
 */

// Basic function
function greet() {
  console.log("Hello, welcome to JavaScript!");
}

greet();
greet();

// Function with parameters
function greetUser(name) {
  console.log(`Hello, ${name}!`);
}

greetUser("Lazaro");
greetUser("Alex");

// Function with return value
function add(a, b) {
  return a + b;
}

const result = add(5, 3);
console.log("Result:", result);

// Function scope
function calculateArea(width, height) {
  const area = width * height;
  return area;
}

// console.log(area); ❌ ReferenceError
console.log("Area:", calculateArea(4, 6));

/**
 * NOTE:
 * - Function declarations are hoisted
 */
