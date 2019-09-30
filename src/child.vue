<template>
  <div class="child">
    子组件接收的数据为:{{params}}
    <button @click="changeFatherData">改变父元素的值</button>
  </div>
</template>

<script>
export default {
  props: {
    params: {
      type: String,
      default: ''
    }
  },
  methods: {
    changeFatherData() {
      this.$emit('change')
      console.log('父元素的参数为', this.params)
    }
  }
}
</script>

<style>
</style>
