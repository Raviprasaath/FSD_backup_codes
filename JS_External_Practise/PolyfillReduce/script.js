let arr = [1,12,3,4,5];

let ans = arr.reduce((accum, val) => {
    if (accum < val) {
        accum = val;
    }
    return accum;
}, 0)

console.log(ans);

Array.prototype.reduce = function(callback, initialValue) {
    let accumulator = initialValue !== undefined ? initialValue : this[0];

    for (let i = 0; i < this.length; i++) {
        accumulator = callback.call(undefined, accumulator, this[i], i, this);
    }

    return accumulator;
};
  
const numbers = [1, 2, 3, 4, 5];

const sum = numbers.reduce((accumulator, currentValue) => {
    return accumulator + currentValue;
}, 0);

console.log(sum);

// ------------------from newton assignment
// Array.prototype.myReduce = function (cb, initialValue) {
//     let accumlator = initialValue;
  
//     for(let item of this) {
//       accumlator = cb(accumlator, item);
//     }
//     return accumlator;
//   };