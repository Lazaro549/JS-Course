// exercises.js
// Control flow practice with solutions

console.log("=== Control Flow Exercises ===");

// Exercise 1: Number sign checker
function checkNumberSign(number) {
  if (number > 0) {
    return "Positive";
  } else if (number < 0) {
    return "Negative";
  } else {
    return "Zero";
  }
}

console.log(checkNumberSign(10));
console.log(checkNumberSign(-5));
console.log(checkNumberSign(0));

// Exercise 2: Grade evaluator
function getGrade(score) {
  if (score >= 90) return "A";
  if (score >= 80) return "B";
  if (score >= 70) return "C";
  if (score >= 60) return "D";
  return "F";
}

console.log(getGrade(95));
console.log(getGrade(82));
console.log(getGrade(67));

// Exercise 3: Multiplication table
function multiplicationTable(number) {
  for (let i = 1; i <= 10; i++) {
    console.log(`${number} x ${i} = ${number * i}`);
  }
}

multiplicationTable(5);

// Exercise 4: Sum of numbers from 1 to N
function sumToN(n) {
  let sum = 0;
  let i = 1;

  while (i <= n) {
    sum += i;
    i++;
  }

  return sum;
}

console.log("Sum to 10:", sumToN(10));

// Exercise 5: FizzBuzz
function fizzBuzz(limit) {
  for (let i = 1; i <= limit; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

fizzBuzz(15);
