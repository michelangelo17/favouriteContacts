const jwt = require('jsonwebtoken'),
  { JWT_SECRET } = require('../../env')

const errorHandling = (err, req, res, next) =>
  res.status(500).json({
    message: 'Uh Oh! 500 Error!',
    error: err.message.replace(/\\/g, ''),
  })

const authenticate = async (req, res, next) => {
  const token = req.headers.authorization
  if (!req.headers.authorization)
    return res
      .status(401)
      .json({ message: 'You shall not pass!', token: false })
  jwt.verify(token, JWT_SECRET, (err, decodedToken) => {
    if (err)
      return res
        .status(401)
        .json({ message: 'You shall not pass!', token: false })
    req.decodedToken = decodedToken
    next()
  })
}

module.exports = { errorHandling, authenticate }
