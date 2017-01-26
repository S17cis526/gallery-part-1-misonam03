/**
 * server.js
 * This file defines the server for a
 * simple photo gallery web app.
 * Author: Jay Ko
 */

"use strict";

var http = require('http');
var fs = require('fs');
var port = 3000;

function serveImage(filename, req, res){
  fs.readFile('images/' + filename, function(err, body){
    if(err){
      console.error(err);
      res.statusCode = 500;
      res.statusMessage = "Whoops";
      res.end("Silly me");
      return;
    } // close if
    res.setHeader("Content-Type", 'image/jpeg');
    res.end(body);
  }) // ) closereadFileSync, } close function
} //serveImage function
var server = http.createServer(function(req, res){

  switch(req.url){
    case "/chess":
      serveImage('chess.jpg', req, res);
      break;
    case "/fern":
      serveImage('fern.jpg', req, res);
      break;
    default:
      res.statusCode = 404;
      res.statusMessage = "Not found";
      res.end();
  } //switch
}); // closing createServer

server.listen(port,() => {
  console.log("Listening on Port "+ port);
});
