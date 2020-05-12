<template>
  <el-menu class="el-menu-demo" mode="horizontal" @select="handleSelect">
    <template v-for="item in data">
      <el-menu-item :index="item.id" v-if="!item.children" :key="item.id" @click="openTab(item)">{{ item.permissionName }} </el-menu-item>
      <el-submenu :index="item.id" v-else :key="item.id">
        <template slot="title">{{ item.permissionName }}</template>
        <!-- <el-menu-item >{{secondMenu.permissionName}}</el-menu-item> -->
        <template v-for="secondMenu in item.children" :index="secondMenu.id">
          <el-menu-item :index="secondMenu.id" v-if="!secondMenu.children" :key="secondMenu.id" @click="openTab(secondMenu)">{{ secondMenu.permissionName }} </el-menu-item>  
          <el-submenu :index="secondMenu.id" v-else :key="secondMenu.id">
            <template slot="title">{{ secondMenu.permissionName }}</template>
            <el-menu-item v-for="thirdMenu in secondMenu.children" :index="thirdMenu.id" :key="thirdMenu.id" @click="openTab(thirdMenu)">{{ thirdMenu.permissionName }} </el-menu-item>
          </el-submenu>
        </template>
      </el-submenu>
    </template>
  </el-menu>
</template>

<script>

export default {
  props: ['data'],
  data () {
    return {
    }
  },
  mounted () {
    
  },
  methods: {
    handleSelect () {},
    //  打开新的tab页面
    openTab (param) {
      this.$addTab({tabTitle: param.permissionName, tabCode: param.permissionCode})
    }
  }
}
</script>

<style scoped>
.el-menu-item {
  float: left;
  height: 60px;
  line-height: 60px;
  margin: 0;
  border-bottom: 2px solid transparent;
  color: #909399;
}
</style>