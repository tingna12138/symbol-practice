<template>
  <div>
    <el-tabs v-model="activeTab" type="card" @tab-remove="removeTab">
      <el-tab-pane label="首页" name="0"/>
      <el-tab-pane
        v-for="(item, index) in tabsList"
        :key="index"
        :label="item.label"
        :name="item.name"
        closable
      />
    </el-tabs>

    <el-scrollbar style="height:100%;">
      <keep-alive :include="keepAliveLIst">
        <component :is="activeTab"/>
      </keep-alive>
    </el-scrollbar>
  </div>
</template>

<script>
export default {
 data() {
    return {
      keepAliveLIst: [],
      activeTab: 'HOME',
      tabsList: [],
      param: {},
      tabIndex: 3
    }
  },
  created () {
    this.$createTabs()
  },
  computed: {
    tabParams () { 
      return this.param
    }
  },
  methods: {
    // 开启标签页
    addTab(tabParam) {
      const { tabTitle, tabCode, param = null } = tabParam
      // 情况1：导航路由不存在，打印错误
      if (!tabCode || tabCode.length < 4) {
        console.error('导航菜单不存在')
        return
      }
      // 保存传递过来的参数
      if (param) {
        this.param[tabCode] = param
      }
      
      this.addKeepList(tabCode).then(mes => {
        if (mes === 'add') {
          this.tabsList.push({ label: tabTitle, name: tabCode })
        }
        this.$nextTick(() => {
          this.activeTab = tabCode
          this.setActiveTab()
        })
      })
    },
    // 关闭某个菜单项
    removeTab(targetName) {
      let tabs = this.tabsList;
      let activeName = this.activeTab;
      let nextTabs = tabs.slice(targetName)
      let preTabs = tabs.slice(0,targetName-1)
      nextTabs.length > 0 ? nextTabs.forEach(tab => tab.name = tab.name - 1 + '') : nextTabs = []
      tabs = preTabs.concat(nextTabs)
      this.activeName = targetName < this.activeName ? this.activeName -- : this.activeName
      this.tabIndex --
      this.tabsList = tabs
      console.log(tabs)
    },

    // 改变缓存队列，返回一个promise对象，操作缓存后再做数组跳转
    addKeepList (code) {
      return new Promise((resolve, reject) => {
        // 情况1： 这个标签已经打开了： 将activeTabName设置为这个标签
        let isOpen = this.keepAliveLIst.includes(code)
        if (isOpen) {
          resolve('isOpen')
        } else {
         // 情况2： 这个标签没有被打开：打开新的标签
           this.keepAliveLIst.push(code)
           resolve('add')
        }
      })
    },
    setActiveTab() {
      this.$setActiveTab(this.tabsActive)
    }
  }
}
</script>

<style>

</style>