/**
 * PROMISES
 * --------
 * A promise represents a future value
 */

function fetchDataPromise(success = true) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (success) {
        resolve("Promise resolved successfully");
      } else {
        reject("Promise rejected");
      }
    }, 1000);
  });
}

fetchDataPromise()
  .then(result => {
    console.log(result);
    return "Next step";
  })
  .then(step => {
    console.log(step);
  })
  .catch(error => {
    console.error(error);
  })
  .finally(() => {
    console.log("Promise finished");
  });

/**
 * Promise states:
 * - pending
 * - fulfilled
 * - rejected
 */
