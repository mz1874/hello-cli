<template>
  <div class="demo">
      <h1>学生姓名{{name}}</h1>
      <h1>Age{{age}}</h1>
  </div>
</template>


<script>
export default({
    name:'Student',
    data(){
        return {
            name:'尚硅谷',
            age:18
        }
    },
    methods:{
        
    }
})
</script>


<style>
  .demo{
      background-color: red;
  }
</style>