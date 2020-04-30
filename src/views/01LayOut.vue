<template>
  <div>
    <el-container>
      <el-header>
        <Menu :data="data"/>
      </el-header>
      <el-main>
        <!-- <tabs></tabs> -->
        <!-- <el-tabs v-model="editableTabsValue" type="card" editable @edit="handleTabsEdit">
          <el-tab-pane
            :key="index"
            v-for="(item, index) in editableTabs"
            :label="item.title"
            :name="item.name"
          >
            {{item.content}}
          </el-tab-pane>
        </el-tabs> -->
      </el-main>
    </el-container>
  </div>
</template>

<script>
// 组件命名规范： https://www.csdn.net/gather_2d/MtTaAg0sMzEwNC1ibG9n.html
import Menu from '../components/layout/Menu.vue'

export default {
components: { Menu },
data () {
  return {
    data: [],

    editableTabsValue: '2',
    editableTabs: [{
      title: 'Tab 1',
      name: '1',
      content: 'Tab 1 content'
    }, {
      title: 'Tab 2',
      name: '2',
      content: 'Tab 2 content'
    }],
    tabIndex: 2
  }
},
mounted () {
  this.axios.get('/sql/menu.json').then((res) => {
      console.log(res)
      const { status, data = [] } = res
      this.data = data
    })
},
methods: {
  handleSelect () {}
}
}
</script>

<style>

</style>