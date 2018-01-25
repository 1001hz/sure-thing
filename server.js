var express = require('express');
var path = require('path');

var port = '3000';
var app = express();
app.use(express.static(path.join(__dirname, './dist')));
app.listen(3000, () => console.log('Example app listening on port 3000!'))