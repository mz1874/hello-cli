<template>
  <div id="app">
<!--      测试学习,如何传递数据给组件-->

<!--      :动态绑定的话会以表达式解析后的值作为传递参数-->
      <Student name="张三" :age="10" sex="男"></Student>
      <hr>
      <Student name="李四" :age="10" sex="男"></Student>
      <hr>
      <Student name="王五" :age="10" sex="男"></Student>
  </div>
</template>

<script>

import Student from "@/components/Student.vue";
export default {
  name: 'App',
  components: {
      Student
  },
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
