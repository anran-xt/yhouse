<<template>
 <div>
   <h1>玩乐-->点击进入专题页面</h1>
   <button @click="handleClick1">仙女养成记</button>
   <button @click="handleClick2">户外探险季</button>
 </div>
</template>

<script>

 export default {
   name: 'party',
   components:{
     
   },
   methods: {
     handleClick1(){
       console.log('click ...');
       this.$router.push({
         path:'/subject5'
       })
     },
     handleClick2(){
       console.log('click ...');
       this.$router.push({
         path:'/subject6'
       })
     }
   }
 }
</script>
<style lang="scss" scoped>
  h1{
    font-size:.16rem;
    margin:.5rem .8rem;
  }
   button{
     margin:.3rem 1rem;
     height:.5rem;
     width:1rem;
   }
</style>