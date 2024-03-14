



// 1. Object create
// const Proto = {
//     greet: function() {
//         console.log(this.name+" "+this.age);
//     }
// }
// const obj = Object.create(Proto);
// obj.name = "Ravi";
// obj.age = "25";

// obj.greet()

// 2. Object literal 
// const obj = {"key1":"value1", "key2":"value2"};

// 3. Object constructor
// const obj = new Object();
// obj.name = "Ravi 2";
// obj.city = "Coimbatore";
// obj.greet = function() {
//     console.log(this.name+"-"+this.city)
// }
// obj.greet();

// 4. Object Function Constructor
// function Person(name, age) {
//     this.name = name;
//     this.age = age;
//     this.greet = function(){
//         console.log(this.name+"-"+this.age);
//     }
// }

// const obj = new Person("ravi", "26");
// obj.greet();

//  5. ES6 class
// class Person {
//     constructor(name, age) {
//         this.name = name;
//         this.age = age;
//         this.greet = function(){
//             console.log(this.name + "-"+this.age);
//         }
//     }
// }

// const obj = new Person("ravi", "27");
// obj.greet()

