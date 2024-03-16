/*
In JavaScript, the concepts of shallow copy and deep copy are related to how objects and arrays are duplicated, and whether the duplication creates new references or copies of the underlying values. 

Shallow Copy:
A shallow copy creates a new object or array, but it only copies references to the nested objects or arrays, not the nested objects or arrays themselves. This means that changes to the nested objects or arrays will be reflected in both the original and the copied objects or arrays.

Deep Copy:
A deep copy creates a completely independent duplicate of an object or array, including all nested objects or arrays. Changes to the copied object or array do not affect the original, and vice versa.
Note:
While Object.assign() can be used for shallow copying objects, it does not handle nested arrays or objects. For deep copying, the JSON approach is often used, but it has limitations (e.g., it doesn't handle functions or circular references).
Libraries like Lodash provide utility functions (_.cloneDeep()) that can handle more complex scenarios for deep copying.

*/


const originalObject = {
    prop1: 'value1',
    prop2: {
      nestedProp: 'nestedValue',
    },
  };
  
  // Using Object.assign() for shallow copy
  const shallowCopy = Object.assign({}, originalObject);
  
  // Modifying the nested property in the shallow copy
  shallowCopy.prop2.nestedProp = 'modifiedValue';
  
  console.log(originalObject.prop2.nestedProp); // Outputs: modifiedValue
  


//   array
const originalArray = [1, 2, [3, 4]];

// Shallow copy using slice()
const shallowCopy = originalArray.slice();

// Modify a nested array in the shallow copy
shallowCopy[2][0] = 999;

console.log(originalArray);   // Outputs: [1, 2, [999, 4]]
console.log(shallowCopy);     // Outputs: [1, 2, [999, 4]]





//----------------------------------   Deep copy  -------------------------- //

const originalObject1 = {
    prop1: 'value1',
    prop2: {
      nestedProp: 'nestedValue',
    },
  };
  
  // Using JSON.stringify() and JSON.parse() for deep copy
  const deepCopy = JSON.parse(JSON.stringify(originalObject1));
  
  // Modifying the nested property in the deep copy
  deepCopy.prop2.nestedProp = 'modifiedValue';
  
  console.log(originalObject1.prop2.nestedProp); // Outputs: nestedValue
  
//   array

const originalArray2 = [1, 2, [3, 4]];

// Deep copy using JSON.stringify() and JSON.parse()
const deepCopy = JSON.parse(JSON.stringify(originalArray2));

// Modify a nested array in the deep copy
deepCopy[2][0] = 999;

console.log(originalArray2);   // Outputs: [1, 2, [3, 4]]
console.log(deepCopy);        // Outputs: [1, 2, [999, 4]]


//--------------------------------------------------------------------------------