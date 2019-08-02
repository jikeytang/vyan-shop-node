const express = require('express')
const { product } = require('../../app/controller/index')
const router = express.Router()

// 默认路由配置
// http://localhost:9000/product

router.get('/', (req, res) => {
	return res.json({
		description: '商品管理相关接口',
		parameter: {
			addItem: {
				path: '/addItem',
				description: '用于添加商品信息'
			},
			removeItem: {
				path: '/removeItem',
				description: '用于删除商品信息'
			},
			updatedItem: {
				path: '/updatedItem',
				description: '用于更新商品信息'
			},
			list: {
				path: '/list',
				description: '用于查询商品信息列表'
			}
		}
	})
})

/**
 * 添加商品信息接口
 * @param req
 * @param res
 */
router
	.route('/addItem')
	.post(product.addProductItem)
	.get((req, res) => {
		return res.json({
			description: '用于添加商品信息',
			type: 'POST',
			parameter: {
				categories: {
					type: 'String',
					required: 'true',
					description: '商品分类'
				},
				brandName: {
					type: 'String',
					required: 'true',
					description: '品牌名'
				},
				description: {
					type: 'String',
					required: 'false',
					description: '商品介绍'
				},
				productSn: {
					type: 'String',
					required: 'true',
					description: '货号'
				},
				price: {
					type: 'String',
					required: 'true',
					description: '商品售价'
				},
				originalPrice: {
					type: 'String',
					required: 'true',
					description: '市场价格'
				},
				stock: {
					type: 'Number',
					required: 'true',
					default: 0,
					description: '库存'
				},
				unit: {
					type: 'String',
					description: '计量单位'
				},
				publishStatus: {
					type: 'Boolean',
					required: 'true',
					description: '上架状态'
				},
				verifyStatus: {
					type: 'Boolean',
					required: 'true',
					description: '审核状态'
				},
				pic: {
					type: 'String',
					require: 'true',
					description: '商品图片地址'
				},
				name: {
					type: 'String',
					required: 'true',
					description: '商品名称'
				},
				weight: {
					type: 'String',
					description: '重量'
				},
				sort: {
					type: 'String',
					required: 'true',
					description: '排序'
				}
			}
		})
	})
/**
 * 删除商品信息接口
 * @param req
 * @param res
 */
router
	.route('/removeItem')
	.post(product.remove)
	.get((req, res) => {
		return res.json({
			description: '用于删除商品信息',
			type: 'POST',
			parameter: {
				id: {
					type: 'String or Array',
					required: 'true',
					description: '商品信息的唯一ID'
				}
			}
		})
	})
/**
 * 更新商品信息接口
 * @param req
 * @param res
 */
router.post('/updatedItem', product.updated).get((req, res) => {
	return res.json({
		description: '用于修改商品信息',
		type: 'POST',
		parameter: {
			id: {
				type: 'String',
				required: 'true',
				description: '商品信息的唯一ID'
			}
		}
	})
})
/**
 * 获取商品信息列表接口
 * @param req
 * @param res
 */
router
	.route('/list')
	.post(product.getProductList)
	.get((req, res) => {
		return res.json({
			description: '用于获取商品信息列表',
			type: 'POST',
			parameter: {
				categories: {
					type: 'String',
					required: 'true',
					description: '商品分类'
				},
				brandName: {
					type: 'String',
					required: 'false',
					description: '品牌名'
				},
				name: {
					type: 'String',
					required: 'true',
					description: '商品名称'
				},
				publishStatus: {
					type: 'Boolean',
					required: 'false',
					description: '上架状态'
				},
				verifyStatus: {
					type: 'Boolean',
					required: 'false',
					description: '审核状态'
				}
			}
		})
	})
module.exports = router
