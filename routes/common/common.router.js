const express = require('express')
const controller = require('../../app/controller')
const router = express.Router()

router
  .get('/adv/list', controller.adv.list)

module.exports = router
