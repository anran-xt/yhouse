<template>
  <div class="wrap" v-if = "res.data">
    <Head :Info = "Info"></Head>
    <div class="mid">
      <div class="main">
        <div class="sku_top_img">
          <img :src="res.data.mPicUrl">
        </div>
        <article class="container Info">
          <h1 class="detail_title">{{res.data.title}}</h1>
          <section class="">
            <div class="detail_like">
              <p class="detail_price">
                <span>{{res.data.neededCredits}}<em>元/{{res.data.maxNum}}人</em>
                </span>
              </p>
              <p class="interest">
                <span class="icon_sku icon_like">{{res.data.countOfInterested}}人想去</span>
              </p>
            </div>
          </section>
        </article>
        <section> 
          <article class="container">
            <section class="time">
              <div class="bottom_line"></div>
              <div class="detail_contact">
                <div class="detail_info icon_sku icon_time">
                  <p class="icon_time">{{res.data.duration}}</p>
                  <p class="icon_sku icon_contact">
                    <a href="#"></a>
                  </p>
                </div>
                <div class="detail_info icon_sku icon_location">
                  <p>
                    <span>
                      <a href="#">{{res.data.address}}</a>
                    </span>
                  </p>
                  <p class="icon_sku icon_navigate">
                    <a href="#"></a>
                  </p>
                </div>
              </div>
            </section>

            <p class="event_hostName">本服务由{{res.data.hostName}}提供</p>

            <host-ad />

            <section class="sku_compontent highlight">
              <h3>
                <span class="icon_sku icon_highlight">推荐理由</span>
              </h3>
              <div class="highlight_wrap">
                <div class="highs">
                  <p>{{res.data.highs[0]}}</p>
                  <p>{{res.data.highs[1]}}</p>
                  <p>{{res.data.highs[2]}}</p>
                </div>
              </div>
            </section>

            <section class="sku_compontent menu description">
              <h3>
                <span class="icon_sku icon_menu">活动详情</span>
              </h3>
              <div class="menu_wrap">
                <div class="geen desc">
                  <div class="mc" v-html="res.data.description">
                  </div>
                </div>
                <a class="sku_more">完整活动详情</a>
              </div>
            </section>

            <section class="sku_compontent host_share_tag">
              <h3>
                <span class="icon_sku icon_host_article">活动晒图</span>
              </h3>
              <div class="article_wrap">
                <p class="article_sub_title" v-if="res.data.hostShareTag.contentNum != 0">已有{{res.data.hostShareTag.contentNum}}人参加</p>
                <p>
                  <a href="#">{{res.data.hostShareTag.description}}</a>
                </p>
                <div class="content" v-if = "res.data.hostShareTag.contentList.length != 0" v-for = "(value,index) in res.data.hostShareTag.contentList" :key="index">
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
                  <p class="article_desc short" v-if="value.description != null ">{{value.description}}
                  </p>
                  <ul class="article_pics clearfix" v-if = "index == res.data.hostShareTag.contentList.length-1" style = "padding-bottom:10px">
                    <li v-for = "(v,i) in value.smallPicUrls" :key="i" v-if = " i < 3">
                      <a href="#">
                        <img :src="v">
                      </a>
                    </li>
                  </ul>
                  <ul class="article_pics clearfix" v-else>
                    <li v-for = "(v,i) in value.smallPicUrls" :key="i" v-if = " i < 3">
                      <a href="#">
                        <img :src="v">
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <a class="sku_more" href="#">查看更多</a>
            </section>

            <section class="care" v-if= 'res.data.productLabels != null '>
              <div class="sku_compontent facilities">
                <h3>
                  <span class="icon_sku icon_facilities">注意事项</span>
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
            </section>

            <section class="sku_compontent tips">
              <h3>
                <span class="icon_sku icon_tips">温馨提示</span>
              </h3>
              <div class="container-fluid tips_wrap">
                <div class="tips_con">
                  <p>
                    使用日期：
                    <em>{{res.data.productAdvice.startDate}}-{{res.data.productAdvice.endDate}}</em>
                  </p>
                  <p>
                    截止时间：
                    <em>{{res.data.productAdvice.applyExpiredTime}}</em>
                  </p>
                </div>
                <div class="tips_refund">
                  <span class="icon_sku icon_right">{{res.data.productAdvice.refundDesc}}</span>
                  <span class="icon_sku icon_right">{{res.data.productAdvice.subscribeDesc}}</span>
                </div>
                <div class="cs-im-buttons-group clearfix">
                  <a class="im_service" href="#">
                    在线客服
                  </a>
                  <a class="tips_service" href="">
                    电话客服
                  </a>
                </div>
              </div>
            </section>

            <section class="sku_compontent recommend" v-if = "res.recommendAutomatic.length != 0">
              <h3 class="filter_recommend">
                <span class="icon_sku icon_guess_like">猜你喜欢</span>
              </h3>
              <ul class="filter_result">
                <li v-for = "(value,index) in res.recommendAutomatic" :key="index">
                  <a href="#">
                    <div class="left_pic">
                      <img :src="value.data.sPicUrl">
                    </div>
                    <div class="right_desc">
                      <h4 class="title e2">{{value.data.title}}></h4>
                      <p class="sub">{{value.data.cityName}}</p>
                      <p class="price">
                        {{value.data.neededCredits}}
                      </p>
                      <p class="tag">
                        <span v-for = "(v,i) in value.data.categorys" :key="i">{{v}}</span>
                      </p>
                    </div>
                  </a>
                  <img style="display:none" width="0" height="0">
                </li>
              </ul>
            </section>


          </article>
        </section>
      </div>
      <Footer />
    </div>

    <div class="buyNow">
      <span>立即购买</span>
    </div>
  </div>
