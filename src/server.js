// Server.js is to configure the server and then export it for use in other code
// Other code = testing, or starting the server but not both

console.log('Hello, World!');

// import express and create an app
const express = require('express');
const app = express();

// Enable parsing of JSON bodies in requests
// JSON is raw body data usually from API clients
app.use(express.json());
// URL encoded data is usually from forms
app.use(express.urlencoded({ extended: true }));

// define a GET route
app.get('/', (request, response) => {
//   res.send('<h1>Hello from Express!</h1>');
    response.json({ message: 'Hello from Express!' });
});

//POST route
app.post('/', (request, response) => {
    // Check if message is provided in the request body, and that body exists
    if (!request.body.message || !request.body) {
        return response.status(400).json({ error: 'Message is required' });
    }

    let repeatedWord = request.body.message;
    response.json({ message: repeatedWord + repeatedWord + repeatedWord});
});

// export the app for use in other files
module.exports = {
    app
};