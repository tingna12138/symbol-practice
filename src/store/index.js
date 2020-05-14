export const state = {
  title: '总的vuex'
}
import common from './modules/common'

export const mutations = {
  increment (state) {
    console.log(state.title)
  }
}

export const actions = {
  increment (state) {
    state.count++
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