<template>
 <div id="container"  @touchstart="childTouch" @touchmove="childMove" @touchend="childEnd">
   <div id="banner">
     <img :src="bannerimg" alt=""/>
   </div>
    <mt-loadmore v-show="isShowList" :top-method="loadTop" :bottom-method="loadBottom" :bottom-all-loaded="allLoaded" ref="loadmore">
     <ul id="lists" :style="wrapperHeight">
        <router-link tag="li" to="list" v-for=" v of nightlife_lists" :key="v.id">
         <div id="list_title">
           <div id="title_left">
              <img :src="v.logoUrl" alt="">
           </div>
           <div id="title_right">
             <h2>{{v.hostName}}</h2>
             <p><i class="yo-ico">&#xe662;</i>{{v.publicityWord || copywords}}</p>
           </div>
         </div>
         <figure>
           <img :src="v.picUrl+'m'" alt="">
           <span id="price">{{v.priceStr}}</span>
           <span id="logo"></span>
           <figcaption>
            {{v.highLigth}}
             <p><span>{{v.businessesDistrict}}<b>{{v.cuisineStyle}}</b></span> <a>进店逛逛<i class="yo-ico" v-html="'&#xe620;'"></i></a></p>
           </figcaption>
         </figure>
       </router-link>
     </ul>
    </mt-loadmore>
 </div>
</template>

<script>
import { Indicator, Loadmore, Toast } from "mint-ui";
import $ from "axios";
export default {
  name: "nightlife",
  data() {
    return {
      bottomNum: 0,
      topNum: 0,
      // bannerimg: "",
      // nightlife_lists: [],
      copywords: "小编推荐",
      allLoaded: false,
      isShowList: false,
      wrapperHeight: {
        "min-height": window.innerHeight + "px"
      }
    };
  },
  components: {
    [Loadmore.name]: Loadmore
  },
  methods: {
    loadTop() {
      $.get("/list/nightlift_list1").then(result => {
        if (this.topNum < 10) {
          this.nightlife_lists.unshift(
            result.data.data.doc[0].itemData[this.topNum]
          );
          this.$refs.loadmore.onTopLoaded();
          this.topNum++;
        } else {
          Toast({
            message: "没有更多消息",
            duration: 2000
          });
          this.$refs.loadmore.onTopLoaded();
        }
      });
    },
    loadBottom() {
      $.get("/list/nightlift_list2").then(result => {
        if (this.bottomNum < 10) {
          this.nightlife_lists.push(
            result.data.data.doc[0].itemData[this.bottomNum]
          );
          this.$refs.loadmore.onBottomLoaded();
          this.bottomNum++;
        } else {
          this.allLoaded = true;
          this.$refs.loadmore.onBottomLoaded();
        }
      });
    },

    childTouch: function(e) {
      console.log("touch");
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
    bannerimg(){
       return this.$store.state.nightlifeData.extraData.rocket.reserveList[0].content[0].picUrl;
    },
    nightlife_lists(){
      Indicator.close();
      this.isShowList = true;
      return this.$store.state.nightlifeData.doc[3].itemData;
    }
  },
  // mounted() {
  //   Indicator.open();
  //   $.get("/list/nightlift_list")
  //     .then(result => {
  //       this.bannerimg = 
  //         result.data.data.extraData.rocket.reserveList[0].content[0].picUrl;
  //       this.nightlife_lists = result.data.data.doc[3].itemData;
  //       Indicator.close();
  //       this.isShowList = true;
  //     })
  //     .catch(err => {
  //       alert("Error!");
  //     });
  // }
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
    height: 2.08rem;
    background: rgba(238, 231, 231, 0.562);
    padding-bottom: 0.5rem;
    img {
      height: 1.93rem;
      width: 100%;
    }
  }
  #lists {
    li {
      height: 3.99rem;
      border-bottom: 1px solid #eee;
      #list_title {
        @include flexbox();
        @include justify-content(space-between);
        padding: 0.1rem 0.15rem;
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
          h2 {
            font-size: 0.18rem;
            height: 0.3rem;
            overflow: hidden;
            @include ellipsis();
          }
          p {
            font-size: 12px;
            margin-top: 0.03rem;
            i {
              padding-right: 0.05rem;
              color: #666;
            }
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
          font-size: 12px;
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
}
</style>