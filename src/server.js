'use strict';

var express = require('express');

var PORT = 61112;

var app = express();
app.get('/', function (req, res) {
  res.send('Hello World SDT - This is demo-one app Version beta 01\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
