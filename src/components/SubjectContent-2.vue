<template>
 <div>
      <div id="subjectImg">
          <img src="http://f.yhres.com/tab/2017/10/25/1508925095486982.jpg-q75" alt=""/>
          <div id="imgShadow">
            <p>{{subjectTab}}</p>
            <span>{{subjectTitle}}</span>
          </div>
          <img class="showLogo" src="http://r.yhres.com/sns/event_icon_hongbaotop@2x.png" alt="" />
          <p class="logoTitle">{{redPacketNum}}元现金奖金</p>
          <span id="activePro">{{subjectTip}}</span>
          <p class="subDec"><i>“</i><b>{{subjectTxt}}</b></p>
          <span class="activeRole">活动规则</span>
        </div>

        <div id="sortChoose">
          <div id="sort">
            <router-link class="showActive" tag="span" to="">排行榜</router-link>
            <router-link class="sortRight" tag="span" to="">最新{{contentNum}}</router-link>
          </div>
          

          <ul id="showLeft" 
            v-infinite-scroll="loadMore"
            :infinite-scroll-disabled="busy"
            infinite-scroll-distance="10"
          >
            <li v-for="v of userList" :key="v.id">
              <div id="leftbox1" :class="v.rank>3 ? 'color2':'color1'">
                <em class="yo-ico">&#xe637;</em>
                <span><i>NO.{{v.rank}}</i><b>{{v.redPacketNum}}元</b></span>
              </div>

              <div id="userImg">
               <p>
                  <img class="userlogo" :src="v.data.showPicSmallUrl" alt=""/>
                <span>{{v.data.userName}}</span>
                <img class="vlogo" src="https://r.yhres.com/sns/icon_user_talent@2x.png" alt="">
               </p>
                <i>+ 关注</i>
              </div>

              <div id="userContent">
                <p>
                  <a>{{v.data.description}}</a>
                </p>
                <ul id="imgs">
                  <li v-for="(value,i) of v.data.smallPicUrls" :key="i"><img :src="value" alt=""/></li>
                </ul>

                <!-- 判断是否有进店选项地址 -->
                <div id="address" v-if="v.data.hostInfoList ? true:false">
                  <img :src="v.data.hostInfoList[0].hostPicUrl" alt=""/>
                  <div class="comeIn">
                    <p>
                      <b>{{v.data.hostInfoList[0].hostName}}</b>
                      <!-- <span class="yo-ico logomore">&#xe620;</span> -->
                      <i>{{v.data.hostInfoList[0].city}} {{v.data.hostInfoList[0].businessDistrict}} {{v.data.hostInfoList[0].cuisineStyle}}</i>
                    </p>
                    <span>
                      进店<i class="yo-ico">&#xe620;</i>
                    </span>
                  </div>
                </div>

                <div class="common">
                  <span class="yo-ico">&#xe6b3;</span><i>{{v.data.likeUserNum}}</i>
                  <span class="yo-ico">&#xe69f;</span><i>{{v.data.commentNum}}</i>
                </div>
              </div>
            </li>
          </ul>



           <ul id="showLeft" style="display:none">
            <li v-for="v of userList" :key="v.id">
                <div id="splice"></div>
              <div id="userImg">
               <p>
                  <img class="userlogo" :src="v.data.showPicSmallUrl" alt=""/>
                <span>{{v.data.userName}}</span>
                <img class="vlogo" src="https://r.yhres.com/sns/icon_user_talent@2x.png" alt="">
               </p>
                <i>+ 关注</i>
              </div>

              <div id="userContent">
                <p>
                  <a>{{v.data.description}}</a>
                </p>
                <ul id="imgs">
                  <li v-for="(value,i) of v.data.smallPicUrls" :key="i"><img :src="value" alt=""/></li>
                </ul>

                <!-- 判断是否有进店选项地址 -->
                <div id="address" v-if="v.data.hostInfoList ? true:false">
                  <img :src="v.data.hostInfoList[0].hostPicUrl" alt=""/>
                  <div class="comeIn">
                    <p>
                      <b>{{v.data.hostInfoList[0].hostName}}</b>
                      <!-- <span class="yo-ico logomore">&#xe620;</span> -->
                      <i>{{v.data.hostInfoList[0].city}} {{v.data.hostInfoList[0].businessDistrict}} {{v.data.hostInfoList[0].cuisineStyle}}</i>
                    </p>
                    <span>
                      进店<i class="yo-ico">&#xe620;</i>
                    </span>
                  </div>
                </div>

                <div class="common">
                  <span class="yo-ico">&#xe6b3;</span><i>{{v.data.likeUserNum}}</i>
                  <span class="yo-ico">&#xe69f;</span><i>{{v.data.commentNum}}</i>
                </div>
              </div>
            </li>
          </ul>

         


        </div>
   </div>
