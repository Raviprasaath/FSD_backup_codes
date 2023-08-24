//--------- 06-11-2023 -----------------

// There is no concept of binding in Arrow function
function abcd() {
    console.log(this)
}
abcd.call({name:"ravi"}) //o/p-> {name: 'ravi'}
// so this is possible

// not this
const abc = ()=> {
    console.log(this)
}
abc.call({name:"ravi"}) //o/p-> Windows......





// Polyfills
// Map -> this map takes call back function

const result = [1,2,3,4].map((item)=> {
    return {
        value: item
    }
})
console.log(result)
// output
// 0: {value: 1}
// 1: {value: 2}
// 2: {value: 3}
// 3: {value: 4}

// so here map is defult function -> which is already stored in browser
// now we create the map function 

Array.prototype.myMap = function(callback) {
    let arr = [1,2,3,4,5];
    const result = [] //this collects the returned value from call back function
    for (let item of arr) {
        const resultVal = callback(item);
        result.push(resultVal);
    }
    return result;
}

const res = [123,456,324].myMap((item, index)=> {  // here myMap is Implicit binding
    return {
        value: item,
    }
})
console.log(res)
// output ->like this below because of implicit binding 
// 0: {value: 1}
// 1: {value: 2}
// 2: {value: 3}
// 3: {value: 4}
// 4: {value: 5}


// 11-06-2023

// myMap doing following this
/*
    1. Go to every element 
        1.1 call the callback function
        1.2 whatever result you got from the call you need to save that.
*/

Array.prototype.myMap = function( callback ) {
    // context -> this

    let arr = this

    const result = []; // this collects the returned val from the callback funciton.

    for(let index = 0; index < arr.length ; index++){
        const item = arr[index];
        const returnVal = callback(item, index)
        result.push(returnVal)
    }
    return result
}

//this 

const callback = (item, index ) => {
    return {
        index,
        value: item,
    }
}

const resl = [123,124,125].myMap( callback ) // callsite ?? binding ? implicit 

console.log(resl, "my Map");
// output
// 0: {index: 0, value: 123}
// 1: {index: 1, value: 124}
// 2: {index: 2, value: 125}

// ---------------------------------


// Filter ----- >>

const callbackFilter = (item, index) => {
    return item > 7
}

const resultFilter = [1,2,3,4,5,6,7,8,9,10].filter( callbackFilter ) // [8 , 9 10]

console.log(resultFilter, "filter");


Array.prototype.myFilter = function( callback ) {

    let arr = this;

    let resultArr = [];

    for(let i = 0; i<arr.length; i++) {
        const item = arr[i];
        const res = callback(item,i );

        if(res) {
            resultArr.push(item);
        }
    }

    return resultArr;
}

const resultMyFilter = [1,2,3,4,5,6,7,8,9,10].myFilter( callbackFilter )
console.log(resultMyFilter, "result MyFilter");

// output
// (3) [8, 9, 10] 'filter'
// (3) [8, 9, 10] 'result MyFilter'




//  Reduce ------> 


// const resultReduce = [2,3,4,5,6,7].reduce( (accumulator, currentVale ) => {
//     return accumulator + currentVale
// } )

// console.log(resultReduce, "reduce");





// Array.prototype.myReduce = function( callback, initialValue ) {
//     let array = this;

//     let accumulator = initialValue ? initialValue : 0 ;
//     for (let index = 0; index < array.length; index++) {
//         const item = array[index];
//         accumulator = callback(accumulator ,item)
//     }

//     return accumulator;
// }


// const resultMyReduce = [2,3,4,5,6,7].myReduce( (accumulator, currentVale ) => {
//     return accumulator + currentVale
// } )

// console.log(resultMyReduce, "my reduce");





// -----------  set Interval, clearInterval, clearTimeout  -------------- 
console.log("initial commit")

let setTimeoutId = setTimeout(() => {
    console.log("hey there setTime out");
}, 3000)

clearTimeout(setTimeoutId)

console.log(setTimeoutId, "setTimeoutId");



const setIntevalId = setInterval(() => {
    console.log("repeat .....")
}, 3000)

clearInterval(setIntevalId)

console.log(setIntevalId, "setIntevalId")






// ----  output of the question


// for(var i=0; i<8;i++) {
    
//         console.log(i);

//  } // 0 1 2 3 4 5 6 7



// for(var i=0; i<8;i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 2000)
// }

// 8 8 8 8 8 8 8 8


// if you want to improve this 

// for(let i=0; i<8;i++) {
//     setTimeout(() => {
//         console.log(i);
//     }, 2000)
// } // 0 1 2 3 4 5 6 7




//----------------------------------------------
var a = 99;

(() => {
    var a = 12;
    console.log(a)
})()    // this is self invoke function
//----------------------------------------------

function abc() {
    var a = 0;
    console.log(a)
}

abc();

console.log(a)


// 06-13-2023

// by using var this will not work
for (var i=0; i<8; i++) {
    setTimeout(()=> {
        console.log(i);
    }, 2000)
}

// this will work
for (let i =0; i < 4; i++) {
    console.log(i);     // o/p -> 0 1 2 3
    ((index) => {
        setTimeout(()=> {
            console.log(index, "hey")   // -> 0 'hey', 1 'hey', 2 'hey', 3 'hey'
        }, 2000)
    }) (i);    // here (i) is function invokation
}