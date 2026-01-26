/**
 * DESTRUCTURING
 * -------------
 * Extract values from arrays or objects easily
 */

// Array destructuring
const colors = ["red", "green", "blue"];

const [firstColor, secondColor, thirdColor] = colors;

console.log(firstColor);
console.log(secondColor);
console.log(thirdColor);

// Skipping values
const [, , lastColor] = colors;
console.log("Last color:", lastColor);

// Object destructuring
const person = {
  firstName: "Lazaro",
  lastName: "Dev",
  age: 26,
  country: "Argentina"
};

const { firstName, age } = person;
console.log(firstName, age);

// Renaming variables
const { country: location } = person;
console.log("Location:", location);

// Destructuring in function parameters
function printUser({ firstName, lastName }) {
  console.log(`User: ${firstName} ${lastName}`);
}

printUser(person);
