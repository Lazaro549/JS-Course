/**
 * ARRAYS IN JAVASCRIPT
 * -------------------
 * Ordered collections of values
 */

const numbers = [1, 2, 3, 4, 5];
const fruits = ["apple", "banana", "orange"];

console.log(numbers);
console.log(fruits);

// Accessing elements
console.log("First number:", numbers[0]);
console.log("Last fruit:", fruits[fruits.length - 1]);

// Modifying arrays
numbers.push(6);      // add to end
numbers.unshift(0);  // add to start
numbers.pop();        // remove last
numbers.shift();      // remove first

console.log("Modified numbers:", numbers);

// Looping through arrays
for (let i = 0; i < fruits.length; i++) {
  console.log("Fruit:", fruits[i]);
}

// Modern array methods
const doubled = numbers.map(num => num * 2);
const evenNumbers = numbers.filter(num => num % 2 === 0);
const sum = numbers.reduce((total, num) => total + num, 0);

console.log("Doubled:", doubled);
console.log("Even numbers:", evenNumbers);
console.log("Sum:", sum);

/**
 * IMPORTANT:
 * Array methods (map, filter, reduce) do NOT mutate the original array
 */
