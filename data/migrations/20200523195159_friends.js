exports.up = (knex) =>
  knex.schema.createTable('friends', (table) => {
    table.increments('id')
    table.text('name').notNullable()
    table.integer('age').notNullable()
    table.text('email').unique().notNullable()
    table.integer('user_id').references('users.id').notNullable()
  })

exports.down = (knex) => knex.schema.dropTableIfExists('friends')
