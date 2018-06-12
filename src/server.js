'use strict';

var express = require('express');

var PORT = 8888;

var app = express();
app.get('/', function (req, res) {
  res.send('Hello world - This is Bllue0 Version\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
