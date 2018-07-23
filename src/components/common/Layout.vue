<template>
  <div class="index-container">
    <header>
      <div id="search" v-show="isHide" :style="marginNum">
        <!-- 包含两部分分别为1-搜索和2-NavBar -->
        <span>{{serchvalue[0]}}</span>
        <i class="yo-ico" v-html="icons[0]"></i>
        <div id="searchinput">
          <i class="yo-ico" v-html="icons[1]"></i>
          <input type="text" :placeholder="defaultInput" @click="handleSearch">
        </div>
        <span>{{serchvalue[1]}}</span>
        <i class="yo-ico" v-html="icons[2]"></i>
      </div>

      <ul id="nav">
        <li class="nav_content" v-for="(v,i) of navbar"  :key="v.id" :id="v.id" >
          <router-link :to="{path:v.path}" :class="{isSelected:v.state}" @click.native="handleTabClick(i)">{{v.content}}</router-link>
          <div :id="v.id" v-show=v.state></div>
        </li>
      </ul>
    </header>
    
    <main ref="viewBox">
      <div class="wrapper" ref=“wrapper”>
                <router-view />
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
      </div>
        
    </main>
    
  </div>
</template>

<script>
import BScroll from 'better-scroll';
import { Search, Navbar,TabItem} from 'mint-ui';
export default {
  name: 'layout',
  data() {
    return {
      value:'',
      isHide:true,
      marginNum:{
        'margin-top':'0'
      },
      defaultInput:'请输入商家、商圈、类系、活动...',
      icons:['&#xe698;','&#xf017c;','&#xe620;'],
      serchvalue:['北京','筛选'],
      navbar:[
        {
          id:'nav1',
          content:'美食',
          path:'/index/food',
          state:false
        },
        {
          id:'nav2',
          content:'玩乐',
          path:'/index/party',
          state:false
        },
        {
          id:'nav3',
          content:'夜生活',
          path:'/index/nightlife',
           state:false
        },
        {
          id:'nav4',
          content:'美容/SPA',
          path:'/index/spa',
           state:true
        },
      ],
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
      ],
      scrollTop:0
    }
  },
  components:{
    [Search.name]:Search,
    [Navbar.name]:Navbar,
    [TabItem.name]:TabItem
  },
  methods: {
    handleTabClick(index){
     for(var i =0;i<4;i++){
       this.navbar[i].state=false;
     }
     this.navbar[index].state=true;
    },
     handleScroll(){
      // var scrollTop = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop
      this.scrollTop = this.$refs.viewBox.scrollTop;
      // console.log(this.scrollTop);
      if(this.scrollTop < 40){
        this.isHide=true;
        // this.marginNum={'margin-top':'-'+'this.scrollTop'+'px'}
      }else{
         this.isHide=false;
      }
    },
    handleSearch(){
      console.log('is coming to Search...')
      this.$router.push({
        path:'/searchclick'
      })
    }
  },
  watch:{
  },
  mounted(){
    if(this.handleScroll && this.$refs.viewBox.scrollTop){
      window.addEventListener('scroll', this.handleScroll,true);
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
  
  .index-container {
    height: 100%;
    @include flexbox();
    @include flex-direction(column);
    header{
        box-shadow:0px 0px 12px 0px #999; 
        #search {
        margin-bottom: .05rem;
        padding:0 .1rem;
        height:.44rem;
        font-size:14px;
        color:#1e1c1c;
        align-items:center;
        @include flexbox();
        span{
          font-weight:500;
        }
        #searchinput{
          height:.28rem;
          align-items: center;
          padding-left:.03rem;
          overflow: hidden;
          @include flexbox();
          @include flex();
          border-radius: .14rem;
          border:1px solid #999;
          margin:0 .1rem;
          input{
            margin-left:.05rem;
            font-size:12px;
            @include flex();
            border:none;
          }
        }
      }
      #nav{
        padding:.02rem 0;
        margin-top:.05rem;
        @include flexbox();
        li{
          @include flex();
          @include flexbox();
          @include flex-direction(column);
          font-size:14px;
          text-align: center;
          a{
            color:#1e1c1c;
            font-weight:400;
          }
          .isSelected{
            color:#ff5c60;
            font-weight:700;
          }
          div{
            width:.23rem;
            border:1px solid #ff5c60;
            align-self: center;
          }
        }
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
