<template>
  <div>home页
    <button @click="$addTab({tabTitle:'首页测试', tabCode: 'ORDER_MANAGE', param: {a: 1}})">添加标签页</button>
  </div>
</template>

<script>
export default {
  methods: {
  }
}
</script>