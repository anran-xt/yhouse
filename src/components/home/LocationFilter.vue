<template>
    <div class="locationWrap">
        <div class="head">
            <i class="exit" @click="backToHome"></i>
            <div class="title">选择城市</div>
        </div>
        <div class="nowCity">
            <p>当前城市：<span>{{nowCity}}</span></p>
        </div>
        <ul class="cityList">
            <li class="outLi" v-for="(item) of cityList" :key="item.title+randNum">
                <span class="kind">{{item.title}}</span>
                <ul class="innerUl">
                    <li v-for="(childItem) of item.cityArr" :key="childItem">
                        <a href="javascript:void(0)" @click="changeCity" :class="{nowChosedCity:childItem==nowCity}">{{childItem}}</a>
                    </li>
                   
                </ul>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
  name: "LocationFilter",
  props:{
    nowCity:{
      type:String,
      required:true
    }
  },
  data: function() {
    return {
      cityList: [
        {
          title: "热门",
          cityArr: ["北京", "上海", "广州", "深圳"]
        },
        {
          title: "A~G",
          cityArr: [
            "北京",
            "长春",
            "长沙",
            "常州",
            "成都",
            "重庆",
            "大连",
            "东莞",
            "佛山",
            "福州"
          ]
        },
        {
          title: "H~N",
          cityArr: [
            "哈尔冰",
            "海口",
            "杭州",
            "合肥",
            "嘉兴",
            "济南",
            "昆明",
            "丽江",
            "南昌",
            "南京",
            "南通"
          ]
        },
        {
          title: "O~T",
          cityArr: [
            "青岛",
            "三亚",
            "上海",
            "绍兴",
            "沈阳",
            "深圳",
            "石家庄",
            "苏州"
          ]
        }
      ]
    };
  },
  computed: {
    randNum: function() {
      return Math.random();
    }
  },

  methods: {
      backToHome(){
          // console.log("in")
          this.$emit("backToHome")
      },
      changeCity(e){
        console.log(e.target.text)
        console.log("change")
        this.$emit("changeNowCity",e.target.text)
      }
  }
};
</script>
<style lang="scss" scoped>
@import "@/style/usage/core/reset.scss";
.locationWrap {
  background: #eee;
  width: 100%;
  height: 100%;
  position: fixed;
  top: 0;
  z-index: 99;
  overflow:scroll;
  .head {
    height: 0.44rem;
    line-height: 0.44rem;
    width: 100%;
    background: #fff;
    border-bottom: 1px solid #e1e1e1;
    position: relative;
    i {
      display: inline-block;
      width: 0.44rem;
      height: 0.44rem;
      background: url("../../assets//icon_home@3x.png") 0.1rem -0.08rem no-repeat;
      position: absolute;
      left: 0.15rem;
      top: 0;
      background-size: 0.23rem auto;
    }
    .title {
      text-align: center;
      font-size: 1pc;
    }
  }
  .nowCity {
    height: 0.45rem;
    padding: 0.15rem 0.12rem;
    background: #fff;
    margin-top: 0.15rem;
    p {
      //   font-size:1pc;
      color: #999;
      span {
        color: #111;
      }
    }
  }
  .cityList {
    padding: 0 0.12rem;
    .outLi {
      .kind {
        margin: 0.15rem 0 0.06rem;
        color: #999;
        display: block;
      }
      margin-bottom: 0.11rem;
      &:after {
        content: "";
        display: block;
        clear: both;
      }
      .innerUl {
        li {
          width: 33.333333%;
          float: left;
          margin-bottom: 0.16rem;
          a {
            line-height: 0.35rem;
            color: #111;
            display: block;
            text-align: center;
            border: 1px solid #ccc;
            background: #fff;
            margin-right: 0.08rem;
            box-sizing: border-box;
          }
          .nowChosedCity {
            border-color: #111;
          }
        }
      }
    }
  }
}
</style>
