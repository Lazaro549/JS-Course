/**
 * LOOPS IN JAVASCRIPT
 * ------------------
 * Used to repeat actions
 */

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
  console.log("Do while number:", number);
  number++;
} while (number <= 2);

// for...of loop (arrays)
const fruits = ["apple", "banana", "orange"];

for (const fruit of fruits) {
  console.log("Fruit:", fruit);
}

// for...in loop (objects)
const user = {
  name: "Lazaro",
  role: "Student",
  level: "Beginner"
};

for (const key in user) {
  console.log(`${key}: ${user[key]}`);
}