</template>

<script>
import $ from 'axios'
import {Indicator,InfiniteScroll,Toast} from 'mint-ui'
 export default {
   name: 'subjectcontent-2',
   data () {
     return {
       subjectTxt:'',
       subjectTab:'',
       subjectTitle:'',
       subjectTip:'',
       contentNum:'',
       redPacketNum:'',
      //  排行榜
      userList:[],
      loadmoreList1:[],
      loadmoreList2:[],
      loadmoreList3:[],
      loadmoreList4:[],
      loadNum:0,
      // 是否在加载过程中
      busy:false

     }
   },
   components: {

   },
   methods: {
     loadMore(){
       console.log('roll')
       this.loadNum ++;
       this.busy = true;
       if(this.loadNum <=3){
          setTimeout(()=>{
            console.log(0);
         let list = 'loadmoreList' + this.loadNum;
          console.log(list);
             this.userList.push(...this[list]);
             console.log(this.userList);
       },1000)
       this.busy = false;
       }else{
         this.busy = true;
         Toast('没有更多数据');
       }
     }
   },
   mounted(){
     Indicator.open();
     this.loadNum = 0;
    //  Indicator.open();
     $.get('list/subject_list4')
     .then((result)=>{
      var data = result.data.data;
      this.subjectList = data.contentList;
      this.subjectTxt = data.description;
      this.subjectTab = data.tab;
      this.subjectTitle = data.title;
      this.subjectTip = data.tip;
      this.contentNum = data.contentNum;
      this.redPacketNum = data.redPacketNum;
      // console.log(result);
     })
     $.get('list/subject_list42')
     .then((result)=>{
      Indicator.close();
       let data = result.data.data.doc;
      //  this.userList = data;
       this.loadmoreList1 = data;
     })
      $.get('list/subject_list43')
     .then((result)=>{
      let data = result.data.data.doc;
      this.loadmoreList2 = data;
     })
      $.get('list/subject_list44')
     .then((result)=>{
      let data = result.data.data.doc;
      this.loadmoreList3 = data;
     })
     $.get('list/subject_list45')
     .then((result)=>{
      let data = result.data.data.doc;
      this.loadmoreList4 = data;
     })
   }
 }
</script>

