setTimeout(()=> {
    console.log("setTime");
}, 0)

// fetch('https://dummyjson.com/products/1').then((res)=>console.log(res))

const promise = new Promise((res, rej)=> {
    console.log("Hi");
})

