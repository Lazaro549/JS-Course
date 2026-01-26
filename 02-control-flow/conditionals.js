// conditionals.js
// Demonstrates if, else, else if, and switch statements

console.log("=== Conditionals ===");

// if / else if / else
let temperature = 28;

if (temperature > 30) {
  console.log("It's very hot 🔥");
} else if (temperature >= 20) {
  console.log("The weather is nice ☀️");
} else {
  console.log("It's cold ❄️");
}

// Comparison with user role
const role = "admin";

if (role === "admin") {
  console.log("Full access granted");
} else if (role === "editor") {
  console.log("Limited access granted");
} else {
  console.log("Read-only access");
}

// switch statement
const day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}
