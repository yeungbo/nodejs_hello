'use strict';

var express = require('express');

var PORT = 61105;

var app = express();
app.get('/', function (req, res) {
  res.send('Hello World SDT - This is auto06 service - Version beta0a\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
