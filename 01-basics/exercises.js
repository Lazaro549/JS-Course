/**
 * EXERCISES – 01 BASICS
 * --------------------
 * Try to solve these without looking at the answers first!
 */

/**
 * 1. Create a constant called `language` and assign it "JavaScript"
 */
const language = "JavaScript";

/**
 * 2. Create a variable `year` and set it to the current year
 * Then increase it by 1
 */
let year = new Date().getFullYear();
year += 1;

/**
 * 3. Create a variable `isLearning` and set it to true
 * Log the type of the variable
 */
const isLearning = true;
console.log(typeof isLearning);

/**
 * 4. Create two numbers and log:
 * - their sum
 * - their difference
 * - their product
 */
const num1 = 8;
const num2 = 4;

console.log("Sum:", num1 + num2);
console.log("Difference:", num1 - num2);
console.log("Product:", num1 * num2);

/**
 * 5. BONUS:
 * Why does `typeof null` return "object"?
 * → It's a historical JavaScript bug kept for backward compatibility.
 */
