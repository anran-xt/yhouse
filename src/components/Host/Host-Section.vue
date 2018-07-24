<template>
  <div v-if = "Info.data"> 
    <section class="highlight sku_compontent">
      <h3>
        <span class="icon_highlight icon_sku">推荐理由</span>
      </h3>
      <div class="highlight_wrap">
        <div class="highs">
          <p>{{Info.data.highs[0]}}</p>
          <p>{{Info.data.highs[1]}}</p>
          <p>{{Info.data.highs[2]}}</p>
        </div>
        <a class="sku_more">查看详情</a>
      </div>
    </section>
    <section class="sku_compontent special_cuisine" v-if = "Info.data.recommendFoodListH5.length != 0">
      <h3>
        <span class="icon_sku icon_special_cuisine">特色菜</span>
      </h3>
      <ul class="clearfix"> 
        <li v-for = "(value,index) in special" :key="index">
          <a>
            <div class="img" v-bind:style="{backgroundImage: 'url(' + value.contentPic+ ')', backgroundRepeat: 'no-repeat', backgroundPosition: 'center', backgroundSize: 'cover'}"></div>
            <p>{{value.recommendFood}}</p>
          </a>
        </li>
      </ul>
      <div class="foodName">
        <span v-for = "(value,index) in foodName" :key="index">{{value.recommendFood}}</span>
      </div>
      <a class="sku_more">查看详情</a>
    </section>
    <section class="sku_compontent host_share_tag">
      <h3>
        <span class="icon_sku icon_host_article">探店测评</span>
      </h3>
      <div class="article_wrap">
        <article>
          <p class="article_sub_title">已有{{Info.data.hostShareTag.contentNum}}人参加</p>
          <p class="article_desc">
            <a href="#">{{Info.data.hostShareTag.description}}</a>
          </p>
          <div class="content" v-for = "(value,index) in Info.data.hostShareTag.contentList" :key="index">
            <div class="head clearfix">
              <a target="_self" class="avatar_content" href="#">
                <img class="avatar" :src="value.userShowPicSmallUrl">
              </a>
              <div>
                <h4 class="clearfix" v-if = "value.isPublic == 1 ">
                  <span>{{value.userName}}</span>
                  <i class="public"></i>
                </h4>
                <h4 class="clearfix" v-else-if = "value.isTalent == 1 ">
                  <span>{{value.userName}}</span>
                  <i class="talent"></i>
                </h4>
                <h4 class="clearfix" v-else-if = "value.isVip == 1 ">
                  <span>{{value.userName}}</span>
                  <i class="vip"></i>
                </h4>
                <h4 class="clearfix" v-else>
                  <span>{{value.userName}}</span>
                </h4>
              </div>
            </div>
            <p class="article_desc short" v-if="value.description != '' ">{{value.description}}
            </p>
            <ul class="article_pics clearfix" v-if = "index == Info.data.hostShareTag.contentList.length-1" style = "padding-bottom:10px">
              <li v-for = "(value,i) in smallPic[index]" :key="i">
                <a href="#">
                  <img :src="value">
                </a>
              </li>
            </ul>
            <ul class="article_pics clearfix" v-else>
              <li v-for = "(value,i) in smallPic[index]" :key="i">
                <a href="#">
                  <img :src="value">
                </a>
              </li>
            </ul>
          </div>
        </article>

        <a class="sku_more" href="#" v-if = "Info.data.hostShareTag.contentList.length != 0">查看更多</a>
        <a class="sku_more" href="#" v-else>发布第一条内容</a>
      </div>
    </section>
    <section class="sku_compontent clearfix hotarticle" v-if= "Info.data.hotContent != null">
      <h3>
        <span class="icon_sku icon_story">热文收录</span>
      </h3>
      <div class="story clearfix">
        <div class="left">{{Info.data.hotContent.firstTitle}}</div>
        <a class="right">{{Info.data.hotContent.numStr}}</a>
      </div>
    </section>
    <section class="">
      <div class="sku_compontent facilities">
        <h3>
          <span class="icon_sku icon_facilities">附加信息</span>
        </h3>
        <div class="facilities_wrap">
          <ul class="facilities_con clearfix facilities_con_1">
            <li v-for = "(value,index) in position" :key="index" :style="{width : liWidth + '%'}">
              <i :style="{backgroundPosition: value.x +'px' + ' ' + value.y + 'px'}"></i>
              <p>{{value.name}}</p>
            </li>
          </ul>
        </div>
      </div>
      <div class="sku_compontent tips">
        <div class="tips_wrap">
          <div class="tips_con mb15">
            <p>{{Info.data.durationList[0]}}</p>
          </div>
          <div class="cs-im-buttons-group clearfix">
            <a class="im_service" href="#">
              在线客服
            </a>
            <a class="tips_service" href="#">
              电话客服
            </a>
          </div>
        </div>
      </div>
    </section>

    <section class="sku_compontent recommend" v-if = "Info.recommendAutomatic.length != 0">
      <h3 class="filter_recommend">
        <span class="icon_sku icon_guess_like">猜你喜欢</span>
      </h3>
      <ul class="filter_result">
        <li v-for = "(value,index) in Info.recommendAutomatic" :key="index">
          <a href="#">
            <div class="left_pic">
              <img :src="value.data.picUrl">
            </div>
            <div class="right_desc">
              <h4 class="title">{{value.data.hostName}}</h4>
              <p class="sub">{{value.data.businessesDistrict}}
                <span> · </span>{{value.data.cuisineStyle}}</p>
              <p class="price host_price" v-if=" value.data.price != null">
                <em>人均：</em>{{value.data.price}}元</p>
              <div class="tag host_tag">
              </div>
            </div>
          </a>
          <img style="display:none" width="0" height="0">
        </li>
      </ul>
    </section>
 
  </div>
