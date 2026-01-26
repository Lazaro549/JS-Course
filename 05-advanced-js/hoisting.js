/**
 * HOISTING
 * --------
 * JavaScript moves declarations to the top of their scope
 */

// Function hoisting
sayHello();

function sayHello() {
  console.log("Hello from a hoisted function!");
}

// Variable hoisting (var)
console.log(hoistedVar); // undefined
var hoistedVar = "I am hoisted";

// let / const hoisting (Temporal Dead Zone)
// console.log(notHoisted); ❌ ReferenceError
let notHoisted = "I am not accessible before declaration";

/**
 * RULE:
 * - Function declarations are hoisted
 * - var is hoisted (initialized as undefined)
 * - let/const are hoisted but not initialized
 */
