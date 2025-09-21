const express = require('express');
const { Book } = require('../models/bookModel');
const router = express.Router();

// GET all books from the database
router.get('/', async (request, response) => {
    let results = await Book.find();
    await Book.populate(results, { path: 'author' }); // add author details to the book results
    response.json({
        data: results
    });
});

// Get one book by ID
// http://localhost:3000/books/id/64a7f0f5e4b0c8b1f0d6c9e7

router.get('/id/:id', async (request, response) => {
    let results = await Book.findById(request.params.id);
    if (!results) {
        return response.status(404).json({ error: 'Book not found' });
    }
    response.json({
        data: results
    });
});

// Search books
// http://localhost:3000/books/search?author=Douglas%20Adams&title=The%20Hitchhiker's%20Guide%20to%20the%20Galaxy
router.get('/search', async (request, response) => {

    console.log(request.query);
    let results = await Book.find(request.query);

    response.json({ 
        message: 'Search books will be implemented in the future', 
        queryData: request.query, 
        data: results });

});

//POST to make a new book
router.post('/', async (request, response) => {
    let readyToUseData = JSON.parse(JSON.stringify(request.body));

    if (!readyToUseData.title && typeof readyToUseData.title !== 'string') {
        readyToUseData.title = readyToUseData.title ? String(readyToUseData.title) : "No Title";
    }

    let results = await new Book(readyToUseData).save();

    response.json ({
        message: results
    })
});

// PATCH to partially update a book
router.patch('/', async (request, response) => {
    let results = null;

    response.json ({
        message: results
    })
});

// DELETE to remove a book
router.delete('/', async (request, response) => {
    let results = null

    response.json ({
        message: results
    })
});



// module.exports = {router}; // This was here before but changed to below, this means that router is exported not an object with router property
module.exports = router;