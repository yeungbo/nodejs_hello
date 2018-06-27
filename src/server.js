'use strict';

var express = require('express');

var PORT = 8888;

var app = express();
app.get('/', function (req, res) {
  res.send('Hello World - This is a bug fix Version 13\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
