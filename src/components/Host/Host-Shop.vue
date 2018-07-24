<template>
  <div>
    <div class="recommend_host">
      <a>
        <div class="left st">商户入驻</div>
        <div class="right">收益翻倍，仅需两步</div>
      </a>
      <a>
        <div class="left nd">推荐商户</div>
        <div class="right">达人推荐，送代金券</div>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.recommend_host {
  padding: 0 0.2rem;
  margin-top: 0.15rem;
  background-color: #fff;
  a {
    display: block;
    width: 100%;
    height: 0.5rem;
    line-height: 0.5rem;
    font-size: 0.14rem;
    position: relative;
    overflow: hidden;
    color: #111;
    .left {
      float: left;
      color: #555;
      padding-left: 0.22rem;
      background-image: url(http://m.yhouse.com/img/icons/icon_host@3x.png);
      background-repeat: no-repeat;
      background-position: left center;
      background-size: 0.15rem 0.15rem;
      &.nd {
        background-image: url(http://m.yhouse.com/img/icons/icon_recommend@3x.png);
        background-size: 0.15rem 0.15rem;
      }
    }
    .right {
      float: right;
      color: #d9a961;
      padding-right: 0.1rem;
      background: url(http://r.yhres.com/sku/icon_allow@2x.png) right center
        no-repeat;
      background-size: 0.05rem auto;
    }

    &:last-child:before {
      content: "";
      width: 100%;
      left: 50%;
      height: 1px;
      top: 0;
      background-color: #ddd;
      display: block;
      position: absolute;
      transform: scaleY(0.5) translateX(-50%);
    }
  }
}
</style>