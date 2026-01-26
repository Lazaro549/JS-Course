/**
 * SWITCH STATEMENT
 * ----------------
 * Useful when comparing one value against many options
 */

const day = "Monday";

switch (day) {
  case "Monday":
    console.log("Start of the work week");
    break;

  case "Friday":
    console.log("Almost weekend!");
    break;

  case "Saturday":
  case "Sunday":
    console.log("It's the weekend 🎉");
    break;

  default:
    console.log("Regular day");
}

/**
 * IMPORTANT:
 * Always include `break` unless intentional fall-through is needed
 */
