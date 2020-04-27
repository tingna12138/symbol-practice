<template>
  <div>
    <el-container>
      <el-header>
        <Menu :data="data"/>
      </el-header>
      <el-main>Main</el-main>
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
    data: []
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