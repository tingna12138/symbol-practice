<template>
  <div>
    <h4>session</h4>
    session的用法与浏览器缓存localStorage类似
    <div>
      <h4><a href="https://www.cnblogs.com/cencenyue/p/7604651.html">cookie session和webStorage的区别</a></h4>
      <ol>
        <li>1. cookie: 保存在浏览器；可以设置有效期，默认是浏览器关闭失效；最大储存4kb</li>
        <li>2. session: 保存在服务器端，通常通过cookie进行传递；可以设置有效时间</li>
        <li>3. webStorage: loacalStorage（存储在本地，除非手动删除，否则长期有效）和sessionStorage（会话存储，关闭当前会话窗口就会失效）。不与服务器端发生交互，用于本地存储</li>
      </ol>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    // 设置session
    sessionStorage.setItem('data', JSON.stringify(['这是一个session数据']))
    sessionStorage.setItem('data1', '这是又一个session数据')

    // 获取session
    var data = JSON.parse(sessionStorage.getItem('data'))  // 这里用JSON.parse(),上面就要用JSON.stringify将数组转换成字符串，否则就会报错
    console.log('这是从session中获取的数据', data)

    //删除session
    sessionStorage.removeItem('data1')

    // 清空所用session
    // sessionStorage.clear()
  }
}
</script>

<style>

</style>