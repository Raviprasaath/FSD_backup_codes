/*

const inputBox = document.getElementById("input");
console.log(inputBox);

const searchCallbackFunction = (e) => {
    // console.log("event ", e)
    const value = e.target.value;
    // api call 

    console.log(value, "value api call");
}

// inputBox.addEventListener("input", searchCallbackFunction) // need to off this line


// // Debounce function ..... callbackFunction, delay 


function myDebounce( callback, delay ) {
    let timerNumber;
    return function() {
        const event = arguments[0];       
        
        clearTimeout(timerNumber) // need to on this line

        timerNumber = setTimeout(() => {
            // i shoud 
            callback(event)
        }, delay)
    }
}

const debouncedSearchCallbackFunction 
= myDebounce(searchCallbackFunction, 1000)


inputBox.addEventListener("input", debouncedSearchCallbackFunction)

*/


// when we start typing something, it will print in console
// problem here is every letter it takes and print
// in real time in flipkart if we search as refrigerator in fast manner it will not show 12 result
// instead 12 letters it will display 3-4 auto suggestion only in console
// it saves lot of memory creation
// for this when user typed and when we give a gap that time only auto suggestion need to appear


//-------- 06-15-2023-----------

// const abc = setTimeout(() => {
//     console.log(abc);
// }, 1000);

// abc // => if print and check this it will give some value -> this is ID
// for example ID was 5 -> I can use this ID and i can stop by clearTime

// clearTimeout(5); // so the timer will delete


// Throttling

// so when we drag the window up down / left right -> it will sense and add it in console
// window.addEventListener("resize", ()=> {
//     console.log("hi")
// })
// //------------

//-----------------------------------------------
// basic approach
/*
const fireBullets = (event) => {
    console.log("hello window");
}

function throttle (callback, delay) {
    let flag = true;
    
    return function() {
        const event = arguments[0];
        
        if (flag) {
            callback(event);
            flag = false; // if this false, hello window will print only one time in console

        }
        
        setTimeout(()=> {
            
        }, delay)
    }
}

// window.addEventListener("resize", fireBullets);
const throttleFireBullets = throttle(fireBullets, 3000);
window.addEventListener("resize", throttleFireBullets);

*/
//-----------------------------------------------

// const fireBullets = (event) => {
//     console.log("hello window");
// }

// function throttle (callback, delay) {
//     let flag = true;
    
//     return function() {
//         const event = arguments[0];
        
//         if (flag) {
//             callback(event);
//             flag = false; // if this false, hello window will print only one time in console
            
//             setTimeout(()=> {
//                 flag = true;
//             }, delay)
//         } 
//     }
// }

// const throttleFireBullets = throttle(fireBullets, 3000);
// window.addEventListener("resize", throttleFireBullets);



// --------------------------------------
// Memoization


// function fibbo(n) {
//     //  dp dynamic programming

//     if(n <= 1) {
//         return 0
//     }

//     if( n === 2 || n === 3) {
//         return 1;
//     }

//     return fibbo(n-1) + fibbo(n-2)
// }

// function memiozation( callback ) {
    
//     let cacheMemory = {};

//     return function() {
//        const n = arguments[0]; 
//     //    console.log(cacheMemory);
//        if(cacheMemory[n]) {
//          return cacheMemory[n];
//        } else {
//         // expensive functon
//         const results = callback(n);
//         cacheMemory[n] = results;
//         return results;
//        }
//     }
// }


// const improvedFibbo = memiozation(fibbo);

// // const abc = fibbo(45);
// const abc1 = improvedFibbo(45); // 1st expensive call 
// const abc2 = improvedFibbo(45);
// const abc4 = improvedFibbo(45);
// console.log(abc1, "delayed"); // very delayed 
// console.log(abc2, "fast");
// console.log(abc4, "fast 45 again");





// Polyfills


/*
    Call Apply Bind
*/

// const obj1 = {
//     name: "akash"
// }

// const obj2 = {
//     name: "utkarsh",
//     foo: function(a ,b,c,d) {
//         console.log(this.name, a,b,c,d);
//     }
// }

// obj2.foo(2); //utkarsh 2 undefined undefined undefined

