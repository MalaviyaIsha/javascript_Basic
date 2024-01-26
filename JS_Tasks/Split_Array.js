function splitArray(arr) {
  const count = {};
  const result1 = [];
  const result2 = [];

  if (arr.length % 2 == 0) {

    for (let i = 0; i < arr.length; i++) {
      const num = arr[i];
      if (count[num]) {
        count[num]++;
      } else {
        count[num] = 1;
      }
    }

    for (const num in count) {

      if (count[num] > 2) {
        return [];
      }

      else if (count[num] === 2) {
        result1.push(num);
        result2.push(num);
      }

      else if (count[num] === 1) {
        if (result1.length < arr.length / 2) {
          result1.push(num);
        }
        else {
          result2.push(num);
        }
      }
    }

    if (result1.length !== result2.length) {
      return [];
    }

    return [result1, result2];
  }

  else {
    console.log("Odd Array length !!!");
  }
}

let array = splitArray([2, 1, 2, 3, 3, 4]);
console.log(array);

