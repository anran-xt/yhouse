<template>
 <div class="detailContainer">
     <header>
           <i class="yo-ico" @click="clickBack">&#xe60f;</i><h1>图文详情</h1><span class="yo-ico" @click="clickHome">&#xe607;</span>
        </header>
        <main>
           <ul id="showLeft" >
            <li >

              <div id="userImg">
               <p>
                  <img class="userlogo" :src="userData.data.showPicSmallUrl" alt=""/>
                <span>{{userData.data.userName}}</span>
                <img class="vlogo" src="https://r.yhres.com/sns/icon_user_talent@2x.png" alt="">
               </p>
                <i>+ 关注</i>
              </div>

              <div id="userContent" >
                <p>
                  <i>{{userData.data.title}}</i>
                  <a>{{userData.data.description}}</a>
                </p>
                <ul id="imgs">
                  <li v-for="(value,i) of userData.data.picUrls" :key="i"><img :src="value" alt=""/></li>
                </ul>

                  <p class="tabName">  
                    <i class="yo-ico">&#xe66c;</i>
                    {{userData.data.tabNameList[0]}}
                    <span v-for="(v,i) of userData.data.tagNameList" :key="i">#{{v}}#</span>
                  </p>
                  <p class="tagTime">{{userData.data.time}}</p>
                <div class="common">
                  <span class="yo-ico">&#xe6b3;</span><i>赞{{userData.data.likeUserNum}}</i>
                </div>

              <!-- 点赞头像 -->
              <ul class="likeUser">
                <li v-for=" (v,index) of userData.data.likeUserList" :key="index">
                  <img :src="v.showPicSmallUrl" alt="">
                </li>
                <span>...</span>
              </ul>

              <div class="spliceBgColor"></div>

               <p class="commentNum">评论{{userData.data.commentNum}}</p>

             <form class="addComon">
                <input type="text" placeholder="添加评论..."/>
                <button>发送</button>
              </form> 

              <ul class="commonList">
                <li v-for="v of userData.data.commentList" :key="v.id">
                  <img :src="v.userShowPicSmallUrl" alt=""/>
                  <p>
                    <i>{{v.userName}}</i>
                    <b>{{v.time}}</b>
                    <em>{{v.content}}</em>
                  </p>
                  <span class="yo-ico">&#xe60a;</span>
                </li>
              </ul>

              <div class="findMore">查看全部评论 ></div>
              <div class="hotMore">
                <p class="hotTitle">热门推荐</p>
                <ul class="moreUser">
                  <li v-for="v of commentLists" :key="v.data.id">
                    <img class="bigUserImg" :src="v.data.coverPicUrl" alt=""/>
                    <span class="describe">{{v.data.description}}</span>
                    <p>
                      <img :src="v.data.showPicSmallUrl" alt=""/>
                      <b>{{v.data.userName}}</b>
                      <i class="yo-ico">&#xe6b3;</i>
                      <em>{{v.data.likeUserNum}}</em>
                    </p>
                  </li>
                </ul>
              </div>
             
              
             
             </div>  
            </li>
          </ul>
        </main>
 </div>
</template>

<script>
import {Indicator } from 'mint-ui'
 export default {
   name: 'subDetailContent',
   data () {
     return {
     }
   },
   methods:{
     clickBack(){
       this.$router.push({
         path:'/subject2/left'
       })
     },
     clickHome(){
       this.$router.push({
         path:'/'
       })
     }
   },
   components: {

   },
   mounted(){

   },
   computed: {
     userData(){
       let index = this.$route.query.index;
       let dataStr = this.$route.query.dataStr;
       var data = this.$store.state.subDetailData[dataStr];
      if(data.length == 0)
      {
        Indicator.open();
        return {"data":{"picUrls":[]}}
      }
        Indicator.close();
        // console.log(data[index]);
         return data[index];
      
     },
     commentLists(){
      //  console.log(this.$store.state.commentData.data.doc);
       return this.$store.state.commentData.data.doc;
     }
    
   }
 }
</script>

