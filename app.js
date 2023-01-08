// Define our route handlers here
// Separation of concerns

// Import express library
const express = require('express');

// Init express application
const app = express();

// Define our routes

// Healthcheck
app.get('/', (req, res) => {
    res.json({ message: 'Service is running' })
})

module.exports = app;