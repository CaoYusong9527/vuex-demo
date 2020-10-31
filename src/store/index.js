
import Vue from 'vue'
import Vuex from 'vuex'
import user from './modules/user.js'
import setting from './modules/setting.js'
Vue.use(Vuex)

// 创建仓库, 维护公共的状态
const store = new Vuex.Store({
  // state 状态 (全局的状态树) 整个项目就一个对象, 就是仓库
  state: {
    count: 100,
    // 将来个人信息数据, 一定是发送ajax请求回来的, 将来肯定有异步操作state的一些内容
    // 但是mutations中, 只能是同步的 => actions可以是异步的
    // 将来发送请求, 假定得到了一个列表数据
    list: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  // mutations 存放操作状态的方法
  // 将来写vuex, 思考的方式: 看着界面, 想怎么操作vuex中的状态, 需不需要额外传参
  // mutations 要求是同步的 (方便监测数据变化, 方便调试工具调试)
  mutations: {
    // 传啥改啥, num => 要改成的值
    inputCount (state, num) {
      state.count = num
    },
    // 加一操作
    addCount (state) {
      state.count++
    },
    // 加N操作
    addN (state, n) {
      state.count += n
    },
    // 减一操作
    subCount (state) {
      state.count--
    },
    // 减N操作
    subN (state, n) {
      state.count -= n
    },
    // 传啥数组, 改啥数组
    changeList (state, list) {
      state.list = list
    }
  },

  // actions 存放一些方法的 (里面允许是异步的)
  // 规则: actions 不允许直接操作 state 的, 要操作state, 只能通过mutations
  // 虽然不能直接操作 state, 但是, 他可以提交mutation

  // 以后和仓库数据相关的异步操作, 就放在actions中
  actions: {
    // 一秒后改值
    setAsyncCount (context, count) {
      // context就是store,
      // 组件中: this.$store.commit(mutation的名字, 参数)
      // actions中: context.commit(mutation的名字, 参数)
      setTimeout(() => {
        context.commit('inputCount', count)
      }, 1000)

      // axios.get('...').then(res => {
      //   console.log(res)
      //   context.commit('mutation名字', res.data.count)
      // })
    }
    // addCountAction (context) {
    //   context.commit('addCount')
    // }
  },

  // 如果需要基于state数据, 衍生出来一些状态
  // 例如: list的长度, 只想显示list中 > 5 的数据
  // 所有的getters中, 第一个参数, 都是state
  getters: {
    // 非常的像之前学习的computed计算属性 (基于data中的数据, 动态计算出来的属性)
    // getters就是基于state中的数据, 动态计算出来的一些属性
    // listLength (state) {
    //   return state.list.length
    // }

    // listLength: (state) => {
    //   return state.list.length
    // }
    listLength: state => state.list.length,
    listArr: state => state.list.filter(item => item > 5),

    // 如果想方便的拿到模块中的state, 而直接mapState, 又只能map到模块名, 可以提供全局的getters
    name: state => state.user.userInfo.name,
    token: state => state.user.token
  },

  modules: {
    // 模块 A : { state, mutation, getters, action }
    // 模块 B : { state, mutation, getters, action }
    // user: {
    //   state: {
    //     userInfo: {
    //       name: 'zs',
    //       age: 18
    //     },
    //     token: 'abcdxx'
    //   },
    //   mutations: {
    //     ...
    //   }
    //   ...
    // },
    user,
    setting
  }
})

export default store
