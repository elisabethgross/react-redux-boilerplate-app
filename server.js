var express = require('express');
var chalk = require('chalk');
var app = express();

app.use(express.static('public'));

app.use('/api', require('./routes'));

app.listen(3000, function () {
  console.log(chalk.blue('Express server is up on port', chalk.magenta(3000)));
});

