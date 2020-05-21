import axios from 'axios'
import { Message } from 'element-ui'
import NProgress from 'nprogress'
import 'nprogress/nprogress.css'
import { REQUEST_SUCCESS, TYPEIN_SUCCESS } from '../utils/constans'

const baseUrl = process.env.API

function CALL_API(path, method, params = null) {
  NProgress.start()
  const headers = { // 设置请求头
    'Accept': 'application/json', // 指定客户端能接收的内容类型
    'Content-Type': 'application/json', // 不晓得
  }
  if (method === 'POST' || method === 'post') {
    headers['Accept'] = '*/*'
    headers['Content-Type'] = 'application/x-www-form-urlencoded;charset=utf-8' // form表单类型数据
  }
  axios.interceptors.request.use(function (config) {
    // 在发送请求之前做些什么
    console.log('请求配置', config)
    return config;
  }, function (error) {
    // 对请求错误做些什么
    return Promise.reject(error);
  })

  return axios({
    url: baseUrl + path,
    method, // 请求方法大小写都可以('get'或'GET')
    data: params, // delte请求传请求体也用data
    params: method === 'GET' ? params : null,
    headers
  }).then(checkStatus).catch(err => {
    NProgress.done()
    // 处理请求出现错误的情况
    console.log('请求发生错误', err.response)
    const errRes = err.response
    if (errRes) {
      // 网址：https://blog.csdn.net/fengyouhua/article/details/83129342
      switch (errRes.status) {
      case 400: Message({ showClose: true, message: '请求出现语法错误', type: 'error' })
        break
      case 403: Message({ showClose: true, message: '用户没有权限', type: 'error' })
        break
      case 404: Message({ showClose: true, message: '请求的资源不存在', type: 'error' })
        break
      case 405: Message({ showClose: true, message: '请求方法有误', type: 'error' })
        break
      case 500: Message({ showClose: true, message: '服务器出错', type: 'error' })
        break
      default:
        break
      }
    }
  })
}

// 处理请求的各种状态
// 浏览器的network栏，preview的是data中的数据
function checkStatus (res) {
  NProgress.done()
  // `status` 来自服务器响应的 HTTP 状态码
  const { data, status } = res
  if (data && status === 200) {
    // status是浏览器根据请求的状态返回的；而code是后台返回数据的一部分，是可以自己决定的
    const { code, message } = data
    if (code !== REQUEST_SUCCESS && code !== TYPEIN_SUCCESS) {
      if (code === 9017) {
        // 用户非登录状态
      } else if (message) {
        // 有message返回
        throw new Error(`${message}(${code})`)
      } else {
        // 没有message返回
        throw new Error('服务器异常！！')
      }
    }
  }
  return data // 将后台返回的数据返回，作为返回的promise对象的参数
}

export default CALL_API
