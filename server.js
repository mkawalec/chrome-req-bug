var express = require('express');
var serveStatic = require('serve-static');

var app = express();

app.use('/true', function(req, res, next) {
  res.send(true);
});

app.use(serveStatic('public'));

app.listen(55555);
