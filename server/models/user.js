const mongoose = require("mongoose")

const userSchema = new mongoose.Schema({
    uid:{
        type: String,
        required: true
    },
    username:{
        type: String,
        required: true
    },
    userLogin:{
        type: String,
        required: true
    },
    createdAt:{
        type: Date,
        required: true,
        default: Date.now
    }
})

module.exports = mongoose.model("User", userSchema)