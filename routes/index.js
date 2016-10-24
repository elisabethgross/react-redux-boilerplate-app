'use strict';
var express = require('express');
var path = require('path');
var app = express();
var bodyParser = require('body-parser');
module.exports = app;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(require('./logging.middleware'));
app.use(require('./statics.middleware'));

app.use('/api', require('./api'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../app', 'index.html'));
});

// Error catching endware.
app.use(function (err, req, res, next) {
  console.error(err, typeof next);
  console.error(err.stack)
  res.status(err.status || 500).send(err.message || 'Internal server error.');
});
