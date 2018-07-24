import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)



const actionTypes ={
    GETDATA : 'getHostData',
    GETDATA2 : 'getData2'
}

const mutationTypes = {
    CHANGETITLE : 'changeTitle',
    SETDATA : 'setHostData',
    SETDATA2 : 'setData2'
}


import $ from 'axios'

const state = {
    homeData:{},
    playData:{},
    spaData:{},
    nightlifeData:{},
    screenType:"merchant",
    shoplist:{
      list:[],
      lcake:[],
      mguesslike:[],
      rhot:[]
    },
    subDetailData:{
        subDetailLeft:[],
        subDetailRight:[]
    },
    commentData:{},

    title: '',
    host:{
      host_result:{}
    },
    event:{
      event_result:{}
    },
    
}
const mutations = {
    setData(state, payload){
        state.homeData = payload.homeData
        state.playData = payload.playData
        state.spaData = payload.spaData
        state.nightlifeData = payload.nightlifeData
       
    },
    setDetailData(state,payload){
        state.subDetailData.subDetailLeft = payload[0];
        state.subDetailData.subDetailRight = payload[1];
    },
    setCommentData(state,payload){
        state.commentData = payload;
    },
    setScreenType(state,payload){
        state.screenType = payload
      },
    setScreenData(state,payload){
    state.shoplist.list = payload[0].data.data.searchData.doc
    state.shoplist.lcake = payload[1].data.data.searchData.doc
    state.shoplist.mguesslike = payload[2].data.data.recommendData
    state.shoplist.rhot = payload[3].data.data.searchData.doc
    // console.log(payload[0]);
    },


    [mutationTypes.CHANGETITLE](state, payload) {
        state.title = payload
    },
    [mutationTypes.SETDATA](state, payload) {
    state.host = payload
    },
    [mutationTypes.SETDATA2](state, payload) {
    state.event = payload
    },
}
const actions = {
    getData({commit}){
        const getHomeData = $.get("/api/homeData")
        .then(function(res){
            return res.data.data    
        })
        const getPlayData = $.get("/api/playData")
        .then(function(res){
            return res   
        })
        const getSpaData = $.get("/list/spa_list")
        .then(function(res){
            let data = res.data.data;
            return data   
        })
        const getNightlifeData = $.get("/list/nightlift_list")
        .then(function(res){
            return res.data.data;   
        })
   
        Promise.all([getHomeData,getPlayData,getSpaData,getNightlifeData])
        .then((result) => {
            commit("setData",{
                homeData:result[0],
                playData:result[1],
                spaData:result[2],
                nightlifeData:result[3]
                
            })
        })
    },
    getDetailData({commit}){
        const subDetailLeft =  $.get('list/subject_list42')
            .then((result)=>{
                return result.data.data.doc;
             })
        const subDetailRight =  $.get('list/subject_list46')
            .then((result)=>{
                return result.data.data.doc;
            })
         Promise.all([subDetailLeft,subDetailRight])
            .then((result) => {
                 commit("setDetailData",result)
            })
        
    },
    getCommentData({commit}){
       $.get('/list/comment_list2')
            .then((res)=>{
                let data = res.data;
                commit("setCommentData",data)
            })
    },
    getScreenData({commit}){    // (context,payload)  context == state
        const list = $.get("/screen/merchant").then(result => result)
        const lcake = $.get("/screen/lcake").then(result => result)
        const mguesslike = $.get("/screen/mguesslike").then(result => result)
        const rhot = $.get("/screen/rhot").then(result => result)
       
        
        Promise.all([list,lcake,mguesslike,rhot])   // 将所有调用接口的数据 放入到一个新数组中
        .then((result) =>{
          commit("setScreenData",result)  // 所有数据拿到了，调用mutations中的 setScreenData,并将值传送给它
        })
    },


    async [actionTypes.GETDATA]({commit},payload) {
        console.log("in")
  
        const host_result = $.get('api/host')
          .then((result) => {
            console.log(result)
            return result
          })
        Promise.all([host_result])
          .then((result) => {
            commit(mutationTypes.SETDATA, {
              host_result : result[0].data[payload],
            })
          })
    },
    async [actionTypes.GETDATA2]({commit},payload) {

    const event_result = $.get('api/event')
        .then((result) => {
        return result
        })

    Promise.all([event_result])
        .then((result) => {
        commit(mutationTypes.SETDATA2, {
            event_result : result[0].data[payload],
        })
        })
    }
      
}
const getters = {
    bannerList:state=>{
        return state.homeData.extraData.rocket.reserveList[0].content
    },
    activeList(state){
        return state.homeData.doc[2].itemData[0].content
    },
    storeList(state){
        return state.homeData.doc[5].itemData
    }
}


export default new Vuex.Store({
    state,
    mutations,
    actions,
    getters
})