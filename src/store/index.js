import actions from './actions'
export const state = {
  title: '总的vuex'
}
import common from './modules/common'

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
}

export default {
  state,
  mutations,
  getters,
  modules,
  actions
}