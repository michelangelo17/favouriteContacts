const bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken'),
  { JWT_SECRET } = require('../../../env'),
  db = require('../../../data/dbConfig')

const valBody = (req, res, next) => {
  if (!req.body.username && !req.body.password)
    throw new Error('Must send both an email and a password')
  if (!req.body.username) throw new Error('Must send an email')
  if (!req.body.password) throw new Error('Must send a password')
  next()
}

const validatePassword = async (req, res, next) => {
  const user = await db('users').where('username', req.body.username).first()
  console.log(user)
  if (!user || !bcrypt.compareSync(req.body.password, user.password))
    return res
      .status(401)
      .json({ message: 'Authorization failed!', token: false })
  req.body.user = {
    subject: user.id,
    username: user.username,
  }
  next()
}

const generateToken = (userInfo) => {
  const payload = {
    ...userInfo,
  }
  const options = {
    expiresIn: '1d',
  }
  return jwt.sign(payload, JWT_SECRET, options)
}

const hashPassword = (req, res, next) => {
  req.body.password = bcrypt.hashSync(req.body.password, 14)
  next()
}

module.exports = {
  valBody,
  validatePassword,
  generateToken,
  hashPassword,
}
