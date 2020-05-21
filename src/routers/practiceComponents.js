const ASYNC_FUNCTION = () => import('../views/practice/AyncFunction.vue')  // 异步方法和同步方法
const COOKIE_SESSION = () => import('../views/practice/CookieAndSession.vue')  // cookie和session的练习

export const AyncFunction = 'ASYNC_FUNCTION'
export const CookieAndSession = 'COOKIE_SESSION'

export default {
  ASYNC_FUNCTION,
  COOKIE_SESSION
}
