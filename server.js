// Start the server and listen for incoming requests to our API

// Import the application
const app = require('./app');

require('dotenv').config();

// Have the app listen
const PORT = process.env.PORT || 9000;

app.listen(PORT, () => { 
    console.log(`Listening on port ${PORT}`) 
});
