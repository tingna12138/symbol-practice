<template>
  <div class="box" ref="box">
     <div class="title">订单管理首页</div>
     <div class="cotent">内容部分</div>
  </div>
</template>

<script>
    
export default {
  data() {
    return {
      scrollY: 0
    }
  },
  mounted () {
    var box = this.$refs.box
    console.log(box)
    box.addEventListener('scroll', function() {
      if (this.scrollY !== 0) {
        this.scrollY = this.scrollTop
      }
    })
  },
  deactivated () {
    var box = this.$refs.box
    console.log(this.scrollY, box.scrollTop)
  },
  activated () {
    console.log('123激活了', this.scrollY)
    var box = document.querySelector('.box')
    box.scrollTop = this.scrollY
    console.dir(box)
        
  }
}
</script>

<style scoped>
  .box {
    height: 400px;
    background: pink;
    overflow-y: scroll
  }
  .title {
    background: red;
    height: 300px;
  }
  .cotent {
    height:500px;

  }
</style>