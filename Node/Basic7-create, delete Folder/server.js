const fs = require('fs');

// here existsSync checks the file is there or not


if (!fs.existsSync('./New Folder created by Node 2')) {
    fs.mkdir('./New Folder created by Node 2', (err) => {
        if (err) throw err;
        console.log('Directory created');
    })
}



// removing directory
if (fs.existsSync('./New Folder created by Node 2')) {
    fs.rmdir('./New Folder created by Node 2', (err) => {
        if (err) throw err;
        console.log('Directory created');
    })
}


// for catching error
process.on('uncaughtException', err => {
  console.log(err);
  process.exit(1);
})