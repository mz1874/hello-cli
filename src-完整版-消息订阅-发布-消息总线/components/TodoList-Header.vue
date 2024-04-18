

<template>
    <div>
        <div class="todo-header">
            <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="addItem($event)" v-model="text"/>
        </div>
    </div>
</template>


<script>
import {nanoid} from "nanoid";

export default {
    name : "TodoList-Header",
    data(){
        return{
            text:""
        }
    }
    ,
    methods:{
        // eslint-disable-next-line no-unused-vars
        addItem(event){
            if (event.target.value=='') {
                return alert("输入不能为空")
            }
            //包装用户输入的todo对象
            const item = {
                id:nanoid(),
                title: event.target.value,
                done:false
            }
            this.$bus.$emit('Hello',item);
            this.text='';
        }
    },

}
</script>


<style scoped>
/*header*/
.todo-header input {
    width: 560px;
    height: 28px;
    font-size: 14px;
    border: 1px solid #ccc;
    border-radius: 4px;
    padding: 4px 7px;
}

.todo-header input:focus {
    outline: none;
    border-color: rgba(82, 168, 236, 0.8);
    box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
}
</style>