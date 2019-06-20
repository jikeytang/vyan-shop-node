const Order = require('../models/order.model')

const OrderController = {
  /**
   * 注册
   * @param req
   * @param res
   */
  signIn (req, res) {
    const { username, password } = req.body

    User.findOne({ username }, (err, doc) => {
      if (doc) {
        return res.json({ code: 1, msg: '用户已存在' })
      }
      const userModel = new User({ username, password })

      userModel.save((error, data) => {
        if (error) {
          return res.json({ code: 1, msg: error })
        }
        const { username, _id } = data

        return res.json({ code: 0, data: { username, _id } })
      })
    })
  },
  /**
   * 登录
   * @param req
   * @param res
   */
  login (req, res) {
    const { username, password } = req.body

    User.findOne({ username }, (err, doc) => {
      if (!doc) {
        return res.json({ code: 1, msg: '用户不存在' })
      }

      if (password === doc.password) {
        req.session.userId = doc._id

        return res.json({
          code: 0,
          result: {
            userInfo: doc
          }
        })
      }

      return res.json({ code: 1, msg: '密码错误' })

    })
  },
  /**
   * 退出
   * @param req
   * @param res
   * @returns {*}
   */
  signOut (req, res) {
    req.session.userId = null

    return res.json({ code: 1, msg: '已退出' })
  },
  /**
   * 更新用户资料
   * @param req
   * @param res
   */
  update (req, res) {
    const { body } = req

    User.findByIdAndUpdate(req.session.userId, { email: body.email, phone: body.phone }, (err, doc) => {
      return res.json({ code: 0, doc })
    })
  },
  remove (req, res) {
    User.remove({ _id: req.body.id }, () => {
      return res.json({ code: 0, msg: '删除成功' })
    })
  }
}

module.exports = OrderController
