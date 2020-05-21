const utils = require('./util')
const userList = require('../sql/usersLIst.json')
const menu = require('../sql/menu.json')

module.exports = {
  userLogin (req, res) {  // 登录的接口
    res.set('Content-Type', 'application/x-www-form-urlencoded;charset=utf-8');
    let paramBody = utils.getKey(req.body)
    console.log(userList)
    let mes, code, payload = null
    userList.some(user => {
      if (user.username == paramBody.username && user.password == paramBody.password) {
        code = 200
        mes = '登录成功'
        payload = {
          userId: user.userId
        }
      } else if (user.username === paramBody.username && user.password !== paramBody.password) {
        code = 200
        mes = '密码错误'
      } else {
        code = 200
        mes = '用户不存在'
      }
    })
    res.send({
      code,
      mes,
      payload,
    })
  },
  getMenu (req, res) {
    res.send({
      code: 200,
      message: '操作成功',
      payload: menu
    })
  }
}