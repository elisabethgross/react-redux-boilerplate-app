'use strict';
var express = require('express');
var path = require('path');
var app = express();
module.exports = app;

app.use(require('./logging.middleware'));
app.use(require('./statics.middleware'));

app.use('/api', require('./api'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../app', 'index.html'));
});
