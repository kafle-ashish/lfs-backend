const mongoose = require("mongoose")

const User = mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    name: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true,
        // eslint-disable-next-line security/detect-unsafe-regex
        match: /^(([^<>()\[\]\.,;:\s@\"]+(\.[^<>()\[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/
    },

    password: {
        type: String,
        required: true
    },
    verified: {
        type: String,
        required: true
    },
    card_id: {
        type: String,
        required: true,
        unique: true
    },
    timestamp: {
        type: Date,
        required: true
    }
})

module.exports = mongoose.model("User", User)
