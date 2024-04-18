<template>
    <div>
        <button @click="sendRequest()">点击我发送请求</button>
    </div>
</template>

<script>
//协议名 主机名, 端口号
//可以配置代理服务器进行处理跨域, 当前的8080 请求代理服务器的8080 由8080 请求5000
import pubsub from 'pubsub-js'
import axios  from "axios";

export default {
    name: 'App',
    components: {},
    methods:{
        sendRequest(){
            //注意,此时请求地址需要写代理服务器的地址
            //如果请求的资源在8080下有的话, 那么优先从8080中获取资源
            //如果没找到的话则去代理服务器请求的端口找
            //优先以本地为准
            axios.get("http://localhost:8080/students").then(success=>{
                console.log(success.data)
            }).catch(error=>{
                alert(error)
            })
        }
    }
}

</script>

<style>
#app {
    /*base*/

    body {
        background: #fff;
    }

    .btn {
    //display: inline-block; padding: 4px 12px;
        margin-bottom: 0;
        font-size: 14px;
        line-height: 20px;
        text-align: center;
        vertical-align: middle;
        cursor: pointer;
        box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
        border-radius: 4px;
    }

    .btn-danger {
        color: #fff;
        background-color: #da4f49;
        border: 1px solid #bd362f;
    }

    .btn-danger:hover {
        color: #fff;
        background-color: #bd362f;
    }

    .btn:focus {
        outline: none;
    }

    .todo-container {
        width: 600px;
        margin: 0 auto;
    }

    .todo-container .todo-wrap {
        padding: 10px;
        border: 1px solid #ddd;
        border-radius: 5px;
    }


}
</style>
