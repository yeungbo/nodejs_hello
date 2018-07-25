'use strict';

var express = require('express');

var PORT = 63001;

var app = express();
app.get('/', function (req, res) {
  res.send('Hello World SDT - This is simple app Version beta 01\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
