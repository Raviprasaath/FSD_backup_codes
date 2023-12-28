const userModel = require("../models/watchLaterModel");

const gettingWatchList = (req, res) => {
    res.send("getting")
} 
const addingToWatchList = (req, res) => {
    res.send("adding")
} 
const deletingFromWatchList = (req, res) => {
    res.send("deleting")
}

module.exports = { gettingWatchList, addingToWatchList, deletingFromWatchList };
