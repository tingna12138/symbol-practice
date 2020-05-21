const express = require('express')
const bodyParser = require('body-parser')
const session = require('express-session')
const router = require('./router')

const app = express()
app.listen(3000, () => {
  console.log('server is running at http://127.0.0.1:3000')
})

// //配置body-parser
app.use(bodyParser.json()) // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })) // for parsing application/x-www-form-urlencoded

// 配置session
app.use(session({
  //设置随机码
  secret:'abced12',
  resave:false,
  saveUninitialized:false
}))

app.use((req,res,next)=>{
  console.log('请求进来了')
  res.header("Access-Control-Allow-Origin", "*")
  res.header("Access-Control-Allow-Headers", "X-Requested-With,Content-Type")
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS")
  res.header('Access-Control-Allow-Credentials','true')
  next();
})

app.use('/', router)
