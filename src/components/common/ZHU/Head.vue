<template>
  <div class="header" v-if = "Info.data">
    <a class="nav_back_btn" @click="handleIconClick"></a>
    <h1 class="headTitle">{{Info.data.title}}</h1>
    <a class="nav_home_page" @click="handleToIndex"></a>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
const CHANGETITLE = "changeTitle"
// import { CHANGETITLE } from "../../../store/ZHU/mutation-types";
export default {
  props: ["Info"],
  methods: {
    ...mapMutations([CHANGETITLE]),
    handleIconClick() {
      this.$router.back();
    },
    handleToIndex() {
      this.$router.push({
        path: "/"
      });
    }
  },
  computed: {
    ...mapState(["title"])
  },
  created() {
    this.changeTitle(this.TITLE);
  }
};
</script>

<style lang="scss" scoped>
.header {
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  z-index: 999;
  height: 45px;
  line-height: 45px;
  border-bottom: 1px solid #e1e1e1;
  color: #111;
  font-size: 18px;
  background-color: #fff;
  .nav_back_btn {
    display: block;
    width: 30px;
    height: 30px;
    background-position: 0 center;
    position: absolute;
    top: 8px;
    left: 0;
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 18px;
      height: 18px;
      top: 6px;
      left: 6px;
      background: url(http://r.yhres.com/member/icon_nav@3x.png?v4.3) no-repeat;
      background-size: 36px 18px;
    }
  }
  h1 {
    font-weight: 700;
    line-height: 45px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
  .nav_home_page {
    display: block;
    position: absolute;
    width: 30px;
    height: 30px;
    top: 8px;
    right: 10px;
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 40px;
      height: 20px;
      top: 5px;
      left: 6px;
      background: url(http://r.yhres.com/member/icon_nav@3x.png?v4.3) no-repeat;
      background-size: 40px 20px;
      background-position: -18px 0;
    }
  }
}
</style>