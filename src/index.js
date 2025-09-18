// Import the server app from server.js
const { app } = require('./server');

// Load environment variables from a .env file into process.env
require('dotenv').config();

// define a port
const port = process.env.PORT || 3000;
console.log("Env Port:", process.env.PORT);

// Listen for activity on the defined port
app.listen(port, () => {
  console.log(`Example app is running at http://localhost:${port}`);
});
