<template>
  <div>
    <div>获取浏览器cookie <span>{{ cook }}</span></div>
    <session />
  </div>
</template>

<script>
import Session from './Session.vue'

export default {
  components: { Session },
  data () {
    return {
      cook: ''
    }
  },
  mounted () {
    // 通过这种方式设置cookie.
    document.cookie = "username=Bill Gates"
    document.cookie = "password=123456"
  
    // 通过document.cookie获取浏览器所有的cookie数据，这些数据会议字符串的形式返回.
    // 比如 username=Bill Gates; password=123456
    this.cook = document.cookie
  
    // 修改cookie的值.可以像你创建cookie那样去改变一个cookie的值
    document.cookie = 'username=petter'
    this.cook = document.cookie
  
    // 删除cookie
    // document.cookie = "username= ; expires=Fri May 15 2018 18:08:43 GMT+0800; path=/;"  // 没有用
    document.cookie = "username= "  // 可以
    this.cook = document.cookie
    /**
     * 总结：
     * 1. 设置新的cookie,旧的cookie不会被覆盖。但可以通过document.cookie = 'username=petter'的方式给同名cookie重新赋值
     * 2. 如果你想找到一个指定 cookie 的值，你必须编写 JavaScript 函数来搜索 cookie 字符串中的 cookie 值。
     * 3. cookie的实例，请看官网： https://www.w3school.com.cn/js/js_cookies.asp 
     */
  }
}
</script>

<style>

</style>