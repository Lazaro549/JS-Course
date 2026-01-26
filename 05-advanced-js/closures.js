/**
 * CLOSURES
 * --------
 * A closure gives access to an outer function's variables
 * even after the outer function has finished executing
 */

function createCounter() {
  let count = 0;

  return function () {
    count++;
    return count;
  };
}

const counter1 = createCounter();
const counter2 = createCounter();

console.log(counter1()); // 1
console.log(counter1()); // 2
console.log(counter2()); // 1 (separate closure)

/**
 * Real-world use cases:
 * - Data privacy
 * - Function factories
 * - Memoization
 */
