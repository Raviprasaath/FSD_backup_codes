// using async await to execute

const path = require('path');
const fsPromise = require('fs').promises;

// const fileOperations = async () => {
//     try {
//         const data = await fsPromise.appendFile(path.join(__dirname, 'files', 'start.txt'),"\n\nhello world")
//         console.log("data read", data);
//     } catch (err) {
//         console.error(err);
//     }
// }

// fileOperations();

// to aviod the call back hell we are doing the async await like venila JS

// all operations


const fileOperations = async () => {
    try {
        await fsPromise.appendFile(path.join(__dirname, 'files', 'start.txt'),"\n\nhello world")
        console.log("data create");
        
        await fsPromise.writeFile(path.join(__dirname, 'files', 'start2.txt'), "THis is another file" )
        console.log("new file creations");
        
        await fsPromise.readFile(path.join(__dirname, 'files', 'start.txt'))
        console.log("reading file");

        await fsPromise.rename(
            path.join(__dirname, 'files', 'start.txt'),
            path.join(__dirname, 'files', 'startToEnd.txt')
            
        )
        console.log("rename file");

        await fsPromise.unlink(path.join(__dirname, 'files', 'startToEnd.txt'))
        console.log("deleting file");


    } catch (err) {
        console.error(err);
    }
}


fileOperations();