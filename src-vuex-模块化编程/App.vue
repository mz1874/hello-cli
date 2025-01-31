<template>
  <div>
    <count></count>
    <hr>
    <person></person>
  </div>
</template>



<script>
import axios from "axios";
import Count from "@/components/Count/Count.vue";
import Person from "@/components/Person/Person.vue";
import store from "@/store";
export default {
  name: 'App',
  store,
  components: {
    Count,
    Person
  },

  methods: {},

  mounted() {
  }
}

</script>

<style>
.container {
  display: flex;
  justify-content: space-around;
}
</style>
