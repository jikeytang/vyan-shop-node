const express = require('express')
const router = express.Router()
const controller = require('../app/controller')
const prefix = '/admin/'

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
  .post(`${prefix}user/login`, controller.user.login)
  .post(`${prefix}user/signIn`, controller.user.signIn)
  .post(`${prefix}user/signOut`, controller.user.signOut)
  .post(`${prefix}user/update`, controller.user.update)
  .post(`${prefix}user/delete`, controller.user.delete)

module.exports = router