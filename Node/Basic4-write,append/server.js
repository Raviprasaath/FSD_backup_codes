
const fs = require('fs');
const path = require('path');

// fs.writeFile(path.join(__dirname, 'files', 'Notepad6.txt'), "03-30-2024", (err) => {
//   if (err) throw err;
//   console.log('data');
// })

// process.on('uncaughtException', err => {
//   console.log(err);
//   process.exit(1);
// }) 



// in the above code new file was created
// now we can update 





// better way is
// \n\n means enter for 2 times

fs.writeFile(path.join(__dirname, 'files', 'Notepad2.txt'), "This is created by node", (err) => {
  if (err) throw err;
  fs.appendFile(path.join(__dirname, 'files', 'Notepad2.txt'), "\n\nUpdated version - This is created by node", (err) => {
    if (err) throw err;
    console.log('write complete');
  })
})


// without creating a new file if we use append means - it will create and update 
fs.appendFile(path.join(__dirname, 'files', 'Notepad3.txt'), "File without create direct append", (err) => {
  if (err) throw err;
  console.log('write complete');
})

// rename -> here already created file was Nodepad3 now renames as 4 content not changed
fs.appendFile(path.join(__dirname, 'files', 'Notepad3.txt'), "File without create direct append", (err) => {
  if (err) throw err;
  fs.rename(
    path.join(__dirname, 'files', 'Notepad3.txt'),
    path.join(__dirname, 'files', 'Notepad4.txt'),
  
  (err) => {
    if (err) throw err;
    console.log('write complete');
  })
})
