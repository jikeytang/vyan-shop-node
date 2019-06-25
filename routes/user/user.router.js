const express = require('express')
const controller = require('../../app/controller')
const router = express.Router()

router
  .post('/login', controller.user.login)
  .post('/signIn', controller.user.signIn)
  .post('/signOut', controller.user.signOut)
  .post('/update', controller.user.update)
  .post('/remove', controller.user.remove)

module.exports = router