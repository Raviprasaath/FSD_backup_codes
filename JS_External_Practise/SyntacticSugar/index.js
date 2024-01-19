/*
Syntactic sugar in programming refers to syntax within a language that allows you to write things in a shorter or more readable way, without fundamentally changing the way those things are expressed in terms of the underlying language constructs.

In JavaScript, there are several examples of syntactic sugar. Here are a few:



 1. Arrow Functions:

const add = function(a, b) {
    return a + b;
};
  

const add = (a, b) => a + b;



2. Template Literals

const name = "John";
console.log("Hello, " + name + "!");


const name = "John";
console.log(`Hello, ${name}!`);



3. Destructuring Assignment:

const numbers = [1, 2, 3];
const a = numbers[0];
const b = numbers[1];
const c = numbers[2];


const numbers = [1, 2, 3];
const [a, b, c] = numbers;


4. Object Shorthand

const x = 10;
const y = 20;
const point = { x: x, y: y };

const x = 10;
const y = 20;
const point = { x, y };


5. Class Syntax

function Car(make, model) {
  this.make = make;
  this.model = model;
}
Car.prototype.drive = function() {
  console.log("Driving...");
};



class Car {
  constructor(make, model) {
    this.make = make;
    this.model = model;
  }
  drive() {
    console.log("Driving...");
  }
}






*/
