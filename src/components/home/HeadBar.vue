<template>
<!-- <div class="contanier"> -->
    <div class="homeWrap"  @scroll="foodScroll" >
        <!-- 导航头 -->
        <div  :class="{ 'topArea':true, 'mounted':mounting}">
            <div class="topSearch">
                <div class="location" @click="getFilter">{{nowCity}}</div>
                <div class="searchBtn">
                    <input type="text" @click="showSearch" placeholder="请输入商家、商圈、菜系、活动…">
                </div>
                <div class="filter" @click="goScreen">
                    筛选
                </div>
            </div>
            <div class="topNav">
                <ul>
                    <li v-for="(item , index) of homeRout" :key="item">
                        <router-link :to="item" :class="{active:nowShow==index}" @click.native="navClick(index)">{{homeNav[index]}}</router-link>
                    </li>
                </ul>
            </div>
        </div>
        <router-view @touch="touch" @move="move" @end="end"></router-view>
        <div class="foot">
          <p class="loadMore">查看更多</p>
          <div class="footContent">
            <div class="footNav">
                <a href="javascript:void(0)">首页</a>
                <span>|</span>
                <a href="javascript:void(0)">订单</a>
                <span>|</span>              
                <a href="javascript:void(0)">登录</a>
            </div>
            <div class="load">
              <span class="apple"></span>
              <span class="andriod"></span>
            </div>
            <div class="about">
              <p>关于我们</p>
              <p class="copyRight">Copyright YHOUSE mobile</p>
            </div>
          </div>
        </div>
        <LocationFilter 
          @backToHome="backFromFilterNow"
          @changeNowCity="changeCity" 
          :nowCity="nowCity" 
          v-if="filterShow" 
        ></LocationFilter>
        <Search v-if="searchShow" @backFromSearch="backFromSearchNow"></Search>
    </div>  

<!-- </div> -->
</template>
<script>
import LocationFilter from './LocationFilter.vue'
import Search from './Search.vue'

export default {
  name: "HeadBar",
  components : {
    LocationFilter,
    Search
  } ,
  data() {
    return {
      nowShow: 0,
      homeRout: ["/food", "/plaything", "/nightlife", "/spa"],
      homeNav: ["美食", "玩乐", "夜生活", "美容/SPA"],

      nowCity:"北京",

      // 是否吸顶
      mounting:false,

      // locationfilter是否显示
      filterShow:false,

      // Search 是否显示
      searchShow:false
    };
  },
  methods: {
    touch: function(e) {
      this.startX = e.touches[0].pageX;

      //防止上次翻页  遗留下的endX 对翻页的影响
      this.endX = this.startX;
      // console.log("touch");
    },
    move: function(e) {
      //   e.preventDefault()
      this.endX = e.touches[0].pageX;
      // console.log("move");
    },
    end: function() {
      // console.log("end");
      // console.log(this.startX, this.endX);

      if (this.endX - this.startX < -120) {
        this.nowShow = ++this.nowShow >= 4 ? 0 : this.nowShow;
        // console.log(this.nowShow);
        this.$router.push(this.homeRout[this.nowShow]);
      }

      if (this.endX - this.startX > 120) {
        this.nowShow = --this.nowShow < 0 ? 3 : this.nowShow;
        // console.log(this.nowShow);

        this.$router.push(this.homeRout[this.nowShow]);
      }
    },
    navClick: function(index) {
      this.nowShow = index;
    },
    foodScroll: function() {
      clearTimeout(this.timer);
      this.timer = setTimeout(function() {
        var homeEle = document.getElementsByClassName("homeWrap")[0];
        var elSt = homeEle.scrollTop;

        if(elSt >= 120){
          this.mounting = true
          // console.log("in")
        }else{
          this.mounting = false          
        }
        // console.log(elSt);
      }.bind(this), 100);
    },
    getFilter:function(){
      this.filterShow=true
    },
    backFromFilterNow:function(){
      // console.log("yes")
      this.filterShow=false      
    },
    showSearch:function(){
      this.searchShow=true
    },
    backFromSearchNow:function(){
      this.searchShow=false      
    },

    setHeadActive(){

    },

    goScreen:function(){
      this.$router.push("/screen")
    },

    //改变当前城市
    changeCity:function(replaceCity){
      this.nowCity=replaceCity
    }
  },
  beforeMount:function(){
    let nowIndex = this.homeRout.indexOf(this.$route.path)
    this.nowShow=nowIndex
  }
  
};
</script>
<style lang="scss" scoped>
@import "@/style/usage/core/reset.scss";

