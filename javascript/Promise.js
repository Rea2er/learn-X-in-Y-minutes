// A promise is an object that may produce a single value some time in the future
// Two situations: resolve or reject
// Three states: fulfilled, rejected, or pending

// The first parameter will be resolve and the second one will be reject
const promise = new Promise((resolve, reject) => {
  let flag = true;
  if (flag) {
    resolve("Success");
  } else {
    reject("Fail");
  }
});

promise
  .then((success) => {
    console.log("This is in the then " + success);
  })
  .catch((fail) => {
    console.log("This is in the catch " + fail);
  });

const promiseOne = new Promise((resolve) => {
  resolve("Promise one success");
});

const promiseTwo = new Promise((resolve) => {
  resolve("Promise Two success");
});

const promiseThree = new Promise((resolve) => {
  resolve("Promise Three success");
});

// Wait until all promises have settled (each may resolve or reject).
// Returns a promise that resolves after all of the given promises have either resolved or rejected, with an array of objects that each describe the outcome of each promise.
Promise.all([promiseOne, promiseTwo, promiseThree]).then((result) => {
  console.log("This is in the then " + result);
});

// Wait until any of the promises is resolved or rejected.
// If the returned promise resolves, it is resolved with the value of the first promise in the iterable that resolved.
// If it rejects, it is rejected with the reason from the first promise that was rejected.
Promise.race([promiseOne, promiseTwo, promiseThree]).then((result) => {
  console.log("This is in the then " + result);
});
