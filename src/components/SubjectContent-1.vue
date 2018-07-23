<template>
 <div>
   <div  class="subjectImgHeader">
     <img :src="subjectImg" alt=""/>
   </div>
   <div id="contentHtml" v-html = "topicDescription">

        
        
    </div>
    <ul id="subjectList">
      <router-link to="" tag="li" v-for="v of subjectList" :key="v.linkId">
        <img :src="v.picUrl" alt="" />
        <div id="listTitle">
          <p class="tag1">{{v.hostName}}</p>
          <p class="tag2">{{v.title}}</p>
          <p class="tag3">{{v.price}}</p>
          <p class="tag4">{{v.districtName}}null&nbsp;|&nbsp;{{v.cuisineStyle}}</p>
        </div>
      </router-link>
    </ul>
     
 </div>
</template>

<script>

import $ from 'axios'
import {Indicator } from 'mint-ui'
 export default {
   name: 'subjectcontent-1',
   data () {
     return {
       subjectImg:'',
       subjectList:[],
       topicDescription:''

     }
   },
   components: {

   },
   mounted(){
     Indicator.open();
     $.get('list/subject_list3')
     .then((result)=>{
        Indicator.close();
       let data =  result.data.data;
       this.subjectImg = data.picUrl;
       this.subjectList = data.contentList
       this.topicDescription = data.topicDescription;

      //  console.log(this.subjectList);
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
    height:1.935rem;
  }
}
  #contentHtml{
    color:#777;
    margin:0 auto;
    font-size:14px;
    line-height:.28rem;
    margin-top:.3rem;
    width:3.45rem;
  }
   #contentHtml /deep/ :nth-child(8) img{
     height:1.725rem;
     width:3.45rem !important;
   }
   #contentHtml /deep/ :nth-child(13) img{
     height:4.52rem;
     margin-left:-.15rem;
     width:3.75rem !important;
   }
   #contentHtml /deep/ :nth-child(15) img{
     height:3.41rem;
     width:3.45rem !important;
   }
    #contentHtml /deep/ :nth-child(16) img{
      height:4.227rem;
      width:3.45rem !important;
    }
    #contentHtml /deep/ :nth-child(17) img{
      height:3.524rem;
      width:3.45rem !important;
    }
    #contentHtml /deep/ :nth-child(18) img{
      height:3.45rem;
    }
    #contentHtml /deep/ :nth-child(20) img{
      height:3.324rem;
    }
    #contentHtml /deep/ :nth-child(22) img{
      height:2.3rem;
    }
    #contentHtml /deep/ :nth-child(28) img{
      height:2.3rem;
    }
    #contentHtml /deep/ :nth-child(30) img{
      height:2.156rem;
    }
    #contentHtml /deep/ :nth-child(39) img{
      height:2.3rem;
    }
    #contentHtml /deep/ :nth-child(41) img{
      height:2.156rem;
    }
     #contentHtml /deep/ :nth-child(50) img{
      height:1.47rem;
    }
    #contentHtml /deep/ :nth-child(52) img{
      height:2.156rem;
    }
    #contentHtml /deep/ :nth-child(61) img{
      height:2.152rem;
    }
    #contentHtml /deep/ :nth-child(63) img{
      height:2.156rem;
    }
    #contentHtml /deep/ :nth-child(72) img{
      height:2.152rem;
    }
    #contentHtml /deep/ :nth-child(74) img{
      height:2.156rem;
    }
    #contentHtml /deep/ :nth-child(83) img{
      height:2.152rem;
    }
    #contentHtml /deep/ :nth-child(85) img{
      height:2.156rem;
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
