<template>
<div class="">
  这是主页
</div>
</template>

<script>
    export default {
        data(){
          return{

          }
        },methods:{
        getData () {
          let params = {
            userId: this.userId
          }
          this.$post('http://10.12.1.192:8080/Mellower/v1.0.0/pointshop/getPointShopList', params).then(res => {
            console.error(res)
          }).catch(() => {
          })
        }



      },mounted() {
          this.getData ()
      }
    }
</script>

<style scoped>

</style>
