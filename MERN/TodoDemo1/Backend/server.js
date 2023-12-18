const express = require('express');
require("dotenv").config();
const mongoose = require('mongoose');

const app = express();

app.use((req, res, next)=> {
    console.log("path "+ req.path +" method "+req.method);
    next();
})

app.get('/', (req, res)=> {
    res.send('Hello Ravi ')
})

mongoose.connect(process.env.MONGO_URI)
    .then(()=> {
        app.listen(process.env.PORT, ()=> {
            console.log('Listening to Port 5800 is successful and DB connected');
        })
    })
    .catch((error)=> {
        console.log(error);
    }) 


/*
Mongo DB
Username: rraviprasaath9
password: 7g1WQTCobBqONqi7
*/