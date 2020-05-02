import Tabs from './Tabs.vue'

Tabs.install = function(Vue, options) {
  console.log(options)
  Vue.component('TabsRouter', Tabs)
}

export default Tabs