
const authenticationModel = require('../models/authenticationModel')
const asyncHandler = require("express-async-handler");
const getUserDetail = async (req, res) => {
    const { name, email, password } = req.body;
    try {
        const user = await authenticationModel.find({ name, email, password });
        res.status(200).json(user)
    } catch (e) {
        res.status(400).json({ error: e.message })
    }
}

// Old way

// const addingUserDetail = async (req, res) => {
//     const { name, email, password } = req.body;
//     if (!name || !email || !password) {
//         res.status(400).json({ message: "All fields mandatory" })
//     }
//     try {
//         const user = await authenticationModel.create({ name, email, password });
//         res.status(200).json(user);
//     } catch (e) {
//         res.status(400).json({ error: e.message });
//     }
// }

const addingUserDetail = asyncHandler(async (req, res) => {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
        res.status(400);
        throw new Error("All fields are mandatory !");
    }
    const contact = await authenticationModel.create({
        name,
        email,
        password
    });

    res.status(201).json(contact);
});

module.exports = { getUserDetail, addingUserDetail }