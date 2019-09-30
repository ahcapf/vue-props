父组件传参给子组件，子组件通过$emit改变父组件的只，子组件不能及时接收到改变的值

# 子组件
changeFatherData() {
  this.$emit('change')
  console.log('父元素的参数为', this.params)  // hello
  // this.$nextTick(() => {
  //   console.log('父元素的参数为', this.params)  // vue
  // })
}

#父组件
changeData() {
  this.fatherData = 'vue'
}