var express = require('express');
var app = express();

//var json = require('./package.json');

app.get('/saludo/:nombre', function (req, res) {
    res.send('Hello ' + req.params.nombre);
    console.log('Hello ' + req.params.nombre);
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000');
});