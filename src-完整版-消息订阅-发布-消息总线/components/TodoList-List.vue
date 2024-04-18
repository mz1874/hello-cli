<template>
  <div>
      <ul class="todo-main">
          <TodoListItem v-for="(item,index) in list" :key="item.id" :item="item" :index="index"></TodoListItem>
      </ul>
  </div>
</template>

<script>

import TodoListItem from "@/components/TodoList-Item.vue";
export default {
    name : "TodoList-List",
    components:{
        TodoListItem
    },
    props:['list'],
}
</script>

<style scoped>
/*main*/
.todo-main {
    margin-left: 0px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding: 0px;
}

.todo-empty {
    height: 40px;
    line-height: 40px;
    border: 1px solid #ddd;
    border-radius: 2px;
    padding-left: 5px;
    margin-top: 10px;
}
</style>