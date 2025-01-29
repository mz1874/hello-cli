<template>
  <div class="container">
    <category title="Games">
      <!-- 具名插槽 -->
      <template #named-slot>
        <h3>具名插槽</h3>
      </template>

      <!-- 作用域插槽（接收子组件传递的数据） -->
      <template scope="games">
        <p>作用域插槽：{{ games }}</p>
      </template>
    </category>
  </div>
</template>



<script>
import axios from "axios";
import category from "@/components/Category/Category.vue";

export default {
  name: 'App',
  components: {
    category,
  },

  methods: {}
}

</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
