const cleaner = require('knex-cleaner')

exports.seed = (knex) =>
  cleaner.clean(knex, {
    mode: 'truncate', // resets ids
    ignoreTables: ['knex_migrations', 'knex_migrations_lock'], // don't empty migration tables
  })
