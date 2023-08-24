localStorage.setItem('ravi', '23')
localStorage.setItem('qwadravi', '23')
localStorage.setItem('ravasxi', '23')
localStorage.setItem('ravawqi', '23')
localStorage.setItem('ravqswi', '23')

console.log (localStorage.getItem('ravi'))


// now if we want to store as a Object then we need to change to string
const user = {name:"ravi", class:"12"}
localStorage.setItem("items", user) // this store as ->	items	[object Object]

// storing in Local storage converted into String
// because local storage doesn't have a capability to store Objects

JSON.stringify(user);

// overcome this issue
localStorage.setItem("item", JSON.stringify(user)) //-> item	{"name":"ravi","class":"12"}

// to get back
console.log(localStorage.getItem(name)) //this gives null

// so
// console.log(localStorage.getItem(name)) //this gives null
let users = localStorage.getItem("item")
JSON.parse(users); //back to Object 
console.log(users); //{"name":"ravi","class":"12"}