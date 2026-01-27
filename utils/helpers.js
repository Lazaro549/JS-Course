/**
 * GENERAL HELPER FUNCTIONS
 * ------------------------
 */

/**
 * Generate a random ID
 */
export function generateId() {
  return Math.random().toString(36).substring(2, 10);
}

/**
 * Capitalize the first letter of a string
 */
export function capitalize(str) {
  if (typeof str !== "string" || !str.length) return "";
  return str.charAt(0).toUpperCase() + str.slice(1);
}

/**
 * Debounce function
 * Useful for input events, search, resize, etc.
 */
export function debounce(fn, delay = 300) {
  let timeoutId;

  return (...args) => {
    clearTimeout(timeoutId);
    timeoutId = setTimeout(() => fn(...args), delay);
  };
}

/**
 * Sleep / delay helper (async)
 */
export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}
