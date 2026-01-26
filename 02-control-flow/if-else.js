/**
 * IF / ELSE STATEMENTS
 * -------------------
 * Used to execute code based on conditions
 */

const age = 18;

if (age >= 18) {
  console.log("You are an adult.");
} else {
  console.log("You are a minor.");
}

// else if example
const score = 72;

if (score >= 90) {
  console.log("Grade: A");
} else if (score >= 80) {
  console.log("Grade: B");
} else if (score >= 70) {
  console.log("Grade: C");
} else {
  console.log("Grade: F");
}

// Truthy / Falsy example
const username = "";

if (username) {
  console.log("Username exists");
} else {
  console.log("Username is empty");
}
