const knex = require('knex');
const knexConfig = require('../knexfile');

// Define qual ambiente utilizar (no seu caso, 'development')
const db = knex(knexConfig.development);

module.exports = db;