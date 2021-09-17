const mongoose = require('mongoose')

const AuthorSchema = new mongoose.Schema({
    fullName: {
        type: String,
        required: [true, "Name is required"],
        minlength: [3, "Requires atleast 3 characters"]
    }
}, {timestamps:true})

module.exports.Author = mongoose.model('Author', AuthorSchema)