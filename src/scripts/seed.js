const { Book } = require("../models/bookModel");
const { connectToDatabase, disconnectFromDatabase } = require("../utils/database");

async function seed() {
    // Connect to the database
    await connectToDatabase();

    // Seed data
    let booksData = [    
        { title: "The Hitchhiker's Guide to the Galaxy",
        isbn: ["978-0345391803", "978-0345453747"],
        author: ["Douglas Adams"],
        series: "The Hitchhiker's Guide to the Galaxy"
        },
        { title: "Paradise Lost",
        isbn: ["978-0140424393", "978-0199535731"],
        author: ["John Milton"],
        series: null
        },
        { title: "1984",
        isbn: ["978-0451524935", "978-0141036144"],
        author: ["George Orwell"]
        }];

    // Insert multiple books into the database
    let seedResult = await Book.insertMany(booksData);
    console.log("Seeded books:", seedResult);

    // Disconnect from the database
    await disconnectFromDatabase();
}

seed();