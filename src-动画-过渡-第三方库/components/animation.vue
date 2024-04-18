<template>
    <div>
        <button @click="isShow=!isShow">点击切换动画</button>
        <!--        如果加上appear的话,那么当前的动画会在启动时显示-->
        <transition appear :name="title">
            <h1 v-show="isShow">VUE的动画效果</h1>
        </transition>
    </div>
</template>

<script>
export default ({
    name: "Animation",
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

/*如果transition上加了name属性的话,那么需要在这里也进行指定,否则的话则需要使用默认的v.*/
.title-enter-active {
    animation: enter_leave 1s;
}

.title-leave-active {
    animation: enter_leave 1s reverse;
}

@keyframes enter_leave {
    from {
        transform: translateX(-100%);
    }

    to {
        transform: translateX(0px);
    }
}


</style>