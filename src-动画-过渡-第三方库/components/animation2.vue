<template>
    <div>
        <button @click="isShow=!isShow">点击切换动画</button>
        <transition-group name="hello">
            <h1 v-show="!isShow" key="1">VUE的动画效果</h1>
            <h1 v-show="isShow" key="2">尚硅谷</h1>
        </transition-group>
    </div>
</template>

<script>
export default ({
    name: "Animation2",
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

/*进入的起点*/
.hello-enter,.hello-leave-to{
    transform: translateX(-100%);
}
/*进入的终点*/
.hello-enter-to,.hello-leave{
    transform: translateX(0);
}

.hello-enter-active,.hello-leave-active{
    transition: 1s ;
}

</style>