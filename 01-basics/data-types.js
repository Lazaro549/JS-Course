/**
 * DATA TYPES IN JAVASCRIPT
 */

// Primitive types
const stringType = "Hello World";
const numberType = 42;
const booleanType = true;
const undefinedType = undefined;
const nullType = null;
const symbolType = Symbol("id");
const bigIntType = 9007199254740991n;

// Log types
console.log(typeof stringType);    // string
console.log(typeof numberType);    // number
console.log(typeof booleanType);   // boolean
console.log(typeof undefinedType); // undefined
console.log(typeof nullType);      // object (JS quirk!)
console.log(typeof symbolType);    // symbol
console.log(typeof bigIntType);    // bigint

// Reference types
const arrayType = [1, 2, 3];
const objectType = { key: "value" };
const functionType = function () {
  return "I am a function";
};

console.log(typeof arrayType);     // object
console.log(typeof objectType);    // object
console.log(typeof functionType);  // function
