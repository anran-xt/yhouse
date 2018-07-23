<template>
    <div class="container">
        <header>  <!-- 商户，商品的跳转 -->
            <i @click="handClickBack()">&#xe662;</i>
            <div><span @click="handClickSapn(1)" :class="hActive">商户</span></div>
            <div><span @click="handClickSapn(2)" :class="pActive">商品</span></div>
            <i @click="handClickSearch()">&#xe519;</i>
        </header>
        <div class="search">    <!-- 用户选择-->
            <div @click="handClickShow(1)"><span>{{typeL}}<i v-html="UpL"></i></span></div>
            <div @click="handClickShow(2)"><span>分类筛选<i v-html="UpM"></i></span></div>
            <div @click="handClickShow(3)"><span>{{typeR}}<i v-html="downUp"></i></span></div>
        </div>
        <div class="list">
            <router-view></router-view>  <!-- 商户，商品列表 -->
            <div v-show="isShowL" class="mask"  @click="handClickQuit()">    <!-- 用户选择菜单左侧 -->
                <div class="lBox">  <!-- 左侧第一栏 -->
                    <div class="lBoxL" @click.stop="stop()">
                        <ul>
                            <li @click.stop="handClickList(i,v.id)" :class="listIndex == i ? listActiveShow : listActiveHidden" v-for="(v,i) of list" :key="v.id"><i v-html="v.icon"></i>{{v.name}}</li>
                        </ul>
                    </div>
                    <div class="lBoxR" @click.stop="stop()"> <!-- 左侧第二栏，按需加载 -->
                        <ul>
                            <li v-for="(v,i) of item[itemId]" :key="i" @click="lBoxRTrue(v)" :style=" typeL == v ? lColor : lColorHid">{{v}}</li>
                        </ul>
                    </div>
                </div>
            </div>
            <div v-show="isShowM" class="mask"  @click.stop="handClickQuit()"> <!-- 中间 -->
                <div class="mBox">
                    <div class="mBoxCont">
                        <ul v-for="(v,k) of mObj" :key="k">
                            <p><i v-html="v.icon"></i>{{k}}</p>
                            <li @click.stop="handClickMList(i,v.id)" :class=" mList[v.id] === i ? listActiveShow : listActiveHidden" v-for="(value,i) of v.data" :key="i+100" >{{value}}</li>
                        </ul>   
                    </div>
                    <div class="mBoxFot">
                        <div @click.stop="handClickRect()">重置</div>
                        <div @click="handClickSure()">确定</div>
                    </div>
                </div>
            </div>
            <div v-show="isShowR" class="mask" @click="handClickQuit()">  <!-- 右侧 -->
                <div class="rBox">
                    <ul>
                        <li @click.stop="handClickRList(i)" :class=" rIndex === i ? listActiveShow : listActiveHidden" v-for="(v,i) of rList" :key="i" >
                            <i v-html="v.icon"></i>{{i}}<i style="float:right" v-html="v.isShow"></i>
                        </li>
                    </ul>
                    
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {mapMutations, mapActions} from "vuex"
    export default {
        name : "screen",
        data:()=>{
            return {
                hActive:"active",   // 商户
                pActive:"",     // 商品
                // screenType:"merchant",
                typeL:"全部",   // 用户手动选择的类型 ，默认 全部
                typeR:"智能排序",   // 用户选择的类型，默认 自能排序
                downUp:"&#xe509;",  // 右侧默认  向下图标
                UpL:"",    // 左侧点击 向上图标
                UpM:"",    // 中间点击 向上图标
                isShowL: false, // 左，中，右  菜单的显示
                isShowM: false,
                isShowR: false,
                list:[              // 左侧第一栏数据
                    {
                        id:1001,
                        icon:"&#xe606;",
                        name:"全部频道"
                    },
                    {
                        id:1002,
                        icon:"&#xe676;",
                        name:"餐厅"
                    },
                    {
                        id:1003,
                        icon:"&#xe6ab;",
                        name:"美容/SPA"
                    },
                    {
                        id:1004,
                        icon:"&#xe671;",
                        name:"夜生活"
                    },
                    {
                        id:1005,
                        icon:"&#xe6a4;",
                        name:"咖啡厅"
                    },
                    {
                        id:1006,
                        icon:"&#xe62b;",
                        name:"甜品店"
                    },
                    {
                        id:1007,
                        icon:"&#xe60c;",
                        name:"艺术馆"
                    }
                ],
                listIndex : 0,  // 左侧第一栏 active 所在的位置，点击改变。默认第一项
                listActiveShow: "",   // 控制active的显示隐藏
                listActiveHidden:"",
                lColor :"color: #D9A961;",
                lColorHid : "",
                itemId:"1001",  // 根据显示的左侧第一栏的id  显示第二栏的相应数据
                item:{  // 左侧第二栏数据，根据id进行相应的加载
                    "1001":["全部"],
                    "1002":["全部","西餐","咖啡厅","日本料理","火锅","其它","酒吧","甜品店","粤菜","川菜","北京菜",
                            "创意菜","自助餐","东南亚菜","韩国料理","江浙菜","茶馆","特色小吃","云贵菜","意大利菜",
                            "海鲜","台湾菜","素食","湘菜","融合菜","私房菜","徽菜","西北菜","法国菜","淮扬菜","鲁菜",
                            "上海菜","东北菜","德国菜","俄罗斯菜","西班牙菜","中东菜","印度菜","闽菜","欧陆菜","南美菜"],
                    "1003":["全部"],
                    "1004":["全部"],
                    "1005":["全部"],
                    "1006":["全部"],
                    "1007":["全部"]
                },
                mObj:{  // 中间数据
                    "服务及优惠":{
                        id:"mlist_1001",
                        icon: "&#xe608",
                        data:["不限","预订","促销","套餐","优惠买单"]
                    },
                    "价格":{
                        id:"mlist_1002",
                        icon: "&#xe64c;",
                        data:["不限","100以下","100-200","200-300","300-500","500以上"]
                    },
                    "商圈":{
                        id:"mlist_1003",
                        icon: "&#xe6fe;",
                        data:["全部","三里屯","望京","亮马桥/三元桥","朝外大街","国贸","大望路","王府井/东单","亚运村",
                            "酒仙桥","建外大街","其它"]
                    },
                    "更多条件（可多选）":{
                        id:"mlist_1004",
                        icon: "&#xe822;",
                        data:["提供茶水","Wi-Fi","提供点心","近地铁","停车位","代客泊车","地铁","近商圈","有观景位","有包厢",
                            "有露台","有酒吧区域","周末早午餐","有机食物","酒店内餐厅","商务宴请","适合小聚","可带宠物","宝宝椅",
                            "残疾人设施"]
                    }
                },
                mList:{ // 控制中间的多个 active 的显示隐藏
                    "mlist_1000" :"",
                    "mlist_1001" :"",
                    "mlist_1002" :"",
                    "mlist_1003" :"",
                    "mlist_1004" :"",
                },
                // mListActiveShow: "mListActive",
                // mListActiveHidden:"",
                rList:{     // 右侧数据
                    "智能排序":{icon:"&#xe627;",isShow:"&#xe642;"},
                    "最新上线":{icon:"&#xe6a4;",isShow:""},
                    "人气最高":{icon:"&#xe61f;",isShow:""},
                    "价格最低":{icon:"&#xe685;",isShow:""},
                    "价格最高":{icon:"&#xe684;",isShow:""}
                },
                rIndex: "智能排序", // 根据index显示 active
                // rListActiveShow:"rListActive",
                // rListActiveHidden:""

            }
        },
        methods:{
            handClickSapn(ele){     //  商户和商品的自由切换
                if(ele == 1){   // 样式的改变
                    this.hActive = "active"
                    this.pActive = ""
                    this.typeL = "全部"     // 菜单数据的改变
                    this.list=[
                            {
                                id:1001,
                                icon:"&#xe606;",
                                name:"全部频道"
                            },
                            {
                                id:1002,
                                icon:"&#xe676;",
                                name:"餐厅"
                            },
                            {
                                id:1003,
                                icon:"&#xe6ab;",
                                name:"美容/SPA"
                            },
                            {
                                id:1004,
                                icon:"&#xe671;",
                                name:"夜生活"
                            },
                            {
                                id:1005,
                                icon:"&#xe6a4;",
                                name:"咖啡厅"
                            },
                            {
                                id:1006,
                                icon:"&#xe62b;",
                                name:"甜品店"
                            },
                            {
                                id:1007,
                                icon:"&#xe60c;",
                                name:"艺术馆"
                            }
                    ],
                    this.item={
                        "1001":["全部"],
                        "1002":["全部","西餐","咖啡厅","日本料理","火锅","其它","酒吧","甜品店","粤菜","川菜","北京菜",
                                "创意菜","自助餐","东南亚菜","韩国料理","江浙菜","茶馆","特色小吃","云贵菜","意大利菜",
                                "海鲜","台湾菜","素食","湘菜","融合菜","私房菜","徽菜","西北菜","法国菜","淮扬菜","鲁菜",
                                "上海菜","东北菜","德国菜","俄罗斯菜","西班牙菜","中东菜","印度菜","闽菜","欧陆菜","南美菜"],
                        "1003":["全部"],
                        "1004":["全部"],
                        "1005":["全部"],
                        "1006":["全部"],
                        "1007":["全部"]
                    },
                    this.mObj={
                        "服务及优惠":{
                            id:"mlist_1001",
                            icon: "&#xe608",
                            data:["不限","预订","促销","套餐","优惠买单"]
                        },
                        "价格":{
                            id:"mlist_1002",
                            icon: "&#xe64c;",
                            data:["不限","100以下","100-200","200-300","300-500","500以上"]
                        },
                        "商圈":{
                            id:"mlist_1003",
                            icon: "&#xe6fe;",
                            data:["全部","三里屯","望京","亮马桥/三元桥","朝外大街","国贸","大望路","王府井/东单","亚运村",
                                "酒仙桥","建外大街","其它"]
                        },
                        "更多条件（可多选）":{
                            id:"mlist_1004",
                            icon: "&#xe822;",
                            data:["提供茶水","Wi-Fi","提供点心","近地铁","停车位","代客泊车","地铁","近商圈","有观景位","有包厢",
                                "有露台","有酒吧区域","周末早午餐","有机食物","酒店内餐厅","商务宴请","适合小聚","可带宠物","宝宝椅",
                                "残疾人设施"]
                        }
                    }
                    this.$router.push({     // screen 子路由的跳转，即list渲染不同数据
                        name : "merchant"
                    })
                    this.setScreenType("merchant")
                }else{
                    this.hActive = ""
                    this.pActive = "active"
                    this.typeL = "美食"
                    this.list=[
                                {
                                    id:1001,
                                    icon:"&#xe676;",
                                    name:"美食"
                                },
                                {
                                    id:1002,
                                    icon:"&#xe604;",
                                    name:"玩乐"
                                },
                            ],
                    this.item = {
                        "1001":["全部","咖啡厅"],
                        "1002":["全部","DIY/体验课","运动/户外","玩乐","派对/团建","演出/展览"],
                    },
                    this.mObj={
                        "人数":{
                            id:"mlist_1000",
                            icon: "&#xe606;",
                            data:["不限","1人","2人","3-4人","4人以上"]
                        },
                        "时段":{
                            id:"mlist_1001",
                            icon: "&#xe61d;",
                            data:["不限","午餐","晚餐","下午茶","早午餐"]
                        },
                        "价格":{
                            id:"mlist_1002",
                            icon: "&#xe64c;",
                            data:["不限","100以下","100-200","200-300","300-500","500以上"]
                        },
                        "商圈":{
                            id:"mlist_1003",
                            icon: "&#xe6fe;",
                            data:["全部","三里屯","工人体育场","大望路","王府井/东单","亮马桥/三元桥","望京","建外大街",
                                "朝外大街","酒仙桥","国贸","其它"]
                        },
                        "更多条件（可多选）":{
                            id:"mlist_1004",
                            icon: "&#xe822;",
                            data:["会员权益","可订今日","可组局"]
                        }
                    },
                    this.$router.push({
                        name : "commodity"
                    })
                    this.setScreenType("commodity")
                }
            },
            // 路由
            handClickBack(){    //  点击返回首页
                this.$router.push("/");
            },
            handClickSearch(){  // 点击跳转搜索页
                this.$router.push("/")
            },
            // 菜单操作
            handClickShow(idnex){   // 点击选择栏操作，出现或关闭隐藏菜单
                if(idnex == 1){
                    this.isShowL = this.isShowL == false ? true : false // 显示或隐藏
                    if(this.isShowL){   // 左侧显示，出现 向上的图标
                        this.listActiveShow = "listActive"
                        this.UpL = "&#xe615;"
                        this.isShowM = this.isShowR = false;    // 其他菜单恢复未展开的初始状态
                        this.UpM = ""
                        this.downUp ="&#xe509;"
                    }else{
                        this.UpL = ""
                    }
                }else if(idnex == 2){   // 同上
                    this.isShowM = this.isShowM == false ? true : false
                    if(this.isShowM){
                        this.listActiveShow = "mListActive"
                        this.UpM = "&#xe615;"
                        this.isShowL = this.isShowR = false;
                        this.UpL = ""
                        this.downUp ="&#xe509;"
                    }else{
                        this.UpM = ""
                    }
                }else if(idnex == 3){ // 同上
                    this.isShowR = this.isShowR == false ? true : false
                    if(this.isShowR){
                        this.listActiveShow = "rListActive"
                        this.downUp ="&#xe615;"
                        this.isShowL = this.isShowM = false;
                        this.UpM = this.UpL = ""
                    }else{
                        this.downUp ="&#xe509;"
                    }
                }
            },
            // 左侧
            handClickList(index,id){    // 左侧第一栏，通过改变 listIndex改变 active，同时显示相应的第二栏
                this.listIndex = index
                this.itemId = `${id}`
                // console.log(this.item[this.itemId]);
            },
            lBoxRTrue(v){   // 左侧菜单的选择，进行相应的跳转
                this.typeL = v;
                this.isShowL= false;
                this.UpL = ""
                this.setScreenType("lcake")                
            },
            // 中间
            handClickMList(index,id){   // 根据 id 显示不同行的相应 active
                this.mList[id] = index
            },
            handClickRect(){    // 中间 的重置按钮，点击置空 中间的所有 active
                for(var i in this.mList){
                  this.mList[i] = ""
                }
            },
            handClickSure(){    // 选中筛选
                this.setScreenType("mguesslike")  
            },
            // 右侧
            handClickRList(index){  // 右侧点击图标，样式的相应改变
                for(var i in this.rList){
                    if(index == i) this.rIndex = i;
                    this.rList[i].isShow = "";
                }    
                this.rList[index].isShow = "&#xe642;" 
                this.typeR = index;
                this.isShowR = false;
                this.downUp ="&#xe509;"           
                this.setScreenType("rhot")
            },
            handClickQuit(){    // 点击黑色蒙版，退出菜单
                this.isShowL = this.isShowM = this.isShowR = false;     
            },
            stop(){},   //阻止冒泡，阻止只要点击菜单就退出蒙版；
            ...mapMutations(["setScreenType"]),
            ...mapActions(["getScreenData"])
        },
        mounted() {
            if(this.hActive == "active"){
                this.$router.push({
                    name : "merchant"
                })
            }
        },
        created() {
            this.getScreenData()
        },
    }
