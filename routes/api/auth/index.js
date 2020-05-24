const router = require('express-promise-router')(),
  {
    valBody,
    validatePassword,
    generateToken,
    hashPassword,
  } = require('./middlewareAndTools'),
  { errorHandling } = require('../middleware'),
  { addUser } = require('./dbQueries')

module.exports = router

router.post('/register', valBody, hashPassword, async (req, res) => {
  const user = await addUser(req.body)
  const token = generateToken(user)
  res.status(201).json({
    message: `${user.username} successfully created!`,
    token: token,
  })
})

router.post('/login', valBody, validatePassword, async (req, res) => {
  const token = generateToken(req.body.user)
  res.json({ user: req.body.username, token })
})

router.get('/logout', (req, res) => {
  res.json({
    message: `You have been logged out!`,
    token: false,
  })
})

router.use(errorHandling)
