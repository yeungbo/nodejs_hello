'use strict';

var express = require('express');

var PORT = 61106;

var app = express();
app.get('/', function (req, res) {
  res.send('Hello World SDT - This is hello-days app Version beta02\n');
});

app.listen(PORT);
console.log('Running on http://localhost:' + PORT);
