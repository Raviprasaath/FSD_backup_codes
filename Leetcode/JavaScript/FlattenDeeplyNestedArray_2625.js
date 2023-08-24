
let arr = [1, 2, 3, [4, 5, 6], [7, 8, [9, 10, 11], 12], [13, 14, 15]];
let n = 3;
let flat = function (arr, n) {
    if (n == 0) {
        return arr;
    }
    
    let ans = [];

    function flatting (arr, n) {
        for (let i=0; i<arr.length; i++) {
            if (Array.isArray(arr[i]) && n > 0) {
                flatting(arr[i], n-1);
            } else {
                ans.push(arr[i]);
            }
        }
    }

    flatting(arr, n);
    
    return ans;
    // return arr.flat(n);
};

console.log(flat(arr, n));