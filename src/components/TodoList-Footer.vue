<template>
    <div>
        <div class="todo-footer">
            <label>
                <input type="checkbox" :checked="finished == list.length  && finished !==0" @change="checkAll($event.target.checked)"/>
            </label>
            <span>
          <span>已完成{{finished}}</span> / 全部{{list.length}}
        </span>
            <button class="btn btn-danger" @click="deleteSelected">清除已完成任务</button>
        </div>
    </div>
</template>

<script>

import pubsub from "pubsub-js";

export default {
    name : "TodoList-Footer",
    props:['list'],
    computed:{
        finished (){
            return this.list.filter(e=>{
                return e.done
            }).length
        }
    },
    methods:{
        checkAll(value){
            // this.$emit('checkedAll',value)
            pubsub.publish("checkAll", value);
        },
        deleteSelected(){
            pubsub.publish("deleteFinished", true);
        }
    },
    mounted() {

    }
}
</script>

<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>