const { NODE_ENV } = require('../env')

const config = require('../knexfile.js')[NODE_ENV]

module.exports = require('knex')(config)
