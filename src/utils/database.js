// Database related utilities such as connection, disconnect, seeding, etc.

const { default: mongoose } = require("mongoose");

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

connectToDatabase();
disconnectFromDatabase();