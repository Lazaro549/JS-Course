// exercises.js
// Practice problems with solutions

console.log("=== Exercises ===");

// Exercise 1: Swap two variables
let a = 5;
let b = 10;

[a, b] = [b, a];

console.log("a:", a);
console.log("b:", b);

// Exercise 2: Check data type
function checkType(value) {
  return typeof value;
}

console.log(checkType(123));
console.log(checkType("Hello"));
console.log(checkType(true));

// Exercise 3: Even or Odd
function isEven(number) {
  return number % 2 === 0 ? "Even" : "Odd";
}

console.log(isEven(4));
console.log(isEven(7));

// Exercise 4: Simple calculator
function calculator(num1, num2, operator) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Cannot divide by zero";
    default:
      return "Invalid operator";
  }
}

console.log(calculator(10, 5, "+"));
console.log(calculator(10, 5, "/"));
console.log(calculator(10, 0, "/"));
