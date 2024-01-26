let array = [
  [10, 3, 9, 4],
  [9, 5, 10, 7],
  [7, 11, 10, 2],
  [1, 2, 7, 20]
];

const findDiagonal = (i, j) => {
  let row = i;
  let column = j;
  let diagonalArray = [];
  while (row > -1 && column < array[0].length) {
    diagonalArray.push(array[row][column]);
    row--;
    column++;
  }
  diagonalArray.sort((a, b) => a - b);
  row = i;
  column = j;
  let counter = 0;
  while (row > -1 && column < array[0].length) {
    array[row][column] = diagonalArray[counter];
    row--;
    column++;
    counter++;
  }
};

for (let i = array.length - 1; i >= 0; i--) {
  for (let j = array.length - 1; j >= 0; j--) {
    console.log("i:::", i)
    console.log("j::", j)
    findDiagonal(i, j);
  }
}

console.table(array);

