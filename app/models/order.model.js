const mongoose = require('./connect')

const OrderSchema = mongoose.Schema({
  username: String,
  password: String,
  email: String,
  phone: String,
  nickName: String
}, { collection: 'order' });


var OrderModel = mongoose.model('order', OrderSchema);

module.exports = OrderModel