if (!Array.prototype.concatPolyfill) {
    Array.prototype.concatPolyfill = function () {
        const result = [...this];

        for (let i = 0; i < arguments.length; i++) {
            if (Array.isArray(arguments[i])) {
                result.push(...arguments[i]);
            } else {
                result.push(arguments[i]);
            }
        }

        return result;
    };
}


const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];
const combined = arr1.concatPolyfill(arr2, 7, [8, 9]);

console.log(combined); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]
