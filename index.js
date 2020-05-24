const { PORT } = require('./env'),
  express = require('express'),
  path = require('path'),
  app = express(),
  json = require('express').json(),
  morgan = require('morgan')('dev'),
  helmet = require('helmet')(),
  apiRouter = require('./routes/api')

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}...`)
})

app.use(express.static(path.resolve(__dirname, './client/build')))

app.use(json, morgan, helmet, cors)

app.use('/api', apiRouter)

app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, './client/build/index.html'))
})
