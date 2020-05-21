import Tabs from './Tabs.vue'

Tabs.install = function (Vue, options) {
  // 为什么将下面的操作用$createTabs报错起来，并在Tabs.vue里面运行，就不会报找不到param的错呢？
  Vue.prototype.$createTabs = function () {
    console.log('tabs', this)
    Vue.prototype.$addTab = this.addTab
  }
  Vue.prototype.$setActiveTab = function (activeTab) {
    Vue.prototype.$activeTab = activeTab
    Vue.prototype.$tabParam = this.tabParams[activeTab]
  }
  // console.log(this.methods.addTab)
  Vue.prototype.$addTab = this.methods.addTab
  const { tabsMap } = options
  Tabs.components = tabsMap
  Vue.component('TabsRouter', Tabs)
}

export default Tabs
