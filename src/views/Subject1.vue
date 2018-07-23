<template>
      <subject-render></subject-render>
</template>

<script>
import SubjectRender from '../components/Subject/Subject-1.vue'
export default {
  name: 'subject1',
  components: {
    SubjectRender
  }
}
</script>
<style lang="scss" >
@import '@/style/usage/core/reset.scss';
   html,body{
     height:100%;
     background:#fff;
   }
</style>

