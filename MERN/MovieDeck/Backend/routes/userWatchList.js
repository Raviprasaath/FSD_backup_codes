const express = require('express');

const route = express.Router();

const { gettingWatchList, addingToWatchList, deletingFromWatchList } = require("../controllers/watchListControllers");

route.get('/', gettingWatchList);
route.post('/:id', addingToWatchList);
route.delete('/:id', deletingFromWatchList);

module.exports = route;