// module imports
const express = require('express');

// load dotenv module to use environment variables
if (process.env.NODE_ENV !== 'production') {
    require('dotenv').load();
}

// Initialize a new express instance
const server = express();

// Set the port to the portnumber specified in the environment variable
const port = process.env.PORT || 8080;

// Load Steam API Key from environment variable
const steam_api_key = process.env.STEAM_API_KEY;

// server.use(express.static('./assets'));

server.use('/', require('./routes/routes_v1'));

// server.set('view engine', 'ejs');

server.get("*", (req, res, next) => {
    next()
});

// Start the server
server.listen(port, () => {
    console.log("Listening on port " + port);
    console.log("api key: " + steam_api_key);
});

module.exports = {
    server,
    steam_api_key
};