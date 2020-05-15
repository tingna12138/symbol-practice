<template>
  <div>
    <el-tabs v-model="activeTab" type="card" @tab-remove="removeTab" @tab-click="tabActive">
      <el-tab-pane label="首页" name="HOME"/>
      <el-tab-pane
        v-for="(item, index) in tabsList"
        :key="index"
        :label="item.tabTitle"
        :name="item.tabCode"
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
  watch: {
    tabsList (newValue,oldValue) {
      return newValue
    }
  },
  methods: {
    // 切换到tab时触发
    tabActive (tabParam) {
      console.log(tabParam)
    },
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
          this.tabsList.push({ tabTitle, tabCode })
        }
        this.$nextTick(() => {
          this.activeTab = tabCode
          this.setActiveTab()
        })
      })
    },
    // 关闭某个菜单项
    removeTab(targetName) {
      // 从 tabList 和 keepAliveLIst去掉这个tab
      let tabs = this.tabsList;
      let theIndex
      tabs.some((tab, index) => {
        if(tab.tabCode === targetName) {
          theIndex = index
          this.activeTab = index === (tabs.length - 1) ? 'HOME' : tabs[index+1].tabCode
          this.setActiveTab()
          return true
        }
      })
      tabs.splice(theIndex, 1)
      this.tabsList = tabs
      this.keepAliveLIst.splice(this.keepAliveLIst.indexOf(targetName), 1)
      // console.log(this.activeTab, this.keepAliveLIst, this.tabsList)
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