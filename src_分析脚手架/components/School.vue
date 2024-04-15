<template>
  <div class="demo">
      <h1>学校名称{{schoolName}}</h1>
      <h1>学校地址{{schoolAddr}}</h1>
      <button @click="showName">点击我显示学校名称</button>
  </div>
</template>


<script>

// const school = Vue.extend({
//     data(){
//         return {
//             schoolName:'尚硅谷',
//             schoolAddr:'北京'
//         }
//     },
//     methods:{
//         showName(){
//             alert(this.schoolName)
//         }
//     }
// })
// export default school


//第二种
// export const school = Vue.extend({
//     data(){
//         return {
//             schoolName:'尚硅谷',
//             schoolAddr:'北京'
//         }
//     },
//     methods:{
//         showName(){
//             alert(this.schoolName)
//         }
//     }
// })

// 第三种
export default({
    name:'School',
    data(){
        return {
            schoolName:'尚硅谷',
            schoolAddr:'北京'
        }
    },
    methods:{
        showName(){
            alert(this.schoolName)
        }
    }
})
</script>


<style>
  .demo{
      background-color: red;
  }
</style>