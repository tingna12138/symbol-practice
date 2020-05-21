import * as types from '../mutation-type'
import { APIMutation } from '../mutations'
import { action } from '../actions'

const state = {
  title: '首页'
}

const getters = {}

const mutations = {

}

const actions = {
  userLogin ({ commit }, request) {
    return action(
      { commit },
      '',
      {
        path: '/login',
        method: 'POST',
        params: request
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