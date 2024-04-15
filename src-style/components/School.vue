<template>
  <div class="demo">
      <h1 @click="showName()">学校名称:{{name}}</h1>
  </div>
</template>


<script>
import {mixIn} from "@/mixin";
export default({
    name:'School',
    data(){
        return {
            name:"北京大学",
        }
    },
    methods:{

    },
    // mixin 主要是用来解决重发的方法
    mixins:[mixIn]


})
</script>


<style scoped >
  .demo{
      background-color: #d9c03f;
  }
</style>