<style lang="scss" scoped>
@import "@/style/usage/core/reset.scss";
@font-face {
  font-family: "yofont";
  src: url("../assets/iconfonts/iconfont.woff") format("woff"),
    url("../assets/iconfonts/iconfont.ttf") format("truetype");
}
.detailContainer{
    height: 100%;
    @include flexbox();
    @include flex-direction(column);
        header{
        height:.48rem;
        width:100%;
        @include flexbox();
        font-size:.16rem;
        padding-left:.03rem;
        border-bottom:1px solid rgb(223, 221, 221);
        h1{
          font-weight:900;
          line-height:.48rem;
          padding:0px 1.19rem;
          font-size:.18rem;
        }
        i{
          font-size:.21rem;
          line-height:.44rem;
        }
        span{
          font-size:.23rem;
          line-height:.44rem;
          color:#777;
        }
      }
    main{
      overflow-y:scroll;
      height:100%;
      #showLeft{
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
            padding:.1rem .15rem;
            display:block;
            i{
              font-size:20px;
              color:#111;
              padding:  .3rem 0px;
              font-weight:bolder;
            }
            a {
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
            @include flex-direction(column);
            li{
               padding:0 .15rem .1rem .15rem;
              img{
                height:3.45rem;
                width:3.45rem;
              }
            }
          }
        
          .tabName{
            color:#d9a961;
            font-size:12px;
            i{
              color:#d9a961;
              font-size:13px;
              font-weight:100;
            }
            span{
              padding:0 .1rem;
              color:#d9a961;
              font-size:12px;
            }
          }
          .tagTime{
            font-size:12px;
            color:#999;
            padding-top:0;
            padding-bottom:0;
          }
          .common{
            height:.53rem;
            line-height:.53rem;
            padding:0 .1rem;
            color:#000;
            span{
              color:#000;
              font-weight:500;
              padding-right:.08rem;
              font-size:20px;
            }
            i{
                padding-right:.15rem;
              }
          }
          .likeUser{
            @include flexbox();
            padding-left:.15rem;
            li{
              padding-right:.05rem;
              img{
              height:.25rem;
              width:.25rem;
              border-radius: 50%;
            }
            }
            span{
              height:.25rem;
              width:.25rem;
              border-radius: 50%;
              line-height:.25rem;
              text-align:center;
              background:#eee;
            }
          }
          .spliceBgColor{
            margin-top:.15rem;
            height:.15rem;
            background:#eee;
          }
          .addComon{
            padding-left:.15rem;
            input{
              padding-left:.2rem;
              height:.4rem;
              width:2.48rem;
              background:rgba(243, 241, 241,.8);
              border:none;
            }
            button{
              width:.87rem;
              height:.4rem;
              background:#ff4d85;
              line-height: .4rem;
              text-align:center;
              color:#fff;
              border:none;
              margin-left:.1rem;
              font-size:16px;
            }
          }
          .commonList{
            padding-top:.2rem;
            @include flexbox();
            @include flex-direction(column);
            padding-left:.15rem;
           li{
                @include flexbox();
                  img{
                  margin-top:.2rem;
                  height:.4rem;
                  width:.4rem;
                  border-radius: 50%;
                }
                p{
                  padding-left:.1rem;
                  @include flexbox();
                  @include flex-direction(column);
                  width:2.8rem;
                  font-size:12px;
                  i{
                    font-size:12px;
                    padding:0;
                    color:#111;
                  }
                  b{
                    color:#999;
                  }
                  em{
                    font-size:14px;
                    color:#666;
                  }
                }
                span{
                    font-size:20px;
                    margin-top:.05rem;
                  }
              }
           }
           .findMore{
             height:.35rem;
             line-height:.35rem;
             font-size:14px;
             color:#ff4d85;
             text-align:center;
             padding-bottom:.4rem;
             border-bottom:.15rem solid #eee;
           }
           .hotMore{
             padding-top:.1rem;
             .hotTitle{
               text-align:center;
               color:#333;
             }
             .moreUser{
               @include flexbox();
               flex-wrap:wrap;
               li{
                 @include flexbox();
                 width:45%;
                @include flex-direction(column);
                margin-left:.13rem;
                margin-bottom:.15rem;
                 .bigUserImg{
                   width:1.675rem;
                   height:1.675rem;
                 }
                 .describe{
                   display:block;
                   width:1.6rem;
                    overflow:hidden;
                   color:#111;
                   white-space: nowrap;
                   line-height:.28rem;
                   font-size:12px;
                   text-overflow: ellipsis;
                 }
                 p{
                   padding-left:0;
                   padding-right:0;
                   @include flexbox();
                   img{
                     width:.3rem;
                     height:.3rem;
                     border-radius: 50%;

                   }
                   b{
                     padding-left:.04rem;
                    padding-bottom:0px;
                    display:block;
                   width:1rem;
                   line-height: .3rem;
                  overflow:hidden;
                   color:#333;
                   white-space: nowrap;
                   font-size:10px;
                   text-overflow: ellipsis;
                   font-weight:100;
                   }
                   i{
                     font-size:12px;
                     color:#777;
                     padding:0;
                     padding-left:.4rem;
                   }
                   em{
                     font-size:12px;
                     color:#777;
                     padding:0;
                      padding-left:.03rem;
                   }
                 }
               }
             }
           }
          
        }


      }
    }
      }
}

 
</style>


