/**
 * VARIABLES IN JAVASCRIPT
 * -----------------------
 * var  → old, function-scoped (avoid)
 * let  → block-scoped (preferred)
 * const → block-scoped, cannot be reassigned
 */

// var (legacy - avoid using)
var oldVariable = "I am old";
console.log(oldVariable);

// let (recommended)
let age = 25;
age = 26; // allowed
console.log("Age:", age);

// const (recommended by default)
const name = "Lazaro";
// name = "John"; // ❌ Error: Assignment to constant variable
console.log("Name:", name);

// Block scope example
if (true) {
  let blockScoped = "Only inside this block";
  console.log(blockScoped);
}

// console.log(blockScoped); // ❌ ReferenceError

/**
 * RULE OF THUMB:
 * - Use `const` by default
 * - Use `let` when reassignment is needed
 * - Avoid `var`
 */
