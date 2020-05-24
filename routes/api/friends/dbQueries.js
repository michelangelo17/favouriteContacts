const db = require('../../../data/dbConfig')

const allFriends = async (user_id) =>
  await db('friends').select(['id', 'name', 'age', 'email']).where({ user_id })

const addFriend = async (friend) => {
  await db('friends').insert(friend)
  return allFriends(friend.user_id)
}

const findUserFriend = async (id, user_id) =>
  (await db('friends').where({ id, user_id }))[0]

const editFriend = async (id, data) => {
  await db('friends').where({ id }).update(data)
  return allFriends(data.user_id)
}

const deleteFriend = async (id, user_id) => {
  await db('friends').where({ id }).del()
  return allFriends(user_id)
}

module.exports = {
  allFriends,
  addFriend,
  findUserFriend,
  editFriend,
  deleteFriend,
}
