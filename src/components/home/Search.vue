<template>
    <div class="searchWrap">
        <div class="searchHead">
            <div class="searchBox">
                <i></i>
                <div class="searchBtn">
                    <input type="text" placeholder="请输入商家、商圈、菜系、活动…">

                </div>
            </div>
            <div class="exit" @click="backFromSearch">取消</div>
        </div>
        <div class="searchBody">
            <section class="searchHot">
                <div class="searchItem hotLocation">
                    <div class="hotIcon"></div>
                    <div class="hotList">                        
                        <div class="searchKeyItem"><router-link to="/search">淮海路</router-link></div>
                        <div class="searchKeyItem"><router-link to="/search">新天地</router-link></div>
                        <div class="searchKeyItem"><router-link to="/search">南京西路</router-link></div>
                    </div>
                </div>
                <div class="searchItem hotDish">
                    <div class="hotIcon"></div>
                    <div class="hotList">                        
                        <div class="searchKeyItem"><router-link to="/search">江浙菜</router-link></div>
                        <div class="searchKeyItem"><router-link to="/search">特色小吃</router-link></div>
                        <div class="searchKeyItem"><router-link to="/search">DIY/体验课</router-link></div>
                    </div>
                </div>
                <div class="searchItem hotKind">
                    <div class="hotIcon"></div>
                    <div class="hotList">
                        <div class="searchKeyItem"><router-link to="/search">西餐</router-link></div>
                        <div class="searchKeyItem"><router-link to="/search">自助餐</router-link></div>
                        <div class="searchKeyItem"><router-link to="/search">下午茶</router-link></div>
                    </div>
                </div>
            </section>
        </div>
        <div class="searchHistory">
            <h3>搜索历史</h3>
            <ul class="searchHistoryList">
                <li>
                    <i class="historyIcon"></i>
                    <p><router-link to="/search">自助</router-link></p>
                    <i class="clearThisHistory"></i>
                </li>
                <li>
                    <i class="historyIcon"></i>
                    <p><router-link to="/search">工人体育场</router-link></p>
                    <i class="clearThisHistory"></i>
                </li>
                <li>
                    <i class="historyIcon"></i>
                    <p><router-link to="/search">三里屯</router-link></p>
                    <i class="clearThisHistory"></i>
                </li>
            </ul>
            <div class="clearAllHistory">清空搜索历史</div>
        </div>
    </div>
</template>
<script>
export default {
  data() {
    return {};
  },
  methods:{
      backFromSearch(){
          console.log("in")
          this.$emit("backFromSearch")  
      }
  }
};
</script>
<style lang="scss" scoped>
@import "@/style/usage/core/reset.scss";
.searchWrap {
  width: 100%;
  height: 100%;
  position: fixed;
  background: #eee;
  top: 0;
  z-index: 99;
  .searchHead {
    box-sizing: border-box;
    height: 0.45rem;
    line-height: 0.45rem;
    position: relative;
    background: #fff;
    border-bottom: 1px solid #e1e1e1;
    .searchBox {
      margin: 0 0.52rem 0 0.13rem;
      padding: 0.04rem 0.28rem;
      border: 1px solid #ccc;
      border-radius: 0.14rem;
      height: 0.28rem;
      position: relative;
      top: 0.09rem;
      background: url("../../assets/icon_search_find@2x.png") 0.11rem center
        no-repeat;
      background-size: 0.12rem auto;
      .searchBtn {
        position: relative;
        width: 100%;
        input {
          height: 0.2rem;
          line-height: 0.2rem;
          width: 100%;
          border: none;
          font-size: 0.12rem;
          position: absolute;
          left: 0;
          top: 0;
        }
      }
    }
    .exit {
      position: absolute;
      height: 0.45rem;
      width: 0.52rem;
      text-align: center;
      right: 0;
      top: 0;
    }
  }
  .searchBody {
    padding-top: 0.45rem;
    .searchHot {
      background: #fff;
      margin-top: 0.15rem;

      .searchItem:first-child {
        .hotIcon {
          // border-right:.005rem solid #eee;
          border-top: none;
        }
        .searchKeyItem {
          border-right: 1px solid #eee;
          border-top: none;
        }
      }
      .searchItem {
        padding-left: 0.42rem;
        height: 0.4rem;
        line-height: 0.4rem;
        text-align: center;
        position: relative;

        .hotList {
          .searchKeyItem {
            float: left;
            width: 33.3333%;
            border-top: 1px solid #eee;
            border-right: 1px solid #eee;
            a{
              color:#111;
            }
          }
          .searchKeyItem:last-child {
            border-right: none;
          }
        }
        .hotIcon {
          width: 0.42rem;
          height: 0.41rem;
          position: absolute;
          left: 0;
          top: 0;
          border-top: 1px solid #eee;
          border-right: 1px solid #eee;
        }
      }
      .hotLocation {
        .hotIcon {
          background: url("../../assets/district@2x.png") no-repeat center;
          background-size: 50% auto;
        }
      }
      .hotDish {
        .hotIcon {
          background: url("../../assets/all@2x.png") no-repeat center;
          background-size: 50% auto;
        }
      }
      .hotKind {
        .hotIcon {
          background: url("../../assets/hot_normal@2x.png") no-repeat center;
          background-size: 50% auto;
        }
      }
    }
  }
  .searchHistory {
    h3 {
      padding-left: 0.15rem;
      line-height: 0.34rem;
      color: #999;
      font-size: 0.14rem;
      font-weight: normal;
    }
    .searchHistoryList {
      padding-left: 0.15rem;
      background: #fff;
      border-bottom: 1px solid #e1e1e1;
      border-top: 1px solid #e1e1e1;
      li {
        height: 0.45rem;
        padding-left: 0.22rem;
        line-height: 0.45rem;
        border-bottom: 1px solid #ebebeb;
        position: relative;
        a{
          color:#999;
        }
        .historyIcon {
          height: 100%;
          width: 0.22rem;
          background: url("../../assets/icon_search_clock@2x.png")
            no-repeat.02rem center;
          position: absolute;
          left: 0;
          background-size: 0.14rem auto;
        }
        .clearThisHistory {
          position: absolute;
          right: 0;
          top: 0;
          width: 0.45rem;
          height: 0.45rem;
          background: url("../../assets/icon_search_clear@2x.png") no-repeat
            center;
          background-size: 0.14rem auto;
        }
      }
      li:last-child {
        border-bottom: none;
      }
    }
    .clearAllHistory {
      height: 0.35rem;
      line-height: 0.35rem;
      text-align: center;
      width: 1.3rem;
      margin: 0.15rem auto;
      border: 1px solid #999;
      border-radius: 0.04rem;
      color:#555;
      background:#fff;
    }
  }
}
</style>

