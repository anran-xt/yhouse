<template>
    <div class="box">
        <div class="spinner" v-show="isLoading">
            <mt-spinner type="fading-circle" :size="60"></mt-spinner>
        </div>
        <div  class="container">
            <ul>
                <li class="item" v-for="v of screemData" :key="v.id+1">
                    <a href="#">
                        <div><img :src="v.productInfo.hostSharePicUrl" alt="" @click="goDetail" :storeId="219764" goto="Host"><span>会员餐厅</span></div> 
                        <div>
                            <h3>{{v.productInfo.shareContent}}</h3>
                            <p>{{v.productInfo.businessesDistrict}}</p>
                            <p>{{word}}<span :class="active">{{v.productInfo.priceStr}}</span></p>
                            <div v-show="isShowbor">
                                <span>{{v.productInfo.vipEqsTag}}</span>
                                <span>{{v.productInfo.categorys[0]}}</span>
                            </div>
                        </div>
                    </a>
                </li>
            </ul>
            <div><img src="http://r.yhres.com/bottomline@2x.png?v4.3" alt=""></div>
            
        </div>
    </div>
</template>

<script>
    // import $ from "axios"
    import { Spinner } from 'mint-ui';
    import {mapState} from 'vuex'
    export default {
        name:"merchant",
        // props:["gType"],
        data:()=>({
            // screemData : [],
            isLoading: true,
            isShowbor: false,
            word:"人均:",
            active: "bColor",
        }),
        components:{
            [Spinner.name]:Spinner
        },
        methods:{
            //进店逛逛
            goDetail(){
                // let goto = e.target.getAttribute("goto")
                // let storeId =e.target.getAttribute("storeId")
                this.$router.push("/Host?id=219764")
            },
        },
        computed:{
            ...mapState(["shoplist"]),
            ...mapState(["screenType"]),
            screemData(){
                // console.log(this.shoplist);
                if(this.screenType == "merchant"){  
                    let data = this.shoplist.list;
                    if(data.length > 0){
                        return data
                    }
                } else if(this.screenType == "commodity"){
                    let data = this.shoplist.list;
                    if(data.length > 0){
                        return data
                    }
                }else if(this.screenType == "lcake"){
                    let data = this.shoplist.lcake;
                    if(data.length > 0){
                        return data
                    }
                }
                else if(this.screenType == "mguesslike"){
                    let data = this.shoplist.mguesslike;
                    if(data.length > 0){
                        return data
                    }
                }else if(this.screenType == "rhot"){
                    let data = this.shoplist.rhot;
                    if(data.length > 0){
                        return data
                    }
                }
            },
            listType(){
                return this.screenType;           
            }
        },
        watch:{
            listType(newData){
                if(newData == "mguesslike"){
                    this.isShowbor = false;
                    this.isLoading = false;
                }
                if(newData == "lcake"){
                    this.isShowbor = false;
                    this.isLoading = false;
                }
            }
        },
        created() {
            if(this.screenType == "merchant"){
                this.isShowbor = false;
                this.isLoading = false;
            }
            if(this.screenType == "commodity"){
                this.isShowbor = true;
                this.word = ""
                this.active = "yColor"
                this.isLoading = false;
            }
        },
    }
</script>

<style lang="scss" scoped>
    @import '@/style/usage/core/reset.scss';
    .box{height: 100%;}
    .spinner{
        height: 100%;
        @include flexbox();
        align-items: center;
        justify-content: center;
    }
    .container{
        height: 100%;
        overflow: scroll;
        .bColor{color: #111}
        .yColor{color: #D9A961;padding-left: 0 !important}
        ul{
            padding: 0 .15rem;
            .item{
                padding: .15rem 0;
                border-bottom: .01rem solid #F6F6F6;
                a{
                    @include flexbox();
                    color: #111;
                    img{
                        width: 1.75rem;
                        height: 1.3rem;
                    }
                    div:first-child{
                        position: relative;
                        span{
                            position: absolute;
                            background: #F0C785;
                            left: 0;
                            top: 0;
                            font-size: .12rem;
                            letter-spacing: .01rem;
                            color: #FAF1E1;
                            display: block;
                            width: .675rem;
                            height: .22rem;
                            text-align: center;
                        }
                    }
                    div:last-child{
                        padding-left: .12rem;
                        position: relative;
                        h3{
                            font-weight: bold;
                            font-size: .16rem;
                            padding-bottom: .05rem;
                            width: 155px;
                            @include ellipsis()
                            
                        }
                        p{
                            font-size: .12rem;
                            padding-bottom: .05rem;
                            span{
                                font-size: .14rem;
                                padding-left: .1rem;
                            }
                        }
                        >div{
                            position: absolute;
                            width: 2rem;
                            bottom: 0;
                            padding: 0;
                            font-size: .12rem;
                            span{
                                border: 1px solid;
                                border-radius: .15rem;
                                padding: .02rem .1rem;
                            }
                            span:first-child{
                                color: #D9A961;
                                border-color: #D9A961;
                                margin-right: .1rem
                            }
                        }
                    }
                }
            }
        }
        &>div{
            background: #F4F4F4;
            width: 100%;
            >img{
                height: .6rem;
                transform: scale(0.4) translateX(-2.8rem);
                // margin-left: .28rem;
            }
        }
    }
</style>