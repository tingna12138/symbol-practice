<template>
  <div class="about-us">
    关于我们
    <input type="text" placeholder="write somthing for us" v-model="value">
  </div>
</template>

<script>
export default {
  data () {
    return {
      value: ''
    }
  },
  activated () {
    console.log(this.value)
  }
}
</script>

<style lang="styl" scoped>
 .about-us
   color: red

</style>