</template>

<script>
import Head from "../components/common/ZHU/Head.vue";
import HostAd from "../components/Host/Host-Ad.vue";
import Footer from "../components/common/ZHU/Footer.vue";
import { mapActions, mapState } from "vuex";

const actionTypes ={
    GETDATA : 'getHostData',
    GETDATA2 : 'getData2'
}

export default {
  data: () => ({
    Info: {
      data: {
        title: "活动详情"
      }
    }
  }),
  components: {
    Head,
    HostAd,
    Footer
  },
  methods: {
    ...mapActions([actionTypes.GETDATA2])
  },
  computed: {
    ...mapState(["event"]),
    res: function() {
      let ml = this.event.event_result;
      let result = Object.keys(ml).length > 0 ? ml : {};
      return result;
    },
    Id() {
      return this.$route.query.id;
    },
    position() {
      let result = [];
      let obj = this.event.event_result.data.productLabels;
      for (var i in obj) {
        let pos = {
          x: -25 * (obj[i].index % 6),
          y: -25 * parseInt(obj[i].index / 6),
          name: obj[i].name
        };
        result.push(pos);
      }
      console.log(result)
      return result;
    },
    liWidth() {
      var total = this.event.event_result.data.productLabels.length;
      return parseInt(1 / total * 100);
    }
  },
  created() {
    this[actionTypes.GETDATA2](this.Id);
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/usage/core/reset.scss";
.icon_sku {
  background-repeat: no-repeat;
}
.icon_sku.icon_host,
.icon_sku.icon_location,
.icon_sku.icon_time {
  background-position: left 8px;
}
.clearfix {
  &:after {
    content: "";
    display: table;
    clear: both;
    height: 0;
    visibility: hidden;
  }
}
.container,
.container-fluid {
  padding-right: 15px;
  padding-left: 15px;
  margin-right: auto;
  margin-left: auto;
}
article.container {
  background-color: #fff;
  padding: 0 0.2rem;
  text-align: center;
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
    display: block;
    margin-top: 5px;
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
.mid {
  margin-bottom: 0.5rem;
}

.geen .mc {
  /deep/ p {
    padding-bottom: 0;
    line-height: 21px;
    word-wrap: break-word;
    width: 100% !important;
    text-indent: 0 !important;
    clear: both;
    overflow: hidden;
    background-color: transparent !important;
    margin-left: 0 !important;
    /deep/ img {
      width: 100%;
      height: auto;
      border-radius: 4px;
      margin-top: 1px;
      margin-bottom: 1px;
      min-height: 150px;
    }
    /deep/ strong {
      padding-top: 10px;
      display: block;
      color: #d9a961 !important;
      padding-bottom: 3px;
      font-weight: 700;
      margin: 0 auto;
      width: 10px;
      /deep/ &:before {
        content: "-";
        display: inline-block;
        color: #d9a961;
      }
      /deep/ &:after {
        content: "-";
        display: inline-block;
        color: #d9a961;
      }
    }
  }
}
.wrap {
  height: 100%;
  overflow-y: scroll;
  .main {
    background: #fff;
    width: 100%;
    .sku_top_img {
      margin-top: 45px;
      width: 100%;
      padding-bottom: 62.5%;
      height: 0;
      position: relative;
      background: url(http://r.yhres.com/sku/bg_logo_w@2x.png?v4.3) center
        no-repeat #fff;
      background-size: 0.8rem auto;
      img {
        width: 100%;
      }
    }
    .Info {
      .detail_title {
        color: #111;
        padding-top: 0.15rem;
        font-size: 0.22rem;
        line-height: 0.33rem;
        font-weight: 700;
      }
      .detail_like {
        position: relative;
        color: #555;
        .detail_price {
          color: #111;
          line-height: 0.27rem;
          padding-bottom: 0.015rem;
          font-size: 11px;
          span {
            font-size: 24px;
            color: #d9a961;
            em {
              font-style: normal;
              font-size: 11px;
            }
          }
        }
        .interest {
          padding-top: 8px;
          padding-bottom: 8px;
          span {
            padding-left: 17px;
            font-size: 12px;
            background-image: url(http://r.yhres.com/sku/icon_sku_like@2x.png);
            background-position: left center;
            background-size: 9pt 10px;
            background-repeat: no-repeat;
            color: #555;
          }
        }
      }
    }
    section {
      display: block;
      .time {
        .bottom_line {
          content: "";
          display: block;
          width: 100%;
          left: 50%;
          bottom: 0;
          height: 1px;
          -ms-transform: scaleY(0.5) translateX(-50%);
          transform: scaleY(0.5) translateX(-50%);
          position: relative;
          background-color: #e5e5e5;
        }
        .detail_contact {
          padding: 0.1rem 0 0.05rem;
          color: #111;
          overflow: hidden;
          .detail_info {
            text-align: left;
            font-size: 0.14rem;
            position: relative;
            padding: 6px 27px 6px 0;
            margin-bottom: 5px;
            background-position: left 8px;
            background-size: 13px 13px;
            a {
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              width: 90%;
              display: block;
              color: #111;
            }
            .icon_contact,
            .icon_navigate {
              position: absolute;
              right: 0;
              top: 50%;
              margin-top: -15px;
              width: 30px;
              height: 30px;
              background-image: url(http://m.yhouse.com/img/icons/icon_sku2@2x.png);
              background-size: 61px 30px;
              background-position: 0 0;
              a {
                display: block;
                width: 27px;
                height: 27px;
                opacity: 0;
              }
            }
            p {
              line-height: 27px;
              overflow: hidden;
              text-overflow: ellipsis;
              white-space: nowrap;
              width: 100%;
              display: block;
              &.icon_navigate {
                background-position: -31px 0;
              }
            }
          }
        }
      }
      .event_hostName {
        text-align: left;
        width: 100%;
        color: #999;
        padding-bottom: 7px;
        line-height: 18px;
        font-size: 0.14rem;
      }
      .highlight {
        .highlight_wrap {
          font-size: 0.14rem;
          line-height: 0.28rem;
        }
      }
      .description {
        h3 {
          .icon_sku {
            background-image: url(http://r.yhres.com/sku/menu38@3x.png);
            background-size: 0.2rem auto;
          }
        }
        .geen .mc {
          font-size: 14px;
          line-height: 28px;
          text-align: center;
          color: #111;
        }
      }
      .host_share_tag {
        h3 {
          .icon_sku {
            background-image: url(http://r.yhres.com/sku/host_topic43@3x.png);
            background-size: 0.2rem auto;
          }
        }
        .article_wrap {
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
            color: #1e1c1c;
          }
          .article_sub_title {
            color: #555;
            font-size: 0.12rem;
            line-height: 0.14rem;
            margin-bottom: 0.1rem;
            text-align: center;
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
                  background: url(http://r.yhres.com/sku/bg_logo_w@2x.png)
                    center no-repeat;
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
        h3 {
          .icon_sku {
            background-image: url(http://r.yhres.com/sku/tips38@3x.png);
            background-size: 0.2rem auto;
          }
        }
        .tips_wrap {
          .tips_con {
            p {
              line-height: 0.28rem;
            }
          }
          .tips_refund {
            line-height: 0.28rem;
            margin-bottom: 0.15rem;
            span {
              padding-left: 0.18rem;
              margin: 0 0.075rem;
            }
            .icon_right {
              background-image: url(http://r.yhres.com/sku/icon_sku_right@2x.png);
              background-position: left center;
              background-size: 14px 14px;
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
                  &.e2 {
                    -webkit-line-clamp: 2;
                  }
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
                  span {
                    display: inline-block;
                    color: #555;
                    font-size: 0.12rem;
                    height: 0.22rem;
                    line-height: 0.2rem;
                    margin-right: 0.05rem;
                    padding: 0 0.09rem;
                    border-radius: 0.22rem;
                    border: 1px solid #ccc;
                  }
                }
              }
            }
          }
        }
      }
    }
  }
  .buyNow {
    position: fixed;
    bottom: 0;
    left: 0;
    width: 100%;
    display: block;
    color: #fff;
    font-size: 0.17rem;
    height: 0.5rem;
    line-height: 0.5rem;
    font-weight: 400;
    text-align: center;
    background: linear-gradient(-125deg, #ebb761 0, #edc776 100%);
    span {
      padding-right: 0.13rem;
      background: url(http://m.yhouse.com/img/icons/bottom_icon_arrow@2x.png?v4.3)
        right center no-repeat;
      background-size: 0.08rem auto;
    }
  }
}
</style>