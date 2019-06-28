const Product = require('../models/product.model')

const ProductController = {
	/**
	 * 添加商品信息
	 * @param req
	 * @param res
	 */
	addProductItem(req, res) {
		const data = req.body

		Product.create({
			brandName: data.brandName, // 品牌
			publishStatus: data.publishStatus, // 上架状态
			verifyStatus: data.verifyStatus, // 审核状态
			pic: data.pic, // 商品图片地址
			name: data.name, // 商品名称
			price: data.price, // 价格
			productSn: data.productSn, // 货号
			sort: data.sort // 排序
		}).then((item, err) => {
			if (err) {
				return res.json({ code: 500, msg: '商品信息添加失败', data: err })
			}

			return res.json({ code: 200, msg: '商品信息添加成功', data: item })
		})
	},
	/**
	 * 删除商品信息
	 * @param req
	 * @param res
	 */
	removeProducItem(req, res) {
		const id = req.body.id

		Product.deleteMany({
			_id: {
				$in: id
			}
		}).then((info, err) => {
			if (err) {
				return res.json({
					code: 500,
					msg: '提交删除命令失败，请联系网站管理员检查相关问题',
					data: err
				})
			}
			if (info.deletedCount === 0) {
				return res.json({
					code: 200,
					msg: '提交删除命令成功，但数据库没有相关数据',
					info: info
				})
			}

			return res.json({
				code: 200,
				msg: `提交删除命令成功，已删除 ${info.deletedCount} 条数据`,
				info: info
			})
		})
	},
	/**
	 * 更新商品信息
	 * @param req
	 * @param res
	 */
	updatedProducItem(req, res) {
		const { id, updateData } = req.body

		Product.updateOne({ _id: id }, updateData).then((info, err) => {
			if (err) {
				return res.json({
					code: 500,
					msg: '提交修改命令失败，请联系网站管理员检查相关问题',
					data: err
				})
			}
			if (info.nModified === 0) {
				return res.json({
					code: 200,
					msg: '提交修改命令成功，但没有修改相关数据',
					data: info
				})
			}
			Product.find({ _id: id }).then((data, err) => {
				if (err) {
					return res.json({
						code: 500,
						msg: `已修改 ${info.nModified} 条数据,但是查询修改后的数据失败`,
						data: err
					})
				}

				return res.json({
					code: 200,
					msg: `提交修改命令成功，已修改 ${info.nModified} 条数据`,
					data: data
				})
			})
		})
	},
	/**
	 * 获取商品信息列表
	 * @param req
	 * @param res
	 */
	getProductList(req, res) {
		const { name, productSn, brandName, publishStatus, verifyStatus } = req.body
		const queryArr = []

		if (typeof name !== 'undefined' && name !== '') {
			// 商品名称
			queryArr.push({
				name: name
			})
		}
		if (typeof productSn !== 'undefined' && productSn !== '') {
			queryArr.push({
				productSn: productSn
			}) // 货号
		}
		if (typeof brandName !== 'undefined' && brandName !== '') {
			// 品牌名
			queryArr.push({
				brandName: brandName
			})
		}
		if (typeof publishStatus !== 'undefined' && publishStatus !== '') {
			// 上架状态
			queryArr.push({
				publishStatus: publishStatus
			})
		}
		if (typeof verifyStatus !== 'undefined' && verifyStatus !== '') {
			// 审核状态
			queryArr.push({
				verifyStatus: verifyStatus
			})
		}
		console.log(queryArr)
		if (queryArr.length) {
			Product.find({
				$and: queryArr
			}).then((data, err) => {
				if (err) {
					return res.json({
						code: 404,
						msg: '查询商品列表失败',
						info: err
					})
				}
				if (data.length === 0) {
					return res.json({
						code: 200,
						msg: '没有找到符合条件的商品列表'
					})
				}

				return res.json({
					code: 200,
					msg: '查询商品列表成功',
					data: data
				})
			})
		}
	}
}

module.exports = ProductController
