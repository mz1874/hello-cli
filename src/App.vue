<template>
    <div id="app">
        <div id="root">
            <div class="todo-container">
                <div class="todo-wrap">
                    <!--                  <TodoListHeader @receiveData="receiveData"></TodoListHeader>-->
                    <TodoListHeader></TodoListHeader>
                    <TodoListList :list="list" ></TodoListList>
                    <!--                  自定义事件处理子组件给父组件传递数据-->
                    <TodoListFooter :list="list"></TodoListFooter>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import TodoListHeader from "@/components/TodoList-Header.vue";
import TodoListFooter from "@/components/TodoList-Footer.vue";
import TodoListList from "@/components/TodoList-List.vue";
import pubsub from 'pubsub-js'

export default {
    name: 'App',
    components: {
        TodoListHeader,
        TodoListFooter,
        TodoListList,
    },
    data() {
        return {
            list: JSON.parse(localStorage.getItem("list")) || []
        }
    },
    methods: {
        // 父组件给子组件一个函数, 当子组件调用的时候,把消息传递给父组件
        receiveData(value) {
            this.list.push(value)
        },

        deleteFinished() {

        }
    },
    watch: {
        list: {
            // 深度监视解决勾选完成不更新到localStorage的问题
            deep: true,
            handler(value) {
                localStorage.setItem("list", JSON.stringify(value))
            }
        }
    },

    //全局事件总线的方式
    mounted() {
        this.$bus.$on('Hello', (data) => {
            this.list.push(data)
        });
        this.$bus.$on("deleteTodoItem", (id)=>{
            this.list = this.list.filter(e => {
                return e.id !== id;
            })
        });
        this.$bus.$on("checkTodo", (id)=>{
            this.list.forEach(e => {
                if (e.id === id) {
                    e.done = !e.done;
                }
            })
        });
    //     定于发布

        /**
         * topic 订阅的主题
         * msg 实际的消息内容
         * 注意不要使用 function的方式
         */
        pubsub.subscribe("checkAll", (topic, msg) =>{
            this.list.forEach(e => {
                e.done = msg;
            })
        });

        pubsub.subscribe("deleteFinished", ()=>{
            this.list = this.list.filter(e => {
                return e.done === false;
            })
        });

        pubsub.subscribe("editTodoItem", (topic, msg)=>{
           this.list.forEach(e=>{
               if (e.id === msg.data.id){
                   e.title = msg.newText
               }
           })
        });
    },

    //销毁
    beforeDestroy() {
        this.$bus.$off("Hello");
        this.$bus.$off("checkTodo");
        this.$bus.$off("deleteTodoItem");

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
