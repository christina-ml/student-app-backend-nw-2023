// Define our route handlers here
// Separation of concerns

// Import external stuff (libraries)

// Import express library
const express = require('express');

// Import OUR stuff (our files, our components)
const studentData = require('./studentData.json');

// Init express application
const app = express();

// Define our routes

// Healthcheck
app.get('/', (req, res) => {
    res.json({ message: 'Service is running' })
})

app.get('/students', (req, res) => {
    try {
        const { students } = studentData;
        res.status(200).json({ data: students });
    } catch (err) {
        res.status(500).json({ error: err.message })
    }
});

app.get('/students/:id', (req, res) => {
    try {
        const { id } = req.params;
        const { students } = studentData;

        const student = students.find((oneStudent) => oneStudent.id === id);
        if (student){
            res.status(200).json({ data: student });
        } else {
            res.status(404).json({ error: `Cound not found student with id of ${id}` })
        }
    } catch (err){
        res.status(500).json({ error: err.message })
    }
})

module.exports = app;