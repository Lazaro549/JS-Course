/**
 * THE `this` KEYWORD
 * -----------------
 * `this` refers to the execution context
 */

// Global context (Node.js)
console.log(this); // {}

function showThis() {
  console.log(this);
}

showThis(); // undefined (strict mode)

// Object method
const user = {
  name: "Lazaro",
  greet() {
    console.log(`Hello, I am ${this.name}`);
  }
};

user.greet();

// Arrow functions and this
const userArrow = {
  name: "ArrowUser",
  greet: () => {
    console.log(this.name); // undefined
  }
};

userArrow.greet();

// Fixing `this` with bind
function sayName() {
  console.log(this.name);
}

const boundFn = sayName.bind({ name: "Bound User" });
boundFn();

/**
 * IMPORTANT:
 * Arrow functions do NOT have their own `this`
 */