// obj2.foo.call(obj1, 10, 11, 12, 13) //akash 10 11 12 13
// obj2.foo.apply(obj1, [10, 11,12,13]) //akash 10 11 12 13

// const fooCopy =  obj2.foo.bind(obj1, 10, 11,12,13) // not a call site 

// fooCopy();  //akash 10 11 12 13

// const obj1 = {
//     name: "akash",
//  fnName : foo
// }

// obj1.foo = obj2.foo


// obj1.foo(1,2,3,4)


// obj2.foo.apply(obj1, [10, 11,12,13])

// obj2.foo.myCall 


// Function.prototype.myCall = function (context, ...args) { // rest operator 
//     const func = this;
//     const copyContext = {...context}
//     copyContext.fnName = func
//     copyContext.fnName(...args)
// }

// obj2.foo.myCall(obj1, 10,11,12,13)




// // 06-17-2023
// const obj1 = {
//     name: "akash"
// }

// const obj2 = {
//     name: "utkarsh",
//     foo: function(a ,b,c,d) {
//         // console.log(this.name, a,b,c,d);
//     }
// }

// Function.prototype.myCall = function () { // rest operator 
//     const func = this; // foo
    
//     let context = arguments[0];
//     const args = [...arguments];
//     // console.log(args , "arguments"); // (6) [{…}, 10, 11, 12, 13, 'mycall'] 'arguments'
//     args.shift();


//     // console.log(arguments) //Arguments(6) [{…}, 10, 11, 12, 13, 'mycall', callee: ƒ, Symbol(Symbol.iterator): ƒ]


//     const copyContext = {...context} // {name: "akash"}
//     copyContext.fnName = func // {name: 'akash', fnName: func/foo }
    
//     copyContext.fnName(...args)
// }

// obj2.foo.myCall(obj1, 10,11,12,13, "mycall")


// Function.prototype.myApply = function () { // rest operator 

//     let context = arguments[0];
//     let args = arguments[1];


//     const func = this; // foo

//     const copyContext = {...context} // {name: "akash"}
//     copyContext.fnName = func // {name: 'akash', fnName: func/foo }
    
//     copyContext.fnName(...args)
// }


// obj2.foo.myApply(obj1, [10,11,12,13, "myAapply"]) // javasciprt



const obj1 = {
    name: "akash"
}

const obj2 = {
    name: "utkarsh",
    foo: function(a ,b,c,d, e) {
        console.log(this.name, a,b,c,d, e);
    }
} 

const fooBindedFunc = obj2.foo.bind(obj1, 1,2,3,4, "bind");
fooBindedFunc()  //akash 1 2 3 4 bind


Function.prototype.myBind = function(context, ...args) {
    let func = this;

    return function() {
        func.call(context, ...args);
    }

}

const fooBindedFuncMyBind = obj2.foo.myBind(obj1, 1,2,3,4, "mybind");
fooBindedFuncMyBind();     //akash 1 2 3 4 mybind



///// ------ 


// obj2.foo.apply(obj1, [10, 11,12,13])

// const fooCopy =  obj2.foo.bind(obj1, 10, 11,12,13) // !call site 

// fooCopy();

// const obj1 = {
//     name: "akash",
//  fnName : foo
// }

// obj1.foo = obj2.foo


// obj1.foo(1,2,3,4)


// obj2.foo.apply(obj1, [10, 11,12,13])

// obj2.foo.myCall 





// Currying 
// function sum (a,b) {
//     return a + b;
// }

// sum(1,2); //3


let test = function sum (a,b) {
    return a + b;
}

let assign = test.bind(this, 1);
assign(2);



/*
    Question: How can you get it? 
    sum(1)(2) //3
    fun (2)
*/

function sum(num1) { //1
    //
        function innerSum (num2) { //2 
            return num1 + num2;
        } 
    
        return innerSum;
    //
    }
    
    // const sumWithOne = sum(1); // 
    // // sumWithOne would be InnerSUm + ClosureObj -> {num1: 1}
    
    // const ans = sumWithOne(2)
    
    // console.log(ans, "answer");
    
    console.log(sum(1)(2), "hey there ans")
    
/*
    Problem TODO: How to achieve
    sum(1)(2,3)(4,5,6,7)(8)()

    ans: 36
*/    