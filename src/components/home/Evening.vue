<template>
    <div @touchstart="childTouch" @touchmove="childMove" @touchend="childEnd" class="eveningWrap">夜生活</div>
</template>
<script>
export default {
  data: function() {
    return {};
  },
  methods: {
    childTouch: function(e) {
      this.$emit("touch", e);
    },
    childMove: function(e) {
      this.$emit("move", e);
    },
    childEnd: function(e) {
      this.$emit("end", e);
    }
  }
};
</script>
<style lang="scss" scoped>
    .eveningWrap{
        height:100%;
    }
</style>
