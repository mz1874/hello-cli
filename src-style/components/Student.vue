<template>
    <div class="demo">
        <h1 @click="showName()">学生名称:{{name}}</h1>
    </div>
</template>


<script>
// import {mixIn} from "@/mixin";
export default({
    name:'Student',
    data(){
        return {
            name:"张三",
        }
    },
    methods:{

    },
    // mixin 主要是用来解决重发的方法
    // mixins:[mixIn]


})
</script>


<style scoped lang="css">
.demo{
    background-color: #c526d2;
}
</style>