<template>
  <div>
    <div class="vip_bg_host">
      <a href="#">点击体验</a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.vip_bg_host {
  position: relative;
  width: 100%;
  height: 0.55rem;
  margin-bottom: 0.1rem;
  background: url(http://r.yhres.com/member/third_banner_text_my_member@2x.png)
    left center no-repeat rgba(255, 255, 255, 0.95);
  background-size: auto 0.35rem;
  a {
    position: absolute;
    display: block;
    width: 0.85rem;
    height: 0.35rem;
    text-align: center;
    right: 0;
    top: 0.1rem;
    background: #ff4d85;
    background: linear-gradient(120deg, #ff4d85 1%, #ff5a5e 100%);
    border-radius: 0.02rem;
    line-height: 0.35rem;
    color: #fff;
    font-size: 0.14rem;
  }
}
</style>