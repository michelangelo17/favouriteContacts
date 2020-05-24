const router = require('express-promise-router')(),
  authRouter = require('./auth'),
  friendsRouter = require('./friends'),
  { authenticate } = require('./middleware')

module.exports = [
  authRouter,
  router.use('/friends', authenticate, friendsRouter),
  router.use((req, res, next) =>
    res
      .status(404)
      .send('Invalid URL, please send check the list of endpoints to the API')
  ),
]
