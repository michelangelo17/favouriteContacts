const router = require('express-promise-router')(),
  { valBody, validatePassword } = require('./middlewareAndTools'),
  { errorHandling, generateToken } = require('../middlewareAndTools')

module.exports = router

router.post('/login', valBody, validatePassword, async (req, res) => {
  const token = generateToken(req.body.user)
  res.json({ user: { ...req.body.user }, token })
})

router.get('/logout', (req, res) => {
  res.json({
    message: `You have been logged out!`,
    token: false,
  })
})

router.use(errorHandling)
