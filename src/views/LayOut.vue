<template>
  <div>
    <!-- <div style="background:red;height:30px;width:70px" @click="clickDiv">点击</div> -->
    <el-container>
      <el-header style="position:relative">
        <Menu :data="data" />
        <div class="setting">
          <el-dropdown trigger="click" @command="handleCommand">
            <span class="el-dropdown-link" style="color:#999">
              设置<i class="el-icon-arrow-down el-icon--right"></i>
            </span>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item command="userInfo" style="color:#999;font-size:14px">用户信息</el-dropdown-item>
              <el-dropdown-item command="out" style="color:#999;font-size:14px">退出登录</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
        </div>
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

    // 查看用户详情或者退出
    handleCommand (val) {
      if (val === 'out') {
        document.cookie = 'userId= '
        this.$router.push({ path: '/login' })
      }
    }
  }
}
</script>

<style scoped>
.setting {
  position: absolute;
  top: 20px;
  bottom: 0;
  right: 20px
}
</style>