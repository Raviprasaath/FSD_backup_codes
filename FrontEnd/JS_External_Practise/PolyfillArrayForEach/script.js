// Polyfill for Array.forEach
if (!Array.prototype.forEach) {
    Array.prototype.forEach = function (callback, thisArg) {
        for (var i = 0; i < this.length; i++) {
            if (this.hasOwnProperty(i)) {
                callback.call(thisArg, this[i], i, this);
            }
        }
    };
}

// Example usage
var arr = [1, 2, 3];

arr.forEach(function (element, index, array) {
    console.log(element, index, array);
});
