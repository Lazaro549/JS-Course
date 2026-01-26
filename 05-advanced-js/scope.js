/**
 * SCOPE IN JAVASCRIPT
 * ------------------
 * Scope determines where variables are accessible
 */

// Global scope
const globalVar = "I am global";

function exampleScope() {
  // Function scope
  const functionVar = "I am inside a function";
  console.log(globalVar);
  console.log(functionVar);

  if (true) {
    // Block scope
    let blockVar = "I am block scoped";
    console.log(blockVar);
  }

  // console.log(blockVar); ❌ ReferenceError
}

exampleScope();
// console.log(functionVar); ❌ ReferenceError

/**
 * var is NOT block scoped
 */
if (true) {
  var leakedVar = "I leak outside blocks";
}

console.log(leakedVar); // Works (bad practice)
