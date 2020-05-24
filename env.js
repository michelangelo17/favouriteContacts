const dotenv = require('dotenv')
dotenv.config()
module.exports = {
  DB_URL: process.env.DB_URL,
  PORT: process.env.PORT,
  NODE_ENV: process.env.NODE_ENV,
  JWT_SECRET: process.env.JWT_SECRET,
}
