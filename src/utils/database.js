// Database related utilities such as connection, disconnect, seeding, etc.

const { default: mongoose } = require("mongoose");
const { Book } = require("../models/bookModel");
const { Author } = require("../models/authorModel");

async function connectToDatabase() {
    // Logic to connect to the database
    try {
        await mongoose.connect('mongodb://127.0.0.1:27017/ExampleDB');
        console.log('Connected to the database');
       } catch (error) {
        console.error('Error connecting to the database', JSON.stringify(error));
       }
}

async function disconnectFromDatabase() {
    // Logic to disconnect from the database
    try {
        await mongoose.connection.close(true);
        console.log('Disconnected from the database');
       } catch (error) {
        console.error('Error disconnecting from the database', JSON.stringify(error));
       }
}

async function dbSandbox() {
    await connectToDatabase();
    
    let hgttg = new Book({
        title: "The Hitchhiker's Guide to the Galaxy",
        isbn: ["978-0345391803", "978-0345453747"],
        author: ["Douglas Adams"],
        series: "The Hitchhiker's Guide to the Galaxy"
    });

    await hgttg.save();
    console.log("Saved book:", hgttg);

    await disconnectFromDatabase();
}

// dbSandbox();

module.exports = {
    connectToDatabase,
    disconnectFromDatabase,
    dbSandbox
};