import actions from './actions'
import common from './modules/common'
import login from './modules/login'

export const state = {
  title: '总的vuex'
}

export const mutations = {
  increment (state) {
    console.log(state.title)
  }
}

export const getters = {
  doneTodos: state => {
    return 2
  }
}

export const modules = {
  common,
  login
}

export default {
  state,
  mutations,
  getters,
  modules,
  actions
}
