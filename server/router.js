const express = require('express')
const controls = require('./control')

let router = express.Router()

router
.get('/menu', controls.getMenu) // 请求登陆菜单数据
.post('/login', controls.userLogin) // 登录请求

//导出router对象
module.exports = router;