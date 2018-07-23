<template>
    <!-- <div>
        <div @click="a()">daindaindain </div>
    </div> -->
    <mt-spinner type="snake" :size="100"></mt-spinner>
</template>

<script>
    // import { Indicator } from 'mint-ui'
    import { Spinner } from 'mint-ui';
    export default {
        name:"test",
        methods:{
            // Indicator.open();
            // a(){
            //     Indicator.open();
            // }
        },
        components:{
            // Indicator
            [Spinner.name]:Spinner
        }
    }
</script>

<style scoped>

</style>