const asyncHandler = require('express-async-handler')
const userModel = require("../models/userModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const userRegister = asyncHandler(async (req, res)=> {
    const {username, email, password} = req.body;
    if (!username || !email || !password) {
        res.status(400);
        throw new Error("All fields are a important");
    }
    const userAvailable = await userModel.findOne({email});
    if (userAvailable) {
        res.status(400);
        throw new Error("User already available");
    }
    // Hash password creating
    const hashPassword = await bcrypt.hash(password, 10);
    console.log(hashPassword);
    const newUser = await userModel.create({
        username,
        email,
        password: hashPassword,
    })
    if (newUser) {
        res.status(201).json({_id: newUser.id, email: newUser.email});
    } else {
        res.status(400)
        throw new Error("User Data is not valid")
    }
    res.status(400).json({username, email, password});
})

const userLogin = asyncHandler(async (req, res)=> {
    const {email, password} = req.body;
    if (!email || !password) {
        // res.send(400);
        // throw new Error("All fields are mandatory!");
        res.status(400).send("All fields are mandatory!");
    }
    const user = await userModel.findOne({ email });
    if (user && (await bcrypt.compare(password, user.password))) {
        const accessToken = jwt.sign({
            user: {
                username: user.username,
                email: user.email,
                id: user.id,
            }
        }, process.env.ACCESS_TOKEN_SECRET,
        {expiresIn: "50m"}
        )
        res.status(200).json({accessToken})
    } else {
        res.status(401);
        throw new Error("email or password is not valid")
    }
    res.json({message: "login users"})
})


// Private 
const getCurrentUser = asyncHandler(async (req, res)=> {
    console.log("value came ",req.user);
    res.json(req.user);
})

module.exports = { userRegister, userLogin, getCurrentUser }