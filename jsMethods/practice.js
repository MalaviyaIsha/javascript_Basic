// Diffrence between Map and Filter:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//Map use when we want work with all array element
const numbers = [1, 2, 3, 4, 5];
const suareOfNumber = numbers.map((num) => {
  return num * num;
})
console.log(suareOfNumber);

//Filter used when we want to work with some subelements of array based on condition
const arr = [1, 2, 3, 4, 5, 6];
const evenNumbers = arr.filter((num) => {
  return num % 2 === 0;
})
console.log(evenNumbers);

//Diffrence between Map and Reduce:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

//reduce method used when you want to aggregating the elements of an array into a single value.
const numberArr = [1, 2, 3, 4, 5];
const sum = numberArr.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0)
console.log("Sum : ", sum);

//divide all number by 3 , and then retun only those numbers that have interger value::::::::::::
const numArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const positiveNumber = numArray.filter((num) => {
  const resultOfDivision = num / 3;
  if (Number.isInteger(resultOfDivision)) {
    return true;
  }
  else {
    return false;
  }
})
console.log(positiveNumber);

//Math floor and Ceil::::::::::::::::::::::::::::::::::::::::::::::::::
let num = 125.49;
console.log("Floor : ", Math.floor(num)); //125
console.log("Ceil : ", Math.ceil(num)); //126

//NaN::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
let a = "str";
a = 10;
let b = a / '5';
let c = a / 'str';
console.log(typeof (a));//number
console.log(b);//2
console.log(c);//NaN

//Throw error from try to catch
try {
  let numerator = 10;
  let denominator = 5;
  if (denominator === 0) {
    //console.error("Error: Division by zero is not allowed");
    //throw "Division by zero is not allowed"; 
    throw new Error("Division by zero is not allowed");
  }
  let result = numerator / denominator;
  console.log("Result:", result);
} catch (error) {
  console.error("Caught Error:", error.message);
}

//diffrence between slice and splice:::::::::::::::::::::::::::::::::::
const fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 1, "Lemon", "Kiwi");
console.log(fruits); //['Banana', 'Orange', 'Lemon', 'Kiwi', 'Mango']













