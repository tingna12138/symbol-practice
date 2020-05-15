import CALL_API from '../apis'

/**
 * @method：action: 用于发起异步请求请求数据。导出为modules的actions
 * @param:  { commit },  mutation:对应的同步方法的关键字, request: 异步请求的参数
 */

export function action ({commit}, mutation, param) {
  const { path, method, params } = param
  return CALL_API(path, method, params)
}

// Vuex根树下的actions
const actions = {}

export default actions