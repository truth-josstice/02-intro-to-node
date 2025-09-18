console.log('Hello, World!');

// import express and create an app
const express = require('express');
const app = express();

// Enable parsing of JSON bodies in requests
// JSON is raw body data usually from API clients
app.use(express.json());
// URL encoded data is usually from forms
app.use(express.urlencoded({ extended: true }));

// define a port
const port = 3000;

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

// Listen for activity on the defined port
app.listen(port, () => {
  console.log(`Example app is running at http://localhost:${port}`);
});
