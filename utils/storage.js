/**
 * LOCAL STORAGE UTILITIES
 * ----------------------
 */

/**
 * Save data to localStorage
 */
export function saveToStorage(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
  } catch (error) {
    console.error("Failed to save to storage:", error);
  }
}

/**
 * Load data from localStorage
 */
export function loadFromStorage(key, defaultValue = null) {
  try {
    const data = localStorage.getItem(key);
    return data ? JSON.parse(data) : defaultValue;
  } catch (error) {
    console.error("Failed to load from storage:", error);
    return defaultValue;
  }
}

/**
 * Remove data from localStorage
 */
export function removeFromStorage(key) {
  localStorage.removeItem(key);
}
