class Public {
	constructor() {
		this.modifiedNumber = 0
		this.removeNumber = 0
		this.updateMsg = [
			'提交修改命令失败，请联系网站管理员检查相关问题',
			'提交修改命令成功，但没有修改相关数据',
			`已修改 ${this.modifiedNumber} 条数据,但是查询修改后的数据失败`,
			`提交修改命令成功，已修改 ${this.modifiedNumber} 条数据`
		]

		this.removeMsg = [
			'提交删除命令失败，请联系网站管理员检查相关问题',
			`已修改 ${this.removeNumber} 条数据,但是查询修改后的数据失败`,
			`提交删除命令成功，已删除 ${this.removeNumber} 条数据`
		]
		this.model = null
	}
	updated(req, res) {
		const { id, updateData } = req.body
		const msg = this.updateMsg

		this.model.updateOne({ _id: id }, updateData).then((info, err) => {
			if (err) {
				return res.json({
					msg: msg[0],
					data: err
				})
			}
			if (info.nModified === 0) {
				return res.json({
					msg: msg[1],
					data: info
				})
			}
			this.model.find({ _id: id }).then((data, err) => {
				if (err) {
					return res.json({
						msg: msg[2],
						data: err
					})
				}

				return res.json({
					msg: msg[3],
					data: data
				})
			})
		})
	}
	remove(req, res) {
		const id = req.body.id
		const msg = this.removeMsg

		this.model
			.deleteMany({
				_id: {
					$in: id
				}
			})
			.then((info, err) => {
				if (err) {
					return res.json({
						msg: msg[0],
						data: err
					})
				}
				if (info.deletedCount === 0) {
					return res.json({
						msg: msg[1],
						info: info
					})
				}

				return res.json({
					msg: msg[2],
					info: info
				})
			})
	}
}

module.exports = Public
