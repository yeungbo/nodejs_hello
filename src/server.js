'use strict';

var express = require('express');

var PORT = 61112;

var app = express();
app.get('/', function (req, res) {
  res.send('Hello World SDT - This is fake-service01 app Version beta 02\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
