<template>
  <div>
    <count></count>
  </div>
</template>



<script>
import axios from "axios";
import Count from "@/components/Count/Count.vue";
import store from "@/store";
export default {
  name: 'App',
  store,
  components: {
    Count,
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
