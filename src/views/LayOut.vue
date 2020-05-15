<template>
  <div>
    <!-- <div style="background:red;height:30px;width:70px" @click="clickDiv">点击</div> -->
    <el-container>
      <el-header>
        <Menu :data="data" />
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
        <tabs-router />
      </el-main>
    </el-container>
  </div>
</template>

<script>
// 组件命名规范： https://www.csdn.net/gather_2d/MtTaAg0sMzEwNC1ibG9n.html
import Menu from '../components/layout/Menu.vue'
import { mapActions } from 'vuex'
import axios from 'axios'

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
    this.getHomeData().then(res => {
      console.log('返回的数据', res)
      const { code, payload = [] } = res
      this.data = payload
    })
  },
  methods: {
    ...mapActions('common',['getHomeData']),
    handleSelect () {},
  }
}
</script>

<style>

</style>