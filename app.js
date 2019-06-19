const express = require('express')
const bodyParser = require('body-parser')
const logger = require('morgan')
const cookieParser = require('cookie-parser')
const session = require('express-session')
const cors = require('cors')
const router = require('./routes/index')

const app = express()

app.use(cors())
app.use(logger('dev'))
app.use(bodyParser.json()) // 创建 application/json 解析
app.use(bodyParser.urlencoded({ extended: false })) // 创建 application/x-www-form-urlencoded 解析
app.use(cookieParser('vyan-shop'))
app.use(session({
  name: 'vy-session',
  secret: 'vy-secret',
  resave: false,
  saveUninitialized: true
}))
app.use('/uploads', express.static(path.join(__dirname, 'uploads')))

app.use(router)


app.listen(9000, function() {
  console.log('Node app start at port 9000')
})

// module.exports = app