'use strict';

var express = require('express');

var PORT = 62001;

var app = express();
app.get('/', function (req, res) {
  res.send('Hello World SDT - This is aaa app Version beta 13\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
