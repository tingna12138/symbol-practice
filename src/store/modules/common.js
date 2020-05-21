import * as types from '../mutation-type'
import { APIMutation } from '../mutations'
import { action } from '../actions'

const state = {
  title: '首页'
}

const getters = {}

const mutations = {
  ...APIMutation(types.GET_HOME_DATA),  // 用于处理每个请求的通用方法

   [types.CHANGE_USER_NAME] (state, param) {  // 这个模块独有的mutations方法，用于操作局部状态
     console.log(state, param)
   }
}

const actions = {
  getHomeData ({ commit }, mutation, request) {
    return action(
      { commit },
      types.GET_HOME_DATA,
      {
        path: '/menu',
        method: 'GET'
        // params
      }
    )
  },
}

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}