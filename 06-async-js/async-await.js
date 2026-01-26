/**
 * ASYNC / AWAIT
 * -------------
 * Syntactic sugar over promises
 */

function delay(ms) {
  return new Promise(resolve => {
    setTimeout(resolve, ms);
  });
}

async function runProcess() {
  console.log("Start");
  await delay(1000);
  console.log("Step 1");
  await delay(1000);
  console.log("Step 2");
  await delay(1000);
  console.log("End");
}

runProcess();

/**
 * Error handling with try/catch
 */
async function fetchWithError() {
  try {
    const result = await Promise.reject("Something went wrong");
    console.log(result);
  } catch (error) {
    console.error("Caught error:", error);
  }
}

fetchWithError();
