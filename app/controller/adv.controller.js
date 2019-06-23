const Adv = require('../models/adv.model')

const AdvController = {
  list (req, res) {

  },
  /**
   * 更新用户资料
   * @param req
   * @param res
   */
  update (req, res) {
    const { body } = req

    Adv.findByIdAndUpdate(req.session.userId, { email: body.email, phone: body.phone }, (err, doc) => {
      return res.json({ code: 0, doc })
    })
  },
  remove (req, res) {
    Adv.remove({ _id: req.body.id }, () => {
      return res.json({ code: 0, msg: '删除成功' })
    })
  }
}

module.exports = AdvController
