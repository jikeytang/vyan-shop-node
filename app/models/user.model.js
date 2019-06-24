const mongoose = require('./connect')

const UserSchema = mongoose.Schema(
	{
		username: String,
		password: String,
		email: String,
		phone: String,
		nickName: String
	},
	{ collection: 'user' }
)

var UserModel = mongoose.model('user', UserSchema)

module.exports = UserModel
