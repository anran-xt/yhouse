<template>
 <div>    
          <ul id="showLeft" 
            v-infinite-scroll="loadMore"
            :infinite-scroll-disabled="busy"
            infinite-scroll-distance="10"
          >
            <li v-for="(v,i) of userList" :key="v.id">
             <div id="splice"></div>
              <div id="userImg">
               <p>
                  <img class="userlogo" :src="v.data.showPicSmallUrl" alt=""/>
                <span>{{v.data.userName}}</span>
                <img class="vlogo" src="https://r.yhres.com/sns/icon_user_talent@2x.png" alt="">
               </p>
                <i>+ 关注</i>
              </div>

              <div id="userContent" @click="handleClickToDetail(i)">
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
            <div class="loadMore" v-show="ifshowLoad"> 正在加载...</div>
          </ul>
          
        </div>
</template>

<script>
import $ from 'axios'
import {Indicator,InfiniteScroll,Toast} from 'mint-ui'
 export default {
   name: 'subject2Right',
   data () {
     return {
       subjectTxt:'',
       subjectTab:'',
       subjectTitle:'',
       subjectTip:'',
       contentNum:'',
       redPacketNum:'',
       ifshowLoad:false,
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
       this.ifshowLoad = true;
       this.loadNum ++;
       this.busy = true;
       if(this.loadNum <=3){
          setTimeout(()=>{ 
         let list = 'loadmoreList' + this.loadNum;
             this.userList.push(...this[list]);
       },1000)
       this.busy = false;
       }else{
         this.busy = true;
         this.ifshowLoad = false;
         Toast('没有更多数据');
       }
     },
     handleClickToDetail(index){
       this.$router.push({
        name: 'subDetail',
        query: {
          index,
          dataStr:'subDetailRight'
        }
      })
     }
   },
   mounted(){
     console.log('data');
    //  Indicator.open();
     this.loadNum = 0;
    //  Indicator.open();
     
     $.get('list/subject_list46')
     .then((result)=>{
      // Indicator.close();
       let data = result.data.data.doc;
      //  this.userList = data;
       this.loadmoreList1 = data;
      //  this.ifshowLoad = true;
      //  console.log('data');
       
     })
      $.get('list/subject_list47')
     .then((result)=>{
      let data = result.data.data.doc;
      this.loadmoreList2 = data;
      //  console.log(data);
     })
      $.get('list/subject_list48')
     .then((result)=>{
      let data = result.data.data.doc;
      this.loadmoreList3 = data;
      //  console.log(data);
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

  // #sortChoose{
    #showLeft{
      overflow-y:auto;
      max-height:6.67rem;
      .loadMore{
        height:.4rem;
        line-height:.4rem;
        font-size:16px;
        color:#333;
        text-align:center;
      }
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
  // }
</style>
