
const p1 = new Promise ((res, rej)=> {
    setTimeout(()=> {
        res("P1 ok");
    }, 3000)
})

const p2 = new Promise ((res, rej)=> {
    setTimeout(()=> {
        res("P2 ok");
    }, 5000)
})

const p3 = new Promise ((res, rej)=> {
    setTimeout(()=> {
        rej("P3 ok");
    }, 1000)
})

// its looking for all needs to be success or first failure it will take and reject

Promise.all([p1, p2, p3]).then((response)=> {
    console.log("all ", response)
}).catch((err)=> {
    console.error("all ", err);
})


// it will return when all the promises are settle

Promise.allSettled([p1, p2, p3]).then((response)=> {
    console.log("all settled ", response)
}).catch((err)=> {
    console.error("all settled ", err);
})


// it will return when first promise is settle

Promise.any([p1, p2, p3]).then((response)=> {
    console.log("any ",response)
}).catch((err)=> {
    console.error("any ",err);
})

// it will return when first promise is success

Promise.race([p1, p2, p3]).then((response)=> {
    console.log("race",response)
}).catch((err)=> {
    console.error("race",err);
})


// when all promise fails -> it throw a aggrigate error
// to read that error -> console.log(err.error)




// Settled has 3 types
// 1. resolve, reject
// 2. success, fail
// 3. fulfilled, rejected
