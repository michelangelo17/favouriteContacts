const db = require('../../../data/dbConfig')

const addUser = async (newUser) =>
  (
    await db('users').insert(
      {
        username: newUser.username,
        password: newUser.password,
      },
      ['id AS subject', 'username']
    )
  )[0]

module.exports = { addUser }
