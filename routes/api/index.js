const router = require('express-promise-router')(),
  authRouter = require('./auth'),
  friendsRouter = require('./friends'),
  { authenticate } = require('./middleware')

module.exports = [
  authRouter,
  router.use('/friends', authenticate, friendsRouter),
]
