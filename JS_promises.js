//JS Callbacks::::::::
function myDisplayer(some) {
  console.log(some);
}

function myCalculator(num1, num2, myCallback) {
  let sum = num1 + num2;
  myCallback(sum);
}

myCalculator(5, 5, myDisplayer);

//promises::::::::::
function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      // const data = { message: "Data fetched successfully!" };
      // resolve(data);
      resolve("Data fetched successfully");
      //reject("Error fetching data");
    }, 1000);
  });
}

fetchData()
  .then(data => console.log("Received data:", data))
  .catch(error => console.error("Error:", error));

//Async/await::::::::::

function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Data fetched successfully!");
    }, 2000);
  });
}

async function fetchDataAndHandle() {
  try {
    const data = await fetchData();
    console.log("Received data:", data);
  } catch (error) {
    console.error("Error:", error);
  }
}

fetchDataAndHandle();