</script>

<style lang="scss" scoped>
    @import '@/style/usage/core/reset.scss';
    @font-face {
        font-family: 'screenIcon';
        src: url('../../assets/iconfonts/iconfont-1.woff') format('woff'),
            url('../../assets/iconfonts/iconfont-1.ttf') format('truetype'),
    }
    .container{
        @include flexbox();
        @include flex-direction(column);
        width: 100%;
        background: #FFF; 
        height: 100%;
        header{
            height: .45rem;
            @include flexbox();
            justify-content: center;
            align-items: center;
            border-bottom: .01rem solid #DADADA;
            i{
                @include flex();
                font-family: 'screenIcon';
                font-size: .18rem;
                font-weight: bold;
                padding-left: .05rem; 
                &:last-child{
                    text-align: right;
                    padding-right: .1rem;
                }
            }
            div{
                @include flex();
                text-align: center;
                font-size: .18rem;
                height: 100%;
                line-height: .45rem;
                span{
                    height: 100%;
                    display: inline-block;
                }
            }
        }
        .search{
            height: .45rem;
            @include flexbox();
            justify-content: center;
            border-bottom: .01rem solid #F1F1F1;
            div{
                @include flex();
                @include flexbox();
                height: 100%;
                line-height: .44rem;
                justify-content: center;
                align-items: center;
                >span{
                    height: .24rem;
                    line-height: .24rem;
                    display: block;
                    width: 100%;
                    text-align: center;
                    border-right: .01rem solid #EEE;
                    color: #999;
                    i{
                        font-family: 'screenIcon';
                        font-size: .16rem;
                    }
                }
            }
        }
        .list{
            @include flex();
            width: 100%;
            overflow: hidden;
            position: relative;
            .mask{
                height: 100%;
                width: 100%;
                position: absolute;
                background: rgba(0,0,0,.4);
                top: 0;
                font-size: .12rem;
                color: #111;
                i{
                    font-family: 'screenIcon';
                    padding-right: .12rem;
                    font-size: .14rem;
                }
                .lBox{
                    border-top: 1px solid #FCFCFC;
                    background: #FFF;
                    @include flexbox();
                    overflow: hidden;
                    height: 4rem;
                    .lBoxL{
                        background: #F4F4F4;
                        @include flex();
                        width: 100%;
                        padding-bottom: .84rem;
                        li{
                            padding-left: .25rem;
                            height: .45rem;
                            line-height: .45rem;
                            i:first-of-type{
                                font-size: .12rem;
                            }
                        }
                    }
                    .lBoxR{
                        @include flex();
                        width: 100%;
                        padding: 0 .15rem;
                        overflow: scroll;
                        li{
                            border-bottom: 1px solid #EFEFEF;
                            border-top: 1px solid #F5F5F5;
                            height: .45rem;
                            line-height: .45rem;
                        }
                        li:first-of-type{
                            border-top: 0;
                        }
                    }
                    .listActive{background: #FFF}
                }
                .mBox{
                    height: 4.6rem;
                    width: 100%;
                    @include flexbox();
                    @include flex-direction(column);
                    background: #FFF;
                    .mBoxCont{
                        overflow: hidden;
                        @include flexbox();
                        @include flex-direction(column);
                        @include flex();
                        width:100%;
                        overflow: scroll;
                        padding-left: .14rem;
                        ul{
                            padding: .14rem 0 .19rem 0;
                           
                            p{
                                font-size: .14rem;
                            }
                            li{
                                height: .3rem;
                                line-height: .3rem;
                                width: .8rem;
                                float: left;
                                margin-top: .09rem;
                                margin-right: .09rem;
                                color: #555;
                                border: 1px solid #bbb;
                                text-align: center;
                            }
                            .mListActive{
                                border-color: #E4C28F;
                                color: #E4C28F;
                                background: #FBF8F3;
                            }
                        }
                        ul:last-child{
                            border-top: 1px solid #E4E4E4;
                        }
                    }
                    .mBoxFot{
                        height: .5rem;
                        width: 100%;
                        @include flexbox();
                        div{
                            @include flex();
                            color: #555;
                            font-size: .17rem;
                            line-height: .5rem;
                            text-align: center;
                            &:last-child{
                                background: linear-gradient(90deg,#ff4d85,#ff5a5e);
                                color: #FFF;
                            }
                        }

                    }
                }
                .rBox{
                    background: #FFF;
                    ul{
                        padding: 0 .15rem;
                        li{
                            height: .5rem;
                            border-bottom: 1px solid #EAEAEA;
                            line-height: .5rem;
                        }
                        .rListActive{
                            color: #D9A961;
                        }
                    }
                }
            }
        }
    }
    .active{
        border-bottom: .02rem solid;
        font-weight: bold;
    }
    .listActive{
        background: #FFF;
    }
    
</style>
