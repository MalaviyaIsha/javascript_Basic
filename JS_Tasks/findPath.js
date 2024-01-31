// const matrix = [
//   [0, 0, 2],
//   [5, 4, 4],
// ];

// const matrix = [
//   [0, 2, 1],
//   [5, 4, 0],
// ];

// const matrix = [
//   [0, 0, 0],
//   [2, 0, 3],
// ];

const matrix = [
  [2, 3, 2],
  [1, 1, 1],
  [1, 1, 1],
  [4, 5, 4],
];

//directions for the path::::::
let directions = {
  0: [1, 3],
  1: [2, 4],
  2: [1, 4],
  3: [3, 4],
  4: [2, 3],
  5: [1, 2]
}

//function to get the next block for path::::::
function getnextPosition(i, j, lastPosition) {
  // debugger;
  const start = matrix[0][0];
  const end = matrix[matrix.length - 1][matrix[0].length - 1];

  if (!(start === 0 || start === 2) || !(end === 0 || end === 4)) {
    return false;
  }
  else {
    const matrixValue = matrix[i][j];
    // console.log(i, j);
    // console.log("matrixValue :::", matrixValue);

    const edge = directions[matrixValue];
    // console.log("edge :::", edge);
    // console.log("connection[lastPosition] :::", connection[lastPosition]);

    const startIndex = edge.indexOf(connection[lastPosition]);//1
    // console.log("startIndex :::", startIndex);

    if (startIndex < 0) {
      return false;
    }

    //get the endEdge value:::::::::
    const endEdge = edge[startIndex == 0 ? 1 : 0];
    // console.log("endEdge :::", endEdge);

    //check the end cell of the matrix::::::
    if (i === matrix.length - 1 && j === matrix[0].length - 1) {
      if (endEdge == 3) {
        return true;
      }
      else {
        return false;
      }
    }

    if (endEdge == 1) {
      return getnextPosition(i, j - 1, 1)
    }
    if (endEdge == 2) {
      return getnextPosition(i - 1, j, 2)
    }
    if (endEdge == 3) {
      return getnextPosition(i, j + 1, 3)
    }
    if (endEdge == 4) {
      return getnextPosition(i + 1, j, 4)
    }
  }
}

//connections between the cell of the matrix::::::
const connection = {
  1: 3,
  2: 4,
  3: 1,
  4: 2
}

//console.time("executionTime");
const startTime = performance.now();
console.log("startTime::", startTime);
//call for the function::::::
console.log(getnextPosition(0, 0, 3));

//console.timeEnd("executionTime");

const endTime = performance.now();
console.log("endTime::", endTime);
// Calculate and display the execution time
const executionTime = endTime - startTime;
console.log("executionTime::", executionTime);

//static for fix matrix::::::::::::
// const matrix = [
//   [0, 2, 1],
//   [5, 4, 0],
// ];

// let directions = {
//   0: [1, 3],
//   1: [2, 4],
//   2: [1, 4],
//   3: [3, 4],
//   4: [2, 3],
//   5: [1, 2]
// }

// if (matrix[0][0] == 0 && matrix[0][1] == 2 && matrix[1][1] == 4 && matrix[1][2] == 0) {
//   console.log(true);
// }
// else {
//   console.log(false);
// }

// let directions = {
//   0: [1, 3],
//   1: [2, 4],
//   2: [1, 4],
//   3: [3, 4],
//   4: [2, 3],
//   5: [1, 2]
// }

// const matrix = [
//   [directions[0], directions[2], directions[1]],
//   [directions[5], directions[4], directions[4]],
// ];

// console.table(matrix);
// console.log("matrix.length :", matrix.length);

// // const lastRow = matrix.length - 1;
// // console.log("lastRow :", lastRow)
// // const lastCol = matrix[lastRow].length - 1;
// // console.log("lastCol :", lastCol)
// // const lastElement = matrix[lastRow][lastCol];
// // console.log("lastElement :", lastElement)

// if (matrix[0][0] == (directions[0] || directions[2]) && matrix[1][2] == (directions[0] || directions[4])) {
//   console.log(true);
// } else {
//   console.log(false);
// }