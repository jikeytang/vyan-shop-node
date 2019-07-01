const mongoose = require('./connect')

const ProductSchema = mongoose.Schema(
	{
		categories: {
			type: String,
			required: true
		}, // 分类
		brandName: {
			type: String,
			required: true
		}, // 品牌
		originalPrice: {
			type: String,
			required: true,
			default: '0.00'
		}, // 市场价
		stock: {
			type: Number,
			required: true,
			default: 0
		}, // 库存
		publishStatus: {
			type: Boolean,
			required: true,
			default: true
		}, // 上架状态
		verifyStatus: {
			type: Boolean,
			required: true,
			default: true
		}, // 审核状态
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
			required: true,
			default: '0.00'
		}, // 价格
		productSn: {
			type: String,
			required: true
		}, // 货号
		sort: {
			type: String,
			required: true
		}, // 排序
		description: String, // 介绍
		unit: String, // 计量单位
		weight: String, // 	重量
		productId: String, // 商品编号
		sale: Number // 销量
	},
	{
		collection: 'product'
	}
)

var ProductModel = mongoose.model('product', ProductSchema)

module.exports = ProductModel
