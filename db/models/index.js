'use strict';

const Transactions = require('./transactions');

// Require our models. Running each module registers the model into sequelize
// so any other part of the application could call sequelize.model('Song')
// to get access to the Song model.

module.exports = {
  Transactions: Transactions
};
