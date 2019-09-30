<template>
  <div>
    <h1>父组件数据为:{{ fatherData }}</h1>
    <Child :params="fatherData" @change="changeData"/>
  </div>
</template>

<script>
import Child from './child.vue'
export default {
  components: { Child },
  data() {
    return {
      fatherData: 'hello'
    }
  },
  methods: {
    changeData() {
      this.fatherData = 'vue'
    }
  }
}
</script>

<style>
</style>
