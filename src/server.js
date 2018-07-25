'use strict';

var express = require('express');

var PORT = 61111;

var app = express();
app.get('/', function (req, res) {
  res.send('Hello World SDT - This is fake-service01 app Version beta 01\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
