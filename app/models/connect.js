const mongoose = require('mongoose')
const config = require('../../config/index')

mongoose.set('debug', true)
mongoose.connect(config.db, config.options)
mongoose.Promise = global.Promise

const db = mongoose.connection

db.on('error', error => {
  console.log(`数据库连接失败： ${__filename} - ${error}`)
})

module.exports = mongoose