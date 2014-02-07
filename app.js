var express = require('express');
var app = express();
var PORT = Number(process.env.PORT || 9222);

app.get('/endpoint', function(req, res) {
  res.send("Hey", 200);
});

app.get('/loaderio-851e087db4027ebd1f790f2a07daa019', function(req, res) {
  res.send("loaderio-851e087db4027ebd1f790f2a07daa019", 200);
});

app.listen(PORT);
console.log('start');
