<template>
  <div class="container">
    <mt-swipe :auto="2500" :continuous="loop">
      <mt-swipe-item v-for="(item, index) of items" :key="index">
        <img :src="item">
      </mt-swipe-item>
    </mt-swipe>
  </div>
</template>
<script>
import $ from "axios";
import { Swipe, SwipeItem } from "mint-ui";
export default {
  props: {
    loop: {
      type: Boolean,
      default: true
    },
    Id: {
      required: true
    }
  },
  data() {
    return {
      items: []
    };
  },
  components: {
    [Swipe.name]: Swipe,
    [SwipeItem.name]: SwipeItem
  },
  mounted() {
    $.get("/api/host").then(result => {
      this.items = result.data[this.Id].data.headPics;
    });
  }
};
</script>

<style lang="scss" scoped>
.container {
  width: 100%;
  height: 35%;
  margin-top: 45px;
  max-height: 2.33rem;
  min-height: 1.98rem;
  /deep/ .mint-swipe-indicators {
    bottom: 20px;
    width: 100%;
    position: absolute;
    text-align: center;
    /deep/ .mint-swipe-indicator {
      width: 6px;
      height: 6px;
      display: inline-block;
      border-radius: 100%;
      background: rgba(255, 255, 255, 0.3);
      margin: 0 7.5px;
      cursor: pointer;
      opacity: 1;
    }
    /deep/ .is-active {
      opacity: 1;
      background: #fff;
    }
  }

  img {
    width: 100%;
    height: 100%;
  }
}
</style>
