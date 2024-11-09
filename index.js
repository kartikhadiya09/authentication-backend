const express = require('express')
require("dotenv").config();


// Initialize the Express app
const app = express();

// Get the port from the environment variable (use)
const PORT = process.env.PORT || 5000;

// Middleware to parse JSON
app.use(express.json());

// Example route
app.get('/', (req, res) => {
    res.send('Hello, World!');
});

app.get('/login', (req, res) => {
    res.send('Login');
});


// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});


