
let sum = function (a) {
    return function (b) {
        if (b) {
            return sum(a+b);
        } else {
            return a;
        }
    }
}

console.log(sum(10)(2)(3)());



let sum2 = function (a) {
    return function (b) {
        return b ? sum(a+b) : a;
    }
}

console.log(sum2(10)(2)(3)());