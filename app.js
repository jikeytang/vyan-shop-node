const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const cors = require('cors')
const router = require('./routes/index')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(cookieParser('vyan-shop'))

app.use(router)


app.listen(9000, function() {
  console.log('Node app start at port 9000')
})

// module.exports = app