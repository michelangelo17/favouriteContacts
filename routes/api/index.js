const router = require('express-promise-router')(),
  authRouter = require('./auth')

module.exports = [
  router.use('/', authRouter),
  // router.use('/friends', friendsRouter),
]
