const db = require('../../../data/dbConfig')

const allFriends = async (user_id) =>
  await db('friends').select(['id', 'name', 'age', 'email']).where({ user_id })

module.exports = { allFriends }
