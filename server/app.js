const express = require('express')
require('./db/mongoose')

const test = require('./routes/testroute')

const app = express()
app.use(express.json())

app.use('/api/test', test)

module.exports = app