const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send('Hello World');
})

app.listen (PORT, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Success')
    }
})