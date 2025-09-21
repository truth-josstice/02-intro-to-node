const { default: mongoose } = require("mongoose");
const { connectToDatabase, disconnectFromDatabase } = require("../utils/database");

async function drop() {
    await connectToDatabase();

    await  mongoose.connection.dropDatabase();
    console.log("Dropped database");

    await disconnectFromDatabase();
}

drop();