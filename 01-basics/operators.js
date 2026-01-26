/**
 * OPERATORS IN JAVASCRIPT
 */

// Arithmetic operators
let a = 10;
let b = 3;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulus:", a % b);

// Assignment operators
let x = 5;
x += 2;
x -= 1;
x *= 3;
x /= 2;

console.log("Final x:", x);

// Comparison operators
console.log(10 == "10");   // true (loose equality)
console.log(10 === "10");  // false (strict equality)
console.log(10 !== "10");  // true

// Logical operators
const isAdult = true;
const hasID = false;

console.log(isAdult && hasID); // false
console.log(isAdult || hasID); // true
console.log(!isAdult);         // false

/**
 * IMPORTANT:
 * Always prefer === over ==
 */
