<template>
    <div>
        <button @click="isShow=!isShow">点击切换动画</button>
        <transition-group
            appear
            enter-active-class="animate__heartBeat"
            leave-active-class="animate__swing"
            name="animate__animated animate__bounce">
            <h1 v-show="!isShow" key="1">VUE的动画效果</h1>
            <h1 v-show="isShow" key="2">尚硅谷</h1>
        </transition-group>
    </div>
</template>

<script>
import 'animate.css'
export default ({
    name: "Animation3",
    data() {
        return {
            isShow: true,
        }
    }
})
</script>


<style scoped>
h1 {
    background-color: red;

}



</style>