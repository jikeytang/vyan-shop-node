const express = require('express')
const app = express()
const router = express.Router()
const controller = require('../app/controller')
const productRouter = require('./product/index')

router.get('/', (req, res) => {
  res.writeHead(200, { 'Content-Type': 'text/plain' })
  res.end('Hello World')
})

// router.post('/login', (req, res) => {
//   const username = req.body.username
//   const password = req.body.password
//   console.log(username)
//   console.log(password)
// })

router.post('/login', controller.user.login)
router.use('/product', productRouter)

module.exports = router