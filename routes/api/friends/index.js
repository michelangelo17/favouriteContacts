const router = require('express-promise-router')(),
  // { valBody, checkUserAccess } = require('./middleware'),
  { errorHandling } = require('../middleware'),
  {
    /* addFriend, editFriend, deleteFriend, */ allFriends,
  } = require('./dbQueries')

module.exports = router

router.get('/', async (req, res) =>
  res.json(await allFriends(req.decodedToken.subject))
)

router.use(errorHandling)
