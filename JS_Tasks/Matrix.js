// const arr = [[1, 2], [3, 4], [5, 6]];
// console.log(arr);
// console.log(arr[0][0] + " " + arr[0][1]);
// console.log(arr[0].length);

// //Creating 2D Array::::::::::::::::
// let myArray = [
//   [1, 2, 3, 4],
//   [5, 6, 7, 8],
//   [9, 10, 11, 12]
// ];
// console.log("matrix length:", myArray.length)

// //Accessing Elements::::::::::::::::
// console.log("Accessing Element: ", myArray[1][2]);

// //Modifying Elements::::::::::::::::
// myArray[0][1] = 20;
// console.log("Updated Element: ", myArray[0][1]);

// //Adding new Row:::::::::::
// myArray.push([13, 14, 15, 16]);

// // Adding new column:::::::::
// for (let i = 0; i < myArray.length; i++) {
//   myArray[i].push(50);
// }

// //Iterating through array:::::::::::

// for (let i = 0; i < myArray.length; i++) {
//   console.log(myArray[i].length);
//   for (let j = 0; j < myArray[i].length; j++) {
//     console.log("Iteration: ", myArray[i][j]);
//   }
// }

//Unit matrix::::::::
console.log("Unit Matrix ::")

function createUnitMatrix(size) {
  // Initialize an empty matrix
  const unitMatrix = [];
  // Iterate through rows
  for (var i = 0; i < size; i++) {
    // Initialize a row
    const row = [];
    // Iterate through columns
    for (var j = 0; j < size; j++) {
      row[j] = i === j ? 1 : 0;
    }
    unitMatrix.push(row);
  }
  return unitMatrix;
}
const size = 3; // Size of the unit matrix 
const unitMatrix = createUnitMatrix(size);
console.log(unitMatrix);




