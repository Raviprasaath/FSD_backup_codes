// copying the content from and pasting to another file 



const fs = require('fs');
const path = require('path');
const rs = fs.createReadStream(path.join(__dirname, 'files', 'bigfile.txt'), {encoding: 'utf8'})
const ws = fs.createWriteStream(path.join(__dirname, 'files', 'new_file.txt'));

// rs.on('data', (dataChunk) => {
//     ws.write(dataChunk);
// })


// Efficent and faster way is
rs.pipe(ws);