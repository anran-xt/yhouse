<template>
<div id="container">
  <div id="dataNum">
    <p>
      <span><i class="yo-ico">&#xe638;</i>{{searchResultTitle[0]}}</span>
      <b>{{searchResultNum[0]}}</b>
    </p>
  </div>

  <ul id="Merchant">
    <li v-for="v of searchList1" :key="v.id">
      <img :src="v.picUrl" alt=""/>
      <div id="picMsg">
        <p>{{v.title}}</p>
        <span>{{v.businessesDistrict}} &nbsp; {{v.uisineStyle}}</span>
        <i><em>人均：</em>{{v.priceStr}}</i>
      </div>
    </li> 
  </ul>

  <div id="loadmore" class="list1">
    <span>{{bottomDesc[0]}}<i class="yo-ico">&#xe620;</i></span>
  </div>

  <div id="title">
    <p>
      <span><i class="yo-ico">&#xe619;</i>{{searchResultTitle[1]}}</span>
      <b>{{searchResultNum[1]}}</b>
    </p>
  </div>

  <ul id="morelist">
    <li v-for="v of searchList2" :key="v.id">
    <span>会员餐厅</span>
    <img :src="v.picUrl" alt=""/>
    <div id="listMsg">
      <h2>{{v.title}}</h2>
      <span>{{v.businessesDistrict}}</span>
      <i>{{v.priceStr}}</i>
      <p>
        <em>{{v.vipEqsTag}}</em>
        <b>{{v.categorys[0]}}</b>
      </p>
    </div>
    </li>
  </ul>

  <div id="loadmore" class="list2">
    <span>{{bottomDesc[1]}}<i class="yo-ico">&#xe620;</i></span>
  </div>

  <div id="searchfooter">
  </div>
  <div id="searchfooter">
  </div>
</div>

</template>

<script>
import $ from 'axios'
export default {
  name: 'searchcontent',
  data() {
    return{
      searchResultTitle:[],
      searchResultNum:[],
      searchList1:[],
      // searchList1More:[],
      // searchList2More:[],
      searchList2:[],
      bottomDesc:[],
    }
  },
  components: {
  },
  methods: {
  },
  mounted () {
     $.get('/list/search_list')
     .then((result)=>{
       let data = result.data.data;
       this.bottomDesc[0] = data.searchData[0].bottomDesc;
       this.bottomDesc[1] = data.searchData[1].bottomDesc;
       this.searchResultTitle[0] = data.searchData[0].title;
       this.searchResultTitle[1] = data.searchData[1].title;
       this.searchResultNum[0] = data.searchData[0].desc;
        this.searchResultNum[1] = data.searchData[1].desc;
       this.searchList1 = data.searchData[0].productInfo;
       this.searchList2 = data.searchData[1].productInfo;
     })
  }
}
</script>
<style lang="scss" scoped>
@import '@/style/usage/core/reset.scss';

@font-face {
    font-family: 'yofont';
    src:
      url('../assets/iconfonts/iconfont.woff') format('woff'),
      url('../assets/iconfonts/iconfont.ttf') format('truetype');
  }
   html,body{
     #container{
       #dataNum{
        padding-top:.6rem;
         width:100%;
         background:#eee;
         p{
           padding: 0 .15rem;
           @include flexbox();
           justify-content: space-between;
           color:#777;
           span{
             color:#333;
             i{
               padding-right:.08rem;
             }
           }
           
           b{
             font-weight:normal;
           }
         }
       }
       #Merchant{
         padding:.15rem;
         padding-top:0;
         li{
           padding:.15rem 0;
           border-bottom:1px solid #eee;
           @include flexbox();
         img{
           width:1.75rem;
           height:1.3rem;
         }
         #picMsg{
           padding-left:.1rem;
           @include flexbox();
           @include flex-direction(column);
           p{
             font-size:.16rem;
             font-weight:600;
             color:#000;
           }
           span{
             line-height:.22rem;
             color:#555;
             font-size:.12rem;
           }
           i{
             color:#111;
             em{
               font-size:.12rem;
               font-style:normal;
             }
           }
         }
         }
         
       }
       #loadmore{
         height:.45rem;
         color:#777;
         text-align:center;
       }
       #title{
         background:#eee;
        p{
          height:.29rem;
          align-items: center;
          color:#999;
          font-size:14px;
          padding: 0 .15rem;
          @include flexbox();
          justify-content: space-between;
          span{
            i{
              padding-right:.07rem;
            }
            color:#333;
          }
          em{
            font-weight:100;
          }
        }
       }
       #morelist{
        padding:0 .15rem;
        li{
          border-bottom: 1px solid #eee;
            padding:.15rem 0;
              @include flexbox();
              position:relative;
              img{
                width:1.75rem;
                height: 1.3rem;
              }
              >span{
                position:absolute;
                width:.675rem;
                height:.22rem;
                background:#e6b977;
                color:#fff;
                font-size:10px;
                text-align: center;
                line-height:.22rem;

              }
              #listMsg{
                padding-left:.1rem;
                @include flexbox();
                @include flex-direction(column);
                h2{
                  font-weight:700;
                  color:#111;
                  margin-bottom:.025rem;
                  font-size:.16rem;
                  font-weight:600;
                }
                span{
                  font-size:.14rem;
                  color:#333;
                  font-size:12px;
                }
                i{
                  line-height:.22rem;
                  color:#d9a961;
                  font-size:.13rem;
                }
                p{
                  margin-top:.38rem;
                  width:1.25rem;
                  @include flexbox();
                  justify-content: space-between;
                  font-size:12px;
                  em{
                    border-radius: .25rem;
                    padding:0px .08rem;
                    border:1px solid #d9a961;
                    color:#d9a961;
                  }
                  b{
                    border-radius: .25rem;
                    padding:0px .08rem;
                    font-weight:normal;
                    line-height:.2rem;
                    padding:0 ,09rem;
                    color:#555;
                    border:1px solid #777;
                  }
                }
              }
        }
       }
       #searchfooter,#searchfooter1{
         height:.5rem;
         width:100%;
         background: #eee;
       }
       .list2{
         line-height:.43rem;
       }
     }
   }
</style>





