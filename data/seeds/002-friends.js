exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('friends')
    .del()
    .then(function () {
      // Inserts seed entries
      return knex('friends').insert([
        {
          name: 'Alisa',
          age: 62,
          email: 'amcmorran0@ucla.edu',
          user_id: 1,
        },
        {
          name: 'Sara-ann',
          age: 38,
          email: 'sjuhruke1@blogspot.com',
          user_id: 1,
        },
        {
          name: 'Isidor',
          age: 61,
          email: 'ialvis2@taobao.com',
          user_id: 1,
        },
        {
          name: 'Daria',
          age: 77,
          email: 'dlonsdale3@histats.com',
          user_id: 1,
        },
        {
          name: 'Napoleon',
          age: 27,
          email: 'ncalles4@unblog.fr',
          user_id: 1,
        },
        {
          name: 'Lydia',
          age: 15,
          email: 'lcharnick5@xing.com',
          user_id: 1,
        },
      ])
    })
}
