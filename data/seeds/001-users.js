exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('users')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('users').insert([
        {
          username: 'blahblah',
          password:
            '$2a$14$3zoGnAEVVcVTz20glapt9eI2Y/WNLkbqM4H.F4xL2DI24xdT29Fs2',
        },
      ])
    })
}
