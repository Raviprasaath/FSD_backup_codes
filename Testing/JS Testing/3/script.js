

const arr = [1,2,3,4,5];


Array.prototype.myReduce = function (accum, curr) {
    let accumulator = curr !== undefined ? curr : this[0];
    for (let i=0; i<this.length; i++) {
        accumulator = accum.call(undefined, accumulator, this[i], i, this);
    }
    return accumulator;
}





const test = arr.myReduce((accum, curr) => {
    accum[curr] = curr;
    return accum;
}, {})
console.log(test);









// const maxNum = (val) => {
//     return val > 3;
// }

// Array.prototype.myFilter = function (logic) {
//     let ans = [];
//     for (let i=0; i<this.length; i++) {
//         if (logic(this[i])) {
//             ans.push(this[i]);
//         }
//     }
//     return ans;
// }

// console.log(arr.myFilter(maxNum));







// const sum = (value) => {
//     return value*2;
// }

// Array.prototype.myMap = function(logic) {
//     let ans = [];
//     for (let i=0; i<this.length; i++) {
//         ans.push(logic(this[i]));
//     }
//     return ans;
// }

// console.log(arr.myMap(sum));