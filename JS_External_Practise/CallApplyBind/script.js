// normal method invoking inside object

// const person = {
//     name: "ravi",
//     age: "25",
//     fullname: function() {
//         console.log(this.name +" "+ this.age);
//     }
// }

// console.log(person.fullname());  // output ravi 25



// level 2 

// const person = {
//     name: "ravi",
//     age: "25",
//     fullname: function() {
//         console.log(this.name +" "+ this.age);
//     }
// }

// const person2 = {
//     name: "abcd",
//     age: "23",
// }

// console.log(person.fullname.call(person2)); // abcd 23




// level 3

// const person = {
//     name: "ravi",
//     age: "25",
//     fullname: function(city, state, level) {
//         console.log(this.name +" "+ this.age + " "+city+" "+state+" "+level);
//     }
// }

// const person2 = {
//     name: "abcd",
//     age: "23",
// }

// console.log(person.fullname("cbe", "tn", "3")); // ravi 25 cbe tn 3
// console.log(person.fullname.call(person2, "cbe", "tn", "3")); // abcd 23 cbe tn 3

// console.log(person.fullname.apply(person2, ["maj", "bg", "asd"])) //abcd 23 maj bg asd

// const storing = person.fullname.bind(person2, "erre", "grrg", "090");
// console.log(storing()) // abcd 23 erre grrg 090




// level 4

const person = {
    name: "ravi",
    age: "25",
}

const fullname = function (city, state, level) {
    console.log(this.name +" "+ this.age + " "+city+" "+state+" "+level);
}

const person2 = {
    name: "abcd",
    age: "23",
}

console.log(fullname.call(person, "cbe", "tn", "12213"))  // ravi 25 cbe tn 12213

console.log(fullname.apply(person2, ["tn", "sere", "343"]))  // abcd 23 tn sere 343

const store = fullname.bind(person2, "ghh", "mki", "987");
console.log(store()); // abcd 23 ghh mki 987