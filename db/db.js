'use strict';
const chalk = require('chalk');
const Sequelize = require('sequelize');

console.log(chalk.yellow('Opening connection to PostgreSQL'));

// create the database instance
module.exports = new Sequelize('postgres://localhost:5432/budget', {
  logging: false, // set to console.log to see the raw SQL queries
  native: true // lets Sequelize know we can use pg-native for ~30% more speed
});
