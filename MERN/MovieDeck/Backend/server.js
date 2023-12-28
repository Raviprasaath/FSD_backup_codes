require('dotenv').config();
const authRoute = require("./routes/userRoutes")
const mongoose = require('mongoose');

const express = require('express');

const app = express();
app.use(express.json());

const cors = require('cors');

app.use('/', (req, res, next)=> {
    next();    
})

app.use(cors());

app.use("/auth", authRoute);

mongoose.connect(process.env.MONGO_URI).then(()=> {
    app.listen(process.env.PORT, (error)=> {
        if (error) {
            console.log(error);
        }
        console.log(`Server Connected ${process.env.PORT}`)
    });
})