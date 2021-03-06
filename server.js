/**
 * Created by kells4 on 26/09/2016.
 */
var express = require('express');
var bodyParser = require('body-parser');
var http = require('http');
var https = require('https');

var app = express(); // the main app
var path = require('path');
var fs         = require("fs");

// body parser
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: true })); // support encoded bodies

/**
 * Serves everything else
 */
app.route('/*')
    .get(function(req, res) {
        res.sendFile(path.join(__dirname + '/view/dist/'+req.params[0]));
    });



// Bind to port
var SERVER_PORT = 3001;
http.createServer(app).listen(SERVER_PORT);