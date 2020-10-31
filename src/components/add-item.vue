<template>
  <div class="box" style="display: none;">
    <h2>子组件 add</h2>
    从父组件中获取的值:<label>{{ count }}</label>
    <br />
    <button @click="addCount">值+1</button>
    <button @click="addN(3)">值+N</button>
    <button @click="fn">一秒后, 改值</button>
    <button @click="changeListFn">修改list</button>
    <p>>5的list: {{ $store.getters.listArr }}</p>
    <p>>5的list: {{ listArr }}</p>
    <p>getters: {{ $store.getters.listLength }}</p>
    <p>getters: {{ listLength }}</p>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'AddItem',
  computed: {
    ...mapState(['count']),
    ...mapGetters(['listArr', 'listLength'])
  },
  methods: {
    ...mapMutations(['addCount', 'addN', 'changeList']),
    ...mapActions(['setAsyncCount']),
    // fn () {
    //   // 提交mutation
    //   // this.$store.commit(mutation名字)
    //   // 提交分发action
    //   // this.$store.dispatch(action名字)
    //   // this.$store.dispatch(action名字, 参数)
    //   const num = parseInt(Math.random() * 10000)
    //   this.$store.dispatch('setAsyncCount', num)
    // }

    fn () {
      const num = parseInt(Math.random() * 10000)
      this.setAsyncCount(num)
    },
    changeListFn () {
      this.changeList([1, 2, 3])
    }
  }
}
</script>

<style lang="css" scoped>
.box {
  border: 3px solid #ccc;
  width: 200px;
  padding: 10px;
  margin: 20px;
}
h2 {
  margin-top: 10px;
}
</style>
