const state = {
  title: '首页'
}

const getters = {
  sumWithRootCount (state, getters, rootState) {
    console.log(state, getters, rootState)
    return 1
  }
}

const mutations = {
  writeTitle (state, str2) {
    console.log(state, str2, str3)
  }
}

const actions = {}

export default {
  namespaced: true,
  actions,
  getters,
  mutations,
  state
}