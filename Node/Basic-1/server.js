// console.log("hi")
// console.log(global)

const os = require('os');
console.log(os.type());     // Windows_NT
console.log(os.version());  // Windows 10 Home Single Language
console.log(os.homedir());  // C:\Users\Raviprasaath

const path = require('path');

console.log(__dirname);
console.log(__filename);

console.log(path.dirname(__filename));

console.log(path.basename(__filename));
console.log(path.parse(__filename));




// -------------------------
const math = require('./math');
console.log(math.add(3,3));
console.log(math.sub(23,85));
console.log(math.mul(87,96));
console.log(math.div(69,89));



// another way desturcture
const {add, sub, mul, div} = require('./math');
console.log(add(23,45));
console.log(sub(45,25));
console.log(mul(28,412));
console.log(div(45,5));



