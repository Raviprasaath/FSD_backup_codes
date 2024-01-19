const mongoose = require('mongoose');

const watchListUserSchema = new mongoose.Schema({
    emailString: {
        type: String,
        required: false,
        unique: true,
        sparse: true,
    },
    details: {type : mongoose.Schema.Types.Mixed}
});

module.exports = mongoose.model("MovieDeckWatchLists", watchListUserSchema);
