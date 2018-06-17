const express = require('express');
const server = express();
const port = process.env.PORT || 8080;

server.use('/', express.static('./assets'));

server.use('/', require('./routes/routes_v1'));

server.set('view engine', 'ejs');

server.get("*", (req, res, next) => {
    next()
});

server.listen(port, () => {
    console.log("Listening on port " + port);
});

module.exports = server;