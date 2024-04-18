

<template>
    <div>
        <li>
            <label>
                <input type="checkbox" :checked="item.done" @click="handlerClick(item.id)"/>
<!--                <input type="checkbox" v-model="item.done"/>-->
                <span v-show="!item.isEdit">{{item.title}}</span>
                <input type="text" v-show="item.isEdit" :value="item.title" @blur="handlerBlur(item, $event)" ref="editInput">
            </label>
            <button class="btn btn-danger" @click="deleteItem(item.id)">删除</button>
            <button class="btn btn-edit" @click="handleEdit(item)">编辑</button>
        </li>
    </div>
</template>


<script>
import pubsub from "pubsub-js";
export default {
    name : "TodoList-Item",
    // props 是不允许被修改的,但是这个修改item.done 是修改这个对象内的数据,并不是修改了这个对象.
    // vue的props只能监视的是props对象内的数据,但是不能修改props对象或者属性
    props:['item','checkTodo','deleteTodoItem'],
    methods:{
        handlerClick(value){
            this.$bus.$emit("checkTodo", value)
        },
        deleteItem(value){
            this.$bus.$emit("deleteTodoItem", value)
        },
        handleEdit(todo){
            if (todo.hasOwnProperty("isEdit")){
                todo.isEdit = true;
            }else {
                this.$set(todo, 'isEdit', true);
            }
            //模拟下一次点击
            this.$nextTick(() => {
                this.$refs.editInput.focus();
            });
        },
        //失去焦点的时候
        handlerBlur(item, event){
            const dataToSend = {
                data : item,
                newText: event.target.value
            }
            pubsub.publish("editTodoItem", dataToSend);
            item.isEdit = false;

        }
    },
}
</script>

<style scoped>
/*item*/
li {
    list-style: none;
    height: 36px;
    line-height: 36px;
    padding: 0 5px;
    border-bottom: 1px solid #ddd;
}

li label {
    float: left;
    cursor: pointer;
}

li label li input {
    vertical-align: middle;
    margin-right: 6px;
    position: relative;
    top: -1px;
}

li button {
    float: right;
    display: none;
    margin-top: 3px;
}

li:before {
    content: initial;
}

li:last-child {
    border-bottom: none;
}

li:hover{
    background: #dddddd;
}

li:hover button {
    display: block;
}

.btn-edit {
    color: #fff;
    background-color: #1c9ce1;
    border: 1px solid #000000;
    margin-right: 5px;
}
</style>