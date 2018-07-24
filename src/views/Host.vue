<template>
  <div class="wrap">
    <Head :Info = "Info"></Head>
    <Swiper
      :loop = "true"
      :Id= "Id"
    ></Swiper>
    <div class="main">
      <Host-Info :Info = "Info"/>
      <host-ad />
      <HostSection :Info = "Info"/>
    </div>
    <HostShop />
    <Footer />
  </div>
</template>

<script>
import Head from "../components/common/ZHU/Head.vue";
import Swiper from "../components/common/ZHU/Swiper.vue";
import Footer from "../components/common/ZHU/Footer.vue";
import HostInfo from "../components/Host/Host-Info.vue";
import HostAd from "../components/Host/Host-Ad.vue";
import HostSection from "../components/Host/Host-Section.vue";
import HostShop from "../components/Host/Host-Shop.vue";
import { mapActions, mapState } from "vuex";

const actionTypes ={
    GETDATA : 'getHostData',
    GETDATA2 : 'getData2'
}

export default {
  components: {
    Head,
    Swiper,
    HostInfo,
    HostAd,
    HostSection,
    HostShop,
    Footer
  },
  methods: {
    ...mapActions([actionTypes.GETDATA])
  },
  computed: {
    ...mapState(["host"]),
    Info: function() {
      if(!this.host.host_result){
        return {}
      }
      let ml = this.host.host_result;

      let result = Object.keys(ml).length > 0 ? ml : {};
      return result;
    },
    Id() {
      // console.log(this.$route.query.id)
      return this.$route.query.id;
    }
  },
  created() {
    console.log("created")
    this[actionTypes.GETDATA](this.Id);
  }
};
</script>

<style lang="scss" scoped>
@import "@/style/usage/core/reset.scss";
.wrap {
  height: 100%;
  overflow-y: scroll;
  .main {
    background-color: #fff;
    padding: 0 0.2rem;
    text-align: center;
    position: relative;
  }
}
</style>