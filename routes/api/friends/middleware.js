const { findUserFriend } = require('./dbQueries')

const checkUserAccess = async (req, res, next) => {
  const searchResult = await findUserFriend(
    req.params.id,
    req.decodedToken.subject
  )
  console.log(searchResult)
  console.log(req.params.id, req.decodedToken.subject)
  if (!searchResult) throw new Error('No friends with that ID!')
  next()
}

const valBody = async (req, res, next) => {
  if (!req.body.name || !req.body.age || !req.body.email) {
    throw new Error('required fields: name, age, email')
  }
  next()
}

module.exports = { checkUserAccess, valBody }
