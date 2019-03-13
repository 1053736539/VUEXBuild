<template>
  <div class="">
    这是主页
  </div>
</template>

<script>
  import Axios from "axios"
  export default {
    data(){
      return{

      }
    },methods:{
      getdata2(){
        var api='http://www.phonegap100.com/appapi.php?a=getPortalList&catid=20&page=1';
        Axios.get(api).then((response)=>{
          console.log(response);
        }).catch((error)=>{
          console.log(error);
        })
      },
      getData () {
        // 组件中使用
        this.$http('get', 'http://www.phonegap100.com/appapi.php', {'a':'getPortalList','catid':20,'page':1})
          .then(res => {
            console.error(res)
          })

      }



    },mounted() {
      this.getData();
      this.getdata2();
    },
    components:{
      Axios
    }
  }
</script>

<style scoped>

</style>
