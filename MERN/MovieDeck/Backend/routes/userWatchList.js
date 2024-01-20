const express = require('express');

const route = express.Router();

const { gettingWatchList, addingToWatchList, updatingToWatchList, deletingFromWatchList } = require("../controllers/watchListControllers");
const validateToken = require('../middleware/validateTokenHandler');

// route.get('/', validateToken, gettingWatchList);
route.get('/', gettingWatchList);
// route.post('/:id', validateToken, addingToWatchList);
route.post('/:id', addingToWatchList);
route.patch('/:id', updatingToWatchList);
// route.delete('/:id', validateToken, deletingFromWatchList);
route.delete('/:id', deletingFromWatchList);

module.exports = route;