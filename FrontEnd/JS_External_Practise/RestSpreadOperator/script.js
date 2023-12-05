/*
Spread Operator (...):

The spread operator is used to expand elements of an array, object, or iterable into individual elements. It is used in the context of function arguments, array literals, and object literals.

*/

const array1 = [1, 2, 3];
const array2 = [...array1, 4, 5];

console.log(array2); // Outputs: [1, 2, 3, 4, 5]


const obj1 = { a: 1, b: 2 };
const obj2 = { ...obj1, c: 3 };

console.log(obj2); // Outputs: { a: 1, b: 2, c: 3 }


/*

Rest Operator (...):

The rest operator is used to represent an indefinite number of arguments as an array. It is used in function parameter lists to collect the remaining arguments into a single array.

*/

function sum(...numbers) {
    return numbers.reduce((acc, num) => acc + num, 0);
}
  
console.log(sum(1, 2, 3, 4)); // Outputs: 10


const [first, ...rest] = [1, 2, 3, 4, 5];

console.log(first); // Outputs: 1
console.log(rest);  // Outputs: [2, 3, 4, 5]
