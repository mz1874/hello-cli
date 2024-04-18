<template>
  <div id="app">
      <h1>你好啊</h1>
<!--      绑定自定义事件,实现子组件给父组件传递数据-->
<!--      <Student v-on:yiwen="getStudentName"></Student>-->
<!--      缩写形式,并且只触发一次-->
<!--      <Student @yiwen.once="getStudentName"></Student>-->
      <Student @yiwen="getStudentName"></Student>
<!--      <Student ref="student"></Student>-->

<!--      使用propos子组件传递数据给父组件-->

      <School :getSchoolName="getSchoolName"></School>

<!--      这种方式绑定的事件会被vue当成自定义事件解析-->
<!--      <School :getSchoolName="getSchoolName" @click="haha()"></School>-->

      <!--      这种方式绑定的事件会被vue当成原生事件解析-->
      <!--      <School :getSchoolName="getSchoolName" @click.native="haha()"></School>-->

<!--      谁绑定的事件谁触发, 谁绑定的事件 谁解绑-->
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
    methods:{
      //普通传递
      getSchoolName(value){
          alert(value)
      },
        getStudentName(value,...params){
          console.log("绑定的自定义事件触发了, 被绑定的组件使用$emit触发")
          alert('收到了子组件传递的数据\t'+ value)
          alert(params)
        }
    },
    mounted() {
      // 手动拿到VC对象绑定,更加灵活的方式
      // this.$refs.student.$on('yiwen',this.getStudentName)
      // 只触发一次
      // this.$refs.student.$once('yiwen',this.getStudentName)

        //如果在挂载的这个this. get studentName的时候使用this的话, 那么当前的组件是触发的事件,但是可以使用箭头函数.
        //谁触发, 当前vc是谁, 但是使用箭头函数的话找不到当前的this, 所以向上找, 就找到了monted 找到了APP
    }

}
</script>

<style>
#app {
   background: #dddddd;
    margin: 10px;
}
</style>
