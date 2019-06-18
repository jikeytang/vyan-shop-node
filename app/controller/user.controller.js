const User = require('../models/user.model')

const UserController = {
  login (req, res) {
    const { username, password } = req.body
    console.log('username', username)

    User.findOne({ username }, (err, doc) => {
      console.log('doc', doc)
      console.log('err', err)
      if (!doc) {
        return res.json({ code: 1, msg: '用户不存在' })
      }
    })
  }
}

module.exports = UserController
