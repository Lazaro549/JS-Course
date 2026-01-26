/**
 * OBJECTS IN JAVASCRIPT
 * --------------------
 * Key-value pairs used to store structured data
 */

const user = {
  name: "Lazaro",
  age: 26,
  isStudent: true,
  skills: ["JavaScript", "HTML", "CSS"]
};

// Access properties
console.log(user.name);
console.log(user["age"]);

// Add new properties
user.country = "Argentina";
user.age = 27;

console.log(user);

// Methods inside objects
const car = {
  brand: "Toyota",
  model: "Corolla",
  year: 2022,
  getInfo() {
    return `${this.brand} ${this.model} (${this.year})`;
  }
};

console.log(car.getInfo());

// Looping through object properties
for (const key in user) {
  console.log(`${key}:`, user[key]);
}

/**
 * Objects are reference types
 */
