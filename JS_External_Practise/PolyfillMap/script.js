// Step by Step will see

let array = [2,4,5,6,8];

const area = function (array) {
    let ans = [];
    for (let i=0; i<array.length; i++) {
        ans.push(Math.PI * array[i] * array[i] );        
    }
    return ans;
}

console.log(area(array));

const dia = function (array) {
    let ans = [];
    for (let i=0; i<array.length; i++) {
        ans.push(array[i] * 2);
    }
    return ans;
}

console.log(dia(array));

const circum = function (array) {
    let ans = [];
    for (let i=0; i<array.length; i++) {
        ans.push(2 * Math.PI * array[i]);        
    }
    return ans;
}

console.log(circum(array));


// so the above code repeating so many things DRY principle was broke
// bad practice


// const area2 = function (radius) {
//     return Math.PI * radius * radius
// }

// const calculate = function (logic, array) {
//     let ans = [];
//     for (let i=0; i<array.length; i++) {
//         ans.push(logic(array[i]));
//     }
//     return ans;
// }

// console.log(calculate(area2, array));


// Now like the same way we can create many logics

const area2 = function (radius) {
    return Math.PI * radius * radius
}
const dia2 = function (radius) {
    return radius * 2
}
const circum2 = function (radius) {
    return 2 * Math.PI * radius
}

const calculate = function (logic, array) {
    let ans = [];
    for (let i=0; i<array.length; i++) {
        ans.push(logic(array[i]));
    }
    return ans;
}

console.log(calculate(area2, array));
console.log(calculate(dia2, array));
console.log(calculate(circum2, array));


// So here instead Map we can use

console.log(array.map(area2))
console.log(array.map(dia2))
console.log(array.map(circum2))



// Map polyfill

Array.prototype.myMap = function (logic) {
    let ans = [];
    for (let i=0; i<this.length; i++) {
        ans.push(logic(this[i]));
    }
    return ans;
}

console.log(array.myMap(area2));
