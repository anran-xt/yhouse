<template>
 <div>
    <h2>搜索界面---点击进入</h2>
    <button @click="handleinSearch">点击进入搜索页面</button>
 </div>
</template>

<script>
 export default {
   name: 'searchclick',
   data () {
     return {

     }
   },
   components: {

   },
   methods: {
     handleinSearch(){
       console.log('click to Search...');
       this.$router.push({
        path:'/search'
      })
     }
   }
 }
</script>

<style lang='scss' scoped>
  h2{
    margin:1rem;
  }
  button{
    margin:0 .8rem;
    height:.4rem;
    width:2rem;
  }
 
</style>
