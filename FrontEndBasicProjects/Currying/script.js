
function sum (a) {
    return (b) => {
        return (c) => {
            return a+b+c;
        }
    }
}

console.log(sum(2)(4)(6));