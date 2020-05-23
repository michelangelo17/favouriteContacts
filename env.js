const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  DB_URL: process.env.DB_URL,
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  SECURE_COOKIE: process.env.SECURE_COOKIE,
  SESSION_SECRET: process.env.SESSION_SECRET,
  JWT_SECRET: process.env.JWT_SECRET,
}
