import Moment from 'moment'
import axios from 'axios'

// cookie的设置与获取
export function setCookie ( name, value ) {
  const Days = 30
  const exp = new Date()
  // dateObject.setTime(millisec) 要设置的日期和时间据 GMT 时间 1970 年 1 月 1 日午夜之间的毫秒数
  // dateObject.getTime(millisec) 获取指定日期和时间据 GMT 时间 1970 年 1 月 1 日午夜之间的毫秒数
  exp.setTime( exp.getTime() + Days*24*60*60*1000 )
  document.cookie = name + '=' + escape( value ) + ';path/;'
  console.log('获取cookie数据', document.cookie)
}

//读取cookie
export function getCookie ( name ) {
  const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
  let arr
  // String.match(),获取符合条件的字串，返回值是符合条件的  串
  // unescaped 和 escape
  //match返回的是什么
  //上面一串正则表示什么意思
  return (arr = document.cookie.match(reg)) ? unescape  (arr[2]) : null
}

//删除cookie
export function delCookie ( name ) {
  setCookie ( name, '')
}

//保存session
//获取session
//移除session

//获取某年某月有多少天
//比如2017年2月份 getDaysOfMonth(2017,2)
export function getDaysOfMonth ( year, month) {
  if(!year || !month) return 0
  const date = new Date(year, month, 0)
  //返回一个月中的某一天，如果日期对象没有指定哪一天，返回的就是这个月的天数
  // new Date怎么用，可以传那些参数: 毫秒表示的时间、上面的那种参数格式
  return date.getDate()
}

//一个月30天前的日期
export function Day30Ago (now) {
  let day30Ago = now.getTime() - 30*24*60*60*1000
  day30Ago = new Date( day30Ago )
  let day = day30Ago.getFullYear() + '-' + (day30Ago.getMonth()+1) + '-' + day30Ago.getDate()
  return day0( day )
} 

//日期前导0
export function day0 (date) {
  if ( date == null && date== '' ) return ''
  let _date = date.split('-')
  //字符串的数字和纯数字是可以进行大小比较的
  let month = parseInt( _date[1] )
  let day = parseInt( _date[2] )
  month = month < 10 ? '0'+ month : month
  day = day < 10 ? '0' + day : day
  return _date[0] + '-' + month + '-' + day
}

// 检索开始时间小于结束时间
export function checkStartEndTime ( start, end ) {
  if( start == null|| end == null) return true
  let _start = start.split('-').join('')
  let _end = end.split('-').join('')
  return _start > _end ? false : true 
}

/**
 * 对象深度拷贝：将一个对象的属性全部克隆到另一个对象中
 * src  被拷贝的对象
 * dest 拷贝到对象
 */
export function deepCopy (src, dest) {
  dest = dest || {}
  for(let key in src) {
    if( (typeof src[key] == 'object') && src[key] !==null ) {
      dest[key] = src[key].constructor === Array ? [] : {}
      deepCopy( src[key], dest[key] ) 
    }
    else {
      dest[key] = src[key]
    }
  }
  return dest
}

/** 
 * 将伪数组转成真数组
 * array
*/
export function makeArray (array) {
  var ret = []
  if( array !== null) {
    var i=array.length
    if( i==null || typeof array == 'string' || array.setInterval) {
      ret[0] =array
    }
    else {
      while( i ) {
        ret[--i] =array[i]
      }
      return ret
    }
  }
}

//导出excel
export function exportExcel (path, params, name = '') {
  let url
  let locationHref = `htttp://${window.location.host}`
  const ENV = process.env.NODE_ENV  //development
  const URL = process.env.API_DOMAIN  //
  console.log('ENV',ENV, URL)
  url = ENV == 'proMaster' ? URL : locationHref
  let finalPath = url + path
  console.log('finalPath',finalPath)
  const headers = {
    'Content-Type': 'application/json',
    'x-access-token': getCookie('token')
  }
  axios({
    url:finalPath,
    method:'post',
    withCredentials: true,
    responseType: 'blob',
    headers,
    data:params
  }).then(res=>{
    // blob格式的数据
  })
}

//获取当前页面的nodeCode
export function getNodeCode (value) {
  switch (value) {
  case 'FIRST_VERIFY': return 'CZ1'
  case 'SECOND_VERIFY': return 'CZ2'
  case 'PG_VERIFY': return 'CZPG'
  default: return null
  }
}

/**
 * 拼音格式转换
 * @param data  zhang ting ting
 * Zhang/TingTing
 */
export function pinYingChange (data) {
  let pinYing =[]
  let res = ''
  let rules = /\s+/g //匹配包含一个或者多个空格
  let nameList = data.split(rules)
  nameList.forEach(( item, index )=>{
    // console.log(item.charAt(0).toUpperCase())
    pinYing.push( item.charAt(0).toUpperCase() + item.slice(1) )
    // item.charAt(0) = item.charAt(0).toUpperCase()
    res += item.charAt(0).toUpperCase() + item.slice(1) +( index === 0 ? '/' : '')
  })
  return res
}