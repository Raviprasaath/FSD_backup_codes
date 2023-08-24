let obj = {"x": 5, "y": 42};

var isEmpty = function(obj) {
    return Object.keys(obj).length === 0
};

console.log(isEmpty(obj));