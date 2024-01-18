//JSON.parse method::::::::::
var jsonString = '{"name": "John", "age": 30, "city": "New York"}';
// Parse JSON string into a JavaScript object
var parsedObject = JSON.parse(jsonString);
console.log(parsedObject.name); 
console.log(parsedObject.age);   
console.log(parsedObject.city); 

// JavaScript object
var person = {
  name: 'Jane',
  age: 25,
  city: 'San Francisco'
};
var jsonStringified = JSON.stringify(person);
console.log(jsonStringified);

