const mongoose = require('mongoose')
const config = require('../../config/index')

mongoose.connect(config.db, {
	useCreateIndex: true,
	useNewUrlParser: true
})
const db = mongoose.connection

db.on('error', function(err) {
	console.log(__filename, err.message)
})

const ProductSchema = mongoose.Schema(
	{
		brandName: {
			type: String,
			required: true
		}, // 品牌
		publishStatus: {
			type: Boolean,
			required: true
		}, // 上架状态
		verifyStatus: {
			type: Boolean,
			required: true
		}, // 审核状态
		productId: {
			type: String
		}, // 商品编号
		pic: {
			type: String,
			require: true
		}, // 商品图片地址
		name: {
			type: String,
			required: true
		}, // 商品名称
		price: {
			type: String,
			required: true
		}, // 价格
		productSn: {
			type: String,
			required: true
		}, // 货号
		sort: {
			type: String,
			required: true
		}, // 排序
		sale: {
			type: Number
		} // 销量
	},
	{
		collection: 'product'
	}
)

var ProductModel = mongoose.model('product', ProductSchema)

module.exports = ProductModel
