<template>
  <div class="box">
    <h2>子组件 sub</h2>
    从父组件中获取的值: <label>{{ count }}</label>
    <br>
    <button @click="subCount">值-1</button>
    <button @click="subN(3)">值-N</button>
    <hr>
    <!-- 展示用户模块的数据 {{ $store.state.模块名.xxx }} -->
    <p>用户模块: </p>
    <p>姓名: {{ user.userInfo.name }}</p>
    <p>token: {{ user.token }}</p>
    <p>全局getters: {{ name }}</p>
    <p>全局getters: {{ token }}</p>
    <button @click="changeFn">修改token</button>
    <hr>
    <p>网站设置</p>
    <p>标题: {{ $store.state.setting.title }}</p>
    <p>描述: {{ $store.state.setting.desc }}</p>
    <p>{{ title }} - {{ desc }}</p>
  </div>
</template>

<script>
import { mapMutations, mapState, mapGetters } from 'vuex'
export default {
  name: 'SubItem',
  computed: {
    ...mapState(['count', 'user']),
    ...mapGetters(['name', 'token']),
    // 映射模块中的 state
    ...mapState('setting', ['title', 'desc'])
  },
  methods: {
    // 没有指定模块, 表示映射的是全局的
    ...mapMutations(['subCount', 'subN']),
    // 映射的是模块中的方法mutation
    // ...mapMutations(模块名, ['xxx', 'xxx'])
    ...mapMutations('user', ['updateToken']),
    changeFn () {
      // this.$store.commit('updateToken')
      // 将来一旦分模块了, 提交mutation
      // 语法: this.$store.commit('模块名/mutation名字', 参数)
      // this.$store.commit('user/updateToken', '123wieuriu')

      this.updateToken('123wieuriu')
    }
  }
}
</script>

<style lang="css" scoped>
.box{
  border: 3px solid #ccc;
  width: 200px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
