var knex = require('knex');
var config = require('../config').database;

module.exports = knex(config);

