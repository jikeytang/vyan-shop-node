const express = require('express')
const app = express()

const router = require('./routes/index')

app.use(router)

app.listen(9000, function() {
  console.log('Node app start at port 9000')
})

// module.exports = app