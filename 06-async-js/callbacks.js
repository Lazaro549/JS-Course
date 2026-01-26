/**
 * CALLBACKS (ASYNC BASICS)
 * -----------------------
 * A callback is a function passed to be executed later
 */

// Simulated async operation
function fetchData(callback) {
  setTimeout(() => {
    callback("Data received");
  }, 1000);
}

fetchData(result => {
  console.log(result);
});

// Callback problem: callback hell
function step1(cb) {
  setTimeout(() => cb("Step 1 complete"), 500);
}

function step2(cb) {
  setTimeout(() => cb("Step 2 complete"), 500);
}

function step3(cb) {
  setTimeout(() => cb("Step 3 complete"), 500);
}

step1(result1 => {
  console.log(result1);
  step2(result2 => {
    console.log(result2);
    step3(result3 => {
      console.log(result3);
    });
  });
});

/**
 * PROBLEM:
 * - Hard to read
 * - Hard to debug
 * - Hard to scale
 */