.homeWrap {
  height: 100%;
  overflow: scroll;
  padding-top:.74rem;
  
  .topArea {
    background:#fff;
    position: fixed;
    top:0;    
    z-index: 98;
    width:100%;
    transition:top .2s linear;    
    box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.3);
    -webkit-box-shadow: 0 -1px 5px rgba(0, 0, 0, 0.3);
    margin-bottom: 0.06rem;
    .topSearch {
      @include flexbox();
      @include flex-direction(row);
      background: #fff;

      justify-content: space-around;
      flex-wrap: nowrap;
      height: 0.45rem;
      font-size: 0.14rem;
      align-items: center;
      .location {
        padding: 0 0.15rem 0 0.1rem;
        margin-right: 0.1rem;
        height: 100%;
        line-height: 0.45rem;
        background: url("../../assets/homepage_icon_arrow_down@2x.png")
          no-repeat right center;
        background-size: 0.12rem auto;
      }
      .searchBtn {
        flex: 1;
        height: 0.28rem;
        padding: 0.04rem 0.28rem;
        border: 1px solid #999;
        border-radius: 0.14rem;
        input {
          height: 0.2rem;
          border: none;
          width: 100%;
          font: 0.12rem "PingFang SC";
        }
      }
      .filter {
        width: 0.59rem;
        padding-left: 0.11rem;
        height: 100%;
        line-height: 0.45rem;
        background: url("../../assets/homepage_icon_arrow@2x.png") no-repeat
          0.43rem center;
        background-size: 0.06rem auto;
      }
    }

    .topNav {
      height: 0.29rem;
      line-height: 0.29rem;
      background: #fff;
      ul {
        @include flexbox();
        @include flex-direction(row);
        flex-wrap: nowrap;
        li {
          flex: 1;
          text-align: center;
          height: 100%;
          a {
            display: inline-block;
            width: 100%;
            color: #111;
            position: relative;
          }
          .active {
            color: #ff5c60;
            font-weight: 700;
            &:after {
              content: "";
              display: block;
              width: 20%;
              height: 2px;
              background-color: #ff5c60;
              position: absolute;
              left: 50%;
              transform: translate(-50%);
              bottom: 0;
            }
          }
        }
      }
    }
  }
  .mounted{
    top:-.45rem;
  }
  .foot{
    .loadMore{
      height:.42rem;
      line-height:.42rem;
      text-align: center;
      border-top:0.005rem solid #eee;
      background: #fff;
      color:#555;
      font-size:.14rem;
      &:after{
        content:"";
        display: inline-block;
        width:.15rem;
        height:.08rem;
        position: relative;
        top:-1px;
        background: url("../../assets/icon_meal@3x.png") no-repeat ;
        background-size: .4rem auto;
        margin-left:.05rem;
      }
    }
    .footContent{
      padding:.25rem .25rem;
      
      .load{
        margin:.15rem auto .3rem;
        text-align: center;
        &:after{
          content:"";
          display: block;
          clear: both;
        }
        span{
          width:1.32rem;
          height:.4rem;
          display: inline-block;
          // float: left;
          margin:0 .05rem;
          background-size:100% auto;          
          background-repeat:  no-repeat;
        }
        .apple{
          background-image: url("../../assets/icon_apple@2x.png")
        }
        .andriod{
          background-image: url("../../assets/icon_android@2x.png")          
        }
      }
      .footNav{
        clear: both;
        height:.45rem;
        line-height: .45rem;
        text-align: center;
        a{
          display: inline-block;
          width:20%;
          color:#555;
          text-decoration: none;
        }
        span{
          margin:0 0.05rem;
          line-height: .45rem;
          color:#999;
        }

      }
      .about{
        height:.36rem;
        text-align: center;
        p{
          color:#555;
        }
        .copyRight{
          color:#ccc;
          font-size:.1rem;
        }
      }

    }
  }
}

</style>

