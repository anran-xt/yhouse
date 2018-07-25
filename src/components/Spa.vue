<template>
 <div id="container"  @touchstart="childTouch" @touchmove="childMove" @touchend="childEnd">
   <div class="swipeWrap" @touchstart="stopTouchPro" @touchmove="stopMovePro" @touchend="stopEndPro">
    <mt-swipe :auto="3000" id="banner" >
      <mt-swipe-item v-for="v of bannerlists" :key="v.linkId">
        <img :src="v.picUrl" alt=""/>
      </mt-swipe-item>
    </mt-swipe>     

   </div>
     <ul id="lists">
        <router-link tag="li" to="" v-for="v of spa_lists" :key="v.id">
         <div id="list_title">
           <div id="title_left">
             <img :src="v.logoUrl" alt="">
           </div>
           <div id="title_right">
             <h2>{{v.hostName}}</h2>
           </div>
         </div>
         <figure>
           <img :src="v.picUrl+'m'" @click="goDetail" :storeId="v.id" goto="Host" alt=""/>
           <span id="price">{{v.priceStr}}</span>
           <figcaption>
             {{v.highLigth}}
             <p><span>{{v.businessesDistrict}}<b>{{v.cuisineStyle}}</b></span> <a  @click="goDetail" :storeId="v.id" goto="Host">进店逛逛<i class="yo-ico" v-html="'&#xe620;'"></i></a></p>
           </figcaption>
         </figure>
       </router-link>
     </ul>
     <div class="loadmore" v-show="isLodingshow" @click="clickLodingDo">
      查看更多<i class="yo-ico moreicon">&#xe698;</i> 
    </div>
    <div class="loadmore" v-show="!isLodingshow">
      正在加载... 
    </div>
 </div>
</template>

<script>
import $ from "axios";
import { Swipe, SwipeItem, Indicator, Toast } from "mint-ui";
export default {
  name: "spa",
  data() {
    return {
      listNum: 1,
      isLodingshow: true
    };
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  methods: {
    clickLodingDo() {
      this.isLodingshow = false;
      if (this.listNum < 4) {
        $.get("/list/spa_list" + this.listNum).then(result => {
          // console.log(result);
          this.spa_lists.push(...result.data.data.doc[0].itemData);
          this.isLodingshow = true;
          this.listNum++;
        });
      } else {
        Toast({
          message: "没有更多消息",
          duration: 2000
        });
        this.isLodingshow = true;
      }
    },


    //进店逛逛
    goDetail(e){
      let goto = e.target.getAttribute("goto")
      let storeId =e.target.getAttribute("storeId")
      console.log(goto,storeId)
      this.$router.push(goto+"?id="+storeId)
    },

    stopTouchPro: function(e) {
      console.log("stopTouch")
      e.stopPropagation();
    },
    stopMovePro: function(e) {
      e.stopPropagation();
    },
    stopEndPro: function(e) {
      e.stopPropagation();
    },

    childTouch: function(e) {
      console.log("touch")
      this.$emit("touch", e);
    },
    childMove: function(e) {
      this.$emit("move", e);
    },
    childEnd: function(e) {
      this.$emit("end", e);
    }
  },
  computed: {
    bannerlists(){
      console.log(this.$store.state.spaData.extraData)
      if(!this.$store.state.spaData.extraData){
        return {}
      }
      return this.$store.state.spaData.extraData.rocket.reserveList[0].content;
    },
    spa_lists(){
      console.log(this.$store.state.spaData.extraData)
      
      if(!this.$store.state.spaData.extraData){
        return {}
      }
      return this.$store.state.spaData.doc[3].itemData;
    }
  },
  mounted() {
    // Indicator.open();
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/usage/core/reset.scss";
@font-face {
  font-family: "yofont";
  src: url("../assets/iconfonts/iconfont.woff") format("woff"),
    url("../assets/iconfonts/iconfont.ttf") format("truetype");
}
#container {
  margin-top: 0.05rem;
  #banner {
    padding: 0;
    height: 2.07rem;
    background: rgba(238, 231, 231, 0.5);
    img {
      height: 1.93rem;
      width: 100%;
      width: 100%;
    }
    /deep/ .mint-swipe-indicators {
      bottom: 0.2rem !important;
    }
  }
  #lists {
    li {
      height: 3.99rem;
      border-bottom: 1px solid #eee;
      #list_title {
        @include flexbox();
        @include justify-content(space-between);
        @include align-items(center);
        padding: 0.03rem 0.15rem;
        #title_left {
          @include flexbox();
          height: 0.4rem;
          width: 0.4rem;
          overflow: hidden;
          margin-top: 0.05rem;
          img {
            height: 0.4rem;
            width: 0.4rem;
            border-radius: 50%;
          }
        }
        #title_right {
          width: 2.9rem;
          height: 0.64rem;
          align-items: center;
          h2 {
            font-size: 0.18rem;
            line-height: 0.7rem;
            overflow: hidden;
            @include ellipsis();
          }
        }
      }
      figure {
        position: relative;
        img {
          width: 100%;
          height: 2.34rem;
        }
        #price {
          height: 0.28rem;
          width: 0.87rem;
          position: absolute;
          left: 0;
          bottom: 0.8rem;
          font-size: 0.12rem;
          color: #fff;
          z-index: 10;
          padding: 0.06rem 0.12rem;
          background-color: rgba(0, 0, 0, 0.92);
        }
        figcaption {
          margin-top: 0.05rem;
          color: #000;
          padding: 0 0.15rem;
          font-size: 0.17rem;
          overflow: hidden;
          line-height: 0.31rem;
          text-overflow: ellipsis;
          p {
            @include flexbox();
            justify-content: space-between;
            font-size: 0.14rem;
            line-height: 0.28rem;
            b {
              margin-left: 0.03rem;
              font-weight: 100;
              padding-left: 0.05rem;
              border-left: 1px solid #eee;
            }
            a {
              color: #d9a961;
              align-self: flex-start;
            }
          }
        }
      }
    }
  }
  .loadmore {
    color: #777;
    border-top: 2px solid #eee;
    text-align: center;
    line-height: 0.42rem;
    height: 0.42rem;
    .moreicon {
      font-size: 16px;
      padding-left: 0.03rem;
      font-weight: 600;
    }
  }
}
</style>