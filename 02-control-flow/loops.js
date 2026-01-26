// loops.js
// Demonstrates for, while, do...while, for...of, and for...in loops

console.log("=== Loops ===");

// for loop
for (let i = 1; i <= 5; i++) {
  console.log("For loop iteration:", i);
}

// while loop
let count = 1;

while (count <= 3) {
  console.log("While loop count:", count);
  count++;
}

// do...while loop
let number = 1;

do {
  console.log("Do...while number:", number);
  number++;
} while (number <= 2);

// for...of (arrays)
const colors = ["red", "green", "blue"];

for (const color of colors) {
  console.log("Color:", color);
}

// for...in (objects)
const user = {
  name: "Lazaro",
  level: "beginner",
  language: "JavaScript",
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
