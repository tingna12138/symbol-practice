<template>
  <div>
    <div style="background:red;height:30px;width:70px" @click="clickDiv">点击</div>
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
import { mapState } from 'vuex'

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
  computed: {
    //  ...mapState({
    //   count: (state) => state.count,
    //   countAir: 'count',  // 通过字符串 'count'传参，它就代表state.count 
    // }),
    // ...mapState(['count'])  // 也可以通过这种方式传参，直接获取state对象里的count属性
    // 获取common模块的状态
    // ...mapState({
    //   titleForCommon: (state) => state.common.title
    // })
  },
  mounted () {
    this.axios.get('/sql/menu.json').then((res) => {
      console.log(res)
      const { status, data = [] } = res
      this.data = data
    })
  },
  methods: {
   
    handleSelect () {},
    clickDiv () {
      // console.log(this.$store)
      // console.log(this.titleForCommon)  // common模块的title
      // console.log(this.$store.state.common) // 直接获取某个模块的状态
      // this.$store.commit('common/writeTitle')
      // this.$store.getters['common/sumWithRootCount']
      this.$store.getters['common/sumWithRootCount']
    }
  }
}
</script>

<style>

</style>