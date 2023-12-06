if (!Array.prototype.flatPolyfill) {
    Array.prototype.flatPolyfill = function (depth = 1) {
        const flatArray = [];

        function flatten(arr, currentDepth) {
            for (let i = 0; i < arr.length; i++) {
                if (Array.isArray(arr[i]) && currentDepth < depth) {
                    flatten(arr[i], currentDepth + 1);
                } else {
                    flatArray.push(arr[i]);
                }
            }
        }

        flatten(this, 1);
        return flatArray;
    };
}


const nestedArray = [1, [2, [3, 4], 5], 6];
const flattened = nestedArray.flatPolyfill();

console.log(flattened); // Output: [1, 2, [3, 4], 5, 6]
