/**
 * ARROW FUNCTIONS
 * ----------------
 * Shorter syntax for writing functions
 */

// Traditional function
function multiply(a, b) {
  return a * b;
}

// Arrow function (explicit return)
const multiplyArrow = (a, b) => {
  return a * b;
};

// Arrow function (implicit return)
const multiplyShort = (a, b) => a * b;

console.log(multiply(2, 3));
console.log(multiplyArrow(2, 3));
console.log(multiplyShort(2, 3));

// Single parameter (parentheses optional)
const square = x => x * x;
console.log("Square:", square(5));

// No parameters
const sayHi = () => console.log("Hi!");
sayHi();

/**
 * IMPORTANT:
 * Arrow functions do NOT have their own `this`
 */
