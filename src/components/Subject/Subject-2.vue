<template>
  <div class="container">
        <header>
           <i class="yo-ico" @click="clickBack">&#xe60f;</i><h1>温暖微凉的午后时光 唤醒沉睡的灵魂</h1><span class="yo-ico" @click="clickHome">&#xe607;</span>
        </header>
        <main>
            <div id="subjectImg">
              <img src="http://f.yhres.com/tab/2017/10/25/1508925095486982.jpg-q75" alt=""/>
              <div id="imgShadow">
                <p>{{subjectTab}}</p>
                <span>{{subjectTitle}}</span>
              </div>
              <img class="showLogo" src="http://r.yhres.com/sns/event_icon_hongbaotop@2x.png" alt="" />
              <p class="logoTitle">{{redPacketNum}}元现金奖金</p>
              <span id="activePro">{{subjectTip}}</span>
              <p class="subDec"><i>“</i><b>{{subjectTxt}}</b></p>
              <span class="activeRole">活动规则</span>
            </div>
          <div id="sort">
            <router-link  to="left" tag="span"  :class="{'showActive':isShow}"  @click.native="handleClickChange">排行榜</router-link>
            <router-link  to="right" tag="span"  :class="{'showActive':!isShow}" @click.native="handleClickChange">最新{{contentNum}}</router-link>
          </div>
         <router-view />
        </main> 
  </div>
</template>

<script>
import $ from 'axios'
 export default {
   name: 'subjectheader',
   data () {
     return {
       isShow:true,
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
       subjectTxt:'',
       subjectTab:'',
       subjectTitle:'',
       subjectTip:'',
       contentNum:'',
       redPacketNum:'',
     }
   },
   components: {

   },
   methods:{
     clickBack(){
       this.$router.back();
     },
     clickHome(){
       this.$router.push({
         path:'/'
       })
     },
     handleClickChange(){
      //  console.log('change Path...')
      this.isShow = !this.isShow;
     }
   },
   mounted () {
     $.get('list/subject_list4') 
     .then((result)=>{
      var data = result.data.data;
      this.subjectList = data.contentList;
      this.subjectTxt = data.description;
      this.subjectTab = data.tab;
      this.subjectTitle = data.title;
      this.subjectTip = data.tip;
      this.contentNum = data.contentNum;
      this.redPacketNum = data.redPacketNum;
      // console.log(result);
     })
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
          padding:0px 0.1rem;
          font-size:.18rem;
        }
        i{
          margin-top:.03rem;
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
        #subjectImg{
          height: 1.575rem;
          text-align:center;
          position:relative;
          img{
            width:100%;
            height: 1.575rem;
          }
          #imgShadow{
            position:absolute;
            left:0;
            top:0;
            height:1.575rem;
            width:100%;
            background:rgba(0,0,0,.3);
            color:#fff;
            text-align:center;
            p{
              margin-top:.6rem;
              font-size:.17rem;
              line-height:.25rem;
              font-weight:700;
              margin-bottom:.08rem;
            }
            span{
              font-size:.14rem;
              line-height:.15rem;
            }
          }
          .showLogo{
            position:absolute;
            height:.44rem;
            width:.44rem;
            z-index:10;
            left:50%;
            margin-left:-22px;
            bottom:-22px;
          }
          .logoTitle{
            color:#ff5c60;
            font-weight:700;
            font-size:.21rem;
            text-align:center;
            margin-top:.35rem;
            margin-bottom:.08rem;
          }
          #activePro{
            font-size:10px;
          }
          .subDec{
            padding:0 .15rem;
            @include flexbox();
            margin-top:.1rem;
            i{
              margin-right:-.02rem;
              margin-top:-.15rem;;
              color:#777;
              opacity:.8;
              font-size:.5rem;
              font-weight:700;
            }
            b{
              color:#333;
              font-weight:100;
            }
          }
          .activeRole{
            display:inline-block;
            height:.31rem;
            line-height:.31rem;
            width:.88rem;
            border:1px solid #CBA162;
            color:#CBA162;
            font-weight:500;
          }
        }
        #sort{
          margin-top:2.2rem;
          padding:0 .7rem;
          font-size:15px;
          line-height:.46rem;
          @include flexbox();
          justify-content: space-between;
          span.showActive{
            color:#ff5c60;
            font-weight:600;
            display: inline-block;
            height:.46rem;
            border-bottom:3px solid #ff5c60;
          }
        }
      }
  }

 
</style>
