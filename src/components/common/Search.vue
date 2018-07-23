<template>
  <div id="container">
    <header>
        <div id="searchinput">
          <i class="yo-ico">&#xf017c;</i>
          <input type="text" placeholder="咖啡厅">
          <i class="yo-ico cancel" @click="clickBack">&#xe664;</i>
        </div>
        <span @click="clickExit">取消</span>
    </header>
    <main>
      <search-content></search-content>
    </main>
  </div>
  
</template>

<script>
import { Search } from 'mint-ui';
import SearchContent from '../SearchContent.vue';
export default {
  name: 'searchheader',
  components: {
    SearchContent,
    [Search.name]:Search,
  },
  methods:{
    clickBack(){
     this.$router.back();
    },
    clickExit(){
      this.$router.push('/')
    }
  }
}
</script>
<style lang="scss" scoped>
@import '@/style/usage/core/reset.scss';
@font-face {
    font-family: 'yofont';
    src:
      url('../../assets/iconfonts/iconfont.woff') format('woff'),
      url('../../assets/iconfonts/iconfont.ttf') format('truetype');
}
   html,body{
     height:100%;
     background:#fff;
     #container{
       height:100%;
            header{
            margin-bottom: .05rem;
            padding:0 .15rem 0 .05rem;
            height:.43rem;
            font-size:14px;
            color:#1e1c1c;
            align-items:center;
            border:1px solid rgba(218, 214, 214,.5);
            @include flexbox();
            span{
              font-weight:500;
            }
            #searchinput{
              align-items: center;
              height:.28rem;
              align-items: center;
              overflow: hidden;
              padding:0 .08rem;
              @include flexbox();
              @include flex();
              border-radius: .14rem;
              border:1px solid #999;
              margin:0 .1rem;
              input{
                height:.2rem;
                margin-left:.05rem;
                font-size:12px;
                @include flex();
                border:none;
              }
              i{
                  color:rgb(211, 205, 205);
              }
            }
      }
      main{
       overflow-y:scroll;
       height:100%;
      }
     }
   }
</style>