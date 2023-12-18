const mongoose = require("mongoose")

const Schema = mongoose.Schema;

const TaskSchema = new Schema(
    {
        title: {
            string: String,
            require: true
        },
        description: {
            string: String,           
        },
    },
    {timestamps: true}
)

module.exports = mongoose.model("Task", TaskSchema);