import Vue from 'vue'
import Router from 'vue-router'
import Home from './views/Home.vue'
import Food from "./components/home/Food.vue"
import PlayThing from "./components/home/PlayThing.vue"
import Nightlife from './components/Nightlife.vue'
import Spa from './components/Spa.vue'


import Screen from './components/screen/screen.vue'
import Merchant from './components/screen/merchant.vue'
import Commodity from './components/screen/commodity.vue'
import Search from './components/screen/search.vue'



import SearchClick from './views/SearchClick.vue'
import SearchStore from './views/Search.vue'
import Subject1 from './views/Subject1.vue'
import Subject2 from './views/Subject2.vue'
import Subject3 from './views/Subject3.vue'
import Subject4 from './views/Subject4.vue'
import Subject5 from './views/Subject5.vue'
import Subject6 from './views/Subject6.vue'
import SubDetail from './views/SubDetail.vue'




import Subject2Left from './components/SubjectContent-21.vue'
import Subject2Right from './components/SubjectContent-22.vue'




Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
      redirect: "/food",
      children: [
        {
          path : "/food",
          name : "food",
          component : Food
        },
        {
          path : "/plaything",
          name : "plaything",
          component : PlayThing
        },
        {
          path : "/nightlife",
          name : "nightlife",
          component : Nightlife
        },
        {
          path : "/spa",
          name : "spa",
          component : Spa
        },


      ]
    },

    {
      path: '/screen',
      name: 'screen',
      component: Screen,
      redirect:"/screen/merchant",
      children : [
        {
          path : 'merchant',
          name : 'merchant',
          component : Merchant,  // 商户
        },
        {
          path : 'commodity',
          name : 'commodity',
          component : Commodity,  // 商品
        }
      ]
    },
    {
      path : '/screen/search',
      name : 'search',
      component : Search,  // 商品
    },




    {
      path: '/searchclick',
      name:'searchclick',
      component:SearchClick
    },
    {
      path:'/subject1',
      name:'subject1',
      component:Subject1,
    },
    {
      path:'/subject2',
      name:'subject2',
      component:Subject2,
      redirect: '/subject2/left',
      children: [
        {
          path: 'left',
          name: 'subject2Left',
          component: Subject2Left
        },
        {
          path: 'right',
          name: 'subject2Right',
          component: Subject2Right
        }
      ]
    },
    {
      path:'/subject2/subdetail',
      name:'subDetail',
      component:SubDetail
    },
    {
      path:'/subject3',
      name:'subject3',
      component:Subject3,
    },
    {
      path:'/subject4',
      name:'subject4',
      component:Subject4,
    },
    {
      path:'/subject5',
      name:'subject5',
      component:Subject5,
    },
    {
      path:'/subject6',
      name:'subject6',
      component:Subject6,
    },
    {
      path: '/search',
      name:'SearchStore',
      component:SearchStore,
    },
  ]
})
