const db = require('../../../data/dbConfig')

const findUser = async (username) =>
  await db('users').where({ username }).first()

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

module.exports = { findUser, addUser }
