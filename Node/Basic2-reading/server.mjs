// refered here - https://nodejs.org/dist/latest-v20.x/docs/api/fs.html

import { readFile } from 'node:fs';

readFile('./files/Notepad.txt', (err, data) => {
  if (err) throw err;
  console.log(data);
  console.log(data.toString());
});