// 用户模块
const state = {
  userInfo: {
    name: 'zs',
    age: 18
  },
  token: 'iuiweuriusdfiiewut'
}

// 默认不配置, mutations 会注册到全局去 (不合理) 一般都会配上 namespaced: true
// this.$store.commit('模块名/mutation函数名', 参数)
const mutations = {
  // 更新token, 传啥, 改啥
  updateToken (state, newToken) {
    // console.log('这是updateToken')
    state.token = newToken
  }
}

const actions = {}

const getters = {}

// 一旦 namespaced: true, 设置了之后
// 那么 state, mutations, actions, getters 都是模块中私有的了
// state 本身找就要通过模块名, mutations, actions, getters 不再注册成全局了
export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
