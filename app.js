'use strict';

// Initialisation node modules
var express = require('express');
var path = require('path');

//Initialise the app
var app = new express();
console.log("I'm ioApp");




app.use(express.static(path.join(__dirname, 'public')));
app.listen(3000);