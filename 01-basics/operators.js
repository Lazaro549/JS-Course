// operators.js
// Demonstrates common JavaScript operators

console.log("=== Operators ===");

// Arithmetic
console.log(10 + 5);
console.log(10 - 5);
console.log(10 * 5);
console.log(10 / 5);
console.log(10 % 3);

// Assignment
let x = 10;
x += 5;
x -= 2;
console.log("x:", x);

// Comparison
console.log(5 == "5");   // true (loose equality)
console.log(5 === "5");  // false (strict equality)
console.log(5 !== 6);    // true
console.log(5 > 3);      // true

// Logical
console.log(true && false); // false
console.log(true || false); // true
console.log(!true);         // false

// Ternary
const age = 18;
const canVote = age >= 18 ? "Yes" : "No";
console.log("Can vote:", canVote);
