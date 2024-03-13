// method 1 by bind
const multi = function (a, b) {
    console.log(a*b);
}

const ans = multi.bind(this, 5)
ans(10)  // o/p -> 50


// method 2 in currying
const multiply = function (x) {
    return function (y) {
        console.log(x*y);
    }
}

const ans2 = multiply(50);
ans2(4);


// method 3
const a = function(a) {
    return function (b) {
        return function (c) {
            console.log(a*b*c);
        }
    }
}

a(20)(5)(10)

