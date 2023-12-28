const mongoose = require('mongoose');

const watchListSchema = mongoose.Schema({
    movie_id: {
        type : String,
        required: true
    }
}, 
    {
        timeStamps: true
    }
);

module.exports = mongoose.model("MovieDeckWatchList", watchListSchema)