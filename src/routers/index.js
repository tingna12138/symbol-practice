//路由配置文件



//引入vue文件所在路由
const Home = () => import('../views/Home.vue')
const LayOut = () => import('../views/LayOut.vue')

//配置路由文件
let routes = [
  { path: '/mainLayout',
    component: LayOut,
    children: [
      {
        name: 'HOME',
        path: '',
        component: Home
      }
    ]
  }
]

//创建路由
export default {
    routes,
    base: '/practice',
    mode: 'history'
}

// 配置的路由怎么请求不到数据；
// base: 不起作用


