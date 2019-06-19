// const mongoose = require('mongoose')
// const config = require('../../config/index')
// mongoose.connect(config.db, { useNewUrlParser: true })
// const db = mongoose.connection
//
// db.on('error', function (err) {
//   console.log(__filename, err.message)
// })
const mongoose = require('./connect')

const UserSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  phone: String,
  nickName: String
}, { collection: 'user' });


var UserModel = mongoose.model('user', UserSchema);

module.exports = UserModel