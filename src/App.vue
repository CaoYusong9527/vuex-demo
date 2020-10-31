<template>
  <div id="app">
    <h1>根组件 {{ count }}</h1>
    <input :value="count" type="text" @input="handleInput">
    <add-item></add-item>
    <hr>
    <sub-item></sub-item>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex'
import AddItem from './components/add-item.vue'
import SubItem from './components/sub-item.vue'
// this.$store.state.count

export default {
  name: 'app',
  data: function () {
    return {

    }
  },
  computed: {
    ...mapState(['count'])
  },
  methods: {
    ...mapMutations(['inputCount']),
    handleInput (e) {
      // 获取输入框的值
      const value = +e.target.value
      // 将值提交给vuex, 进行修改
      this.inputCount(value)
    }
  },
  components: {
    AddItem,
    SubItem
  }
}
</script>

<style>
#app {
  width: 300px;
  margin: 20px auto;
  border: 3px solid #ccc;
  border-radius: 3px;
  padding: 10px;
}
</style>
