const mongoose = require("mongoose");
const watchListModel = require("../models/watchLaterModel");

const gettingWatchList = async (req, res) => {
    try {
      const allMovies = await watchListModel.find({});
      res.status(200).json(allMovies);
    } catch (e) {
      res.status(400).json({ error: e.message })
    }
}

const addingToWatchList = async (req, res) => {
  const { emailString, details } = req.body;

  try {
    const watchList = await watchListModel.create({emailString, details });
  
    res.status(200).json(watchList);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}

const updatingToWatchList = async (req, res) => {
  const { id } = req.params;
  const { emailString, details } = req.body;
  console.log(emailString, details)
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "Not Found"})
  }
  
  try {
    const watchList = await watchListModel.findByIdAndUpdate( {_id:id}, {emailString, details}, { new: true, runValidators: true });
    res.status(200).json(watchList);
  } catch (e) {
    res.status(400).json({ error: e.message });
  }
}


const deletingFromWatchList = async (req, res) => {
  const { id } = req.params;
  const { emailString, details } = req.body;
  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: "Task Not Found"});
  }
  try {
    const taskDelete = await watchListModel.findByIdAndUpdate({_id:id}, {emailString, details}, { new: true, runValidators: true })
    res.status(200).json(taskDelete)
  } catch (e) {
    res.status(400).json({errors: e.message})
  }
};

module.exports = { gettingWatchList, addingToWatchList, updatingToWatchList, deletingFromWatchList };