//promise with resolve and reject:::::::::::::::::::::::::::::::::::::::

// let promise = new Promise(function (resolve, reject) {
//   resolve("I am surely going to get resolved!");

//   reject(new Error('Will this be ignored?')); // ignored
//   resolve("Ignored?"); // ignored
//   console.log(promise);
// });

// //.then() method to handle resolve and reject and accept two function as an argument as a parameter:::::::::::::::
// const consumer = () => {
//   promise.then(
//     //pass null if you are intrested only in error outcome
//    // null, 
//     (result) => {
//       console.log("....",result);
//     },
//     (error) => {
//       console.log("...",error);
//     }
//   );
// }

// consumer();


// promise using Api :::::::::::::::::::::::::::::::::::::::::::::::::::::

function getPromise(URL) {
  let promise = new Promise(function (resolve, reject) {
    let req = new XMLHttpRequest();
    req.open("GET", URL);
    req.onload = function () {
      if (req.status == 200) {
        resolve(req.response);
      } else {
        reject("There is an Error!");
      }
    };
    req.send();
  });
  return promise;
}

//with valid URL:::::::::::::::::::::::::::::::::
const url = 'https://pokeapi.co/api/v2/pokemon?limit=50';
let promise = getPromise(url);
const consumer = () => {
  //only using .then() method::::::::::::::::::
  promise.then(
    (result) => {
      console.log(result); // Log the result of 50 Pokemons
    },
    (error) => {
      // As the URL is a valid one, this will not be called.
      console.log(error); // Log an error
    });

  //using .then() and .catch() both
  promise.then(
    result => console.log(result) // Log the result of 50 Pokemons
  )
  promise.catch(
    error => console.log(error)
  )

}

consumer();

//***************************************************************************************************************

//async/await ::::::::::::::::::::::::::::::::::::::::

//fetch function (promise)::::::::::::::::::::::::::
// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   .catch(error => console.log(error))

// fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => {
//     if (!response.ok) {
//       throw new Error(`Network response was not ok (${response.status} ${response.statusText})`);
//     }
//     return response.json();
//   })
//   .then(json => console.log(json))
//   .catch(error => console.error('Error:', error));

//****************************************************
//Using aync/await keyword ::::::::::::::::::::

// async function runProcess() {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// }

// runProcess();

//****************************************************
//async/await in self-invoking function:::::::::::

// (async function () {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// })();

//****************************************************
//async/await in arrow function:::::::::::::::

// const runProcess = async () => {
//   try {
//     const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
//     const json = await response.json();
//     console.log(json);
//   } catch (error) {
//     console.log(error);
//   }
// };

// runProcess();

 