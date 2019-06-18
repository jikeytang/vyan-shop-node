const express = require('express')
const bodyParser = require('body-parser')
const router = require('./routes/index')

const app = express()

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

app.use(router)


app.listen(9000, function() {
  console.log('Node app start at port 9000')
})

// module.exports = app