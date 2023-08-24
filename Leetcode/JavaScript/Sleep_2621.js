
let millis = 100;

async function sleep(millis) {
    const promiseCreation = new Promise( (res, rej) => {
        setTimeout( ()=> {
            res("Hello");
        }, millis)
    })
    return promiseCreation;
}

console.log(sleep(millis));