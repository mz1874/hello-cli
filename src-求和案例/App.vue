<template>
  <div>
    <count></count>
  </div>
</template>



<script>
import axios from "axios";
import Count from "@/components/Count/Count.vue";

export default {
  name: 'App',
  components: {
    Count,
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