</template>

<script>
export default {
  props: ["Info"],

  computed: {
    special() {
      let result = [];
      let obj = this.Info.data.recommendFoodListH5;
      for (var i in obj) {
        if (i <= 2) {
          result.push(obj[i]);
        }
      }
      return result;
    },
    foodName() {
      let result = [];
      let obj = this.Info.data.recommendFoodListH5;
      for (var i in obj) {
        if (i > 2) {
          result.push(obj[i]);
        }
      }
      return result;
    },
    smallPic() {
      let result = [];
      let obj = this.Info.data.hostShareTag.contentList;
      for (var i in obj) {
        var res = [];
        for (var j in obj[i].smallPicUrls) {
          if (j <= 2) {
            res.push(obj[i].smallPicUrls[j]);
          }
        }
        result.push(res);
      }
      return result;
    },
    position() {
      let result = [];
      let obj = this.Info.data.productLabels;
      for (var i in obj) {
        let pos = {
          x: -25 * (obj[i].index % 6),
          y: -25 * parseInt(obj[i].index / 6),
          name: obj[i].name
        };
        result.push(pos);
      }
      return result;
    },
    liWidth(){
      var total = this.Info.data.productLabels.length;
      return parseInt((1 / total) * 100)
    }
  }
};
</script>

<style lang="scss" scoped>
.clearfix {
  &:after {
    content: "";
    display: table;
    clear: both;
    height: 0;
    visibility: hidden;
  }
}
.sku_compontent {
  width: 100%;
  color: #111;
  background-color: #fff;
  text-align: center;
  font-size: 0.14rem;
  padding-bottom: 0.17rem;
  h3 {
    padding-top: 0.17rem;
    font-size: 0.18rem;
    line-height: 0.44rem;
    font-weight: 700;
    position: relative;
    &:before {
      background-color: #e5e5e5;
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      left: 50%;
      top: 0;
      height: 1px;
      transform: translateX(-50%);
      box-sizing: border-box;
    }
    .icon_sku {
      background-image: url(http://r.yhres.com/sku/special38@3x.png);
      background-size: 0.2rem auto;
      background-position: left center;
      padding-left: 0.28rem;
      background-repeat: no-repeat;
    }
  }
  .sku_more {
    font-size: 0.14rem;
    line-height: 0.4rem;
    height: 0.4rem;
    color: #d9a961;
    &:after {
      content: "";
      display: inline-block;
      vertical-align: middle;
      width: 0.1rem;
      height: 0.4rem;
      background: url(http://r.yhres.com/sku/icon_allow@2x.png) right center
        no-repeat;
      background-size: 0.05rem auto;
    }
  }
}

.highlight {
  .highlight_wrap {
    font-size: 0.14rem;
    line-height: 0.28rem;
  }
}
.special_cuisine {
  h3 {
    .icon_special_cuisine {
      background-image: url(http://r.yhres.com/sku/icon_special_cuisine@3x.png);
      background-position: left center;
      background-size: 0.2rem 0.2rem;
    }
  }
  ul {
    margin-left: -0.05rem;
    margin-right: -0.05rem;
    li {
      float: left;
      width: 33.33333333%;
      padding: 0.05rem 0.05rem 0;
      a {
        display: block;
        color: #111;
        & > div {
          display: block;
          border-radius: 0.02rem;
          width: 1.06rem;
          height: 1.06rem;
        }
        p {
          color: #555;
          font-size: 0.12rem;
          line-height: 0.3rem;
          margin-bottom: 0.165rem;
        }
      }
    }
  }
  .foodName {
    display: -webkit-box;
    overflow: hidden;
    color: #111;
    font-size: 0.14rem;
    line-height: 0.23rem;
    margin-bottom: 0.1rem;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    word-break: break-word;
    span {
      padding: 0 0.075rem;
    }
  }
}
.host_share_tag {
  h3 {
    .icon_host_article {
      background-image: url(http://r.yhres.com/sku/host_topic43@3x.png);
      background-size: 0.2rem auto;
    }
  }
  .article_wrap {
    .article_sub_title {
      color: #555;
      font-size: 0.12rem;
      line-height: 0.14rem;
      margin-bottom: 0.1rem;
    }
    .article_desc {
      color: #111;
      font-size: 15px;
      line-height: 24px;
      margin-bottom: 0.12rem;
      text-align: left;
      a {
        vertical-align: middle;
        text-overflow: ellipsis;
        -webkit-box-orient: vertical;
        word-break: break-word;
        overflow: hidden;
        -webkit-line-clamp: 5;
        display: inline-block;
        white-space: pre-wrap;
        color: #111;
      }
    }
    .content {
      position: relative;
      .head {
        position: relative;
        padding-left: 0.46rem;
        margin-bottom: 0.15rem;
        height: 0.4rem;
        .avatar_content {
          display: block;
          width: 0.4rem;
          height: 0.4rem;
          position: absolute;
          left: 0;
          top: 50%;
          margin-top: -0.2rem;
          .avatar {
            display: block;
            width: 0.4rem;
            height: 0.4rem;
            border-radius: 50%;
          }
        }
        & > div {
          width: 100%;
          text-align: left;
          left: 50%;
          top: 50%;
          transform: translate(-50%, -50%);
          position: relative;
          h4 {
            font-weight: 700;
            font-size: 0.14rem;
            color: #111;
            line-height: 0.2rem;
            span {
              float: left;
              display: block;
              max-width: 2.32rem;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
            }
            i {
              display: inline-block;
              width: 0.19rem;
              height: 0.2rem;
              background-image: url(http://r.yhres.com/sns/icon_user_public@2x.png);
              background-size: 0.14rem auto;
              background-repeat: no-repeat;
              background-position: right center;
              &.talent {
                background-image: url(http://r.yhres.com/sns/icon_user_talent@2x.png);
              }
              &.vip {
                background-image: url(http://r.yhres.com/sns/icon_user_vip@2x.png);
              }
            }
          }
        }
      }
      .short {
        display: -webkit-box;
        overflow: hidden;
        white-space: pre-wrap;
        -webkit-line-clamp: 2;
        -webkit-box-orient: vertical;
        word-break: break-word;
        text-overflow: ellipsis;
      }
      .article_pics {
        padding: 0 0.015rem 0.4rem;
        li {
          float: left;
          width: 33.33333333%;
          padding: 0 0.045rem;
          a {
            display: block;
            position: relative;
            width: 100%;
            height: 0;
            padding-bottom: 100%;
            overflow: hidden;
            background: url(http://r.yhres.com/sku/bg_logo_w@2x.png) center
              no-repeat;
            background-size: 0.8rem auto;
            img {
              display: block;
              position: relative;
              width: 100%;
            }
          }
        }
      }
      &.last {
        .article_pics {
          padding-bottom: 0.1rem;
        }
      }
    }
  }
}
.hotarticle {
  h3 {
    .icon_story {
      background: url(http://r.yhres.com/sku/icon_story40@3x.png) left center
        no-repeat;
      background-size: 0.25rem auto;
    }
  }
  .story {
    height: 0.3rem;
    font-size: 0.14rem;
    line-height: 0.3rem;
    .left {
      width: 75%;
      text-align: left;
      white-space: nowrap;
      text-overflow: ellipsis;
      overflow: hidden;
      float: left;
      color: #111;
    }
    .right {
      color: #d9a961;
      float: right;
      padding-right: 0.1rem;
      font-weight: 400;
      background: url(http://r.yhres.com/sku/icon_allow@2x.png) right center
        no-repeat;
      background-size: 0.05rem auto;
    }
  }
}
.facilities {
  padding: 0 7.5px;
  h3 {
    .icon_facilities {
      background-image: url(http://r.yhres.com/sku/facilities38@3x.png);
      background-size: 0.2rem auto;
    }
  }
  .facilities_wrap {
    .facilities_con {
      padding-top: 0.05rem;
      li {
        width: 100%;
        display: inline-block;
        vertical-align: middle;
        margin-bottom: 0.2rem;
        margin-right: -3px;
        i {
          display: block;
          margin: 0 auto 3px;
          width: 25px;
          height: 25px;
          background-repeat: no-repeat;
          background-image: url(https://r.yhres.com/sku/newsprite@2x.png?v=3.9);
          background-size: 150px 200.5px;
        }
        p {
          color: #111;
          font-size: 0.12rem;
        }
      }
    }
  }
}
.tips {
  .tips_wrap {
    .mb15 {
      margin-bottom: 0.22rem !important;
      p {
        line-height: 0.28rem;
      }
    }
    .cs-im-buttons-group {
      padding-bottom: 0.1rem;
      .im_service {
        background-image: url(http://r.yhres.com/sku/icon_sku_chat@2x.png),
          url(http://r.yhres.com/sku/icon_allow@2x.png);
        background-size: 0.16rem auto, 0.05rem auto;
      }
      .tips_service {
        background-image: url(http://r.yhres.com/sku/icon_sku_service@2x.png),
          url(http://r.yhres.com/sku/icon_allow@2x.png);
        background-size: 0.14rem auto, 0.05rem auto;
      }
      a {
        color: #d9a961;
        padding: 0.04rem 0.1rem 0.04rem 0.2rem;
        margin: 0 0.1rem;
        background-position: left center, right center;
        background-repeat: no-repeat, no-repeat;
      }
    }
  }
}
.recommend {
  padding-bottom: 0;
  .filter_recommend {
    background-color: #fff;
    color: #111;
    text-align: center;
    .icon_guess_like {
      font-size: 18px;
      padding-left: 30px;
      background-image: url(http://r.yhres.com/sku/recommend38@3x.png);
      background-size: 0.2rem auto;
    }
  }
  .filter_result {
    overflow: hidden;
    background-color: #fff;
    padding: 0;
    li {
      position: relative;
      width: 100%;
      padding-top: 0.15rem;
      margin-bottom: 0.15rem;
      &:before {
        content: "";
        display: block;
        position: absolute;
        width: 100%;
        left: 50%;
        bottom: 0;
        height: 1px;
        transform: scaleY(0.5) translateX(-50%);
        background-color: #ddd;
        top: 0;
      }
      &:nth-child(1):before {
        display: none;
        width: 0;
        height: 0;
      }
      a {
        position: relative;
        display: block;
        width: 100%;
        padding-left: 1.85rem;
        height: 1.3rem;
        color: #111;
        .left_pic {
          background: url(http://r.yhres.com/sku/bg_logo_w@2x.png) center
            no-repeat;
          background-size: 0.8rem auto;
          position: absolute;
          left: 0;
          top: 0;
          width: 1.75rem;
          height: 1.3rem;
          overflow: hidden;
          img {
            width: 100%;
            border-radius: 0.02rem;
            max-width: 100%;
          }
        }
        .right_desc {
          position: relative;
          width: 100%;
          height: 1.3rem;
          text-align: left;
          h4 {
            font-size: 1pc;
            line-height: 1.3;
            width: 90%;
            font-weight: 700;
            color: #111;
            text-overflow: ellipsis;
            display: -webkit-box;
            -webkit-line-clamp: 1;
            -webkit-box-orient: vertical;
            word-break: break-word;
            overflow: hidden;
            margin-bottom: 0.025rem;
          }
          .sub {
            position: relative;
            line-height: 0.22rem;
            color: #555;
            font-size: 0.12rem;
            span {
              color: #ccc;
            }
          }
          .price {
            line-height: 0.22rem;
            font-size: 0.14rem;
            color: #111;
            em {
              font-style: normal;
              font-size: 0.12rem;
            }
          }
          .tag {
            position: absolute;
            left: 0;
            bottom: 0;
            font-size: 0;
            overflow: hidden;
            height: 0.22rem;
          }
        }
      }
    }
  }
}
</style>