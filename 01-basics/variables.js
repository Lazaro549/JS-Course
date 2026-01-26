// variables.js
// Demonstrates var, let, and const

console.log("=== Variables in JavaScript ===");

// var (function-scoped, avoid in modern JS)
var oldWay = "I am var";
console.log(oldWay);

// let (block-scoped, recommended)
let age = 25;
age = 26;
console.log("Age:", age);

// const (cannot be reassigned)
const name = "JavaScript Student";
console.log("Name:", name);

// const with objects & arrays (mutable content)
const user = {
  username: "js_dev",
  level: "beginner",
};

user.level = "intermediate";
console.log("User:", user);

// Block scope example
if (true) {
  let blockVariable = "Inside block";
  console.log(blockVariable);
}

// Uncommenting below will cause an error
// console.log(blockVariable);
