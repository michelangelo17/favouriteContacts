const { findUserFriend } = require('./dbQueries')

const checkUserAccess = async (req, res, next) => {
  const searchResult = await findUserFriend()
  if (!searchResult) throw new Error('No friends with that ID!')
  next()
}

const valBody = async (req, res, next) => {
  if (!req.body.id || !req.body.name || !req.body.age || !req.body.email) {
    throw new Error('required fields: id, name, age, email')
  }
  next()
}

module.exports = { authenticate, checkUserAccess, valBody }
