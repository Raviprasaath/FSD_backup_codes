const arr = [1,2,3,4,5]

Array.prototype.shiftMethod = function() {
    let arr = [];

    for (let i=1; i<this.length; i++) {
        arr.push(this[i]);    
    }
    return arr;
}

const changed = arr.shiftMethod();
console.log(changed);









const arr1 = [1,2,3,4,5]

Array.prototype.unShiftMethod = function(val) {
    let arr = [];
    arr.push(val);
    for (let i=0; i<this.length; i++) {
        arr.push(this[i]);    
    }
    return arr;
}

const changed1 = arr1.unShiftMethod(25);
console.log(changed1);


