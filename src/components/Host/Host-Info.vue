<template>
  <div v-if = "Info.data">
    <img :src="Info.data.logoUrl" alt="" class="host-logo">
    <p class="vip_host"></p>
    <h1 class="host_title">{{Info.data.title}}</h1>
    <p class="detail_tags">
      <span class="price">{{Info.data.avgPrice}}</span>
      <span class="type">{{Info.data.tags[0]}}</span>
      <span class="address">{{Info.data.tags[1]}}</span>
    </p>
    <div class="detail_interested clearfix">
      <span class="center">{{Info.data.countOfInterested}}人想去</span>
    </div>
      <section>
    <div class="detail_contact">
      <div class="detail_info">
        <p class="mapText">
          <span class="">
            <a href="">{{Info.data.address}}</a>
          </span>
        </p>
        <p class="mapIcon icon">
        </p>
        <p class="phone icon">
        </p>
      </div>
    </div>
    <div class="bottom_line"></div>

  </section>
  </div>
</template>
<script>
export default {
  props:["Info"]
};
</script>

<style lang="scss" scoped>
div {
  .host-logo {
    position: absolute;
    display: block;
    left: 50%;
    top: -0.15rem;
    margin-left: -0.2rem;
    margin-bottom: -0.2rem;
    width: 0.4rem;
    height: 0.4rem;
    background: url(http://m.yhouse.com/img/icons/icon_host_logo@2x.png) center
      no-repeat;
    background-size: 0.4rem auto;
    border: 0.02rem solid #fff;
    border-radius: 50%;
    z-index: 900;
  }
  .vip_host {
    padding-top: 0.35rem;
    line-height: 0.34rem;
  }
  .host_title {
    color: #111;
    padding-top: 0rem;
    font-size: 0.22rem;
    line-height: 0.33rem;
    font-weight: 700;
  }
  .detail_tags {
    color: #111;
    font-size: 0.14rem;
    line-height: 0.28rem;
    padding-bottom: 0.05rem;
    & > span:nth-child(1):after {
      color: #ccc;
      display: inline-block;
      vertical-align: middle;
      content: "|";
      padding: 0 0.09rem;
      font-size: 0.09rem;
      height: 0.09rem;
      line-height: 0.09rem;
    }
    & > span:nth-child(2):after {
      color: #ccc;
      display: inline-block;
      vertical-align: middle;
      content: "|";
      padding: 0 0.09rem;
      font-size: 0.09rem;
      height: 0.09rem;
      line-height: 0.09rem;
    }
  }
  .detail_interested {
    line-height: 0.2rem;
    span {
      color: #555;
      font-size: 0.12rem;
      background-repeat: no-repeat;
      background-position: left center;
      padding-left: 0.19rem;
    }
    .center {
      background-image: url(http://r.yhres.com/sku/collection39@3x.png);
      background-size: 0.15rem auto;
    }
  }
  .detail_contact {
    padding: 0.1rem 0 0.05rem;
    color: #111;
    overflow: hidden;
    .detail_info {
      padding: 8px 1.1rem 8px 0;
      text-align: left;
      font-size: 0.14rem;
      position: relative;
      margin-bottom: 5px;
      a {
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        display: block;
        color: #111;
      }
      p {
        line-height: 27px;
        overflow: hidden;
        text-overflow: ellipsis;
        white-space: nowrap;
        width: 100%;
        display: block;
      }
      .icon {
        position: absolute;
        top: 50%;
        right: 0.5rem;
        margin-top: -15px;
        width: 30px;
        height: 30px;
        background-position: -31px 0;
        background-image: url(http://m.yhouse.com/img/icons/icon_sku2@2x.png);
        background-size: 61px 30px;
      }
      .phone {
        right: 0;
        background-position: 0 0;
      }
    }
  }
  .bottom_line {
    content: "";
    display: block;
    width: 100%;
    left: 50%;
    bottom: 0;
    height: 1px;
    transform: scaleY(0.5) translateX(-50%);
    position: relative;
    background-color: #e5e5e5;
    margin-bottom: 10px !important;
  }
}
</style>