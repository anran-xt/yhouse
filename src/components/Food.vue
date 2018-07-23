<template>
  <div >
     <h2>美食界面---点击进入专题</h2>
     <router-link to="/subject1" tag="button">美食撩动味蕾</router-link>
     <router-link to="/subject2" tag="button">深秋咖啡馆</router-link>
     <router-link to="/subject3" tag="button">潇潇秋色</router-link>
     <router-link to="/subject4" tag="button">值得分享的独到滋味</router-link>

  </div>
      
</template>

<script>
import $ from 'axios';
export default {
   name: 'food',
   data() {
    return {
      topStatus: '',
      list:[1,2,3,4,5,6,7,8,9,0],

    }
    },
   components:{
   },
   methods: {
     
   }
 }
</script>

<style lang="scss" scoped>
  button{
    margin:.5rem .2rem;
    padding:.2rem;
    color:#000;
    font-size:15px;
  }
 
</style>


+