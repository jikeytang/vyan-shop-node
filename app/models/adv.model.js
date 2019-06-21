const mongoose = require('./connect')

const AdvSchema = mongoose.Schema(
	{
		username: String,
		password: String,
		email: String,
		phone: String,
		nickName: String
	},
	{ collection: 'adv' }
)

var AdvModel = mongoose.model('adv', AdvSchema)

module.exports = AdvModel
