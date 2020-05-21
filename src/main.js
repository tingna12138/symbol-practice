// vue项目入口文件

// 加载的vue最终会被打包到bundle.js文件里
// import Vue from 'vue'
import Vue from 'vue/dist/vue.esm.js'
import VueRouter from 'vue-router'
import Vuex from 'vuex'
import routeConfig from './routers'
import storeConf from './store'
import { getCookie } from './utils/utils'
import TabsRouter from './components/tabsRouter'
import allTabsComponents from './routers/masterComponents'

import App from './App.vue'
import ElementUI from 'element-ui'
Vue.use(Vuex)
Vue.use(ElementUI)
Vue.use(VueRouter)
Vue.use(TabsRouter, { tabsMap: allTabsComponents })
Vue.prototype.$ade = 2

const router = new VueRouter(routeConfig)
const store = new Vuex.Store(storeConf)

// 声明一个全局过滤器（也可以声明局部过滤器，自己看文档）
// 第一个参数： 过滤器的名字
// 第二个参数：回调函数(参数为默认的，是传进来的数据)
Vue.filter('channelFilter', value => {
  switch (value) {
  case '0': return '早上好'
  case '1': return '中午好'
  case '2': return '晚上好'
  }
})

Vue.prototype.$_permission = function (val) {
  let permission = JSON.parse(window.localStorage.getItem('permissionId'))
  // indexOf()返回字符串某个字串第一次出现的索引，若没有则返回 -1
  return permission.indexOf(val) === -1
}

// 路由拦截
router.beforeEach((to, from, next) => {
  console.log('路由拦截', to, from)
  if (to.fullPath !== '/login' && !getCookie('userId')) {
    router.push({ path:'/login'})
  }
  next()
})

// 这种为compiler（模板）模式的构建vue实例的方式
// new Vue({
//     el: '#app',
//     data: {
//         mes: '这是一个webpack打包的vue文件'
//     }
// })

// 以下两种方式都可以用来指定挂载元素
// new Vue({
//     render: h => h(App)
//   }).$mount("#app")

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
