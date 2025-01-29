<template>
  <div class="category">
    <h3>{{ title }}</h3>
    <ul>
      <li v-for="(item, index) in ListData" :key="index">{{ item }}</li>
    </ul>
    <slot name="named-slot"></slot>
    <!-- 作用域插槽   -->
    <slot :games="games"></slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props: ['ListData', 'title'],
  data() {
    return {
      games: ["游戏", "B", "C", "D"],
      movies: ["电影", "Y", "z", "S"],
      music: ["音乐", "V"]
    }
  },
};
</script>


<style scoped>
.category {
  background-color: #bbb2b2;
  width: 200px;
  height: 300px;
}

h3 {
  text-align: center;
}
</style>
