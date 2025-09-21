const { Author } = require("../models/authorModel");
const { Book } = require("../models/bookModel");
const { connectToDatabase, disconnectFromDatabase } = require("../utils/database");

async function seed() {
    // Connect to the database
    await connectToDatabase();

    // Seed data

    let authorsData = [
        { 
            name: "Douglas Adams",
            bio: "Douglas Adams was an English author, scriptwriter, essayist, humorist, satirist and dramatist. He is best known for his The Hitchhiker's Guide to the Galaxy series."
        },
        {
            name: "John Milton",
            bio: "John Milton was an English poet, active throughout the 17th century, best known for his epic poem Paradise Lost."
        },
        {
            name: "George Orwell",
            bio: "George Orwell was an English novelist, essayist, journalist and critic, known for his lucid prose, awareness of social injustice, opposition to totalitarianism, and commitment to democratic socialism."
        }
    ];

    let authorSeedResult = await Author.insertMany(authorsData);
    console.log("Seeded authors:", authorSeedResult);

    let douglasAdams = await Author.findOne({ name: "Douglas Adams" });
    let johnMilton = await Author.findOne({ name: "John Milton" });
    let georgeOrwell = await Author.findOne({ name: "George Orwell" });

    let booksData = [    
        { title: "The Hitchhiker's Guide to the Galaxy",
        isbn: ["978-0345391803", "978-0345453747"],
        author: [douglasAdams.id],
        series: "The Hitchhiker's Guide to the Galaxy"
        },
        { title: "Paradise Lost",
        isbn: ["978-0140424393", "978-0199535731"],
        author: [johnMilton.id],
        series: null
        },
        { title: "1984",
        isbn: ["978-0451524935", "978-0141036144"],
        author: [georgeOrwell.id]
        }];

    // Insert multiple books into the database
    let seedResult = await Book.insertMany(booksData);
    console.log("Seeded books:", seedResult);

    // Disconnect from the database
    await disconnectFromDatabase();
}

seed();