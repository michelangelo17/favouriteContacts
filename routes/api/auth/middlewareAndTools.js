const bcrypt = require('bcryptjs'),
  jwt = require('jsonwebtoken'),
  { JWT_SECRET } = require('../env'),
  db = require('../../data/db-config'),

const valBody = (req, res, next) => {
  if (!req.body.username && !req.body.password)
    throw new Error('Must send both an email and a password')
  if (!req.body.email) throw new Error('Must send an email')
  if (!req.body.password) throw new Error('Must send a password')
  next()
}

const validatePassword = async (req, res, next) => {
  const user = await db('users').where('username', req.body.username).first()
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

const generateToken = userInfo => {
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

const errorHandling = (err, req, res, next) =>
  res.status(500).json({
    message: 'Uh Oh! 500 Error!',
    error: err.message.replace(/\\/g, ''),
  })

module.exports = { valBody, validatePassword }
