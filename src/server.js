'use strict';

var express = require('express');

var PORT = 61105;

var app = express();
app.get('/', function (req, res) {
  res.send('Hello World SDT - This is for developerdemo service - Version v2 for fix bugs\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
