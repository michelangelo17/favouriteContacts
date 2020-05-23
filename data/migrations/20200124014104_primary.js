exports.up = knex =>
  knex.schema.createTable('', table => {
    table.increments('_id')
    table
  })

exports.down = knex => knex.schema.dropTableIfExists('')
