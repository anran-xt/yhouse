<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  created() {
    this.getData();
    this.getDetailData();
    this.getCommentData();
    console.log(this.$store.state)
    
  },
  methods: {
    ...mapActions(['getData','getDetailData','getCommentData'])
  }
}
</script>



<style lang="scss">
  @import './style/usage/core/reset.scss';
  #app{
    height:100%;
    overflow: scroll;
  }
</style>

