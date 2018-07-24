'use strict';

var express = require('express');

var PORT = 61001;

var app = express();
app.get('/', function (req, res) {
  res.send('Hello World SDT - This is fake app Version beta 1\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
