<template>
    <div class="foodArea" @touchstart="childTouch" @touchmove="childMove" @touchend="childEnd">
        <!-- 轮播图 -->
        <div class="homeBanner" @touchstart="stopTouchPro" @touchmove="stopMovePro" @touchend="stopEndPro" >
            <div class="container">
                <mt-swipe :auto="2500" class="myswipe" >
                    <mt-swipe-item v-for="(item, index) of bannerList" :key="index">
                        <img :src="item.picUrl" alt="">
                    </mt-swipe-item>                    
                </mt-swipe>
            </div>
        </div>
        <!-- 活动页 -->
        <div class="activeArea">
            <ul>                
                <li v-for="(item,index) of activeList" :key="index" >
                    <router-link :to= "activePages[index]"><img :src="item.picUrl" alt=""></router-link>
                </li>
            </ul>
        </div>
        <!-- 商店列表 -->
        <div class="storeList">
            <div class="storeItem" v-for="(item) of storeList" :key="item.logoUrl">
                <div class="storeHead">
                    <div class="storeLogo">
                        <img :src="item.logoUrl" alt="">
                    </div>
                    <h2>{{item.hostName}}</h2>
                </div>
                <div class="pic">
                    <img :src="item.picUrl" alt=""  @click="goDetail" :storeId="item.id" goto="Host">
                    <div class="averageExpense">人均: {{item.price}}元</div>
                </div>
                <div class="storeDes">
                    <div class="storeTitle">{{item.highLigth}}</div>
                    <div class="addDes">
                        <div class="address">{{item.businessesDistrict}}</div>
                        <em>|</em>
                        <div class="category">{{item.cuisineStyle}}</div>
                    </div>
                    <div :class="{tags:item.commentTags!=null}">
                        <div class="tagItem" v-for="(childItem) of item.commentTags" :key="childItem">{{childItem}}</div>
                                     
                    </div>
                    <a href="javascript:void(0)" class="visit" @click="goDetail" :storeId="item.id" goto="Host">进店逛逛</a>
                </div>

            </div>
        </div>
    </div>
</template>


<script>
// import $ from "axios";
// import {mapGetters} from "vuex"
export default {
  name: "HeadBar",
  data() {
    return {
      startX: 0,
      endX: 0,
      activePages:[
        "/subject1",
        "/subject2",
        "/subject3",
        "/subject4"
      ]
    };
  },
  methods: {
    stopTouchPro: function(e) {
      e.stopPropagation();
    },
    stopMovePro: function(e) {
      e.stopPropagation();
    },
    stopEndPro: function(e) {
      e.stopPropagation();
    },
    childTouch: function(e) {
      this.$emit("touch", e);
    },
    childMove: function(e) {
      this.$emit("move", e);
    },
    childEnd: function(e) {
      this.$emit("end", e);
    },


    //进店逛逛
    goDetail(e){
      let goto = e.target.getAttribute("goto")
      let storeId =e.target.getAttribute("storeId")
      console.log(goto,storeId)
      this.$router.push(goto+"?id="+storeId)
    }
  },
  computed: {
       bannerList(){
        // console.log("bannerList")
        
        if(this.$store.state.homeData.extraData==undefined){
          return []
        }
        // console.log(this.$store.state.homeData.extraData.rocket.reserveList[0].content)
        return this.$store.state.homeData.extraData.rocket.reserveList[0].content
      },
      activeList(){

        // console.log("activeList")
        if(this.$store.state.homeData.doc==undefined){
          return []
        }
        // console.log(this.$store.state.homeData.extraData.rocket.reserveList[0].content)
        return this.$store.state.homeData.doc[2].itemData[0].content
      },
      storeList(){

        // console.log("storeList")
        if(this.$store.state.homeData.doc==undefined){
          return []
        }
        // console.log(this.$store.state.homeData.extraData.rocket.reserveList[0].content)
        // console.log(this.$store.state.homeData.doc[5].itemData)
        return this.$store.state.homeData.doc[5].itemData
      }
  }
};
</script>
<style lang="scss" scoped>
@import "@/style/usage/core/reset.scss";

.homeWrap {
  height: 100%;
  overflow: scroll;
}

.topArea {
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
      background: url("../../assets/homepage_icon_arrow_down@2x.png") no-repeat
        right center;
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

.homeBanner {
  margin-bottom: 0.15rem;
  position: relative;
  .container {
    // width: 100%;
    height: 100%;
    .myswipe {
      //    height:1.93rem;
      padding-bottom: 51.47%;

    //   穿透scoped重置样式
      & /deep/ .mint-swipe-items-wrap {
        overflow: visible ;
      }
    }


    img {
      width: 100%;
    }
  }
}

.activeArea {
  ul {
    width: 100%;
    &:after {
      content: "";
      display: block;
      clear: both;
    }
    li {
      float: left;
      width: 50%;
      padding: 0 0.025rem;
      margin-bottom: 0.05rem;
      a {
        img {
          width: 100%;
        }
      }
    }
  }
  margin-bottom: 0.1rem;
}

.storeList {
  background: #fff;
  .storeItem {
    .storeHead {
      height: 0.7rem;
      position: relative;
      .storeLogo {
        border-radius: 50%;
        width: 0.4rem;
        height: 0.4rem;
        overflow: hidden;
        margin-top: 0.15rem;
        position: absolute;
        left: 0.15rem;
        img {
          width: 0.4rem;
        }
      }
      h2 {
        height: 0.7rem;
        padding: 0 0.15rem 0 0.7rem;
        line-height: 0.7rem;
        font-size: 0.18rem;
        font-weight: 700;
      }
    }
    .pic {
      position: relative;
      img {
        width: 100%;
      }
      .averageExpense {
        position: absolute;
        left: 0;
        bottom: 0.2rem;
        background: rgba(0, 0, 0, 0.92);
        padding: 0.06rem 0.12rem;
        font-size: 0.12rem;
        color: #fff;
      }
    }
    .storeDes {
      border-bottom: 0.005rem solid #ccc;

      padding: 0.07rem 0.15rem 0.28rem;
      position: relative;
      .storeTitle {
        font-size: 0.17rem;
        line-height: 0.31rem;
      }
      .addDes {
        .address {
          font-size: 0.14rem;
          line-height: 0.28rem;
        }
        div {
          display: inline;
        }
        em {
          margin: 0.04rem;
          color: #ccc;
        }
      }
      .tags {
        margin-top: 0.15rem;
        &:after {
          content: "";
          display: block;
          clear: both;
        }
        .tagItem {
          height: 0.25rem;
          line-height: 0.25rem;
          border: 1px solid#ddd;
          color: #555;
          padding: 0 0.09rem;
          border-radius: 0.12rem;
          float: left;
          margin-right: 0.07rem;
        }
      }
      .visit {
        padding-right: 0.1rem;
        margin-right: 0.15rem;
        background: url("../../assets/icon_allow@2x.png") right center no-repeat;
        background-size: 0.05rem auto;
        color: #d9a961;
        position: absolute;
        right: 0;
        bottom: 0.28rem;
      }
    }
  }
}
</style>

