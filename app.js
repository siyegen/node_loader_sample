var express = require('express');
var app = express();
var PORT = Number(process.env.PORT || 9222);

app.get('/endpoint', function(req, res) {
  res.send("Hey", 200);
});

app.listen(PORT);
console.log('start');
