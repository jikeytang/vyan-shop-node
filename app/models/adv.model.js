const mongoose = require('./connect')

const AdvSchema = mongoose.Schema({
  title: String,
  img: String,
  link: String
}, { collection: 'adv' })


var AdvModel = mongoose.model('adv', AdvSchema)

module.exports = AdvModel