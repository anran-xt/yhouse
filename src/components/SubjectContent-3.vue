<template>
 <div>
   <div  class="subjectImgHeader">
     <img :src="subjectImg" alt=""/>
   </div>
   <div id="contentHtml3" v-html = "topicDescription">

        
        
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

import $ from 'axios'
import  {Indicator} from 'mint-ui'
 export default {
   name: 'subjectcontent-3',
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
     $.get('list/subject_list5')
     .then((result)=>{
        Indicator.close();
       let data =  result.data.data;
       this.subjectImg = data.picUrl;
       this.subjectList = data.contentList
       this.topicDescription = data.topicDescription;
      //  console.log(this.topicDescription);
     })
   }
 }
</script>

<style lang='scss' scoped>
@import '@/style/usage/core/reset.scss';
.subjectImgHeader{
  width:100%;
  height:1.95rem;
  img{
    width:3.75rem;
    height:1.935rem;
  }
}
  #contentHtml3{
    color:#777;
    margin:0 auto;
    font-size:14px;
    line-height:.28rem;
    margin-top:.3rem;
    width:3.45rem;
  }
   #contentHtml3 /deep/ p span img{
     height:4.16rem;
     width:3.45rem !important;
   }
   #contentHtml3 /deep/ p img{
     height:2.156rem;
     width:3.45rem !important;
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
