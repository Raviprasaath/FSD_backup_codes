const person = {
    name: "ravi",
    age: 25,
    roll: "student",
}

const person2 = {
    name: "prasad",
    age: 26,
    roll: "Dev"
}

const callback = function getDetail (c,d,e) {
    console.log(this.name + " " + this.age + " " + this.roll+ " "+ c+" " +d +" " +e);
}

callback.call(person,"as","asd","asdsad")