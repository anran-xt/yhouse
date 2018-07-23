<template>

    <div @touchstart="childTouch" @touchmove="childMove" @touchend="childEnd" class="playthingWrap">
        <div class="topLogo">
            <a href="javascript:void(0)">
                <img :src="playPic" alt="">
            </a>
        </div>
        <div class="special">
            <div class="specialItem" v-for="(item,index) of specialList" :key="item.picUrl" >
              <router-link :to="playList[index]"><img :src="item.picUrl" alt=""></router-link>
                
            </div>                  
        </div>
        <div class="activeList">
            <div class="activeItem" v-for="item of activeList" :key="item.picUrl">
                <a href="javascript:void(0)" class="activeLogo">
                    <img :src="item.picUrl" alt="">
                </a>
                <div class="activeDes">
                    <h2>{{item.title}}</h2>
                    <div class="info">
                        <p class="location">
                            <span>{{item.district}}</span>
                            <em>|</em>
                            <span>{{item.hostName}}</span>
                        </p>
                        <div class="rightPrice">
                            <span class="amount">{{item.neededCredits}}</span>
                        </div>
                    </div>
                    <div class="tag">
                        <div class="tagItem" v-for="childTag of item.categorys" :key="childTag">
                            {{childTag}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
// import $ from "axios"
export default {
  data: function() {
    return {
      playList: ["/subject5", "/subject6"]
      // playPic:"",
      // // http://10.9.164.112:8080/images/1527681776884735@r_1080w_557h.png,
      // specialList:[
      //     // "http://10.9.164.112:8080/images/1523596177688821@r_360w_310h.jpg",
      //     // "http://10.9.164.112:8080/images/1523947216291366@r_360w_310h.jpg"
      // ],
      // activeList:[
      //     // {
      //     //     pic:"http://10.9.164.112:8080/images/1528624880759_608192.png",
      //     //     title:"沙漠暑期营 | 探秘人与自然",
      //     //     address:"百子湾",
      //     //     location:" 时光胶囊TIMEPILLS",
      //     //     amount:600,
      //     //     people:10,
      //     //     tags:[
      //     //         "户外运动"
      //     //     ]
      //     // },
      //     // {
      //     //     pic:"http://10.9.164.112:8080/images/1528789819014_984919.png",
      //     //     title:"卓美儿童英文戏剧节亲子联票，现仅售19元",
      //     //     address:"双井",
      //     //     location:"卓美品致",
      //     //     amount:19,
      //     //     people:2,
      //     //     tags:[
      //     //         "玩乐"
      //     //     ]
      //     // }
      // ]
    };
  },
  methods: {
    childTouch: function(e) {
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
    playPic() {
      console.log("play");
      if (this.$store.state.playData.data == undefined) {
        return [];
      }
      return this.$store.state.playData.data.data.extraData.rocket
        .reserveList[0].content[0].picUrl;
    },
    specialList() {
      console.log("special");
      if (this.$store.state.playData.data == undefined) {
        return [];
      }
      return this.$store.state.playData.data.data.doc[2].itemData[0].content;
    },
    activeList() {
      console.log("activeList");
      if (this.$store.state.playData.data == undefined) {
        return [];
      }
      return this.$store.state.playData.data.data.doc[3].itemData;
    }

    //   bannerList(){

    //     console.log("bannerList")
    //     console.log(this.$store.state.homeData)

    //     if(this.$store.state.homeData.extraData==undefined){
    //       return []
    //     }
    //     // console.log(this.$store.state.homeData.extraData.rocket.reserveList[0].content)
    //     return this.$store.state.homeData.extraData.rocket.reserveList[0].content
    //   },
  }
};
</script>
<style lang="scss" scoped>
@import "@/style/usage/core/reset.scss";
.playthingWrap {
  .topLogo {
    margin-bottom: 0.15rem;
    img {
      width: 100%;
    }
  }
  .special {
    margin-bottom: 0.15rem;
    &:after {
      content: "";
      display: block;
      clear: both;
    }
    .specialItem {
      width: 50%;
      padding: 0.025rem;
      float: left;
      img {
        width: 100%;
      }
    }
  }
  .activeList {
    background: #fff;
    border-bottom: 0.005rem solid #eee;
    .activeItem {
      .activeLogo {
        img {
          width: 100%;
        }
      }
      .activeDes {
        padding: 0.08rem 0.15rem;
        h2 {
          font-size: 0.18rem;
          color: #111;
          line-height: 0.22rem;
          overflow: hidden;
          text-overflow: ellipsis;
          white-space: nowrap;
          font-weight: 700;
          margin-bottom: 0.02rem;
        }
        .info {
          height: 0.24rem;
          margin-bottom: 0.05rem;
          color: #111;
          p {
            float: left;
            line-height: 0.24rm;
            font-size: 0.14rem;
            max-width: 50%;
            overflow: hidden;
            text-overflow: ellipsis;
            white-space: nowrap;
            em {
              font-size: 0.12rem;
              color: #ccc;
              margin: 0 0.05rem;
            }
          }
          .rightPrice {
            float: right;
            line-height: 0.24rm;
            color: #d9a961;
            .unitPri {
              font-size: 0.12rem;
            }
          }
        }
        .tag {
          &:after {
            content: "";
            display: block;
            clear: both;
            margin-bottom: 0.14rem;
            width: 100%;
            height: 0.15rem;
            border-bottom: 1px solid #ddd;
          }
          .tagItem {
            font-size: 0.12rem;
            padding: 0 0.08rem;
            color: #555;
            margin: 0 0.06rem 0.02rem 0;
            border: 1px solid #e1e1e1;
            border-radius: 0.09rem;
            line-height: 0.2rem;
            float: left;
          }
        }
      }
    }
  }
}
</style>

