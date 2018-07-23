<template>
 <div>
   <div  class="subjectImgHeader">
     <img :src="subjectImg" alt=""/>
   </div>
   <div class="subjectTitle reset">
        <p v-for=" (v,i) of subjectTitle1" :key="i">{{v}}</p>
    </div>
    <div class="subjectTitle">
        <p v-for=" (v,i) of subjectTitle2" :key="i">{{v}}</p>
    </div>
    <ul id="subjectList">
      <router-link to="" tag="li" v-for="v of subjectList" :key="v.linkId">
        <img :src="v.picUrl" alt="" />
        <div id="listTitle">
          <p class="tag1">{{v.hostName}}</p>
          <p class="tag2">{{v.title}}</p>
          <p class="tag3">{{v.price}}</p>
          <p class="tag4">{{v.districtName}}</p>
        </div>
      </router-link>
    </ul>
     
 </div>
</template>

<script>
import { Indicator } from 'mint-ui';
import $ from 'axios'
 export default {
   name: 'subjectcontent-6',
   data () {
     return {
       subjectTitle1:['你怎么舍得宅在家中','将大把时光白白浪费？'],
       subjectTitle2:['不如翻出你的户外游玩计划','逃去未知的旅途 ','淋漓尽致地体会这场探险之路 ','给你的心情放大假！' ],
       subjectList:[],
       subjectImg:''
     }
   },
   components: {

   },
   mounted(){
     Indicator.open();
     $.get('list/subject_list2')
     .then((result)=>{
      this.subjectList = result.data.data.contentList;
      this.subjectImg = result.data.data.picUrl;
      Indicator.close();
     })
   }
 }
</script>

<style lang='scss' scoped>
@import '@/style/usage/core/reset.scss';
.subjectImgHeader{
  width:100%;
  height:1.95rem;
  overflow:hidden;
  img{
    width:100%;
    height:2.345rem;
  }
}
.subjectTitle{
    margin:.3rem 0 .45rem 0;
    p{
      text-align:center;
      color:#555;
      line-height:.28rem;
      font-size:.16rem;
      word-wrap:break-word;
      word-break:break-all;
      z-index: 999;
    }
  }
  .reset{
    margin-bottom:0;
  }
  #subjectList{
    padding:0 .15rem;
    li{ 
      margin-bottom:.1rem;
      height:2.156rem;
      width:100%;
      position:relative;
      overflow:hidden;
      border-radius: .04rem;
      color:#fff;
      background: rgba(0,0,0,.3);
      img{
      width:100%;
      height:2.156rem;
      }
      #listTitle{
        position:absolute;
        left:0;
        top:0;
         height:2.156rem;
         width:3.45rem;
         background:rgba(0,0,0,.4);
         text-align: center;
          .tag1{
            margin-top:.4rem;
            font-size: 14px;
          }
        .tag2{
          font-weight:400;
          font-size: 16px;
          }
        .tag3{
          margin-top:.6rem;
          line-height:.24rem;
          }
          .tag4{
          line-height:.24rem;
          font-size:10px;
          font-weight:100;
          }
      }
    }
  }

 
</style>
