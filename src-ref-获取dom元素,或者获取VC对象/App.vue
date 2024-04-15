<template>
  <div id="app">
      <School ref="sch"></School>
      <h1 v-text="msg" ref="title"></h1>
      <button @click="showDom">点击我输出上方的DOM</button>
  </div>
</template>

<script>
import Student from "@/components/Student.vue";
import School from "@/components/School.vue";
export default {
  name: 'App',
  components: {
      Student,
      School
  },
    data(){
      return {
          msg:"欢迎学习VUE"
      }
    },
    methods:{
      //点击显示上方的DOM
      showDom(){
        console.log(this.$refs.title)
        //   如果是给组件加REF的话,那么会拿到目标组件的实例对象
        console.log(this.$refs.sch)
      }
    }
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
