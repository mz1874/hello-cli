<template>
  <div class="container">
    <category title="Games" :ListData="games"/>
    <category title="Movies" :ListData="movies"/>
    <category title="Musics" :ListData="music">
      <!--  普通插槽    -->
      <h1>你好</h1>
      <!-- 这种插槽的使用方法是Vue3 中推荐的使用方式, 因为v-slot只能使用在template 中     -->
      <template v-slot:named-slot>
        <h3>具名插槽</h3>
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
  data() {
    return {
      games: ["游戏", "B", "C", "D"],
      movies: ["电影", "Y", "z", "S"],
      music: ["音乐", "V"]
    }
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
