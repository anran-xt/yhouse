import Vue from 'vue'
import Vuex from 'vuex'
import * as mutationTypes from './mutation-types'
import * as actionTypes from './action-types'
Vue.use(Vuex)

import $ from 'axios'

export default new Vuex.Store({
  state: {
    title: '',
    host:{
      host_result:{}
    },
    event:{
      event_result:{}
    },
  },

  mutations: {
    [mutationTypes.CHANGETITLE](state, payload) {
      state.title = payload
    },
    [mutationTypes.SETDATA](state, payload) {
      state.host = payload
    },
    [mutationTypes.SETDATA2](state, payload) {
      state.event = payload
    },
  },


  actions: {
    async [actionTypes.GETDATA]({commit},payload) {
      console.log("in")
      let num = parseInt(payload) - 1

      const host_result = $.get('api/host')
        .then((result) => {
          console.log(result)
          return result
        })
      Promise.all([host_result])
        .then((result) => {
          commit(mutationTypes.SETDATA, {
            host_result : result[0].data[num],
          })
        })
    },
    async [actionTypes.GETDATA2]({commit},payload) {
      let num = parseInt(payload) - 1

      const event_result = $.get('api/event')
        .then((result) => {
          return result
        })

      Promise.all([event_result])
        .then((result) => {
          commit(mutationTypes.SETDATA2, {
            event_result : result[0].data[num],
          })
        })
    }
  }



})
