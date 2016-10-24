'use strict';
var Sequelize = require('sequelize');
var db = require('../db');

var Transactions = db.define('transactions', {
  name: {
    type: Sequelize.STRING
  },
  amount: {
    type: Sequelize.FLOAT,
    allowNull: false
  }
});

module.exports = Transactions;
