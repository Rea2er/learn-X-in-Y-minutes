let normalFlow = "Normal Flow";

setTimeout(() => {
  console.log("Asynchronous");
}, 2000);

console.log("Synchronous");
console.log(normalFlow);

// Await
const makeRequest = (location) => {
  return new Promise((resolve, reject) => {
    console.log(`Making request to ${location}`);
    if (location == "Google") {
      resolve("Google Search Display");
    } else {
      reject("Request can only make to Google");
    }
  });
};

const processRequest = (response) => {
  return new Promise((resolve, reject) => {
    console.log("Processing response");
    resolve(`Extra information + ${response}`);
  });
};

// makeRequest("Google")
//   .then((response) => {
//     console.log("Response received");
//     return processRequest(response);
//   })
//   .then((processResponse) => {
//     console.log(processResponse);
//   })
//   .catch((error) => {
//     console.log(error);
//   });

(async () => {
  try {
    const response = await makeRequest("Facebook");
    console.log("Response received");
    const processResponse = await processRequest(response);
    console.log(processResponse);
  } catch (error) {
    console.log(error);
  }
})();
