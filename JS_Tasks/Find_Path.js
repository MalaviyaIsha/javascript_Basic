// const directions = [
//   [0, 2, 1],
//   [5, 4, 0],
// ];

// let directions1 = {
//   0: [1, 3],
//   1: [2, 4],
//   2: [1, 4],
//   3: [3, 4],
//   4: [2, 3],
//   5: [1, 2]
// }

// if (directions[0][0] == 0 && directions[0][1] == 2 && directions[1][1] == 4 && directions[1][2] == 0) {
//   console.log(true);
// }
// else {
//   console.log(false);
// }

let directions = {
  0: [1, 3],
  1: [2, 4],
  2: [1, 4],
  3: [3, 4],
  4: [2, 3],
  5: [1, 2]
}

const matrix = [
  [directions[0], directions[2], directions[1]],
  [directions[5], directions[4], directions[4]],
];

console.table(matrix);
console.log("matrix.length :", matrix.length);

// const lastRow = matrix.length - 1;
// console.log("lastRow :", lastRow)
// const lastCol = matrix[lastRow].length - 1;
// console.log("lastCol :", lastCol)
// const lastElement = matrix[lastRow][lastCol];
// console.log("lastElement :", lastElement)

if (matrix[0][0] == (directions[0] || directions[2]) && matrix[1][2] == (directions[0] || directions[4])) {
  console.log(true);
} else {
  console.log(false);
}

