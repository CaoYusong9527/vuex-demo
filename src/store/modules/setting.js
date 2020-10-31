// 网站设置
// this.$store.state.setting.title
// ...mapState(['setting'])  {{ setting.title }}

// 或者: 提供一个全局的getter
// ...mapGetters['title']   {{ title }}
const state = {
  title: '网站标题',
  desc: '网站描述 - 不错'
}

const mutations = {}

const actions = {}

const getters = {}

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
}
