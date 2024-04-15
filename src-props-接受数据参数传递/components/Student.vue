<template>
  <div class="demo">
      <h1>学生姓名:{{name}}</h1>
      <h1>年龄:{{age}}</h1>
      <h1>性别:{{sex}}</h1>
  </div>
</template>


<script>
export default({
    name:'Student',
    data(){
        return {
            msg:"我是一个学生"
        }
    },
    methods:{

    },
    // 接受外部传入的数据,简写的方式
    // props:['name','age','sex']


    //指定接受的数据类型
    // props:{
    //     name:String,
    //     age:Number,
    //     sex:String,
    // }

    //指定接受的数据类型 + 默认值指定, 必要时限制, 另外需要注意,接受到的数据无法被修改,
    // 如果一定要修改传递进来的数据的话, 可以使用下面的方法
    //1 在data中定义一个属性,然后把传递进来的数据赋值给这个属性
    //2. 修改定义的属性, 这样修改后的数据, 才会被修改
    props:{
        name:{
            type:String,
            default:"张三",
            required : true,
        },
        age:{
            type:Number,
            default:18
        },
        sex:{
            type:String,
            default:"男"
        }
    }


})
</script>


<style>
  .demo{
      background-color: #bdbbbb;
  }
</style>