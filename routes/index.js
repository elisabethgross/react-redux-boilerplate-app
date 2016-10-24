'use strict';
var express = require('express');
var path = require('path');
var app = express();
module.exports = app;

app.use(express.static(path.join(__dirname, '../public')));

app.use('/api', require('./api'));

app.get('/*', function (req, res) {
  res.sendFile(path.join(__dirname, '../app', 'index.html'));
});
