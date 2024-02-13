// variable declared using let:::::::::::::::::::::
let name = 'Sara';
{
  // can be accessed only inside
  let name = 'Peter';
  console.log(name);
}
console.log(name);

//const variable:::::::::::::::::::::::
// const user = 'max';
// user = 'sofy'; // can not be change
// console.log(user);

//Arrow function::::::::::::::::::::::::::::::::::::::::::::::::::::
let div = (a, b) => {
  return a / b;
}
let result = div(10, 5);
console.log(result);

//without argument:::::::
let greet = () => console.log('Hello');
greet();

//with argument::::::::::
let greet1 = (x) => console.log(x);
greet1("helloooo");

//with expression
let age = 5;
let welcome = (age < 18) ?
  () => console.log("young") :
  () => console.log("old");
welcome();

let spread = (...n) => {
  console.log(n)
}
spread(1, 2, 3);

//Default parameter::::::::::::::::::::::::::::::::::::::::::::::::::
function sum(x = 3, y = 5) {
  return x + y;
}
console.log(sum(5, 15));
console.log(sum(7));
console.log(sum());

//Template litrals::::::::::::::::::::::::::::::::::::::::::::::::
const message1 = `This is a long message
that spans across multiple lines
in the code.`
console.log(message1);

//spread operator:::::::::::::::::::::::::::::::::::::::::::::::
let arr1 = [1, 2, 3];
let arr2 = [...arr1];
console.log(arr1);
console.log(arr2);
arr1.push(4);
console.log(arr1);
console.log(arr2);

//Map:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
let map1 = new Map();
map1.set('name', 'Jack');
map1.set('age', '27');
for (let [key, value] of map1) {
  console.log(key + '- ' + value);
}

// using forEach():::::::::::
let map2 = new Map();
map2.set('name', 'Jack');
map2.set('age', '27');
map2.forEach(function (value, key) {
  console.log(key + '- ' + value);
})

//weakMap::::::::::::::::::
const weakMap = new WeakMap();
console.log(weakMap);
let obj = {};
weakMap.set(obj, 'hello');
console.log(weakMap);
console.log(weakMap.get(obj));
console.log(weakMap.has(obj));
console.log(weakMap.delete(obj));
console.log(weakMap);

//set and set Methods:::::::::::::::::::::::::::::::::::::::::::::::::
const set1 = new Set([1, 1, 2, 3]);
console.log(set1.values());
console.log(set1.has(1));
set1.add(4);
console.log(set1);
set1.delete(4);
console.log(set1);
set1.clear();
console.log(set1);

//weakSet:::::::::::::::::
const weakSet = new WeakSet();
const obj1 = { a: 1 };
weakSet.add(obj1);
console.log(weakSet);
console.log(weakSet.has(obj1));

//Destructuring::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const detail = { name1: 'sofy', age1: 22, gender: 'female' };
const { name1, age1, gender } = detail;
console.log(name1 + " " + age1);

//Array Destructuring::::::::::
const arr = [1, 2, 3, 4, 5];
const [x, y, ...z] = arr;
console.log(x + " " + y + " " + z);

//class:::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
class Person {
  constructor(name) {
    this.name = name;
  }

  greet() {
    console.log(`Hello ${this.name}`);
  }
}

const person1 = new Person('max');
const person2 = new Person('sofy');
console.log(person1.name);
console.log(person2.name);
person1.greet();

//Inheritance:::::::::::::::
class School {
  constructor(name) {
    this.name = name;
    this.occupation = 'unemployed';
  }
  greet() {
    console.log(`Hello ${this.name}`);
  }
}

class student extends School {
  constructor(name) {
    super(name);
    this.occupation = 'Student';
  }

  greet() {
    console.log(`Hello ${this.name}`);
    console.log('occupation: ' + this.occupation);
  }
}
let student1 = new student('max');
student1.greet();

//Proxies:::::::::::::::::::::::::::::::::::::::::::::::::::::::
let student2 = {
  age: 24,
  name: "Felix"
}

const handler = {
  get: function (obj, prop) {
    return obj[prop] ? obj[prop] : 'property does not exist';
  }
}

const proxy = new Proxy(student2, handler);
console.log(proxy.name);
console.log(proxy.age);
console.log(proxy.class);

//export and import modules:::::::::::
// import {sum , PI} from '../export'
// console.log(sum(5,6));
// console.log(PI);

//Generator function:::::::::::::::::::::::::::::::::::::::::::::::::
function* generator() {
  let i = 0;
  while (true) {
    yield i++;
  }
}
const generator1 = generator();
console.log(generator1.next().value);
console.log(generator1.next().value);
console.log(generator1.next().value);

//symbols::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::
const symbol1 = Symbol('example1');
const symbol2 = Symbol('example1');
console.log(symbol1 === symbol2);

// Symbol.for 
const globalSymbol = Symbol.for('globalKey');
const anotherGlobalSymbol = Symbol.for('globalKey');
console.log(globalSymbol === anotherGlobalSymbol);


//number formatting:::::::::::
const numberFormatter = new Intl.NumberFormat('en-US');
const formattedNumber = numberFormatter.format(1234567.89);
console.log(formattedNumber);

//collator::::::::::::::
const collator = new Intl.Collator("sv");
const result1 = collator.compare("a", "z");
console.log(result1);

//number truncation:::::::::::::
console.log(Math.trunc(42.7))
console.log(Math.trunc(0.1))
console.log(Math.trunc(-0.1))

//Object property assignmrnt:::::::::::::::

const personDetails = {
  name: 'John',
  age: 30
};
const addressDetails = {
  city: 'New York',
  country: 'USA'
};
const mergedObject = Object.assign({}, personDetails, addressDetails);
console.log(mergedObject);

//Typed Array::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::

const binaryData = new Uint8Array([65, 66, 67, 68, 69]);
console.log(binaryData[0]);
const floatArray = new Float32Array([3.14, 2.718, 1.618]);
console.log(floatArray[0]); 
