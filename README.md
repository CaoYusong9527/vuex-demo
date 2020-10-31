
😊 vuex核心概念
  state: 存放数据
  mutations: 存放操作数据的方法
  actions: 存放一些异步操作
  getters: 存放一些基于state动态计算出来的一些属性

  modules: {
    模块名A: {
      namespaced: true,
      state: 存放数据
      mutations: 存放操作数据的方法
      actions: 存放一些异步操作
      getters: 存放一些基于state动态计算出来的一些属性
    },

    模块名B: {
      namespaced: true,
      state: 存放数据
      mutations: 存放操作数据的方法
      actions: 存放一些异步操作
      getters: 存放一些基于state动态计算出来的一些属性
    }
  }

默认 mutations actions getters 等, 是注册到全局的 => 不好 => 配置 namespaced
实际, 就是在原来的语法基础之上, 加上模块名

😁 直接使用的区分
  this.$store.commit('模块名/mutation名字')
  this.$store.dispatch('模块名/action名字')

😁 映射的区分: 多了一个模块名
  ...mapState(模块名, ['state名1', 'state名2'])
  ...mapMutations(模块名, ['mutation名1', 'mutation名2'])
  ...mapActions(模块名, ['action名字1', 'action名字2'])

...
