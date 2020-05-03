const HOME = () => import('../views/Home.vue')  // 首页
const SUPER_MARKET = () => import('../views/superMarket/SuperMarket.vue')  // 首页
const CARE_HAIR = () => import('../views/takeCare/CareHair.vue')  // 品牌商城-养护-护发
const CARE_FACE = () => import('../views/takeCare/CareFace.vue')  // 品牌商城-养护-面部护理
const BEAUTY_LEG = () => import('../views/takeCare/BeautyLeg.vue')  // 品牌商城-养护-美腿
const BRAND = () => import('../views/brand/Brand.vue')  // 品牌商城-大牌优惠
const ABOUT_US = () => import('../views/AboutUs.vue')  // 关于我们
const ORDER_MANAGE = () => import('../views/orderManage/OrderManage.vue')  // 关于我们

export const Home = 'HOME'
export const SuperMarket = 'SUPER_MARKET'
export const CareHair = 'CARE_HAIR'
export const CareFace = 'CARE_FACE'
export const BeautyLeg = 'BEAUTY_LEG'
export const Brand = 'BRAND'
export const AboutUs = 'ABOUT_US'
export const OrderManage = 'ORDER_MANAGE'

export default {
  HOME,
  SUPER_MARKET,
  CARE_HAIR,
  CARE_FACE,
  BEAUTY_LEG,
  BRAND,
  ABOUT_US,
  ORDER_MANAGE
}