<template>
  <div>
    <footer>
      <div class="container-fluid">
        <div class="row">
          <nav>
            <p class="clearfix">
              <a href="#">首页</a>
              <span>|</span>
              <a href="#">订单</a>
              <span>|</span>
              <a href="#">登录</a>
            </p>
          </nav>  
          <div class="download">
            <a class="apple" target="_self" href="#"></a>
            <a class="android" target="_self" href="#"></a>
          </div>
          <p class="clearfix">
            <a class="about" href="#">关于我们</a>
            <br>
            <span class="copyright">Copyright YHOUSE mobile</span>
          </p>
        </div>
      </div>
    </footer>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
footer {
  text-align: center;
  padding: 0.25rem 0;
  font-size: 0.14rem;
  color: #999;
  a {
    color: #555;
    display: inline-block;
  }
  .container-fluid {
    padding-right: 15px;
    padding-left: 15px;
    margin-right: auto;
    margin-left: auto;
    .row {
      margin-right: -15px;
      margin-left: -15px;
      nav {
        height: 0.45rem;
        line-height: 0.45rem;
        a {
          width: 20%;
        }
        span {
          margin: 0 0.05rem;
          display: inline-block;
        }
      }
      .download {
        width: 2.84rem;
        overflow: hidden;
        margin: 0.15rem auto 0.3rem;
        a {
          width: 1.32rem;
          height: 0.4rem;
          display: block;
          margin: 0 0.05rem;
          background-repeat: no-repeat;
          background-position: center;
          &.apple {
            float: left;
            background-image: url(http://m.yhouse.com/img/icons/icon_apple@2x.png?v4.3);
            background-size: 100% auto;
          }
          &.android {
            float: right;
            background-image: url(http://m.yhouse.com/img/icons/icon_android@2x.png?v4.3);
            background-size: 100% auto;
          }
        }
      }
      .copyright {
        color: #ccc;
        font-size: 0.1rem;
      }
    }
  }
}
</style>