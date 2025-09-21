const { default: mongoose } = require("mongoose");

const AuthorSchema = new mongoose.Schema({
    name: { type: String, required: true },
    bio: { type: String, required: false},
});

const Author = mongoose.model(
    // Model name
    "Author",
    // Model schema
    AuthorSchema

)

module.exports = {
    Author,
    AuthorSchema
}