<style lang='scss' scoped>
@import '@/style/usage/core/reset.scss';
@font-face {
    font-family: 'yofont';
    src:
      url('../assets/iconfonts/iconfont.woff') format('woff'),
      url('../assets/iconfonts/iconfont.ttf') format('truetype');
  }
  #subjectImg{
    height: 1.575rem;
    text-align:center;
    position:relative;
    img{
      width:100%;
      height: 1.575rem;
    }
    #imgShadow{
      position:absolute;
      left:0;
      top:0;
      height:1.575rem;
      width:100%;
      background:rgba(0,0,0,.3);
      color:#fff;
      text-align:center;
      p{
        margin-top:.6rem;
        font-size:.17rem;
        line-height:.25rem;
        font-weight:700;
        margin-bottom:.08rem;
      }
      span{
        font-size:.14rem;
        line-height:.15rem;
      }
    }
    .showLogo{
      position:absolute;
      height:.44rem;
      width:.44rem;
      z-index:10;
      left:50%;
      margin-left:-22px;
      bottom:-22px;
    }
    .logoTitle{
      color:#ff5c60;
      font-weight:700;
      font-size:.21rem;
      text-align:center;
      margin-top:.35rem;
      margin-bottom:.08rem;
    }
    #activePro{
      font-size:10px;
    }
    .subDec{
      padding:0 .15rem;
      @include flexbox();
      margin-top:.1rem;
      i{
        margin-right:-.02rem;
        margin-top:-.15rem;;
        color:#777;
        opacity:.8;
        font-size:.5rem;
        font-weight:700;
      }
      b{
         color:#333;
         font-weight:100;
      }
    }
    .activeRole{
      display:inline-block;
      height:.31rem;
      line-height:.31rem;
      width:.88rem;
      border:1px solid #CBA162;
      color:#CBA162;
      font-weight:500;
    }
  }
  #sortChoose{
    margin-top:2.2rem;
    #sort{
      padding:0 .7rem;
      font-size:15px;
      line-height:.46rem;
      @include flexbox();
      justify-content: space-between;
      span.showActive{
        color:#ff5c60;
        font-weight:600;
        display: inline-block;
        height:.46rem;
        border-bottom:3px solid #ff5c60;
      }
      .sortRight{

      }
    }
    #showLeft{
      overflow-y:auto;
      max-height:6.67rem;
      li{
        #splice{
          height: .18rem;
          width:100%;
          background:#eee;
        }
        .color1{
          color:#ff5c60;
        }
        .color2{
          color:#d9a961;
        }
        #leftbox1{
        
          padding:0 .15rem;
          padding-top:.1rem;
          height: .55rem;
          background:#eee;
          @include flexbox();
          em{
            font-size:.25rem;
            padding-right: .03rem;
          }
          span{
            padding-left:.03rem;
            @include flexbox();
            @include flex-direction(column);
            i{
              font-weight: 900;
              font-size:14px;
            }
            b{
              margin-top:-.05rem;
              font-size:12px;
            }
          }
        }
        #userImg{
          height:.7rem;
          padding:.1rem;
          border-bottom:1px solid #eee;
          @include flexbox();
          justify-content: space-between;
          .userlogo{
            height: .4rem;
            width:.4rem;
            border-radius: 50%;
          }
          span{
            font-weight:800;
            font-size:15px;
            padding:0 .05rem;
          }
          .vlogo{
            height:.14rem;
            width:.14rem;
          }
          i{
            width:.66rem;
            height:.3rem;
            color:#d9a961;
            border:1px solid #d9a961;
            line-height:.3rem;
            text-align:center;
            margin-top:.05rem;
          }
        }
        #userContent{
          @include flexbox();
          @include flex-direction(column);
          p{
            padding:.5rem .15rem;;
            a {
              text-indent:.8rem;
              display: block;
              color:#333;
              width:100%;
              text-decoration: none;
              color: #111;
              cursor: pointer;
              font-size: 15px;
              line-height: 24px;
              word-break: break-all;
              white-space: pre-wrap;
            }
            span{
              // border:1px solid red;
              font-size:15px;
              line-height:.24rem;
              color:#646464;
              // padding:
            }
          }
          #imgs{
            @include flexbox();
            @include flex-wrap(wrap);
            padding-left:.04rem;
            @include justify-content(center);
            li{
              width:32%;
              padding-right:.05rem;
              padding-bottom:.05rem;
              img{
                height:1.14rem;
                width:1.14rem;
              }
            }
          }
        
          #address{
            background:rgba(187, 184, 184, 0.2);
            @include flexbox();
            img{
              height:.7rem;
              width:.7rem;
            }
            .comeIn{
              @include flexbox();
              justify-content: space-between;
              padding-right:.4rem;
              width:100%;
              p{
                padding-top:.05rem;
                padding-bottom:0;
                padding-left:.08rem;
                color: #111;
                 @include flexbox();
                 @include flex-direction(column);
                position:relative;
                b{
                  width:1.4rem;
                  white-space: nowrap;
                  font-weight:400;
                  overflow: hidden;
                  text-overflow: ellipsis;
                  line-height: .24rem;
                  font-size:.16rem;
                }
                .logomore{
                  position:absolute;
                  right:.05rem;
                  top:-.18rem;
                  color:#111;
                  font-size:.16rem;
                  font-weight:600;
                }
                i{
                   
                  font-size:.1rem;
                  font-weight: 400;
                  margin-top: .1rem;
                }
              }
              span{
                  font-weight:100;
                  justify-content: center;
                  color: #d9a961;
                  font-size: .14rem;
                  line-height: .7rem;
              }
            }
            width:3.5rem;
            margin:0 auto;
            margin:0 auto;
            margin-top:.2rem;
          }
          .common{
            height:.53rem;
            line-height:.53rem;
            padding:0 .1rem;
            color:#999;
            span{
              padding-right:.08rem;
              font-size:20px;
            }
            i{
                padding-right:.15rem;
              }
          }
        }


      }
    }
  }
</style>
