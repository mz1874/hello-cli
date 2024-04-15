<template>
  <div class="demo">
      <h1>学校名称:{{name}}</h1>
      <button @click="SendNameToAPP">点击我进行发送</button>
  </div>
</template>


<script>
export default({
    name:'School',
    props:['getSchoolName'],
    data(){
        return {
            name:"北京大学",
        }
    },
    methods:{
        SendNameToAPP(){
          this.getSchoolName(this.name)
        }
    },


})
</script>


<style scoped >
  .demo{
      background-color: #d9c03f;
  }
</style>