const config = require('config');
const express = require('express');
const app = express();
const http = require('http').Server(app);

app.run = () => {
    http.listen(config.port, () => {
        console.log(`[Server] Listenting on ${config.port} port`);
    });
};

module.exports = app;
