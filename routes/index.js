const express = require('express')
const app = express()
const router = express.Router()
const controller = require('../app/controller')
const prefix = '/admin/user/'

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

router
  .post(`${prefix}login`, controller.user.login)
  .post(`${prefix}signIn`, controller.user.signIn)
  .post(`${prefix}signOut`, controller.user.signOut)
  .post(`${prefix}update`, controller.user.update)
  .post(`${prefix}delete`, controller.user.delete)

module.exports = router