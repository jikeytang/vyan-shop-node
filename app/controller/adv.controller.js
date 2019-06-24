const Adv = require('../models/adv.model')

const AdvController = {
	/**
	 * 新增Banner
	 * @param req
	 * @param res
	 */
	add(req, res) {
		const info = req.body

		Adv.findOne({ title: info.title }, (err, doc) => {
			if (doc) {
				return res.json({ code: 1, msg: 'banner已存在' })
			}
			const advModel = new Adv(info)

			advModel.save((error, data) => {
				if (error) {
					return res.json({ code: 1, msg: '接口出错' })
				}

				return res.json({ code: 0, data })
			})
		})
	},
	/**
	 * Banner列表
	 * @param req
	 * @param res
	 */
	list(req, res) {
		Adv.find({})
			.sort({ id: -1 })
			.exec((err, item) => {
				if (err) {
					return res.json({ code: 0, msg: '接口出错' })
				}

				return res.json({ code: 1, item })
			})
	},
	/**
	 * 更新用户资料
	 * @param req
	 * @param res
	 */
	update(req, res) {
		const { body } = req

		Adv.findByIdAndUpdate(
			req.session.userId,
			{ email: body.email, phone: body.phone },
			(err, doc) => {
				return res.json({ code: 0, doc })
			}
		)
	},
	remove(req, res) {
		Adv.remove({ _id: req.body.id }, () => {
			return res.json({ code: 0, msg: '删除成功' })
		})
	}
}

module.exports = AdvController
