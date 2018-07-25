'use strict';

var express = require('express');

var PORT = 61102;

var app = express();
app.get('/', function (req, res) {
  res.send('Hello World SDT - This is hello-guys app Version bug fix beta02\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
