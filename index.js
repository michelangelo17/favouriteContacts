const { PORT } = require('./env'),
  app = require('express')(),
  json = require('express').json(),
  morgan = require('morgan')('dev'),
  helmet = require('helmet')(),
  cors = require('cors')()

const apiRouter = require('./routes/api')

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})

app.use(json, morgan, helmet, cors, session(sessionConfig))

app.use('/api', apiRouter)

app.use((req, res, next) =>
  res
    .status(404)
    .send('Invalid URL, please send check the list of endpoints to the API')
)
