<template>
  <div class="container">
    <category title="Games" :ListData="games"/>
    <category title="Movies" :ListData="movies"/>
    <category title="Musics" :ListData="music">
      <h1>你好</h1>
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
