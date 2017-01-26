/**
 * server.js
 * This file defines the server for a
 * simple photo gallery web app.
 * Author: Jay Ko
 */

"use strict";

var http = require('http');
var port = 3000;
var server = http.createServer((req, res) => {
  res.end("OK"); // this will print out OK on the web browser
});

server.listen(port,() => {
  console.log("Listening on Port "+ port);
});
