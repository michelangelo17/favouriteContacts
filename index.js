const { PORT } = require('./env')
const app = require('express')()
const json = require('express').json()
const morgan = require('morgan')('dev')
const helmet = require('helmet')()
const cors = require('cors')()
const session = require('express-session')
const KnexSessionStore = require('connect-session-knex')(session)
const db = require('./data/dbConfig')

const apiRouter = require('./routes/api')

const sessionConfig = {
  name: 'ziti',
  secret: SESSION_SECRET,
  cookie: {
    maxAge: 1000 * 60 * 60,
    secure: SECURE_COOKIE === 'true' ? true : false,
    httpOnly: true,
  },
  resave: false,
  saveUninitialized: true,
  store: new KnexSessionStore({
    knex: db,
    tablename: 'sessions',
    sidfieldname: 'sid',
    createtable: true,
    clearInterval: 1000 * 60 * 60,
  }),
}

app.listen(PORT || 5000, () => {
  console.log(`Listening on port ${PORT}...`)
})

app.use(json, morgan, helmet, cors, session(sessionConfig))

app.use('/api', apiRouter)

app.use((req, res, next) =>
  res
    .status(404)
    .send('Invalid URL, please send check the list of endpoints to the API')
)
