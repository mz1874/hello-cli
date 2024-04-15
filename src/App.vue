<template>
  <div id="app">
      <div id="root">
          <div class="todo-container">
              <div class="todo-wrap">
                  <TodoListHeader :receiveData="receiveData"></TodoListHeader>
                  <TodoListList :list="list" :checkTodo="checkTodo" :deleteTodoItem="deleteTodoItem"></TodoListList>
                  <TodoListFooter :list="list" :checkedAll="checkedAll" :deleteFinished="deleteFinished"></TodoListFooter>
              </div>
          </div>
      </div>
  </div>
</template>

<script>
import TodoListHeader from "@/components/TodoList-Header.vue";
import TodoListFooter from "@/components/TodoList-Footer.vue";
import TodoListList from "@/components/TodoList-List.vue";
export default {
  name: 'App',
  components: {
      TodoListHeader,
      TodoListFooter,
      TodoListList,
  },
    data(){
        return{
            list:[
                {
                    id:"1",
                    title:"吃饭",
                    done:true
                },
                {
                    id:"2",
                    title:"睡觉",
                    done:false
                },
                {
                    id:"3",
                    title:"打豆豆",
                    done:true
                },
                {
                    id:"4",
                    title:"抽烟",
                    done:true
                },
                {
                    id:"5",
                    title:"喝酒",
                    done:false
                }
            ]
        }
    },
    methods:{
      // 父组件给子组件一个函数, 当子组件调用的时候,把消息传递给父组件
      receiveData(value){
          this.list.push(value   )
      },
        checkTodo(id){
            this.list.forEach(e=>{
                if (e.id===id){
                    e.done = !e.done;
                }
            })
        },
        deleteTodoItem(id){
           this.list =  this.list.filter(e=>{
                return e.id !==id;
            })
        },
        checkedAll(status){
          this.list.forEach(e=>{
              e.done = status;
          })
        },
        deleteFinished(){
          this.list = this.list.filter(e=>{
              return e.done === false;
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
        //display: inline-block;
        padding: 4px 12px;
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
