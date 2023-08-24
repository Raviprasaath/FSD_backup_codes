// 06-27-2023

// IIFE
// Immediadtely Invoke Function Execution

/*
function abc() {
    console.log("abc")
}

abc() // you as a user executing this thing

( () => {
    console.log("immediately invoked function")
}) () // this will automatically invoke this function
*/


// implicit vs explicit cohersion
// Type Coercion refers to the process of automatic or implicit conversion of values from one data type to another. This includes conversion from Number to String, String to Number, Boolean to Number etc. when different types of operators are applied to the values
// https://betterprogramming.pub/implicit-and-explicit-coercion-in-javascript-b23d0cb1a750

/*
// implicit
console.log("15" * 2 )

//explicit
Number(i) + j // -> here we converting to externally

*/

// Next topic
// setTimeout

// MicroTask Queue -> Promise, Asyncs
// MacroTask Queue -> setTimeout, setInterval, Setimediate




// setTimeout(()=> {
//     console.log("hello");
// }, 0)
// let myFetch = new Promise((res, rej)=> {
//     res(1);
// })
// myFetch.then(data=> console.log(data));

// output
// 1
// promise-> hello

// here promise is prior and after promise settimeout gives ans






// Another example

setTimeout(() => {
    console.log("hello");
}, 0);


let myFetch = new Promise((res, rej)=> {
    setTimeout(() => {
        res(1);
    }, 3000);
})
myFetch.then(data=> console.log(data));

// output
// hello
// 1
// here also promise is prior but hello return in 0 sec, then fetch was return




//----------------------------
// function outerfunction(x) {
//     function innerfunction(y) {
//         return x + y;
//     }
//     return innerfunction;
// }

// let a = 12;
// let funcf = outerfunction(a);
// let res = funcf(2);
// console.log(res);   // ans 14

//----------------------------
// function outerfunction(x) {
//     function innerfunction(y) {
//         return x + y;
//     }
//     return innerfunction;
// }

// let a = 12;
// let funcf = outerfunction(a);
// a=99;   // a will be not update
// let res = funcf(2);
// console.log(res);   // ans 14
//-----------------------------
function outerfunction(ob) {
    function innerfunction(y) {
        return ob.x + y;
    }
    return innerfunction;
}

let obj = {x: 12};
let funcf = outerfunction(obj);
obj.x=99;   // here x:12 stored in heap, so same address was pointing, thats why value get updated
let res = funcf(2);
console.log(res);   // ans 101
//-----------------------------

var x = 1;
function outer() {
    console.log(x);

    var x = 2;
    function inner() {
        console.log(x);
    }
    inner();
}
outer();
// output ->   undefined 2
// ------------
var b = 1;
function outer() {
    var b = 2;
    function inner() {
        b++;
        var b = 4;
        console.log(b);
    }
    inner();        
}
let x = outer;
let y = x();

// output = 4
