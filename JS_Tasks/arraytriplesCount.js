function triplesOccurrences(arr, queries) {
  const result = [];

  let queryIndex = 0;
  while (queryIndex < queries.length) {
    const [x, y, z] = queries[queryIndex];
    let count = 0;

    let i = 0;
    while (i < arr.length - 1) {
      if (arr[i] === x) {
        let j = i + 1;
        while (j < arr.length - 1) {
          if (arr[j] === y) {
            let k = j + 1;
            while (k < arr.length) {
              if (arr[k] === z) {
                count++;
              }
              k++;
            }
          }
          j++;
        }
      }
      i++;
    }

    result.push(count);
    queryIndex++;
  }

  return result;
}

const arr1 = [1, 2, 3, 4, 5];
const queries1 = [[1, 2, 4], [2, 4, 3], [1, 1, 1]];
console.log(triplesOccurrences(arr1, queries1));

const arr2 = [1, 2, 2, 1, 2, 1, 2];
const queries2 = [[1, 1, 2], [1, 2, 1]];
console.log(triplesOccurrences(arr2, queries2));

const arr3 = [1, 1, 1, 1];
const queries3 = [[1, 1, 1]];
console.log(triplesOccurrences(arr3, queries3));

// function triplesOccurrences(arr, queries) {
//   const result = [];

//   for (const query of queries) {
//     const [x, y, z] = query;
//     let count = 0;

//     for (let i = 0; i < arr.length - 1; i++) {
//       if (arr[i] === x) {
//         for (let j = i + 1; j < arr.length - 1; j++) {
//           if (arr[j] === y) {
//             for (let k = j + 1; k < arr.length; k++) {
//               if (arr[k] === z) {
//                 count++;
//               }
//             }
//           }
//         }
//       }
//     }

//     result.push(count);
//   }

//   return result;
// }

// const arr1 = [1, 2, 3, 4, 5];
// const queries1 = [[1, 2, 4], [2, 4, 3], [1, 1, 1]];
// console.log(triplesOccurrences(arr1, queries1));

