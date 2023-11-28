

const http = require('http');
const PORT = 3000;
const fs = require('fs');

server = http.createServer((request, response) => {
    response.writeFile("Hello ");
    response.end();
})



