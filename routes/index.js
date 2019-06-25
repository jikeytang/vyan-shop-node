const express = require('express')
const router = express.Router()
const controller = require('../app/controller')

router.get('/', (req, res) => {
	res.writeHead(200, { 'Content-Type': 'text/plain' })
	res.end('Hello World')
})

router
	.use('/admin/user', require('./user/user.router'))
	.use('/admin/product', require('./product/product.router'))
	.use('/admin/common', require('./common/common.router'))

module.exports = router
