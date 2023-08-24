let arr = [1,2,3,4,5], size = 1;

var chunk = function(arr, size) {
    let ans = [];
    for (let i=0; i<arr.length; i=i+size) {
        ans.push(arr.slice(i, i+size));
    }
    return ans;
    // return _.chunk(arr, size);
};

console.log(chunk(arr, size));