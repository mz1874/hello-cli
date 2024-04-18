<template>
    <div class="demo">
        <h1 @click="showName()">学生名称:{{name}}</h1>
        <button @click="sendStudentName">点击我进行发送</button>
        <button @click="unbind">解绑事件</button>
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
        sendStudentName(){
            // this.$emit('yiwen', this.name)
            this.$emit('yiwen', this.name,1,2,3,4);
        },
        unbind(){
            this.$off("yiwen");
            // 解绑多个事件
            // this.$off(['yiwen']);
            // 解绑所有的自定义事件
            // this.$off();
            console.log("解除绑定成功")
        },
        destory()
        {
            this.$destroy();
            //销毁后所有的自定义事件都不用, 响应式全部被销毁. 原声dom不受影响
        }
    },




})
</script>


<style scoped lang="css">
.demo{
    background-color: #c526d2;
}
</style>