
/**
 * @method：APIMutation: 用于发起异步请求请求数据。导出为modules的mutations
 * @param:  { commit },  mutation:对应的同步方法的关键字, request: 异步请求的参数
 * @return: 返回三个公共方法，用于处理所有相同的逻辑
 */
export function APIMutation (name) {
  return {
    [name + '_SUCCESS'] (state) {},
    [name + '_REQUEST'] (state) {},
    [name + '_FAILED'] (state) {}
  }
}

// Vuex根树下的mutations
const mutations = {}

export default mutations