<template>
  <div class="container">
        <header>
           <i class="yo-ico" @click="clickBack">&#xe60f;</i><h1>专题详情</h1><span class="yo-ico" @click="clickHome">&#xe607;</span>
        </header>
        <main>
        <subject-content></subject-content>
                  <footer>                                                                 
                  <ul>
                    <li v-for="v of footlink" :key="v.path">
                      <router-link  :id="v.path" to="">{{v.content}}</router-link>
                    </li>
                  </ul>
                  <div id="appload">
                    <img v-for=" value of appload" :src="value" :key="value">
                  </div>
                  <p>{{footertext[0]}}</p>
                  <span>{{footertext[1]}}</span>
                </footer>
        </main> 
  </div>
</template>

<script>
import SubjectContent from '../SubjectContent-6.vue'
 export default {
   name: 'subjectheader',
   data () {
     return {
       footlink:[
       { 
         path:'index',
         content:'首页',
       },
       { 
         path:'index2',
         content:'订单',
       },
       { 
         path:'index3',
         content:'登录',
       }
      ],
      appload:[
        "http://m.yhouse.com/img/icons/icon_apple@2x.png?v4.3",
        "http://m.yhouse.com/img/icons/icon_android@2x.png?v4.3"
      ],
      footertext:[
        '关于我们',
        'Copyright YHOUSE mobile'
      ]
     }
   },
   components: {
    SubjectContent

   },
   methods:{
     clickBack(){
       this.$router.back();
     },
     clickHome(){
       this.$router.push({
         path:'/'
       })
     }
   }
 }
</script>

<style lang='scss' scoped>
@import '@/style/usage/core/reset.scss';
@font-face {
    font-family: 'yofont';
    src:
      url('../../assets/iconfonts/iconfont.woff') format('woff'),
      url('../../assets/iconfonts/iconfont.ttf') format('truetype');
  }
  .container{
    height: 100%;
    @include flexbox();
    @include flex-direction(column);
    header{
        height:.48rem;
        width:100%;
        @include flexbox();
        font-size:.16rem;
        padding-left:.03rem;
        h1{
          font-weight:900;
          line-height:.48rem;
          padding:0px 1.23rem;
          font-size:.18rem;
        }
        i{
          font-size:.21rem;
          line-height:.44rem;
        }
        span{
          font-size:.23rem;
          line-height:.44rem;
          color:#777;
        }
      }
      main{
      overflow-y:scroll;
      height:100%;
            footer{
        text-align:center;
        padding:.25rem 0;
        font-size:.14rem;
        color:#999;
        background: rgba(241, 240, 240,.8);
        >ul{
          padding:0 .5rem;
          @include flexbox();
          li{ 
            @include flex();
            a{
              color:#333;
              padding-right:.3rem;
              border-right:1px solid #777;
            }
            #index3{
              border:none;
            }
          }
        }
        #appload{
          padding:.15rem .3rem .3rem .3rem;
          img{
            margin:0 .05rem;
            height:.4rem;
            width:1.32rem;
          }
        }
        p{
          color:#555;
        }
        span{
          color:#ccc;
          font-size:10px;
        }
      }
      }
  }

 
</style>
