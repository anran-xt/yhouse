<template>
    <screen-list :gType="gType" />
</template>

<script>
    import ScreenList from "./screenList.vue"
    export default {
        data:()=>{
            return {
                gType:"merchant"
            }
        },
        components:{
            ScreenList
        }
    }
</script>

<style scoped>

</style>        