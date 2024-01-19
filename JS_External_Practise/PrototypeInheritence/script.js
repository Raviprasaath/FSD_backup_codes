// whenever we create a object in JS -> JS engine will automatically attach
// with some hidden function or properties is known as proto type.
// for example

// let arr = [1,2,4]

// arr.__proto__. -> this is how we access the proto attached with the array
// not only for arr, for anything like function and object too 


// arr.__proto__       // will give a protos
// arr.__proto__.__proto__         // will give a proto of object
// arr.__proto__.__proto__.__proto__   // gives null

// arr.__proto__.__proto__     //and
// Object.prototype        // are same

//----- This is known proto type chain


//------------------------------------------------------------

//----- similarly
// Object.prototype        // had a proto values
// Object.__proto__.__proto__      // null




// function func () {

// }

// here 
// func.__proto__      // gives a proto this is similar to
// Function.prototype 

// func.__proto__.__proto__        // its equal to object


// this is clearly shows at end every thing is a object

// the above all thing don't write in vs code or anywhere its only check in terminal only




//------------------------------------------------------------

// ** important example
Function.prototype.mybind = function () {
    console.log("test");
}

function func () {

}


// so in terminal if i write this means -> func.mybind() -> o/p was test







// Akshay Shainey notes
let arr = ["a", "b", "c"];
// in console if we typing arr. -> which gives many suggestions
// same for if we created an object
// for functions also call, apply, bind will you get the access

