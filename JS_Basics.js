console.log("JS Scopes:::");
    //block scope with var::::::::::::
    var a = 5;
    {
      var a = 10;
    }
    var a = 60;
    console.log(a);

    //block scope with let :::::::::::
    let b = 5;
    {
      let b = 10;
    }
    console.log(b);

    //Global scope with const ::::::::::::
    const c = 15;
    {
      const c = 20;
    }
    console.log(c);

console.log("String Methods:::");
    //String Methods::::::::::::::::::
    let text = "Hello World";
    let text2 = "Good Morning Good";
    console.log(text.length);
    console.log(text.charAt(0));
    console.log(text.charCodeAt(0));
    console.log(text.at(-1)); //Support negative Index
    console.log(text[0]);
    console.log(text.slice(0, 6));
    console.log(text.substring(0, 8));
    console.log(text.substr(0, 6));
    console.log(text.toUpperCase());
    console.log(text.toLowerCase());
    console.log(text.concat(text2));
    console.log(text.trim());
    console.log(text.padStart(14, "0"));
    console.log(text.repeat(2));
    console.log(text2.replace(/Good/g, "Morning"));
    let token = text.split(" "); //convert into Array form
    console.log(token[1]);
    console.log(text.indexOf("World"));
    console.log(text.search("World"));
    console.log(text.includes("Hello"));
    console.log(text.includes("Hellooo"));
    console.log(text.startsWith("Hello"));
    console.log(text.endsWith("World"));

    //Template String::::::::::::::::::
    let str = "Sofy";
    let msg = `Hello ${str}`;
    console.log(msg);

console.log("Array and Array Methods:::");

    const motors = ["BMW", "Toyota", "Audi"];
    console.log(motors);
    const motor = new Array("BMW", "Audi");//Avoid this , Sometimes not work appropriate
    console.log(motors.sort());
    console.log(motors[motors.length - 1]);
    let result;
    for (let i = 0; i < motors.length; i++) {
      result += motors[i];
    }
    console.log(result);
    console.log(Array.isArray(motors));
    console.log(motors instanceof Array);

//Array Methods:::::::::::::::::
    const fruits = ["Banana", "Orange", "Apple", "Mango"];
    const fruits1 = ["Blueberry", "orange"];
    console.log(fruits.length);
    console.log(fruits.toString());
    console.log(fruits[2]);
    console.log(fruits.at(-1));
    console.log(fruits.push("Avacado"));
    console.log(fruits.pop());
    console.log(fruits.shift());
    console.log(fruits.unshift("blueberry"));
    console.log(fruits.concat(fruits1));
    console.log(fruits.splice(2, 0, "kiwi"))
    console.log(fruits.slice(1))
    console.log(fruits.join("|")); // convert into string
    const myArr = [[1, 2], [3, 4], [5, 6]];
    console.log(myArr.flat());

console.log("Objects:::");
  //objects:::
    const cars = { type: "Fiat", model: "500", color: "white" };
    cars.color = "red";
    cars.owner = "Johnson";
    console.log(cars);
    console.log(typeof(cars));
    let txt = "";
    for(let x in cars){
      txt += cars[x];
    }
    console.log(txt);

  //nested object::;
  
    let p = "";
    const myObj = {
      name: "John",
      age: 30,
      cars: [
        { name: "Ford", models: ["Fiesta", "Focus", "Mustang"] },
        { name: "BMW", models: ["320", "X3", "X5"] },
        { name: "Fiat", models: ["500", "Panda"] }
      ]
    }
    for (let i in myObj.cars) {
      p +=  myObj.cars[i].name ;
      for (let j in myObj.cars[i].models) {
        p += myObj.cars[i].models[j];
      }
    }
    console.log(p);

    const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function () {
      return this.firstName + " " + this.lastName;
    }
  }
  console.log(person.fullName());

//object contructor and prototype::::::
    function Person(first, last, age, eye) {
      this.firstName = first;
      this.lastName = last;
      this.age = age;
      this.eyeColor = eye;
    }

    Person.prototype.nationality = "English";
    const myFather = new Person("John", "Doe", 50, "blue");
    console.log(myFather.nationality);

//Conditional Statements
    let marks = 96;
    if(marks<35){
      console.log("Fail");
    }
    else if(marks>35 && marks<70){
      console.log("Pass");
    }
    else{
      console.log("Distinction");
    }

//Switch Statement::::
    let day;
    switch (new Date().getDay()) {
      case 0:
        day = "Sunday";
        break;
      case 1:
        day = "Monday";
        break;
      case 2:
        day = "Tuesday";
        break;
      case 3:
        day = "Wednesday";
        break;
      case 4:
        day = "Thursday";
        break;
      case 5:
        day = "Friday";
        break;
      case 6:
        day = "Saturday";
    }
    console.log(day);

//Regular Expression::::
    const pattern = /e/;
    console.log(pattern.test("The best"));

    const obj = /e/.exec("The best things :");
    console.log(obj[0] + " " + obj.input);
   
//Closures:::::::::::::::
    function init() {
      var name = "Mozilla"; 
      function displayName() {// displayName() is the inner function, that forms the closure
        console.log(name); // use variable declared in the parent function
      }
      displayName();
    }
    init();

    function makeFunc() {
      const name = "Mozilla";
      function displayName() {
        console.log(name);
      }
      return displayName;
    }

    const myFunc = makeFunc();
    myFunc();

//function::::::::::::
    function sum(x,y){
      let ans = x+y;
      console.log(ans);
    }
    console.log(sum(50,50));

// self invoking function:::
(function(){console.log("Hello")})();

//Arrow Function::::
const x = (x,y) => {return x*y};
console.log(x(5,5));


//Function Rest Parameter::::::::::

function sum (...args){
  let sum = 0 ;
  for(let arg of args){
    sum += arg;
  }
  return sum ;
}
console.log(sum(2,4,4));

//Array Destructuring:::::::::::
let arr1 , arr2;
[arr1 ,arr2] = [10,20];
console.log(arr1 + " " + arr2);

var [firstName, , ...lastName] = ["alpha", "beta", "gamma", "delta"];
console.log(firstName);
console.log(lastName); 

//Object Destructuring:::::::::::
var marks1 = { x1: 21, y1: -34, z1: 47 };
const { x1, y1, z1 } = marks1; 
console.log(x1 + " " + y1 + " " + z1);

//Template Literals::::::::
let fName = "John";
let lName = "Doe";
let text1 = `Welcome ${fName}, ${lName}!`;
console.log(text1);

//Classes:::::::::::::
class Person2 {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  details() {
    console.log("hello!");
  }
}

const person1 = new Person2('John', 25);
console.log(person1.name); 
console.log(person1.age);  
person1.details();          

















