<template>
  <div>异步和同步方法</div>
</template>

<script>
export default {
  data() {
    return {

    }
  },
  mounted () {
    function asyncFn () {
      return new Promise(res => {
        setTimeout(() => {
          res([1, 2, 3])
        }, 2000)
      })
    }
    var f1 = asyncFn()
    async function fn () {
      var f2 = await asyncFn()
      var f3 = asyncFn().then(res => {
        return res
      })
      console.log('f2', f2)
      console.log('f3', f3)
    }
    fn()
    console.log('f1', f1)
  },
}
</script>