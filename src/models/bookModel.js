const { default: mongoose, model } = require("mongoose")

const Book = mongoose.model(
    // Model name
    "Book",
    // Model Properties
    {
        title: { type: String, required: true },
        isbn: { type: [String], required: true, unique: true },
        author: { type: [String]},
        series: { type: String }
    }
)

module.exports = {
    Book
}