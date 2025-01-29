<template>
  <div class="category">
    <h3>{{title}}</h3>
    <ul>
      <li v-for="(item, index) in ListData" :key="index">{{item}}</li>
    </ul>
    <slot>I am default slot</slot>
  </div>
</template>

<script>
export default {
  name: 'Category',
  props:['ListData','title'],
  data() {
    return {}
  }
};
</script>


<style scoped>
  .category
  {
    background-color: #bbb2b2;
    width: 200px;
    height: 300px;
  }
  h3{
    text-align: center;
  }
</style>
