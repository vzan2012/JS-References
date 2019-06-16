/*** Example for Arrow Functions ***/

const sayHello = function() {
  console.log('Hello');
}

const sayHello = () => {
  console.log('Hello');
}

// One line function does not need curly braces
const sayHello = () => console.log('Hello World');

// One line returns
const sayHello = () => "Hello Star";
console.log(sayHello());

// Same as above the return statement
const sayHello = function() {
  return "Hello";
};

// Return object
const sayHello = () => ({msg: 'Hello'});
console.log(sayHello());

// Single Parameter doesn't need parenthesis
const sayHello = name => console.log(`Hello ${name}`);
const sayHello = name => `Hello ${name} eee`;
console.log(sayHello('Vader'));
sayHello('Vader');

// Multiple params need parenthesis
const sayHello = (fname, lname) => console.log(`Hello ${fname} ${lname}`);
sayHello('Darth', 'Vader');

const users = ['Bose', 'Louis', 'George'];
console.log(users.length);
const nameLength = users.map(function(name) {
  return name.length;
});

const nameLength = users.map(name => name.length);

console.log(nameLength);

/*** Example for Arrow Functions ***/
