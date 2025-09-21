const { default: mongoose } = require("mongoose")

const BookSchema = new mongoose.Schema({
        title: { type: String, required: true },
        isbn: [{ type: String, unique: true}],
        author: { type: [String]},
        series: { type: String }
    });

const Book = mongoose.model(
    // Model name
    "Book",
    // Model schema
    BookSchema

)

module.exports = {
    Book,
    BookSchema
}