// refered here - https://nodejs.org/dist/latest-v20.x/docs/api/fs.html

// previously we used mjs extension 
// when mjs used means we need to do a import kind of code
// for js file require and path used

// os to os setting path name is diff like in Mac / \ will be change so
// better way is to do a setting a path like below

const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname,'files', 'second', 'third', 'TextFile.txt'), 'utf8', (err, data) => {
  if (err) throw err;
  console.log(data);
})

// console.log("Hi");

